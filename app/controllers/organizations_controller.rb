class OrganizationsController < ApplicationController

    def index
        render json: Organization.all    
    end

    def show
        org = Organization.find(params[:id])
        render json: org
    end


end
