class UsersController < ApplicationController
    def create
        user = User.find_or_create_by(username: params[:username]) do |user|
            user.uid = params[:uid]
        end

        render json: UserSerializer.new(user)
    end
end
