db.person.aggregate([{$match:{"dob.age":{$gt:50}}},{$group:{_id:"$gender",count:{$sum:1},avg:{$avg:"$dob.age"}}}])
