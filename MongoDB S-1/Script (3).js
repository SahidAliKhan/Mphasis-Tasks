db.moviestarts.insertMany([{

    title: "The Last Student Returns",

    meta: { "rating": 9.5, "aired": 2018, "runtime": 100 },

    visitors: 1300000,

    expectedVisitors: 1550000,

    genre: ["thriller", "drama", "action"]

  },

  {

      title:"Supercharged Teaching",

      meta: {"rating": 9.3, "aired": 2016, "runtime": 60},

      visitors: 370000,

      expectedVisitors: 1000000,

      genre: ["thriller", "action"]

  },

  {

      title: "Teach me if you can",

      meta: {"rating": 8.5, "aired": 2014, "runtime": 90},

      visitors: 590378,

      expectedVisitors: 500000,

      genre: ["action", "thriller"]

  }])
db.moviestarts.find()
db.moviestarts.find({"meta.rating": { "$gt":9.2}})
db.moviestarts.find({"meta.runtime": { "$lt":100} })
db.moviestarts.find({"genre": { "$in": ["drama", "action"]} })
db.moviestarts.find({"visitors": { "$gte":"expectedVisitors"}})