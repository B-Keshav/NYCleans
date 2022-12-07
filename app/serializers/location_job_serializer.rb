class LocationJobSerializer < ActiveModel::Serializer
    attributes :id, :address, :city, :state, :zip, :lng, :lat, :jobs
  end