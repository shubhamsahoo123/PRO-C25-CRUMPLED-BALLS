class Drop{
    constructor(){
        this.x = rand(0,width);
        this.y = rand(0,height);
        this.update();
    }

    draw(){
        if(Math.random()>0.1)
            fill("cyan");
        
        else
        fill("blue");
        rect(this.x,this.y,5,8);
        
    }

    update(){
        this.y+=20;

        if(this.y>height+80){
            this.y = rand(0,20);
            this.x = rand(0,width);
        }
        this.draw();
    }
}

function rand(min,max){
    return floor(random(min,max));
}