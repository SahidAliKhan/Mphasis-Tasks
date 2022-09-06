db.sports.insertMany([
{
    Title: "Football",
    RequiresTeam: "True",
},
{
    Title: "Cricket",
    RequiresTeam: "False",

}])
db.sports.find()
db.sports.update({"RequiresTeam": "True"},{$set:{"MinimumPlayerRequired": "2"}})
db.sports.find()
db.sports.update({"RequiresTeam": "True"},{$set:{"MinimumPlayerRequired": "10"}})
db.sports.find()