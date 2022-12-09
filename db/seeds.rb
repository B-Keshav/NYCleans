# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# ORGANIZATIONS
org1 = Organization.create(name: "None", city: "N/A", description: "N/A", non_profit: false)
org2 = Organization.create(name: "Manhattan Clean Up Initiative", city: "NYC", description: "Making Manhattan cleaner one day at a time", non_profit: true)
org3 = Organization.create(name: "Rats be Gone", city: "NYC", description: "Rats worse enemies", non_profit: false)
org4 = Organization.create(name: "Clean up These Streets", city: "NYC", description: "Making these streets one way or another", non_profit: true)
org5 = Organization.create(name: "Small Keys", city: "NYC", description: "We make sure there are no small keys anywehre", non_profit: true)
org6 = Organization.create(name: "Tiny Hands", city: "NYC", description: "We got tiny hands", non_profit: false)

# LOCATIONS
bat = Location.create(address: "Battery Park", city: "New York City", state: "New York", zip: 10004, lng: -74.01540701310614, lat: 40.70291834474795) 
bull = Location.create(address: "Charging Bull", city: "New York City", state: "New York", zip: 10004, lng: -74.01388481494851, lat: 40.70459490002992) 
bowl = Location.create(address: "Bowling Green", city: "New York City", state: "New York", zip: 10004, lng: -74.01365587537626, lat: 40.70398146200117)
nyhs = Location.create(address: "170 Central Park West", city: "New York City", state: "New York", zip: 10024, lng: -73.97388848171163, lat: 40.779496376720566)
straw = Location.create(address: "Strawberry Field", city: "New York City", state: "New York", zip: 10019, lng: -73.97483133178149, lat: 40.77594751429143)
house1 = Location.create(address: "15 W 74th St", city: "New York City", state: "New York", zip: 10023, lng: -73.97508488692104, lat: 40.7794916035498)
statue = Location.create(address: "Central Park West Historic District", city: "New York City", state: "New York", zip: 10024, lat: 40.77830910891299, lng: -73.97125949257108)
house2 = Location.create(address: "125 W 76th Street", city: "New York City", state: "New York", zip: 10023, lat: 40.7806948536034, lng: -73.97805775847289)
park1 = Location.create(address: "Bridge Path", city: "New York City", state: "New York", zip: 10024, lat: 40.777945, lng: -73.974348)
park2 = Location.create(address: "The Triplets Bridge", city: "New York City", state: "New York", zip: 10024, lat: 40.7793189776827, lng: -73.97265904593665)
lake = Location.create(address: "The Central Park Lake", city: "New York City", state: "New York", zip: 10024, lat: 40.777636, lng: -73.973303)
turtle = Location.create(address: "Turtle Pond", city: "New York City", state: "New York", zip: 10024, lat: 40.77959849863156, lng: -73.96807804194829)
house3 = Location.create(address: "141 W 73rd Street", city: "New York City", state: "New York", zip: 10023, lat: 40.77885803254933, lng: -73.97981284621058)
coffee = Location.create(address: "175 W 73rd Street", city: "New York City", state: "New York", zip: 10023, lat: 40.77943551192009, lng: -73.98093974855067)

