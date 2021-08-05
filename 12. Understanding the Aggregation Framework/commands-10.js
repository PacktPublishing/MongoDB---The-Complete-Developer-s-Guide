db.friends.aggregate([
    { $project: { _id: 0, numScores: { $size: "$examScores" } } }
  ]).pretty();
