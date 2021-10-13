class GameIdeasController < ApplicationController
    def index
        game_ideas = GameIdea.all
        render json: GameIdeaSerializer.new(game_ideas)
    end
end
