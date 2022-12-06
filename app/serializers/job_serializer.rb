class JobSerializer < ActiveModel::Serializer
  attributes :id, :description, :job_name, :image
  has_one :location
end
