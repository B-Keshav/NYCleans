class User < ApplicationRecord
  has_many :volunteers
  has_many :jobs, through: :volunteers
  belongs_to :organization
  
  has_secure_password

  validates :name, presence: :true, uniqueness: :true
  validates :password, length: {minimum: 3}
end
