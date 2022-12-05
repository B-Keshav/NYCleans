class VolunteerSerializer < ActiveModel::Serializer
  attributes :id, :is_organizer
  has_one :user
  has_one :job
end
