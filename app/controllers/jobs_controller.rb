

class JobsController < ApplicationController

    def index 
        render json: Job.all
    end 

    def show 
        jobs = Job.find(params[:id])
        render json: jobs
    end

    def create
        job_info = [params[:address], params[:city], params[:state], params[:zip], params[:description], params[:jobName]]
        
        job_address = [params[:address], params[:city], params[:state], params[:zip]].compact.join(', ')
        geocode_results = Geocoder.search(job_address)
    
        location = Location.create(address: job_address, lat: geocode_results.first.coordinates.first, lng: geocode_results.first.coordinates.second)
        puts location.lat 

        job = Job.create!(location_id: location.id, description: params[:description], job_name: params[:jobName], image: params[:image])
        # render json: job, status: :created
        render json: job, include: :location, status: :ok 
    end

    def update
        job = Job.find(params[:id])
        job.update(job_params)
        render json: job, status: :ok
    end

    def destroy 
        job = Job.find(params[:id])
        job.delete 
        head :no_content
    end 

    def job_locations
        location_array = []
        jobs = Job.all
        jobs.each do |job|
            location_array.push(job.location)
        end
        render json: location_array, status: :ok 
    end


    private 

    def job_params 
        params.permit(:address, :city, :state, :zip, :description, :jobName)
    end

end
