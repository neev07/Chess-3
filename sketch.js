var wp1,wp2,wp3,wp4,wp5,wp6,wp7,wp8;
var wr1,wk1,wb1,wq,wk,wr2,wk2,wb2;
var bp1,bp2,bp3,bp4,bp5,bp6,bp7,bp8;
var br1,bk1,bb1,bq,bk,br2,bk2,bb2;
var gameState="stop";
var database,position;


function setup(){
  canvas = createCanvas(560,560);

  br1=createSprite(35,35,20,20);
  bk1=createSprite(105,35,20,20);
  bb1=createSprite(175,35,20,20);
  bq=createSprite(245,35,20,20);
  bk=createSprite(315,35,20,20);
  bb2=createSprite(385,35,20,20);
  bk2=createSprite(455,35,20,20);
  br2=createSprite(525,35,20,20);

  bp1=createSprite(35,105,20,20);
  bp2=createSprite(105,105,20,20);
  bp3=createSprite(175,105,20,20);
  bp4=createSprite(245,105,20,20);
  bp5=createSprite(315,105,20,20);
  bp6=createSprite(385,105,20,20);
  bp7=createSprite(455,105,20,20);
  bp8=createSprite(525,105,20,20);



  wr1=createSprite(35,525,20,20);
  wk1=createSprite(105,525,20,20);
  wb1=createSprite(175,525,20,20);
  wq=createSprite(245,525,20,20);
  wk=createSprite(315,525,20,20);
  wb2=createSprite(385,525,20,20);
  wk2=createSprite(455,525,20,20);
  wr2=createSprite(525,525,20,20);

  wp1=createSprite(35,455,20,20);
  wp2=createSprite(105,455,20,20);
  wp3=createSprite(175,455,20,20);
  wp4=createSprite(245,455,20,20);
  wp5=createSprite(315,455,20,20);
  wp6=createSprite(385,455,20,20);
  wp7=createSprite(455,455,20,20);
  wp8=createSprite(525,455,20,20);

  // database=firebase.database();
  // var locnode=database.ref("pieces/br1/pos");
  // locnode.on("value",readOp,showerr);


}


function draw(){
  background("white");

  if(mousePressedOver(br1))
  {
    br1.x=mouseX;
    br1.y=mouseY;
  }

  if(mousePressedOver(bk1))
  {
    bk1.x=mouseX;
    bk1.y=mouseY;
  }

  if(mousePressedOver(bb1))
  {
    bb1.x=mouseX;
    bb1.y=mouseY;
  }

  if(mousePressedOver(bk))
  {
    bk.x=mouseX;
    bk.y=mouseY;
  }

  if(mousePressedOver(bq))
  {
    bq.x=mouseX;
    bq.y=mouseY;
  }

  if(mousePressedOver(br2))
  {
    br2.x=mouseX;
    br2.y=mouseY;
  }

  if(mousePressedOver(bk2))
  {
    bk2.x=mouseX;
    bk2.y=mouseY;
  }

  if(mousePressedOver(bb2))
  {
    bb2.x=mouseX;
    bb2.y=mouseY;
  }

  if(mousePressedOver(bp1))
  {
    bp1.x=mouseX;
    bp1.y=mouseY;
  }
  
  if(mousePressedOver(bp2))
  {
    bp2.x=mouseX;
    bp2.y=mouseY;
  }

  if(mousePressedOver(bp3))
  {
    bp3.x=mouseX;
    bp3.y=mouseY;
  }

  if(mousePressedOver(bp4))
  {
    bp4.x=mouseX;
    bp4.y=mouseY;
  }

  if(mousePressedOver(bp5))
  {
    bp5.x=mouseX;
    bp5.y=mouseY;
  }

  if(mousePressedOver(bp6))
  {
    bp6.x=mouseX;
    bp6.y=mouseY;
  }

  if(mousePressedOver(bp7))
  {
    bp7.x=mouseX;
    bp7.y=mouseY;
  }

  if(mousePressedOver(bp8))
  {
    bp8.x=mouseX;
    bp8.y=mouseY;
  }






  if(mousePressedOver(wr1))
  {
    wr1.x=mouseX;
    wr1.y=mouseY;
  }

  if(mousePressedOver(wk1))
  {
    wk1.x=mouseX;
    wk1.y=mouseY;
  }

  if(mousePressedOver(wb1))
  {
    wb1.x=mouseX;
    wb1.y=mouseY;
  }

  if(mousePressedOver(wk))
  {
    wk.x=mouseX;
    wk.y=mouseY;
  }

  if(mousePressedOver(wq))
  {
    wq.x=mouseX;
    wq.y=mouseY;
  }

  if(mousePressedOver(wr2))
  {
    wr2.x=mouseX;
    wr2.y=mouseY;
  }

  if(mousePressedOver(wk2))
  {
    wk2.x=mouseX;
    wk2.y=mouseY;
  }

  if(mousePressedOver(wb2))
  {
    wb2.x=mouseX;
    wb2.y=mouseY;
  }

  if(mousePressedOver(wp1))
  {
    wp1.x=mouseX;
    wp1.y=mouseY;
  }
  
  if(mousePressedOver(wp2))
  {
    wp2.x=mouseX;
    wp2.y=mouseY;
  }

  if(mousePressedOver(wp3))
  {
    wp3.x=mouseX;
    wp3.y=mouseY;
  }

  if(mousePressedOver(wp4))
  {
    wp4.x=mouseX;
    wp4.y=mouseY;
  }

  if(mousePressedOver(wp5))
  {
    wp5.x=mouseX;
    wp5.y=mouseY;
  }

  if(mousePressedOver(wp6))
  {
    wp6.x=mouseX;
    wp6.y=mouseY;
  }

  if(mousePressedOver(wp7))
  {
    wp7.x=mouseX;
    wp7.y=mouseY;
  }

  if(mousePressedOver(wp8))
  {
    wp8.x=mouseX;
    wp8.y=mouseY;
  }

  for(var i=1;i<=560;i=i+70)
  {
    
    for(var j=1;j<=560;j=j+70)
    {
      
      fill("white");
      rect(j,i,70,70);
      drawSprites();
    }
   
  }
 
  
}
function mouseReleased()
{
  br1.x=pmouseX;
  br1.y=pmouseY;
  writePosition(br1.x,br1.y);
  gameState="stop";
}
// function readOp(data)
// {
//  pos=data.val();
//  br1.x=pos.x;
//  br1.y=pos.y;
// }

// function showerr()
// {
//   console.log("err");
// }
// function writePosition(x,y)
// {
//   database.ref("pieces/br1/pos").set({
//     x:br1.x+x,
//     y:br1.y+y
//   })
// }