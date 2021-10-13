class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :ideaId, :content
end
