class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: CommentSerializer.new(comments)
    end

    def create
        comment = Comment.create(uid: params[:uid], userId: params[:userId], ideaId: params[:ideaId], content: params[:content])

        if comment
            render json: { 'Alert': 'Successfully Added Comment' }
        else
            render json: { 'Alert': 'Server Error: Comment Not Added. Please Try Again.' }
        end
    end

    def destroy
        Comment.find(params[:uid]).destroy

        render json: { 'Alert': 'Successfully Removed Comment'}
    end
end
