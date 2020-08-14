let link
let ganon
let lima
let gima

function preload(){
  lima = loadImage('link.png')
  gima = loadImage('ganon.png')
}

function setup() {
  createCanvas(400, 400);
  link = new l()
  ganon = new g()
}

function draw() {
  background(220);
  link.show()
  link.move()
  link.salir()
  ganon.show()
  ganon.move()
  ganon.salir()
  console.log(keyCode)
}
class l {
  constructor(x,y,xv,yv){
    this.x=200
    this.y=200
    this.xv=2
    this.yv=2
  }
  show(){
    image(lima,this.x,this.y,75,75)
  }
  move(){
    if (keyIsPressed){
      if (keyCode==39){
      this.x=this.x+this.xv
      } else if(keyCode==37){
        this.x=this.x-this.xv
      } else if(keyCode==40){
        this.y=this.y+this.yv
      } else if(keyCode==38){
        this.y=this.y-this.yv
      }
    }
  }
  salir(){
    if(this.x>400){
      this.x = 1
    } else if (this.x<0){
      this.x = 400
    }
    if (this.y>400){
      this.y=0
    } else if (this.y<0){
      this.y=400
    }
    }
}
class g {
  constructor(x,y,xv,yv){
    this.x=200
    this.y=200
    this.xv=2
    this.yv=2
  }
  show(){
    image(gima,this.x,this.y,70,70)
  }
  move(){
    if (keyIsPressed){
      if (keyCode==68){
        this.x=this.x+this.xv
      } else if(keyCode==65){
        this.x=this.x-this.xv
      } else if(keyCode==83){
        this.y=this.y+this.yv
      } else if(keyCode==87){
        this.y=this.y-this.yv
      }
    }
  }
  salir(){
    if(this.x>400){
      this.x = 1
    } else if (this.x<0){
      this.x = 400
    }
    if (this.y>400){
      this.y=0
    } else if (this.y<0){
      this.y=400
    }
    }
}