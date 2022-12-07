class UserAndLocationSerializerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :bio, :address, :city, :state, :zip, :avatar
end
