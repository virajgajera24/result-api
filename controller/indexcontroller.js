var resultdb = require('../model/indexmodel')
var abcd = (body) => {
    console.log(body);
    var s1 = body.s1
var s2 = body.s2
var s3 = body.s3
var s4 = body.s4
var s5 = body.s5
var total = s1+s2+s3+s4+s5;
var percentage = total/5;
var kt=0
    if( s1 <35){
        kt++;
    }
    if( s2 <35){
        kt++;
    }
    if( s3 <35){
        kt++;
    }
    if( s4 <35){
        kt++;
    }
    if( s5 <35){
        kt++;
    }
    var grade;
    if(percentage>90){
        grade = 'a1'
    }
    else if(percentage>80){
        grade = 'a2'
    }
    else if(percentage>70){
        grade = 'b1'
    }
    else if(percentage>60){
        grade = 'b2'
    }
    else if(percentage>50){
        grade = 'c1'
    }
    else if(percentage>35){
        grade = 'c2'
    }
    else {
        grade = 'f'
    }

    var result;

    if(kt>0){
        result='fail'
        grade= 'f';
    }
    else{
        result = 'pass'
    }
  return data=  {
        name:body.name,
        s1:s1,
        s2:s2,
        s3:s3,
        s4:s4,
        s5:s5,
        total:total,
        percentage:percentage,
        kt:kt,
        grade:grade,
        result:result
    }
}

exports.result = (req,res) =>{

 
var data = resultdb.create(abcd(req.body))
res.status(200).json({
    status: 'success',
    data
})
}

exports.view =async (req, res) => {
    var data =await resultdb.find();
    res.status(200).json({
        status: 'success',
        data
    })
}
exports.view5 =async (req, res) => {
    var data =await resultdb.find().sort({percentage:-1}).limit(5);
    res.status(200).json({
        status: 'success',
        data
    })
}
exports.view10 =async (req, res) => {
    var data =await resultdb.find().sort({percentage:-1}).limit(10);
    res.status(200).json({
        status: 'success',
        data
    })
}
exports.update =async (req, res) => {
    var id = req.params.id;
    var data =await resultdb.findByIdAndUpdate(id,abcd(req.body));
    res.status(200).json({
        status: 'success',
        data
    })
}

exports.kt =async (req, res) => {
    var data =await resultdb.find({kt:{$gt:0}})
    res.status(200).json({
        status: 'success',
        data
    })
}
exports.resultsearch =async (req, res) => {
    var result = req.params.result
    var data =await resultdb.find({result:result})
    res.status(200).json({
        status: 'success',
        data
    })
}