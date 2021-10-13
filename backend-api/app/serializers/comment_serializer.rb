class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :uid, :ideaId, :content
end
