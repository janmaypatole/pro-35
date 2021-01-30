var database,hotair;


function setup() {
  database = firebase.database();
  createCanvas(800,400);
 hotair = createSprite(400, 200, 50, 50);
 database = database.ref('ball/position')   
  database = database.on("value",ReadPosition,ShowError)
 console.log("hi")
}

function keypressed(){
  if(keyDown(RIGHT_ARROW)){
    ChangePositon(+1,0)
    }

    if(keyDown(LEFT_ARROW)){
    ChangePositon(-1,0)
    }

    if(keyDown(UP_ARROW)){
      ChangePositon(0,-1)
      }
  
      if(keyDown(DOWN_ARROW)){
        ChangePositon(0,+1)
        }
    }

function draw() {
  background(255,255,255);  
  drawSprites();
}

function ChangePositon(x,y){
  database = database.ref('ball/position').set({
  'x':position.x+x,
  'y':position.y+y
  })
}

function ReadPosition(data){
  data = data.val()
  hotair.x = position.x
  hotair.y = position.y
}

function showerror(){
  console.log("there is an error")
}