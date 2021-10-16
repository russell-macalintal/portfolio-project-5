class GameIdeaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :uid, :userId, :title, :content
end
