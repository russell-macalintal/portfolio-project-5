class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :uid, :userId, :ideaId, :content
end
