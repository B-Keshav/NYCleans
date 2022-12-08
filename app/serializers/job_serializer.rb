class JobSerializer < ActiveModel::Serializer
  attributes :id, :description, :job_name, :image
  has_one :location
  has_many :volunteers
  has_many :users, through: :volunteers
end
