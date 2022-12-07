class UserAndLocationSerializerSerializer < ActiveModel::Serializer

  attributes :id, :username, :age, :bio, :address, :city, :state, :zip, :avatar

end
