class Location < ApplicationRecord
    has_many :jobs
    # validates :state, inclusion: { in: OPTIONS }

    # OPTIONS = ["New York", "NYC", "New York State", "NewYork", "new york", "newyork"]
      
end 