class User < ApplicationRecord
  has_many :volunteers
  has_many :jobs, through: :volunteers
  belongs_to :organization
  
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, length: {minimum: 3}
  validates :avatar, presence: true 
  validates :organization, presence: true

end