# USERS
ang = User.create(username: "AngPace", age: 26, password: "ang123", bio: "From chef to code to cleaning up NYC", organization_id: org3.id, address: "11 Broadway", city: "New York City", state: "NY", zip: 10004, lat: 40.70537509685621, lng: -74.01399268446856, avatar: "https://i.etsystatic.com/5355657/r/il/03f719/1630887131/il_fullxfull.1630887131_ondd.jpg")
mad = User.create(username: "MDulch", age: 25, password: "mad123", bio: "I'm an NYC native, and I care about keeping my city beautiful", organization_id: org6.id, address: "11 Broadway", city: "New York City", state: "NY", zip: 10004, lat: 40.70537509685621, lng: -74.01399268446856, avatar: "https://st3.depositphotos.com/9182380/37620/v/600/depositphotos_376202150-stock-illustration-recycle-set-sign-isolated-flat.jpg")
har = User.create(username: "HarryWilz", age: 26, password: "har123", bio: "Big Star Wars nerd, bigger carer of my community", organization_id: org1.id, address: "11 Broadway", city: "New York City", state: "NY", zip: 10004, lat: 40.70537509685621, lng: -74.01399268446856, avatar: "https://www.kindpng.com/picc/m/736-7368910_green-face-paint-former-icon-green-face-paint.png")
tim = User.create(username: "TimDaToolMan", age: 69, password: "ShaggyDog", bio: "I am definitely NOT Tim Allen, but that doesn't change the fact that 'The Shaggy Dog' is the greatest movie ever made.", organization_id: org6.id, address: "115 W 74th St", city: "New York City", state: "NY", zip: 10023, lat: 40.77924657578605, lng: -73.978601335582, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIMNd1rndllUwQZxOvC7Bd3l69_0AwwYzSvQFMX3F5ZYyRcy4rHIPQ7kA67-6XDu9RcM&usqp=CAU")
keshav = User.create(username: "BKeshav", age: 22, password: "keshav123", bio: "Snake behavior only", organization_id: org5.id, address: "Q2GH+8H", city: "New York City", state: "New York", zip: 10024, lat: 40.77589119042023, lng: -73.97104823501107, avatar: "https://static.vecteezy.com/system/resources/previews/002/079/630/non_2x/recycle-green-bin-free-vector.jpg")
randy = User.create(username: "XxRandySavagexX", age: 58, password: "Randy123", bio: "I'm a New Yorker. Hey, I'm walkin' here. Spaghetti and meatballs", organization_id: org2.id, address: "1229 1st Ave.", city: "New York", state: "NY", zip: 10065, lat: 40.764649904892224, lng: -73.9588812900012, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTBtZrNY98RV59SZ_0k2lasJvO8r6Fc1m-jNktQM&s") 

# JOBS
job1 = Job.create(location_id: bat.id, description: "Battery park is gross and we need to clean it up!", job_name: "Clean up battery park", image: "https://patch.com/img/cdn20/users/23145371/20200626/031901/styles/patch_image/public/3017f0ec-efbc-47f3-aa72-c3de23f843c2jpeg-20200622220618-91693300___26143039052.jpg")
job2 = Job.create(location_id: bull.id, description: "Someone spraypainted the Bull's balls, and we gotta fix it", job_name: "Fix the Bull", image: "https://i.insider.com/5dc565643afd3741cd61df62?width=700")
job3 = Job.create(location_id: bowl.id, description: "Bowling Green is looking drab. We should plant some flowers to beautify it!", job_name: "Beautify Bowling Green", image: "https://www.gpsmycity.com/img/gd_attr/5102.jpg")
job4 = Job.create(location_id: nyhs.id, description: "The New York Historical Society is letting itself go. We need to clean up the streets around it.", job_name: "Historical Society Renovation", image: "https://stuffnobodycaresabout.com/wp-content/uploads/2014/03/Podladtchikov-Half-pipe-king-visits-NYC-photo-CAsey-Kelbaugh-for-the-New-York-Times.jpg")
job5 = Job.create(location_id: straw.id, description: "The flowers in Strawberry Fields are nice and all, but they leave a huge mess. We need help picking them up!", job_name: "Strawberry Fields Forever", image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/fc/4a/f2/imagine.jpg")
job6 = Job.create(location_id: house1.id, description: "I need help cleaning up the graffiti on the outside of my house! I'm too old to clean it myself :( ", job_name: "My house was vandalized!!!", image: "https://static01.nyt.com/images/2022/09/30/nyregion/30-ny-russian-consulate/30-ny-russian-consulate-videoSixteenByNine3000.jpg")
job7 = Job.create(location_id: statue.id, description: "A famous status in Central Park was vandalized! Let's scrub it off", job_name: "Statue Renovation", image: "https://nypost.com/wp-content/uploads/sites/2/2021/04/columbus-circle-statue-graffiti-1.jpg?quality=90&strip=all&w=1024")
job8 = Job.create(location_id: house2.id, description: "Hate speech graffiti found in the Upper West Side. We have to get rid of this ASAP", job_name: "Hate has no place here", image: "https://pbs.twimg.com/media/Ek31EpPWkAEK_m6?format=jpg&name=small")
job9 = Job.create(location_id: park1.id, description: "My favorite path for going on walks is covered in garbage. Will someone help me get rid of it?", job_name: "Hiking path covered in trash", image: "https://bloximages.chicago2.vip.townnews.com/gvnews.com/content/tncms/assets/v3/editorial/d/10/d1035c97-3834-507e-ac66-2f7a5b2245b6/4cf57792c94df.image.jpg")
job10 = Job.create(location_id: park2.id, description: "Triplets bridge is covered in trash. I think some hooligans had a party here last night", job_name: "Gross bridge", image: "https://bloximages.chicago2.vip.townnews.com/gvnews.com/content/tncms/assets/v3/editorial/d/10/d1035c97-3834-507e-ac66-2f7a5b2245b6/4cf57792c94df.image.jpg")
job11 = Job.create(location_id: lake.id, description: "The lake is absolutely filthy. There's so much scum! Need help skimming it to make it healthy again", job_name: "Make the lake healthy again", image: "https://letstalkscience.ca/sites/default/files/2019-09/massive-algal-bloom.jpg")
job12 = Job.create(location_id: turtle.id, description: "Turtle Pond is covered in filth. We have to save the turtles!!! Won't someone think of the turtles?", job_name: "Save the turtles!!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCp41V0Kbj3g7hPtgHFi3UY437v4J9a5G8cCYDSRb5UrIOxlFuDhIMTQiqva5ow15NwIY&usqp=CAU")
job13 = Job.create(location_id: house3.id, description: "A vacant apartment in my building was broken into and graffitied! New tenant coming tomorrow, and need help cleaning it", job_name: "Breaking and Spray Painting", image: "https://assets.dnainfo.com/generated/photo/2013/08/graffiti-13759885235378.jpg/extralarge.jpg")
job14 = Job.create(location_id: coffee.id, description: "Our local coffee shop is beloved in our community. Let's show the staff the community is here to help!", job_name: "Renovate a local spot!", image: "https://freshcup.com/wp-content/uploads/2016/06/FerrisCoffee_ConstructionPhase.jpg")

# VOLUNTEERS
vol1 = Volunteer.create(user_id: tim.id, job_id: job1.id, is_organizer: true)
vol2 = Volunteer.create(user_id: keshav.id, job_id: job2.id, is_organizer: true)
vol3 = Volunteer.create(user_id: randy.id, job_id: job2.id, is_organizer: false)
vol4 = Volunteer.create(user_id: tim.id, job_id: job3.id, is_organizer: true)
vol5 = Volunteer.create(user_id: keshav.id, job_id: job3.id, is_organizer: false)