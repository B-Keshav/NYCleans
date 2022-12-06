class UsersController < ApplicationController
#    skip_before_action :authorize, only: [:create]

   def index
      render json: User.all
   end

   def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
   end

   def show
    user = User.find_by(id: session[:user_id])
    render json: user
   end

   
   private

   def user_params
    params.permit(:name, :age, :password, :password_confirmation, :bio, :organization_id)
   end
end
