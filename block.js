class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png")
      this.visiblity = 255
    }
    display(){
      image(this.image,200,100)
      console.log(this.body.speed)
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      
        
        }
        if(){
          World.remove(world,this.body)
          push()
          this.visiblity = this.visiblity-5
          tint(255,this.visiblity)
          pop()
          image(this.image,this.body.position.x,this.body.position.y,50,50)
         
          }

        }
