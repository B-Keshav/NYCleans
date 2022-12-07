class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :bio
  has_one :organization
  has_many :jobs
end
