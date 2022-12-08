class Job < ApplicationRecord
  belongs_to :location
  has_many :volunteers, dependent: :destroy
  has_many :users, through: :volunteers
end
