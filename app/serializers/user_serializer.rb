class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age, :bio, :avatar

  has_one :organization
  has_many :volunteers
  has_many :jobs, through: :volunteers
end
