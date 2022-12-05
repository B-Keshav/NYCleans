class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :password_digest, :bio
  has_one :organization
end
