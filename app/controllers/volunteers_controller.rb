class VolunteersController < ApplicationController


    def index
        render json: Volunteer.all
    end

    # def show
    #     volunteer = Volunteer.where(id: session[:user_id], job_id: params[:jobID])
    #     render json: volunteer, status: :ok
    # end


    def create 
        volunteer = Volunteer.create(volunteer_params)
        render json: volunteer, status: :created
    end


    def destroy 
        volunteer = Volunteer.find_by(job_id: params[:job_id]) && Volunteer.find_by(user_id: session[:id])
        volunteer.delete
        head :no_content
    end 

    def findvolunteer
        volunteer = Volunteer.where(user_id: session[:user_id], job_id: params[:jobID])
        volunteer.delete_all 
        head :no_content
    end

    private

    def volunteer_params
    params.permit(:user_id, :job_id, :is_organizer)
    end
end
