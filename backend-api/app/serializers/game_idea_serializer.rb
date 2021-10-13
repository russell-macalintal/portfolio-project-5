class GameIdeaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :uid, :title, :content
end
