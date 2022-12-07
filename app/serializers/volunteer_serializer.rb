class VolunteerSerializer < ActiveModel::Serializer
  attributes :id, :is_organizer, :user_id, :job_id
  has_one :user
  has_one :job

  
end
