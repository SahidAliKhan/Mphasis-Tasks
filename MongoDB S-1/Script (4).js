db.exmoviestarts.insertMany([

  {

    "title": "The Last Student Returns",

    "meta": { "rating": 9.5, "aired": 2018, "runtime": 100 },

    "visitors": 1300000,

    "expectedVisitors": 1550000,

    "genre": ["thriller", "drama", "action"],

    "ratings": [

      10,

      9

    ]

  },

  {

      "title": "Supercharged Teaching",

      "meta": {"rating": 9.3, "aired": 2016, "runtime": 60},

      "visitors": 370000,

      "expectedVisitors": 1000000,

      "genre": ["thriller", "action"],

      "ratings": [

        10,

        9,

        9

      ]

  },

  {

      "title": "Teach me if you can",

      "meta": {"rating": 8, "aired": 2014, "runtime": 90},

      "visitors": 590378,

      "expectedVisitors": 500000,

      "genre": ["action", "thriller"],

      "ratings": [

        8,

        8

      ]

  }

])
db.exmoviestarts.find()
db.exmoviestarts.find( { "genre": { $size: 2 } } )
db.exmoviestarts.find({"meta.aired": "2018"})
db.exmoviestarts.find({"meta.rating": {"$elemMatch": {"$gt": 8.0, "$lt": 10.0}}})