class LocationSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :zip, :lng, :lat
end
