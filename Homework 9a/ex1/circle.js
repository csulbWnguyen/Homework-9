const circumference = radius => `the circumference of a circle radius ${radius} is `+ 2*`${radius}`*Math.PI;
const area = radius =>`Its area is `+ Math.PI*`${radius}`**2;
module.exports.circumference = circumference;
module.exports.area=area;