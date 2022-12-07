class LocationsController < ApplicationController
    

    def index 
        render json: Location.all
    end

    def show
        location = Location.find(params[:id])
        render json: location, serializer: LocationJobSerializer
    end

    # def locationjobs
    #     location = Location.find(params[:id])
    #     render json: location, status: :ok
    # end

end
