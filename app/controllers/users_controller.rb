class UsersController < ApplicationController
   # skip_before_action :authorize, only: [:create]

   def index
      render json: User.all
   end
   
   def show
      user = User.find_by(id: session[:user_id])
      render json: user
   end

   def create

    #Getting the user's address to be one string
    user_address = [params[:address], params[:city], params[:state], params[:zip]].compact.join(', ')
    #Using that string to get location data for user
    geocode_results = Geocoder.search(user_address)
    #getting the LNG and LAT from the location data and assigning it to variables
    lat = geocode_results.first.coordinates.first
    lng = geocode_results.first.coordinates.second

    user = User.create!(username: params[:username], age: params[:age], password: params[:password], bio: params[:bio], organization_id: params[:organization_id], address: params[:address], city: params[:city], state: params[:state], zip: params[:zip], lng: lng, lat: lat, avatar: params[:avatar])
    
    session[:user_id] = user.id
    render json: user, serializer: UserAndLocationSerializerSerializer, status: :created
   end

   def my_jobs
    user = User.find_by(id: session[:user_id])
      render json: user.volunteers
   end
   
   private

   def user_params

      params.permit(:username, :age, :password, :password_confirmation, :bio, :organization_id, :address, :city, :state, :zip, :avatar)

   end
end
