class JobsController < ApplicationController

    def index 
        render json: Job.all
    end 

    def show 
        jobs = Job.find(params[:id])
        render json: jobs
    end

    def create
        job = Job.create!(job_params)
        render json: job, status: :created
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


    private 

    def job_params 
        params.permit(:location_id, :description, :job_name)
    end

end
