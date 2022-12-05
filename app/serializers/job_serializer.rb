class JobSerializer < ActiveModel::Serializer
  attributes :id, :desciption, :job_name
  has_one :location
end
