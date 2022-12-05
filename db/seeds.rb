# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# ORGANIZATIONS
org1 = Organization.create(name: "Manhattan Clean Up Initiative", city: "NYC", description: "Making Manhattan cleaner one day at a time", non_profit: true)

# LOCATIONS
bat = Location.create(address: "Battery Park", city: "New York City", state: "New York", zip: 10004, lat: 43.1755169, lng: -77.731462)
bull = Location.create(address: "Charging Bull", city: "New York City", state: "New York", zip: 10004, lat: 40.704761, lng: -74.016677)
bowl = Location.create(address: "Bowling Green", city: "New York City", state: "New York", zip: 10004, lat: 40.70521926879883, lng: -74.0228271484375)

# USERS
tim = User.create(name: "TimDaToolMan", age: 42, password: "butts", bio: "I am definitely NOT Tim Allen (I'm Tim Allen)", organization_id: org1.id)
keshav = User.create(name: "BKeshav", age: 109, password: "keshav123", bio: "Snake behavior only", organization_id: org1.id)
randy = User.create(name: "XxRandySavagexX", age: 22, password: "Randy123", bio: "I'm Randy Savage. I'll beat you up, yo.", organization_id: org1.id) 

# JOBS
job1 = Job.create(location_id: bat.id, description: "Battery park is gross and we need to clean it up!", job_name: "Clean up battery park")
job2 = Job.create(location_id: bull.id, description: "Someone spraypainted the Bull's balls, and we gotta fix it", job_name: "Fix the Bull")
job3 = Job.create(location_id: bowl.id, description: "Bowling Green is looking drab. We should plant some flowers to beautify it!", job_name: "Beautify Bowling Green")


# VOLUNTEERS
vol1 = Volunteer.create(user_id: tim.id, job_id: job1.id, is_organizer: true)
vol2 = Volunteer.create(user_id: keshav.id, job_id: job2.id, is_organizer: true)
vol3 = Volunteer.create(user_id: randy.id, job_id: job2.id, is_organizer: false)
vol4 = Volunteer.create(user_id: tim.id, job_id: job3.id, is_organizer: true)
vol5 = Volunteer.create(user_id: keshav.id, job_id: job3.id, is_organizer: false)
