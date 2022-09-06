db.place.insert({
  "name": "India",
  "location": {
    "coordinates": [22.243560814153753, 84.8109429557567],
    "type": "Point"
  }
})
db.place.find()
db.place.insert({
  "name": "China",
  "location": {
    "coordinates": [31.406147551419014, 85.78667790699605],
    "type": "Point"
  }
},{
  "name": "Big Ben",
  "location": {
    "coordinates": [-0.1268194, 51.5007292],
    "type": "Point"
  }})
db.place.find()
db.place.find()
db.place.insert({
  "name": "USA",
  "location": {
    "coordinates": [20.81507340471614, -12.008029331141712],
    "type": "Point"
  }})
db.place.find()
db.place.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-0.1268194, 51.5007292]
      },
      $maxDistance: 1000,
      $minDistance: 10}}})
 db.place.find({"name": "India"})
db.geo.insert({
  "name": "UK",
  "location": {
    "coordinates": [41.4061475514190, 85.78667790699],
    "type": "Point"
  }})