function setup(){
    document.getElementById('main').style.height = innerHeight-10+"px";
    createCanvas(innerWidth-20,innerHeight-20);
    stroke(255);
    }
    var pos=[];
    var lines = true;
    var siz;
    function mouseDragged(){
    if(mouseX > 300){
    var col = [document.getElementById('red').value,document.getElementById('green').value,document.getElementById('blue').value];
    pos.push([mouseX,mouseY,col,siz]);}
    siz = parseInt(document.getElementById('size').value);
    }
    
    function draw(){
    document.body.style.backgroundColor = "rgb("+document.getElementById('red').value+","+document.getElementById('green').value+","+document.getElementById('blue').value+")";
    background(0);
    for(p in pos){
    fill(pos[p][2]);
    stroke(pos[p][2]);
    ellipse(pos[p][0],pos[p][1],pos[p][3],pos[p][3]);
    }
    if(lines){
    stroke(document.getElementById('red').value,document.getElementById('green').value,document.getElementById('blue').value);
    strokeWeight(2);
    line(mouseX,0,mouseX,height);
    line(0,mouseY,width,mouseY);}
    }