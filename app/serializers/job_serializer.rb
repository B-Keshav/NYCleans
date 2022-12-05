class JobSerializer < ActiveModel::Serializer
  attributes :id, :description, :job_name
  has_one :location
end
