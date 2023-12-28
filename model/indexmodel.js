const mongoose = require('mongoose');

const result = new mongoose.Schema({
    name: { type: String},
    s1: { type: Number},
    s2: { type: Number},
    s3: { type: Number},
    s4: { type: Number},
    s5: { type: Number},
    total: { type:Number},
    percentage: { type:Number},
    kt: { type: String},
    grade: { type: String},
    result:{ type:String}
  });

module.exports = mongoose.model('result', result);