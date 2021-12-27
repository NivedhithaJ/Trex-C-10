
var weight= [45,32,54,43]
console.log(weight);
function weight_average(){
  var sum=weight[0]+weight[1]+weight[2]+weight[3];
  var avg=sum/weight.length;
  console.log(avg);
}

function setup() 
{
  createCanvas(400,400);
  weight_average();
}

function draw() 
{
background(51);

}

