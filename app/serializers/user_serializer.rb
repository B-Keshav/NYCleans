class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :bio, :address, :city, :state, :zip
  has_one :organization
end
