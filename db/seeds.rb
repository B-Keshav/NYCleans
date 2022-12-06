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
bat = Location.create(address: "Battery Park", city: "New York City", state: "New York", zip: 10004, lng: -74.01540701310614, lat: 40.70291834474795) 
bull = Location.create(address: "Charging Bull", city: "New York City", state: "New York", zip: 10004, lng: -74.01388481494851, lat: 40.70459490002992) 
bowl = Location.create(address: "Bowling Green", city: "New York City", state: "New York", zip: 10004, lng: -74.01365587537626, lat: 40.70398146200117)

# USERS
tim = User.create(name: "TimDaToolMan", age: 42, password: "butts", bio: "I am definitely NOT Tim Allen (I'm Tim Allen)", organization_id: org1.id)
keshav = User.create(name: "BKeshav", age: 109, password: "keshav123", bio: "Snake behavior only", organization_id: org1.id)
randy = User.create(name: "XxRandySavagexX", age: 22, password: "Randy123", bio: "I'm Randy Savage. I'll beat you up, yo.", organization_id: org1.id) 

# JOBS

job1 = Job.create(location_id: bat.id, description: "Battery park is gross and we need to clean it up!", job_name: "Clean up battery park", image: "https://patch.com/img/cdn20/users/23145371/20200626/031901/styles/patch_image/public/3017f0ec-efbc-47f3-aa72-c3de23f843c2jpeg-20200622220618-91693300___26143039052.jpg")
job2 = Job.create(location_id: bull.id, description: "Someone spraypainted the Bull's balls, and we gotta fix it", job_name: "Fix the Bull", image: "https://i.insider.com/5dc565643afd3741cd61df62?width=700")
job3 = Job.create(location_id: bowl.id, description: "Bowling Green is looking drab. We should plant some flowers to beautify it!", job_name: "Beautify Bowling Green", image: "https://www.gpsmycity.com/img/gd_attr/5102.jpg")



# VOLUNTEERS
vol1 = Volunteer.create(user_id: tim.id, job_id: job1.id, is_organizer: true)
vol2 = Volunteer.create(user_id: keshav.id, job_id: job2.id, is_organizer: true)
vol3 = Volunteer.create(user_id: randy.id, job_id: job2.id, is_organizer: false)
vol4 = Volunteer.create(user_id: tim.id, job_id: job3.id, is_organizer: true)
vol5 = Volunteer.create(user_id: keshav.id, job_id: job3.id, is_organizer: false)
