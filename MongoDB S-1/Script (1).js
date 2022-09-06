show dbs
db.Patient.insertMany([
{
    firstName: "Max",
    lastName: "Schwarzmueller",
    age:"29",
    history: [
    { "disease": "cold"} ]
},
{
    firstName: "Sahid",
    lastName: "Khan",
    age:"22",
    history: [
    { "disease": "cold"} ]
},
{
    firstName: "Web",
    lastName: "Man",
    age:"25",
    history: [
    { "disease": "Fever"} ]
}
])
db.Patient.find()
db.Patient.find().pretty()
db.Patient.updateMany({firstName: "Web"}, {$set: {firstName:"Raju", age:"27"}})
db.Patient.find().pretty()
db.Patient.updateMany({firstName: "Raju"}, {$set: {firstName:"Rajan", lastName:"Raju", age:"27", history:[{"disease":"Cold"}]}})
db.Patient.find().pretty()
db.Patient.find({age: { $gt: 22}})
db.Patient.deleteMany({history:[{"disease":"cold"}]})
db.Patient.find().pretty()