class UsersController < ApplicationController
    def create
        user = User.find_or_create_by(username: params[:username]) do |user|
            user.uid = params[:uid]
        end

        if user.valid?
            render json: UserSerializer.new(user)
        else
            render json: { 'Alert': 'Server Error: Login Failed. Please Try Again.' }
        end
    end
end
