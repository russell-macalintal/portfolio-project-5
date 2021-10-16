class GameIdea < ApplicationRecord
    validates :uid, :userId, :title, :content, presence: true
    validates :uid, :title, uniqueness: true
    self.primary_key = "uid"
end
