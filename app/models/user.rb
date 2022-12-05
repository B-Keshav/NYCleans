class User < ApplicationRecord
  belongs_to :organization
  has_secure_password

  validates :name, presence: :true, uniqueness: :true
  validates :password, length: {minimum: 6}
end
