function setup() {
  createCanvas(400, 600);
  let initial_x_offset = 100
  let size = 15;
  let a = 1.07
  let b = 2
  for (var i=0; i<10; i++) {
    for (var j=0; j<30; j++) { 
      
      let x_offset = a**(b*j) * (Math.random()-0.5) * 0.5
      let y_offset = a**(b*j) * (Math.random()-0.5) * 0.5
      let x = initial_x_offset + size/2 + size*i + x_offset
      let y = size/2 + size*j + y_offset
      
      if (x>initial_x_offset-10 && x<initial_x_offset + 10*size + 10) {    
        push();
        rectMode(CENTER);
        noFill();
        translate(x,y);
        let angle = 365 * Math.random() - 180;
        rotate(radians(angle)*j*0.01); 
        rect(0,0,size,size);
        pop();
      }
    }
  }
  
  
  
}

function draw() {
  
}

