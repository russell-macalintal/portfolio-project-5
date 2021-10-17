class User < ApplicationRecord
    validates :uid, :username, presence: true
    validates :uid, :username, uniqueness: true
    self.primary_key = "uid"
end
