show dbs
db.company.insertOne({
    Name: "Maruti",
    StockValues: "2000",
    NoOfEmployees:"2988",
    })
db.company.insertMany([{
    Name: "BMW",
    StockValues: "3800",
    NoOfEmployees:"2800",
    },
    {
        Name: "Audi",
    StockValues: "4000",
    NoOfEmployees:"1987",
    },
        {
        Name: "Mercedes",
    StockValues: "7400",
    NoOfEmployees:"5998",
    }
    ])
db.company.find()
db.company.insertOne({
    Name: "Maruti",
    StockValues: "2000",
    NoOfEmployees:"2988"
    })
db.company.find()
db.system.indexes.find()
db.company.ensureIndex({Name:1 }, {unique: true, dropDups: true})
db.company.find()
db.company.insertOne({
    Name: "Porche",
    StockValues: "6700",
    NoOfEmployees:"6884",
    Journaling:"Gauranteed"
})
db.company.insertOne({
    Name: "Kia",
    StockValues: "4700",
    NoOfEmployees:"6184",
    Journaling:"Not Gauranteed"
})
db.company.find()
 