const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var JSONresponse;
var datetime;



var bg = "sunrise1.png";

function preload() {
    backgroundImg = loadImage("sunrise1.png");
    backgroundImg = loadImage("sunrise2.png");
    backgroundImg = loadImage("sunset10.png");
    backgroundImg = loadImage("sunset11.png");
    backgroundImg = loadImage("sunset12.png");

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }



    Engine.update(engine);

    // write code to display time in correct format here
    



}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var JSONresponse= await response.json();
    console.log(JSONresponse);
    var datetime = JSONresponse.datetime;

    // write code slice the datetime
    var hour = datetime.slice(11,13);
    

    



    // add conditions to change the background images from sunrise to sunset
    if(hour>=4 && hour<=6){
        bg = "sunrise1.png";
    }
    else if(hour>=6 && hour<=8){
        bg = "sunrise2.png";
    }
    else if(hour>=23 && hour==0){
        bg = "sunset10.png";
    }
    else if(hour==0 && hour<=3){
        bg = "sunset11.png";
    }
    else if(hour>=3 && hour<=6){
        bg = "sunset 12.png";

    }
        
    



    //load the image in backgroundImg variable here
    var backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
