class GameIdeasController < ApplicationController
    def index
        game_ideas = GameIdea.all
        render json: GameIdeaSerializer.new(game_ideas)
    end

    def create
        game_idea = GameIdea.create(uid: params[:uid], userId: params[:userId], title: params[:title], content: params[:content])

        if game_idea.valid?
            render json: { 'Alert': 'Successfully Added Idea' }
        else
            render json: { 'Alert': 'Server Error: Idea Not Added. Please Try Again.' }
        end
    end

    def destroy
        GameIdea.find(params[:uid]).destroy

        render json: { 'Alert': 'Successfully Removed Idea'}
    end
end
