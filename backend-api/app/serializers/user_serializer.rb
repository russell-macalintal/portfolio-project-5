class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :uid, :username
end
