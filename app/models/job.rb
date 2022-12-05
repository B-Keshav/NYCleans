class Job < ApplicationRecord
  belongs_to :location
  has_many :volunteers
  has_many :users, through: :volunteers
end
