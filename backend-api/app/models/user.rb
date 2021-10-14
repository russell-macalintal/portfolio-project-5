class User < ApplicationRecord
    validates :uid, :username, presence: true, uniqueness: true
    self.primary_key = "uid"
end
