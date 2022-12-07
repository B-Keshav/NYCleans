class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :bio, 

  has_one :organization
  has_many :volunteers
  has_many :jobs, through: :volunteers
end
