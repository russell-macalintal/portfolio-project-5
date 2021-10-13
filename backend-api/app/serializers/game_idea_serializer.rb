class GameIdeaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :content
end
