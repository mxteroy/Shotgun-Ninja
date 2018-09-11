var xpos = 105;
var ypos = 305;
onEvent("canvas" , "click", function(event) {
  getpositions(event);
  Gun();
  ninja();
  playSound("380_gunshot_single-mike-koenig (mp3cut.net).mp3", false);
});
onEvent("carthit", "click", function(event) {
  if (countdown>=4) {
    getpositions(event);
    Gun();
    ninja();
    playSound("380_gunshot_single-mike-koenig (mp3cut.net).mp3", false);
    hideElement("carthit");
    explosion(x,y);
    score++;
    setText("scorecount", score);
  }
  var sounds = ["assets/Hippy.mp3", "assets/Respct.mp3", "assets/Treehug.mp3"];
  playSound(sounds[randomNumber(0,2)], false);
});
function getpositions(event){
  xpos = event.x;
  ypos = event.y;
  if (xpos>168) {
    console.log("xpos of rside is: " +Math.round(xpos));
    console.log("ypos of rside is: "+Math.round(ypos));
  } else {
    console.log("xpos of lside is: " +Math.round(xpos));
    console.log("ypos of lside is: "+Math.round(ypos));
  }
  return xpos;
}
var hooknum = 0;
setActiveCanvas("canvas");
var posx ;
var posy ; 
var gunx ;
var guny ;
function Gun() {
  if ((xpos>=168&&xpos<=208)&&ypos<320) {
    posx = 45;
    posy = 0;
    hideElement("gunreverse");
    hideElement("gun45");
    hideElement("gun135");
    hideElement("gunupleft");
    hideElement("gun");
    showElement("gunupright");
    gunx = getXPosition("gunupright");
    guny = getYPosition("gunupright");
    bullet();
  } else if ((xpos<168&&xpos>=112)&&(ypos<320)) {
    posx = 58;
    posy = 0;
    hideElement("gunupright");
    hideElement("gunreverse");
    hideElement("gun45");
    hideElement("gun135");
    hideElement("gun");
    showElement("gunupleft");
    gunx = getXPosition("gunupleft");
    guny = getYPosition("gunupleft");
    bullet();
  } else if (xpos<112&&(ypos>=129&&ypos<258)) {
    posx = 20;
    posy = 7 ;
    hideElement("gunupright");
    hideElement("gunreverse");
    hideElement("gun45");
    hideElement("gunupleft");
    hideElement("gun");
    showElement("gun135");
    gunx = getXPosition("gun135");
    guny = getYPosition("gun135");
    bullet();
  } else if ((ypos>258&&ypos<380)&&(xpos>208)){
    posx = 65;
    posy = 10 ;
    hideElement("gunupright");
    hideElement("gunreverse");
    hideElement("gun45");
    hideElement("gunupleft");
    hideElement("gun135");
    showElement("gun");
    gunx = getXPosition("gun");
    guny = getYPosition("gun");
    bullet();
  } else if ((ypos>258&&ypos<380)&&(xpos<112)){
    posx = 0;
    posy = 10 ;
    hideElement("gunupright");
    hideElement("gun");
    hideElement("gun45");
    hideElement("gunupleft");
    hideElement("gun135");
    showElement("gunreverse");
    gunx = getXPosition("gunreverse");
    guny = getYPosition("gunreverse");
    bullet();
  } else if (xpos>208&&(ypos>=129&&ypos<258)){
    posx = 60;
    posy = 5 ;
    hideElement("gunupright");
    hideElement("gunreverse");
    hideElement("gun135");
    hideElement("gunupleft");
    hideElement("gun");
    showElement("gun45");
    gunx = getXPosition("gun45");
    guny = getYPosition("gun45");
    bullet();
  } else if ((((xpos>208 && (xpos<=282||xpos<=264||xpos<=245))) && (ypos <= 129))) {
    posx = 45;
    posy = 0;
    hideElement("gunreverse");
    hideElement("gun45");
    hideElement("gun135");
    hideElement("gunupleft");
    hideElement("gun");
    showElement("gunupright");
    gunx = getXPosition("gunupright");
    guny = getYPosition("gunupright");
    bullet();
  } else if (((xpos<=320 && (xpos>282||xpos>264||xpos>245)) && ypos <= 129)) {
    posx = 60;
    posy = 5 ;
    hideElement("gunupright");
    hideElement("gunreverse");
    hideElement("gun135");
    hideElement("gunupleft");
    hideElement("gun");
    showElement("gun45");
    gunx = getXPosition("gun45");
    guny = getYPosition("gun45");
    bullet();
  } else if ((((xpos>=38||xpos>=56||xpos>=47) && xpos < 112) && ypos <= 129)) {
    posx = 58;
    posy = 0;
    hideElement("gunupright");
    hideElement("gunreverse");
    hideElement("gun45");
    hideElement("gun135");
    hideElement("gun");
    showElement("gunupleft");
    gunx = getXPosition("gunupleft");
    guny = getYPosition("gunupleft");
    bullet();
  } else if (((xpos>=0 && (xpos<38||xpos<56||xpos<47)) && ypos <= 129)) {
    posx = 20;
    posy = 7 ;
    hideElement("gunupright");
    hideElement("gunreverse");
    hideElement("gun45");
    hideElement("gunupleft");
    hideElement("gun");
    showElement("gun135");
    gunx = getXPosition("gun135");
    guny = getYPosition("gun135");
    bullet();
  }
  hooknum = hooknum++;
}
function bullet() {
  setStrokeColor("black");
  setStrokeWidth(3);
  line(gunx + posx, guny + posy, xpos, ypos);
  timedLoop(500, function() {
    setFillColor("white");
    circle(160, 240, 10000000);
  });
}
function ninja() {
  hideElement("character_front");
  showElement("character_back");
  if (xpos>=168) {
    hideElement("character_left");
    hideElement("character_back");
    showElement("character_right");
  } else {
    hideElement("character_right");
    hideElement("character_back");
    showElement("character_left");
  }
}
var x=0;
var y=0;
function Projectile(id) {
timedLoop(200, function() {
x = x+2;
if (x>=270&&y<360) {
    x = -20;
    y = y+40;
    setPosition(id, x, y, 70, 40);
  } else if (y>=360&&x>=-20) {
    x=0;
    y=0;
    setPosition(id, x, y, 70, 40);
  } else {
    setPosition(id, x, y, 70, 40);
  }
if ((x>=75&&x<=190)&&(y>270)) {
  x=x+120;
  setPosition(id, x, y, 70, 40);
}
if (seconds===45) {
  stopTimedLoop();
  var sec = 500;
  timedLoop(1000, function() {
        setText("timecount", seconds + " seconds");
    seconds = seconds - 1;
  console.log(seconds + " seconds");
  });
  if (seconds%15===0) {
    sec = sec/4;
  }
  timedLoop(sec, function() {
    showElement(id);
    var determinant = randomNumber(1, 11);
    if (x>=270&&y<360) {
    x = -20;
    y = y+40;
    setPosition(id, x, y, 70, 40);
  } else if (y>=360&&x>=-20) {
    x=0;
    y=0;
    setPosition(id, x, y, 70, 40);
  } else {
    setPosition(id, x, y, 70, 40);
  }
if ((x>=75&&x<=190)&&(y>270)) {
  x=x+120;
  setPosition(id, x, y, 70, 40);
}
    if (x>=280&&y<330) {
        x = -20;
        setPosition(id, x, y, 70, 40);
      } else if (y>=330&&x>=280) {
        x=0;
        y=0;
        setPosition(id, x, y, 70, 40);
      } else if ((x>=95&&y>300)) {
        x=x+115;
        setPosition(id, x, y, 70, 40);
      } else if ((x<=0)) {
        x = 279;
        setPosition(id, x, y, 70, 40);
      } else if ((y>=330)) {
      y = 0;
      setPosition(id, x, y, 70, 40);
    } else if ((y<=0)) {
      y = 329;
      setPosition(id, x, y, 70, 40);
    } else {
      setPosition(id, x, y, 70, 40);
    }
    if (determinant===1 || determinant===2) {
      x = x+randomNumber(5, 15);
    } else if ((determinant===3 || determinant===4)) {
      x = x-randomNumber(5, 15);
    } else if ((determinant===5 || determinant===6)) {
      y = y+randomNumber(5, 15);
    } else if ((determinant===7 || determinant===8)) {
      y = y-randomNumber(5, 15);
    } else if ((determinant===9)){
      x = 133;
      y = randomNumber(1, 300);
    } else if ((determinant===10)) {
      x = 49;
      y = randomNumber(1, 300);
    } else {
      x = 217;
      y = randomNumber(1, 300);
    }
    if (seconds<=0) {
      setText("showscore", "Your score is " + score);
      setScreen("WinScreen");
    }
    } 
  );
}
});}
function explosion(x,y) {
  setPosition("explosion", x, y, 55, 50);
  showElement("explosion");
  setTimeout(function() {
    hideElement("explosion");
  }, 500);
  setTimeout(function() {
    showElement("carthit");
  }, 750);
}
var seconds=60;
var score = 0;
var countdown = 0;
onEvent("start_btn", "click", function() {
  setScreen("gamescreen");
  timedLoop(1000, function() {
    setText("timecount", seconds + " seconds");
    countdown = countdown+1;
    if (countdown===1) {
      hideElement("cd3");
      showElement("cd2");
    } else if ((countdown ===2)) {
      hideElement("cd2");
      showElement("cd1");
    } else if ((countdown===3)) {
      hideElement("cd1");
      showElement("go!");
    } else if ((countdown>=4)) {
      seconds = seconds - 1;
      hideElement("go!");
    }
    if (seconds<=59) {
      Projectile("carthit");
    }
  });
});
onEvent("playagainlbl", "click", function() {
  score = 0;
  seconds = 60;
  setText("scorecount", score);
  setScreen("gamescreen");
});
