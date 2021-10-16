class Comment < ApplicationRecord
    validates :uid, :userId, :ideaId, :content, presence: true
    validates :uid, uniqueness: true
    self.primary_key = "uid"
end
