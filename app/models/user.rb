class User < ApplicationRecord
  belongs_to :organization
  has_secure_password
  has_many :volunteers
  has_many :jobs, through: :volunteers

  validates :name, presence: :true, uniqueness: :true
  validates :password, length: {minimum: 3}
end
