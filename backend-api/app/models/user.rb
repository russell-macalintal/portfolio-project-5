class User < ApplicationRecord
    validates :uid, :username, :password, presence: true
    validates :uid, :username, uniqueness: true
    self.primary_key = "uid"

    has_secure_password
end
