var gameState = 0;
var score = 0;
var health = 100;
var health_obj;
//Home page
var bg_home, bg_home_Img;
var start_btn, start_btn_Img;
//Story
var storm_, storm_Img;
var island_, island_Img;
//Story objetcs
var ob_1;
var ob_2;
//Sound effects
var storm_so
var explosion_
//Timer 
var timer = 0;
//Game objects:-
var heart, heart_Img;
var bricks_1, bricks_1_Img;
var bricks_2;
var bricks_3;
var bricks_4;
var bricks_5;
var bricks_6;
var bricks_7;
var bricks_8;
var bricks_9;
var bricks_10;
var bricks_11;
var bricks_12;
var bricks_13;
var bricks_14;
var bricks_15;
var bricks_16;
var bricks_17;
var bricks_18;
var bricks_19;
var bricks_20;
var bricks_21;
var bricks_22;
var bricks_23;
var bricks_24;
var bricks_25;
var bricksr_1
var bricksr_2
var bricksr_3
var bricksr_4
var bricksr_5
var bricksr_6
var bricksr_7
var bricksr_8
var bricksr_9
var bricksr_10
var bricksr_11
var bricksr_Img;
var invisobj;
var invisible_gr;
var spikes,spikes2, spikes3,spikes4,spikes5,spikes6,spikes7, spikes_Img;
var question_b, question_b_Img;
var lava, lava2, lava3, lava4, lava5, lava_Img;
var brick_1,brick_2, brick_3,brick_4,brick_5,brick_6,brick_7,brick_8,brick_9,brick_10,brick_11,brick_12,brick_Img;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, coin_Img;
var coin_s;
var fireball, fireball2, fireball3, fireball4, fireball5, fireball6, fireball7, fireball8, fireball9, fireball_Img;
//Mobs:     -
var jin_a, jin_a_Img;
var bomb_,bomb_1,bomb_2, bomb_3, bomb_Img;
var mob_,mob_1,mob_2, mob_Img;
var jin_l, l;
var jin_d, d;
var jin_x, x;
var jin_y, y;
var jin_c, c;
var knight, knight_Img, knight2;
var knight_health = 20;
var knight2_health = 20;
var knight3_health = 20;

//Backgrounds:-
var bg,bg_Img;
var bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15,bg16,bg17,bg18,bg19,bg20,bg21,bg2_Img;

function preload() {

//Story Sounds:-
//storm_so = loadSound("Sound/storm_s.mp3");
explosion_ = loadSound("Sound/explosion.mp3");
crunching = loadSound("Sound/Crunch.mp3");
blast = loadSound("Sound/fireball.mp3");
coin_ = loadSound("Sound/coin.wav");
//lava_ = loadSound("/Sound/Lava.mp3");
home = loadSound("Sound/Home music.mp3");
game = loadSound("Sound/Game music.mp3");
//loose = loadSound("Sound/Loose music.mp3");
//win = loadSound("Sound/Win Music.mp3")
                                                 
//Buttons:-
start_btn_Img = loadImage("Buttons/start.png");
play_btn_Img = loadImage("Buttons/play.png");

//Backgrounds:-

bg2_Img = loadImage("Backgrounds/background_.jpg")

//Images:-
bricks_1_Img = loadImage("level/Bricks.png");
spikes_Img = loadImage("level/Spikes.png");
lava_Img = loadImage("level/Lava.png")
brick_Img = loadImage("level/Brick.png");
d = loadImage("Hero g/h_0.png");
bricksr_Img = loadImage("level/Bricks3.png");
health0 = loadImage("Health/fr0.png")
health1 = loadImage("Health/fr1.png")
health2 = loadImage("Health/fr2.png")
health3 = loadImage("Health/fr3.png")
health4 = loadImage("Health/fr4.png")
health5 = loadImage("Health/fr5.png")
health6 = loadImage("Health/fr6.png")
health7 = loadImage("Health/fr7.png")
health8 = loadImage("Health/fr8.png")
health9 = loadImage("Health/fr9.png");
heart_Img = loadImage("level/Heart.png");
brickb_Img = loadImage("level/Bricks2.png");

//Animations:-

bg_home_Img = loadAnimation("Home/ho_0.png","Home/ho_1.png","Home/ho_2.png","Home/ho_3.png","Home/ho_4.png","Home/ho_5.png","Home/ho_6.png","Home/ho_7.png","Home/ho_8.png","Home/ho_9.png","Home/ho_10.png","Home/ho_11.png","Home/ho_12.png");
//storm_Img = loadAnimation("/Story/0.png ", "/Story/1.png","/Story/2.png", "/Story/3.png", "/Story/4.png", "/Story/5.png", "/Story/6.png", "/Story/7.png", "/Story/8.png", "/Story/9.png", "/Story/10.png", "/Story/11.png", "/Story/12.png", "/Story/13.png", "/Story/14.png", "/Story/15.png", "/Story/16.png", "/Story/17.png", "/Story/18.png", "/Story/19.png", "/Story/20.png", "/Story/21.png", "/Story/22.png", "/Story/23.png", "/Story/24.png", "/Story/25.png", "/Story/26.png", "/Story/27.png", "/Story/28.png", "/Story/29.png", "/Story/30.png", "/Story/31.png", "/Story/32.png", "/Story/33.png", "/Story/34.png", "/Story/35.png");
//island_Img = loadAnimation("/Story/36.png", "/Story/37.png", "/Story/38.png", "/Story/39.png", "/Story/40.png", "/Story/41.png", "/Story/42.png", "/Story/43.png", "/Story/44.png", "/Story/45.png", "/Story/46.png", "/Story/47.png", "/Story/48.png", "/Story/49.png")
jin_a_Img = loadAnimation("Hero a/a_0.png","Hero a/a_1.png","Hero a/a_2.png","Hero a/a_3.png","Hero a/a_4.png","Hero a/a_5.png","Hero a/a_6.png","Hero a/a_7.png","Hero a/a_8.png","Hero a/a_9.png",)
l = loadAnimation("Hero a_l/a_0_l.png","Hero a_l/a_1_l.png","Hero a_l/a_2_l.png","Hero a_l/a_3_l.png","Hero a_l/a_4_l.png","Hero a_l/a_5_l.png","Hero a_l/a_6_l.png","Hero a_l/a_7_l.png","Hero a_l/a_8_l.png","Hero a_l/a_9_l.png")
bomb_Img = loadAnimation("Bomb/b_1.png","Bomb/b_2.png","Bomb/b_3.png","Bomb/b_4.png","Bomb/b_5.png","Bomb/b_6.png","Bomb/b_7.png","Bomb/b_8.png","Bomb/b_9.png","Bomb/b_10.png","Bomb/b_11.png","Bomb/b_12.png",)
question_b_Img = loadAnimation("question box/q_0.png","question box/q_1.png","question box/q_2.png","question box/q_3.png")
mob_Img = loadAnimation("Mob/m_1.png","Mob/m_2.png","Mob/m_3.png","Mob/m_4.png","Mob/m_5.png","Mob/m_6.png","Mob/m_7.png","Mob/m_8.png",)
x = loadAnimation("Hero b/b_0.png","Hero b/b_1.png","Hero b/b_2.png","Hero b/herob_3.png","Hero b/b_4.png","Hero b/b_5.png","Hero b/b_6.png","Hero b/b_7.png","Hero b/b_8.png","Hero b/b_9.png","Hero b/b_10.png","Hero b/b_11.png","Hero b/b_12.png","Hero b/b_13.png","Hero b/b_14.png","Hero b/b_15.png","Hero b/b_16.png",)
//y = loadAnimation("/Hero c/c_0.png","/Hero c/c_1","/Hero c/c_2","/Hero c/c_3  ","/Hero c/c_4","/Hero c/c_5","/Hero c/c_6","/Hero c/c_7","/Hero c/c_8","/Hero c/c_9","/Hero c/c_10","/Hero c/c_11","/Hero c/c_12","/Hero c/c_13","/Hero c/c_14","/Hero c/c_15","/Hero c/c_16",)
coin_Img = loadAnimation("coin/co0.png","coin/co1.png","coin/co2.png","coin/co3.png","coin/co4.png","coin/co5.png");
fireball_Img = loadAnimation("fireball/f0.png","fireball/f1.png","fireball/f2.png","fireball/f3.png","fireball/f4.png","fireball/f5.png","fireball/f6.png","fireball/f7.png","fireball/f8.png","fireball/f9.png","fireball/f10.png","fireball/f11.png","fireball/f12.png","fireball/f13.png","fireball/f14.png","fireball/f15.png","fireball/f16.png","fireball/f17.png","fireball/f18.png","fireball/f19.png","fireball/f20.png","fireball/f21.png","fireball/f22.png")
knight_Img = loadAnimation("knight/k0.png","knight/k1.png", "knight/k2.png", "knight/k3.png", "knight/k4.png", "knight/k5.png", "knight/k6.png", "knight/k7.png", "knight/k8.png", "knight/k9.png", "knight/k10.png", "knight/k11.png", "knight/k12.png", "knight/k13.png", "knight/k14.png", "knight/k15.png", "knight/k16.png")
bombr_Img = loadAnimation("Bomb_r/br_0.png","Bomb_r/br_1.png","Bomb_r/br_2.png","Bomb_r/br_3.png","Bomb_r/br_4.png","Bomb_r/br_5.png","Bomb_r/br_6.png","Bomb_r/br_7.png","Bomb_r/br_8.png","Bomb_r/br_9.png","Bomb_r/br_10.png","Bomb_r/br_11.png")
mobr_Img = loadAnimation("Mob_r/m_r.png", "Mob_r/m_r1.png",  "Mob_r/m_r2.png", "Mob_r/m_r3.png", "Mob_r/m_r4.png", "Mob_r/m_r5.png", "Mob_r/m_r6.png", "Mob_r/m_r7.png")
treasure_Img = loadAnimation("Treasure/tr1.png","Treasure/tr2.png","Treasure/tr3.png","Treasure/tr4.png","Treasure/tr5.png","Treasure/tr6.png","Treasure/tr7.png","Treasure/tr8.png","Treasure/tr9.png","Treasure/tr10.png","Treasure/tr11.png","Treasure/tr12.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  home.loop()

  if(gameState === 3){
    loose.play();
    }

  bg13 = createSprite(displayWidth+12300, displayHeight-420);
  bg13.addImage("bg2_",bg2_Img);
  bg13.visible = false;

  bg12 = createSprite(displayWidth+11100, displayHeight-420);
  bg12.addImage("bg2_",bg2_Img);
  bg12.visible = false;

  bg11 = createSprite(displayWidth+9900, displayHeight-420);
  bg11.addImage("bg2_",bg2_Img);
  bg11.visible = false;

  bg10 = createSprite(displayWidth+8700, displayHeight-420);
  bg10.addImage("bg2_",bg2_Img);
  bg10.visible = false;

  bg9 = createSprite(displayWidth+7500, displayHeight-420);
  bg9.addImage("bg2_",bg2_Img);
  bg9.visible = false;
  
  bg8 = createSprite(displayWidth+6300, displayHeight-420);
  bg8.addImage("bg2_",bg2_Img);
  bg8.visible = false;
  
  bg7 = createSprite(displayWidth+5100, displayHeight-420);
  bg7.addImage("bg2_",bg2_Img);
  bg7.visible = false;

  bg6 = createSprite(displayWidth+3900, displayHeight-420);
  bg6.addImage("bg2_",bg2_Img);
  bg6.visible = false;

  bg5 = createSprite(displayWidth+2700, displayHeight-420);
  bg5.addImage("bg2_",bg2_Img);
  bg5.visible = false;

  bg4 = createSprite(displayWidth+1500, displayHeight-420);
  bg4.addImage("bg2_",bg2_Img);
  bg4.visible = false;

  bg3 = createSprite(displayWidth+300, displayHeight-420);
  bg3.addImage("bg2_",bg2_Img);
  bg3.visible = false;

  bg2 = createSprite(displayWidth-930, displayHeight-420);
  bg2.addImage("bg2_",bg2_Img);
  bg2.visible = false;

  in1 = createSprite(displayWidth-1600, displayHeight-200,20,800);
  in1.visible = false;

  in2 = createSprite(displayWidth+100, displayHeight-200,20,800);
  in2.visible = false;

  in3 = createSprite(displayWidth+340, displayHeight-200,20,800);
  in3.visible = false;

  in4 = createSprite(displayWidth+1000, displayHeight-200,20,800);
  in4.visible = false;

  in5 = createSprite(displayWidth+1800, displayHeight-200,20,800);
  in5.visible = false;

  in6 = createSprite(displayWidth+2940, displayHeight-200,20,800);
  in6.visible = false;

  in7 = createSprite(displayWidth+7800, displayHeight-200,20,800);
  in7.visible = false;

  in8 = createSprite(displayWidth+10600, displayHeight-200,20,800);
  in8.visible = false;

  question_b = createSprite(displayWidth+7900, displayHeight-570,0,0);
  question_b.scale = 0.27
  question_b.addAnimation("q_b", question_b_Img);
 // question_b.debug = true;
  question_b.setCollider("rectangle", 0,0,400, 400)

  coin_s = createSprite(0, displayHeight-735);
  coin_s.scale = 0.4;
  coin_s.addAnimation("s", coin_Img);
  coin_s.visible = false;

  treasure2 = createSprite(0, displayHeight-735);
  treasure2.scale = 0.2;
  treasure2.addAnimation("s", treasure_Img);
  treasure2.visible = false;

  heart = createSprite(0, displayHeight-735);
  heart.scale = 0.3;
  heart.addAnimation("s", heart_Img);
  heart.visible = false;

  coin1 = createSprite(displayWidth-1400, displayHeight-500);
  coin1.scale = 0.4;
  coin1.addAnimation("c", coin_Img);

  coin2 = createSprite(displayWidth+170, displayHeight-400);
  coin2.scale = 0.4;
  coin2.addAnimation("c", coin_Img);

  coin3 = createSprite(displayWidth+230, displayHeight-400);
  coin3.scale = 0.4;
  coin3.addAnimation("c", coin_Img);

  coin4 = createSprite(displayWidth+640, displayHeight-200);
  coin4.scale = 0.4
  coin4.addAnimation("c", coin_Img);

  coin5 = createSprite(displayWidth+720, displayHeight-200);
  coin5.scale = 0.4
  coin5.addAnimation("c", coin_Img);

  coin6 = createSprite(displayWidth+800, displayHeight-200);
  coin6.scale = 0.4
  coin6.addAnimation("c", coin_Img);

  coin7 = createSprite(displayWidth+1252, displayHeight-340);
  coin7.scale = 0.4
  coin7.addAnimation("c", coin_Img);

  coin8 = createSprite(displayWidth+2400, displayHeight-200);
  coin8.scale = 0.4
  coin8.addAnimation("c", coin_Img);

  coin9 = createSprite(displayWidth+2460, displayHeight-200);
  coin9.scale = 0.4
  coin9.addAnimation("c", coin_Img);
  
  coin10 = createSprite(displayWidth+3520, displayHeight-460);
  coin10.scale = 0.4
  coin10.addAnimation("c", coin_Img);

  coin11 = createSprite(displayWidth+4220, displayHeight-530);
  coin11.scale = 0.4
  coin11.addAnimation("c", coin_Img);

  coin12 = createSprite(displayWidth+4220, displayHeight-590);
  coin12.scale = 0.4
  coin12.addAnimation("c", coin_Img);

  coin13 = createSprite(displayWidth+5550, displayHeight-340);
  coin13.scale = 0.4
  coin13.addAnimation("c", coin_Img);

  treasure = createSprite(displayWidth+10800, displayHeight-225);
  treasure.scale = 0.5;
  treasure.addAnimation("g", treasure_Img);
  
  fireball = createSprite(displayWidth-500, displayHeight-400);
  fireball.scale = 0.5
  fireball.addAnimation("f", fireball_Img);
  fireball.velocityX = -10;
  fireball.setCollider("rectangle", 0,0,250,100);
  fireball.visible = false;

  fireball2 = createSprite(displayWidth+4000, displayHeight-200);
  fireball2.scale = 0.5
  fireball2.addAnimation("f", fireball_Img);
  fireball2.velocityX = -10;
  fireball2.setCollider("rectangle", 0,0,250,100);
  fireball2.visible = false;

  fireball3 = createSprite(displayWidth+6000, displayHeight-600);
  fireball3.scale = 0.5
  fireball3.addAnimation("f", fireball_Img);
  fireball3.velocityX = -10;
  fireball3.setCollider("rectangle", 0,0,250,100);
  fireball3.visible = false;

  fireball4 = createSprite(displayWidth+12000, displayHeight-400);
  fireball4.scale = 0.5
  fireball4.addAnimation("f", fireball_Img);
  fireball4.velocityX = -10;
  fireball4.setCollider("rectangle", 0,0,250,100);
  fireball4.visible = false;

  fireball5 = createSprite(displayWidth+20000, displayHeight-600);
  fireball5.scale = 0.5
  fireball5.addAnimation("f", fireball_Img);
  fireball5.velocityX = -10;
  fireball5.setCollider("rectangle", 0,0,250,100);
  fireball5.visible = false;

  start_btn = createSprite(displayWidth-750, displayHeight-743,0,0);
  start_btn.addImage("btn1", start_btn_Img);
  start_btn.scale = 0.4;

  play_btn = createSprite(displayWidth-12000, displayHeight-720,0,0);
  play_btn.addImage("btn1", play_btn_Img);
  play_btn.scale = 0.4;

  bg_home = createSprite(displayWidth-1400, displayHeight-430, 0, 0);
  bg_home.addAnimation("home",bg_home_Img);
  bg_home.scale = 2.75;

  bg_home.depth = start_btn.depth;
  start_btn.depth = start_btn.depth+1;

/*  jin_y = createSprite(displayWidth-1400,displayHeight-500,50,40)
  jin_y.scale = 0.65
  jin_y.addImage("l", y);
  jin_y.visible = false;
  //jin_d.debug = true;
  jin_y.setCollider("circle", 0,0,185);*/

  

  bomb_ = createSprite(displayWidth-600, displayHeight-200,0,0);
  bomb_.scale = 0.4
  bomb_.addAnimation("b_", bomb_Img);
  bomb_.velocityX = -2;
  bomb_.velocityY = -4
  bomb_.visible = false;
 // bomb_.debug = true;
  bomb_.setCollider("circle",0,0,100);

  bomb_r= createSprite(0, 0,0,0);
  bomb_r.scale = 0.4
  bomb_r.addAnimation("b_", bombr_Img);
  bomb_r.velocityX = -2;
  bomb_r.velocityY = -4
  bomb_r.visible = false;
 // bomb_.debug = true;
  bomb_r.setCollider("circle",0,0,100);

  bomb_1 = createSprite(displayWidth-200, displayHeight-400,0,0);
  bomb_1.scale = 0.4
  bomb_1.addAnimation("b_", bomb_Img);
  bomb_1.velocityX = -2;
  bomb_1.velocityY = -4
  bomb_1.visible = false;
  bomb_1.setCollider("circle",0,0,100);

  bomb_1r= createSprite(0, 0,0,0);
  bomb_1r.scale = 0.4
  bomb_1r.addAnimation("b_", bombr_Img);
  bomb_1r.velocityX = -2;
  bomb_1r.velocityY = -4
  bomb_1r.visible = false;
 // bomb_.debug = true;
  bomb_1r.setCollider("circle",0,0,100);

  bomb_2 = createSprite(displayWidth+3000, displayHeight-200,0,0);
  bomb_2.scale = 0.4
  bomb_2.addAnimation("b_", bomb_Img);
  bomb_2.velocityX = -2;
  bomb_2.velocityY = -4
  bomb_2.visible = false
  bomb_2.setCollider("circle",0,0,100);

  bomb_2r = createSprite(displayWidth+3000, displayHeight-200,0,0);
  bomb_2r.scale = 0.4
  bomb_2r.addAnimation("b_", bombr_Img);
  bomb_2r.velocityX = -2;
  bomb_2r.velocityY = -4
  bomb_2r.visible = false
  bomb_2r.setCollider("circle",0,0,100);

  bomb_3 = createSprite(displayWidth+9600, displayHeight-400,0,0);
  bomb_3.scale = 0.4
  bomb_3.addAnimation("b_", bomb_Img);
  bomb_3.velocityX = -2;
  bomb_3.velocityY = -4
  bomb_3.visible = false
  bomb_3.setCollider("circle",0,0,100);

  bomb_3r = createSprite(displayWidth+9600, displayHeight-400,0,0);
  bomb_3r.scale = 0.4
  bomb_3r.addAnimation("b_", bombr_Img);
  bomb_3r.velocityX = -2;
  bomb_3r.rvelocityY = -4
  bomb_3r.visible = false
  bomb_3r.setCollider("circle",0,0,100);

  bomb_4 = createSprite(displayWidth+10000, displayHeight-200,0,0);
  bomb_4.scale = 0.4
  bomb_4.addAnimation("b_", bomb_Img);
  bomb_4.velocityX = -2;
  bomb_4.velocityY = -4
  bomb_4.setCollider("circle",0,0,100);

  bomb_4r = createSprite(displayWidth+10000, displayHeight-200,0,0);
  bomb_4r.scale = 0.4
  bomb_4r.addAnimation("b_", bombr_Img);
  bomb_4r.rvelocityX = -2;
  bomb_4r.velocityY = -4
  bomb_4r.setCollider("circle",0,0,100);
  bomb_4r.visible = false;

  mob_ = createSprite(displayWidth+930, displayHeight-200);
  mob_.scale = 0.5
  mob_.addAnimation("n", mob_Img);
  mob_.velocityX = -2;
  mob_.setCollider("circle", 0,0,100);

  mob_r = createSprite(displayWidth+930, displayHeight-200);
  mob_r.scale = 0.5
  mob_r.addAnimation("n", mobr_Img);
  mob_r.velocityX = -2;
  mob_r.setCollider("circle", 0,0,100);
  mob_r.visible = false;

  mob_1 = createSprite(displayWidth+3050, displayHeight-200);
  mob_1.scale = 0.5
  mob_1.addAnimation("m", mob_Img);
  mob_1.velocityX = -2;
  mob_1.setCollider("circle", 0,0,100)

  mob_1r = createSprite(displayWidth+3050, displayHeight-200);
  mob_1r.scale = 0.5
  mob_1r.addAnimation("m", mobr_Img);
  mob_1r.velocityX = -2;
  mob_1r.setCollider("circle", 0,0,100)
  mob_1r.visible = false;
  
  mob_2 = createSprite(displayWidth+9750, displayHeight-200);
  mob_2.scale = 0.5
  mob_2.addAnimation("a", mob_Img);
  mob_2.velocityX = -2;
  mob_2.setCollider("circle", 0,0,100);

  mob_2r = createSprite(displayWidth+3050, displayHeight-200);
  mob_2r.scale = 0.5
  mob_2r.addAnimation("m", mobr_Img);
  mob_2r.velocityX = -2;
  mob_2r.setCollider("circle", 0,0,100)
  mob_2r.visible = false;

  knight = createSprite(displayWidth+9200, displayHeight-265);
  knight.scale = 1.3
  knight.addAnimation("k", knight_Img);
  knight.visible = false;
 //knight.debug = true;
  knight.setCollider("rectangle", 0,0,90,200)

  knight2 = createSprite(displayWidth+9800, displayHeight-265);
  knight2.scale = 1.3
  knight2.addAnimation("k", knight_Img);
  knight2.setCollider("rectangle", 0,0,90,200)

  knight3 = createSprite(displayWidth+10300, displayHeight-265);
  knight3.scale = 1.3
  knight3.addAnimation("k", knight_Img);
  knight3.setCollider("rectangle", 0,0,90,200)
  
  health_obj = createSprite(0,displayHeight-695);
  health_obj.scale = 0.7;
  health_obj.addImage("h", health9);
  health_obj.visible = false;
  
  health_obj2 = createSprite(0,displayHeight-695);
  health_obj2.scale = 0.7;
  health_obj2.addImage("h", health8);
  health_obj2.visible = false;

  health_obj3 = createSprite(0,displayHeight-695);
  health_obj3.scale = 0.7;
  health_obj3.addImage("h", health7);
  health_obj3.visible = false;

  health_obj4 = createSprite(0,displayHeight-695);
  health_obj4.scale = 0.7;
  health_obj4.addImage("h", health6);
  health_obj4.visible = false;

  health_obj5 = createSprite(0,displayHeight-695);
  health_obj5.scale = 0.7;
  health_obj5.addImage("h", health5);
  health_obj5.visible = false;

  health_obj6 = createSprite(0,displayHeight-695);
  health_obj6.scale = 0.7;
  health_obj6.addImage("h", health4);
  health_obj6.visible = false;

  health_obj7 = createSprite(0,displayHeight-695);
  health_obj7.scale = 0.7;
  health_obj7.addImage("h", health3);
  health_obj7.visible = false;

  health_obj8 = createSprite(0,displayHeight-695);
  health_obj8.scale = 0.7;
  health_obj8.addImage("h", health2);
  health_obj8.visible = false;

  health_obj9 = createSprite(0,displayHeight-695);
  health_obj9.scale = 0.7;
  health_obj9.addImage("h", health1);
  health_obj9.visible = false;

  health_obj10 = createSprite(0,displayHeight-695);
  health_obj10.scale = 0.7;
  health_obj10.addImage("h", health0);
  health_obj10.visible = false;

  spikes = createSprite(displayWidth+165, displayHeight-180,20,20);
  spikes.scale = 1;
  spikes.addImage("s_", spikes_Img);
  

  spikes4 = createSprite(displayWidth+275, displayHeight-180,20,20);
  spikes4.scale = 1;
  spikes4.addImage("s_", spikes_Img);

  spikes2 = createSprite(displayWidth+1750, displayHeight-148,20,20);
  spikes2.scale = 1;
  spikes2.addImage("s_", spikes_Img);
  
  jin_x = createSprite(displayWidth-1400,displayHeight-310,100,40)
  jin_x.scale = 0.65
  jin_x.addAnimation("l", x);
  jin_x.visible = false;
  //jin_x.debug = true;
  jin_x.setCollider("rectangle", 0,0,300,400);

  jin_d = createSprite(displayWidth-1400,displayHeight-500,50,40)
  jin_d.scale = 0.65
  jin_d.addImage("l", d);
  jin_d.visible = false;
 // jin_d.debug = true;
  jin_d.setCollider("circle", 0,0,185);

  jin_l = createSprite(displayWidth-1400,displayHeight-500,50,40)
  jin_l.scale = 0.7
  jin_l.addAnimation("l", l);
  jin_l.visible = false;
  jin_l.setCollider("circle", 0,0,150);

  jin_a = createSprite(displayWidth-1400,displayHeight-300,50,40);
  jin_a.scale = 0.7;
  jin_a.addAnimation("j_a", jin_a_Img);
  jin_a.visible = false;
   //jin_a.debug = true;
  jin_a.setCollider("circle", 0,0,150);

  bricks_32 = createSprite(displayWidth+11050, displayHeight-250,0,0);
  bricks_32.scale = 0.3;
  bricks_32.addImage("b_3_",brickb_Img);

  lava = createSprite(displayWidth+1352, displayHeight-80);
  lava.addImage("l", lava_Img);
 //lava.debug = true;
  lava.setCollider("rectangle", 0,0,500,160)

  lava2 = createSprite(displayWidth+3310, displayHeight-80);
  lava2.addImage("l", lava_Img);
  lava2.setCollider("rectangle", 0,0,700,160)

  lava3 = createSprite(displayWidth+4000, displayHeight-80);
  lava3.addImage("l", lava_Img);
  lava3.setCollider("rectangle", 0,0,700,160)

  lava4 = createSprite(displayWidth+4690, displayHeight-80);
  lava4.addImage("l", lava_Img);
  lava4.setCollider("rectangle", 0,0,700,160)

  lava5 = createSprite(displayWidth+5380, displayHeight-80);
  lava5.addImage("l", lava_Img);
  lava5.setCollider("rectangle", 0,0,700,160)
  
  lava6 = createSprite(displayWidth+6070, displayHeight-80);
  lava6.addImage("l", lava_Img);
  lava6.setCollider("rectangle", 0,0,700,160)

  lava7 = createSprite(displayWidth+6760, displayHeight-80);
  lava7.addImage("l", lava_Img);
  lava7.setCollider("rectangle", 0,0,700,160)
  
  lava8 = createSprite(displayWidth+7450, displayHeight-80);
  lava8.addImage("l", lava_Img);
  lava8.setCollider("rectangle", 0,0,700,160)

  brick_11 = createSprite(displayWidth+5920, displayHeight-280,100,100);
  brick_11.scale = 0.15
  brick_11.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_11.setCollider("rectangle",0,0,500,500);
  brick_11.visible = false;

  brick_10 = createSprite(displayWidth+5550, displayHeight-280,100,100);
  brick_10.scale = 0.15
  brick_10.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_10.setCollider("rectangle",0,0,500,500);
  brick_10.visible = false;

  brick_9 = createSprite(displayWidth+5180, displayHeight-170,100,100);
  brick_9.scale = 0.15
  brick_9.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_9.setCollider("rectangle",0,0,500,500);
  brick_9.visible = false;

  brick_8 = createSprite(displayWidth+4860, displayHeight-170,100,100);
  brick_8.scale = 0.15
  brick_8.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_8.setCollider("rectangle",0,0,500,500);
  brick_8.visible = false;

  brick_7 = createSprite(displayWidth+4540, displayHeight-170,100,100);
  brick_7.scale = 0.15
  brick_7.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_7.setCollider("rectangle",0,0,500,500);
  brick_7.visible = false;

  brick_6 = createSprite(displayWidth+4220, displayHeight-420,100,100);
  brick_6.scale = 0.15
  brick_6.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_6.setCollider("rectangle",0,0,500,500);
  brick_6.visible = false;

  brick_5 = createSprite(displayWidth+3840, displayHeight-200,100,100);
  brick_5.scale = 0.15
  brick_5.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_5.setCollider("rectangle",0,0,500,500);
  brick_5.visible = false;

  brick_4 = createSprite(displayWidth+3520, displayHeight-400,100,100);
  brick_4.scale = 0.15
  brick_4.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_4.setCollider("rectangle",0,0,500,500);
  brick_4.visible = false;

  brick_1 = createSprite(displayWidth+1252, displayHeight-280,100,100);
  brick_1.scale = 0.15
  brick_1.addImage("b", brick_Img)
  //brick_1.debug = true;
  brick_1.setCollider("rectangle",0,0,500,500);
  brick_1.visible = false;

  brick_2 = createSprite(displayWidth+1452, displayHeight-170,100,100);
  brick_2.scale = 0.15
  brick_2.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_2.setCollider("rectangle",0,0,500,500);
  brick_2.visible = false;

  brick_3 = createSprite(displayWidth+3200, displayHeight-280,100,100);
  brick_3.scale = 0.15
  brick_3.addImage("b", brick_Img)
  //brick_2.debug = true;
  brick_3.setCollider("rectangle",0,0,500,500);
  brick_3.visible = false;
  
  invisible_gr = createSprite(displayHeight-100,displayHeight-135,100000,50);
  invisible_gr.visible = false;

  invisible_obj1 = createSprite(displayWidth+1350,displayHeight-135,690,30);
  invisible_obj1.visible = false;

  bricksr_1= createSprite(displayWidth+8740, displayHeight-124,0,0);
  bricksr_1.scale = 0.3;
  bricksr_1.addImage("b_3_",bricksr_Img);
  bricksr_1.visible = false;

  bricksr_2= createSprite(displayWidth+10000, displayHeight-124,0,0);
  bricksr_2.scale = 0.3;
  bricksr_2.addImage("b_3_",bricksr_Img);
  bricksr_2.visible = false;

 }

 function draw() {
  background(0); 
  
  //home.play();

  if(gameState === 0){
  //home.loop();
  }
  console.log(jin_a.y);


  camera.position.x=jin_a.x
  camera.position.y=displayHeight/2.4

  if(bomb_.y<=300){
  bomb_.velocityY = 3
  }

  if(bomb_.isTouching(invisible_gr)){
  bomb_.velocityY = -3
  }

  if(bomb_1.y<=300){
  bomb_1.velocityY = 3
  }
  
  if(bomb_1.isTouching(invisible_gr)){
  bomb_1.velocityY = -3
  }

  if(bomb_2.y<=300){
  bomb_2.velocityY = 3
  }

  if(bomb_2.isTouching(invisible_gr)){
  bomb_2.velocityY = -3
  }

  if(bomb_3.y<=300){
  bomb_3.velocityY = 3
  }

  if(bomb_3.isTouching(invisible_gr)){
  bomb_3.velocityY = -3
  }

  if(bomb_4.y<=300){
  bomb_4.velocityY = 3
  }

  if(bomb_4.isTouching(invisible_gr)){
  bomb_4.velocityY = -3
  }

  if(bomb_.isTouching(in1)){
  bomb_.velocityX = 4;
  bomb_.visible = false;;
  bomb_r.visible = true;
  }

  if(bomb_.isTouching(in2)){
  bomb_.velocityX = -4;
  bomb_r.visible = false;
  bomb_.visible = true;
  }

  if(bomb_1.isTouching(in1)){
  bomb_1.velocityX = 4;
  bomb_1.visible = false;
  bomb_1r.visible = true;
  }
    
  if(bomb_1.isTouching(in2)){
  bomb_1.velocityX = -4;
  bomb_1r.visible = false;
  bomb_1.visible = true;
  }

  if(mob_.isTouching(in3)){
  mob_.velocityX = 2;
  mob_.visible = false;
  mob_r.visible = true;
  }
        
  if(mob_.isTouching(in4)){
  mob_.velocityX = -2;
  mob_r.visible = false;
  mob_.visible = true;
  }

  if(mob_1.isTouching(in5)){
  mob_1.velocityX = 2;
  mob_1r.visible = true;
  mob_1.visible = false;
  }

  if(mob_1.isTouching(in6)){
  mob_1.velocityX = -2;
  mob_1r.visible = false;;
  mob_1.visible = true;
  }

  if(bomb_2.isTouching(in5)){
  bomb_2.velocityX = 4;
  bomb_2r.visible = true;
  bomb_2.visible = false;
  }
              
  if(bomb_2.isTouching(in6)){
  bomb_2.velocityX = -4;
  bomb_2r.visible = false;
  bomb_2.visible = true;
  }

                    
  if(bomb_3.isTouching(in7)){
  bomb_3.velocityX = 4;
  bomb_3r.visible = true;
  bomb_3.visible = false;
  }
              
  if(bomb_3.isTouching(in8)){
  bomb_3.velocityX = -4;
  bomb_3r.visible = false;
  bomb_3.visible = true;
  }

  if(bomb_4.isTouching(in7)){
  bomb_4.velocityX = 4;
  bomb_4r.visible = true;
  bomb_4.visible = false;
  }
                  
  if(bomb_4.isTouching(in8)){
  bomb_4.velocityX = -4;
  bomb_4r.visible = false;
  bomb_4.visible = true;
  }                  

  if(mob_2.isTouching(in7)){
  mob_2.velocityX = 2;
  mob_2r.visible = true;
  mob_2.visible = false;
  }
            
  if(mob_2.isTouching(in8)){
  mob_2.velocityX = -2;
  mob_2r.visible = false;
  mob_2.visible = true;
  }

                  
              
  if(mousePressedOver(start_btn)){
  jin_a.x = -10000
  gameState = 1
  }

  if(mousePressedOver(play_btn)){
  jin_a.x = -100
  startButton();
  }
    
  if(keyWentDown("UP_ARROW")&&jin_a.y>=450&&gameState === 2 ){
    
  jin_a.velocityY = -16;
  jin_l.velocityY = -16
    
  }

  if(keyWentDown("UP_ARROW")&&jin_a.y>=450&&gameState === 5 ){
    
    jin_a.velocityY = -16;
    jin_l.velocityY = -16
    
  }

  if(keyWentDown("UP_ARROW")&&jin_a.y>=450&&gameState === 3 ){
    
    jin_a.velocityY = -16;
    jin_l.velocityY = -16
    
  }
    if(keyWentDown("UP_ARROW")&&jin_a.x>4600&&jin_a.y>=347&&jin_a.x<5640&&gameState === 2){
    jin_a.velocityY = -16;
    jin_l.velocityY = -16
  }

   if(keyWentDown("UP_ARROW")&&jin_a.x>6800&&jin_a.y>=347&&jin_a.x<7200&&gameState === 2){
    jin_a.velocityY = -16;
    jin_l.velocityY = -16
   }

    if(keyDown("RIGHT_ARROW")&&gameState === 2 ){
    jin_a.visible = true;
    jin_a.x = jin_a.x+10;
    jin_l.visible = false;
    jin_d.visible = false;
    jin_x.visible = false;
    jin_a.velocityX = 0;
  }

  if(keyDown("RIGHT_ARROW")&&gameState === 5 ){
    jin_a.visible = true;
    jin_a.x = jin_a.x+10;
    jin_l.visible = false;
    jin_d.visible = false;
    jin_x.visible = false;
    jin_a.velocityX = 0;
  }


  if(keyDown("RIGHT_ARROW")&&gameState === 3 ){
    jin_a.visible = true;
    jin_a.x = jin_a.x+10;
    jin_l.visible = false;
    jin_d.visible = false;
    jin_x.visible = false;
    jin_a.velocityX = 0;
  }

  if(keyDown("LEFT_ARROW")&&gameState === 2){
    camera.position.x=jin_a.x
    camera.position.y=displayHeight/2.4
    jin_a.x = jin_a.x-10;
    jin_l.visible = true;
    jin_a.visible = false;
    jin_d.visible = false;
    jin_x.visible = false;
    jin_a.velocityX = 0;
  }
 
  if(keyWentDown("DOWN_ARROW")&&gameState === 2 ){
    jin_a.visible = false;
    jin_l.velocityX = 0;
    jin_a.velocityX = 0;
    jin_l.visible = false;
    camera.position.x=jin_a.x
    camera.position.y=displayHeight/2.4
    jin_d.visible = true;
    jin_x.visible = false;

  }

  if(keyDown("LEFT_ARROW")&&gameState === 5){
    camera.position.x=jin_a.x
    camera.position.y=displayHeight/2.4
    jin_a.x = jin_a.x-10;
    jin_l.visible = true;
    jin_a.visible = false;
    jin_d.visible = false;
    jin_x.visible = false;
    jin_a.velocityX = 0;
  }
 
  if(keyWentDown("DOWN_ARROW")&&gameState === 5 ){
    jin_a.visible = false;
    jin_l.velocityX = 0;
    jin_a.velocityX = 0;
    jin_l.visible = false;
    camera.position.x=jin_a.x
    camera.position.y=displayHeight/2.4
    jin_d.visible = true;
    jin_x.visible = false;

  }


  if(keyDown("LEFT_ARROW")&&gameState === 3){
    camera.position.x=jin_a.x
    camera.position.y=displayHeight/2.4
    jin_a.x = jin_a.x-10;
    jin_l.visible = true;
    jin_a.visible = false;
    jin_d.visible = false;
    jin_x.visible = false;
    jin_a.velocityX = 0;
  }
 
  if(keyWentDown("DOWN_ARROW")&&gameState === 3 ){
    jin_a.visible = false;
    jin_l.velocityX = 0;
    jin_a.velocityX = 0;
    jin_l.visible = false;
    camera.position.x=jin_a.x
    camera.position.y=displayHeight/2.4
    jin_d.visible = true;
    jin_x.visible = false;

  }

  if(keyWentDown("LEFT_ARROW")&&keyWentDown("UP_ARROW")&&gameState === 2){
  jin_l.visible = true;
  jin_a.visible = false;
  jin_d.visible = false;
  jin_x.visible = false;
  
  }

  if(keyWentDown("RIGHT_ARROW")&&keyWentDown("UP_ARROW")&&gameState === 2 ){
    jin_a.visible = true;
    jin_l.visible = false;
    jin_d.visible = false;
    jin_x.visible = false;
    }

    if(keyWentDown("LEFT_ARROW")&&keyWentDown("UP_ARROW")&&gameState === 5){
      jin_l.visible = true;
      jin_a.visible = false;
      jin_d.visible = false;
      jin_x.visible = false;
      
      }
    
      if(keyWentDown("RIGHT_ARROW")&&keyWentDown("UP_ARROW")&&gameState === 5){
        jin_a.visible = true;
        jin_l.visible = false;
        jin_d.visible = false;
        jin_x.visible = false;
        }
    

    if(keyWentDown("LEFT_ARROW")&&keyWentDown("UP_ARROW")&&gameState === 3){
      jin_l.visible = true;
      jin_a.visible = false;
      jin_d.visible = false;
      jin_x.visible = false;
      
      }
    
      if(keyWentDown("RIGHT_ARROW")&&keyWentDown("UP_ARROW")&&gameState === 3 ){
        jin_a.visible = true;
        jin_l.visible = false;
        jin_d.visible = false;
        jin_x.visible = false;
        }

  if(keyCode===122&&jin_a.x>9200&&gameState === 3){
    jin_x.visible = true;
    jin_a.visible = false;
    jin_d.visible = false;
    jin_l.visible = false;
    jin_a.velocityX = 0;
    }

  jin_l.velocityY = jin_l.velocityY + 0.8;
  jin_a.velocityY = jin_a.velocityY + 0.8;
  jin_d.velocityY = jin_d.velocityY + 0.8;

  if(jin_a.isTouching(coin1)){
    coin_.play();
    score = score+1;
    coin1.destroy();
  }

  if(jin_a.isTouching(coin2)){
    coin_.play()
    score = score+1;
    coin2.destroy();
  }

  if(jin_a.isTouching(coin3)){
    coin_.play()
    score = score+1;
    coin3.destroy();
  }

  if(jin_a.isTouching(coin4)){
    coin_.play()
    score = score+1;
    coin4.destroy();
  }

  if(jin_a.isTouching(coin5)){
    coin_.play()
    score = score+1;
    coin5.destroy();
  }

  if(jin_a.isTouching(coin6)){
    coin_.play()
    score = score+1;
    coin6.destroy();
  }

  if(jin_a.isTouching(coin7)){
    coin_.play()
    score = score+1;
    coin7.destroy();
  }

  if(jin_a.isTouching(coin8)){
    coin_.play()
    score = score+1;
    coin8.destroy();
  }

  if(jin_a.isTouching(coin9)){
    coin_.play()
    score = score+1;
    coin9.destroy();
  }

  if(jin_a.isTouching(coin10)){
    coin_.play()
    score = score+1;
    coin10.destroy();
  }

  if(jin_a.isTouching(coin11)){
    coin_.play()
    score = score+1;
    coin11.destroy();
  }

  if(jin_a.isTouching(coin12)){
    coin_.play()
    score = score+1;
    coin12.destroy();
  }

  if(jin_a.isTouching(coin13)){
    coin_.play()
    score = score+1;
    coin13.destroy();
  }

  if(jin_a.isTouching(brick_11)){
  brick_11.velocityX = 8;
  }

  if(jin_a.isTouching(bricks_32)){
  bricks_32.velocityY = -5;
  gameState = 6;
  jin_d.visible = true;
  jin_a.visible = false;
  jin_x.visible = false;
  jin_l.visible = false;
  jin_a.x = bricks_32.x;
  jin_a.y = bricks_32.y;
  }

  if(brick_11.x>9200){
  brick_11.destroy();
  }

  /*if(jin_a.isTouching(question_b)){
    textFont("Georgia");
    fill("white")
    textSize(25)
    text("Press z to attack", displayWidth-9200,displayHeight-720);
  }*/

  if(jin_a.x>7200&&jin_a.x<9200){
  jin_a.x = brick_11.x;
  jin_d.x = jin_d.x-80
  jin_d.visible = true;
  jin_a.visible = false;
  jin_x.visible = false;
  jin_l.visible = false;
  }

  if(jin_a.isTouching(question_b)){
   gameState = 3;
  }
  
  if(jin_a.isTouching(bricksr_1)){
    jin_a.x = 10100
  bricksr_1.visible = false;
  invisible_gr.destroy();
  jin_a.visible = false;
  jin_d.visible = true;
  }

  if(jin_a.isTouching(knight)){
    jin_a.visible = false;
    jin_x.visible = true;
    jin_l.visible = false;
    jin_d.visible = false;
    knight_health = knight_health-0.5 
    health = health-0.25
    jin_a.velocityX = 0;
    }

    if(jin_a.isTouching(knight2)){
      knight2_health = knight2_health-0.5;
      health = health-0.25;   
      jin_a.velocityX = 0;
      }

      if(jin_a.isTouching(knight3)){
        knight3_health = knight3_health-0.5   
        health = health-0.25;
        jin_a.velocityX = 0;
        }

  if(jin_a.isTouching(bricksr_2)){
    bricksr_2.visible = false;
    invisible_gr.destroy();
    jin_a.x = 11380;
    jin_a.visible = false;
    jin_d.visible = true;
    
    }

  if(knight_health<0){                                      
    knight.destroy();
  }

  if(knight2_health<0){
    knight2.destroy();
    }

    if(knight3_health<0){
      knight3.destroy();
      }

  if(jin_a.isTouching(bomb_)&&gameState === 2){
  bomb_.destroy();
  bomb_r.destroy();
  explosion_.play();
  health = health-5
  }

  if(jin_a.isTouching(bomb_1)&&gameState === 2){
    bomb_1.destroy();
    bomb_1r.destroy();
    explosion_.play();
    health = health-5
    }

    if(jin_a.isTouching(bomb_2)){
      bomb_2.destroy();
      bomb_2r.destroy();
      explosion_.play();
      health = health-5
      }


      if(jin_a.isTouching(bomb_3)){
        bomb_3.destroy();
        bomb_3r.destroy();
        explosion_.play();
        health = health-5
        }

        if(jin_a.isTouching(bomb_4)){
          bomb_4.destroy();
          bomb_4r.destroy();
          explosion_.play();
          health = health-5
          }

          if(jin_a.isTouching(mob_)){
            
            crunching.play();
            health = health-0.5
            }

              if(jin_a.isTouching(mob_1)){
            
              crunching.play();
              health = health-0.5
              }

              if(jin_a.isTouching(mob_2)){
            
                crunching.play();
                health = health-0.5
    }
    
    if(jin_a.isTouching(fireball)&&gameState === 2){
    fireball.destroy();
    blast.play();
    health = health-10
    }

    if(jin_a.isTouching(fireball2)&&gameState === 2){
      fireball2.destroy();
      blast.play();
      health = health-10
      }
    
    if(jin_a.isTouching(fireball3)&&gameState === 2){
    fireball3.destroy();
    blast.play();
    health = health-10
    }

    if(jin_a.isTouching(fireball4)&&gameState === 2){
      fireball4.destroy();
      blast.play();
      health = health-10
      }

      if(jin_a.isTouching(fireball5)&&gameState === 2){
     fireball5.destroy();
     blast.play();
      health = health-10
      }

if(jin_a.isTouching(lava)){
health = health-100
} 

if(jin_a.isTouching(lava2)){
  health = health-100
}

if(jin_a.isTouching(lava3)){
  health = health-100
} 

if(jin_a.isTouching(lava4)){
  health = health-100
} 

if(jin_a.isTouching(lava5)){
  health = health-100
} 

if(jin_a.isTouching(lava6)){
  health = health-100
} 

if(jin_a.isTouching(lava7)){
  health = health-100
} 

if(jin_a.isTouching(spikes)){
  health = health-0.1
}    

if(jin_a.isTouching(spikes2)){
  health = health-0.1
}    

if(jin_a.isTouching(spikes4)){
  health = health-0.1
}  

if(jin_a.y>600){
health = health-50
}



  if(health<=90){
  health_obj.visible = false;
  health_obj2.visible = true;
  health_obj3.visible = false;
  health_obj4.visible = false;
  health_obj5.visible = false;
  health_obj6.visible = false;
  health_obj7.visible = false;
  health_obj8.visible = false;
  health_obj9.visible = false;
  health_obj10.visible = false;
  }

  if(health<=80){
  health_obj.visible = false;
  health_obj2.visible = false;
  health_obj3.visible = true;
  health_obj4.visible = false;
  health_obj5.visible = false;
  health_obj6.visible = false;
  health_obj7.visible = false;
  health_obj8.visible = false;
  health_obj9.visible = false;
  health_obj10.visible = false;
    }

  if(health<=70){
  health_obj.visible = false;
  health_obj2.visible = false;
  health_obj3.visible = false;
  health_obj4.visible = true;
  health_obj5.visible = false;
  health_obj6.visible = false;
  health_obj7.visible = false;
  health_obj8.visible = false;
  health_obj9.visible = false;
  health_obj10.visible = false;
    }

  if(health<=60){
  health_obj.visible = false;
  health_obj2.visible = false;
  health_obj3.visible = false;
  health_obj4.visible = false;
  health_obj5.visible = true;
  health_obj6.visible = false;
  health_obj7.visible = false;
  health_obj8.visible = false;
  health_obj9.visible = false;
  health_obj10.visible = false;
      }

      if(health<=50){
  health_obj.visible = false;
  health_obj2.visible = false;
  health_obj3.visible = false;
  health_obj4.visible = false;
  health_obj5.visible = false;
  health_obj6.visible = true;
  health_obj7.visible = false;
  health_obj8.visible = false;
  health_obj9.visible = false;
  health_obj10.visible = false;
        }

  if(health<=40){
          health_obj.visible = false;
          health_obj2.visible = false;
          health_obj3.visible = false;
          health_obj4.visible = false;
          health_obj5.visible = false;
          health_obj6.visible = false;
          health_obj7.visible = true;
          health_obj8.visible = false;
          health_obj9.visible = false;
          health_obj10.visible = false;
          }

          if(health<=30){
            health_obj.visible = false;
            health_obj2.visible = false;
            health_obj3.visible = false;
            health_obj4.visible = false;
            health_obj5.visible = false;
            health_obj6.visible = false;
            health_obj7.visible = false;
            health_obj8.visible = true;
            health_obj9.visible = false;
            health_obj10.visible = false;
            }

            if(health<=20){
              health_obj.visible = false;
              health_obj2.visible = false;
              health_obj3.visible = false;
              health_obj4.visible = false;
              health_obj5.visible = false;
              health_obj6.visible = false;
              health_obj7.visible = false;
              health_obj8.visible = false;
              health_obj9.visible = true;
              health_obj10.visible = false;
              }

              if(health<=10){
                health_obj.visible = false;
                health_obj2.visible = false;
                health_obj3.visible = false;
                health_obj4.visible = false;
                health_obj5.visible = false;
                health_obj6.visible = false;
                health_obj7.visible = false;
                health_obj8.visible = false;
                health_obj9.visible = false;
                health_obj10.visible = true;
                }

                if(health<=0){
                  health_obj.visible = false;
                  health_obj2.visible = false;
                  health_obj3.visible = false;
                  health_obj4.visible = false;
                  health_obj5.visible = false;
                  health_obj6.visible = false;
                  health_obj7.visible = false;
                  health_obj8.visible = false;
                  health_obj9.visible = false;
                  health_obj10.visible = false;
                  endState();
                }

                if(jin_a.y<-100){
                  gameState = 7
                  bricks_32.destroy();
                  coin_s.destroy();
                  heart.destroy();
                  treasure2.destroy();
                  health_obj.destroy();
                  health_obj2.destroy();
                  health_obj3.destroy();
                  health_obj4.destroy();
                  health_obj5.destroy();
                  health_obj6.destroy();
                  health_obj7.destroy();
                  health_obj8.destroy();
                  health_obj9.destroy();
                  health_obj10.destroy();
                jin_a.x = 40000;
                gameState = 7
                }

 
  jin_d.collide(brick_1);
  jin_d.collide(brick_2);
  jin_d.collide(brick_3);
  jin_d.collide(brick_4);
  jin_d.collide(brick_5);
  jin_d.collide(brick_6);
  jin_d.collide(brick_7);
  jin_d.collide(brick_8);
  jin_d.collide(brick_9);
  jin_d.collide(brick_10);
  jin_d.collide(brick_11);
  /*jin_d.collide(brick_3);
  jin_d.collide(brick_3);
  jin_d.collide(brick_3);*/
  jin_d.collide(invisible_gr);

  jin_a.collide(brick_1);
  jin_a.collide(brick_2);
  jin_a.collide(brick_3);
  jin_a.collide(brick_4);
  jin_a.collide(brick_5);
  jin_a.collide(brick_6);
  jin_a.collide(brick_7);
  jin_a.collide(brick_8);
  jin_a.collide(brick_9);
  jin_a.collide(brick_10);
  jin_a.collide(brick_11);
  jin_a.collide(invisible_gr);
  jin_a.collide(in1);
  jin_a.collide(bricks_32);

  jin_l.collide(brick_1);
  jin_l.collide(brick_2);
  jin_l.collide(brick_3);
  jin_l.collide(brick_4);
  jin_l.collide(brick_5);
  jin_l.collide(brick_6);
  jin_l.collide(brick_7);
  jin_l.collide(brick_8);
  jin_l.collide(brick_9);
  jin_l.collide(brick_10);
  jin_l.collide(brick_11);
  jin_l.collide(invisible_gr);

  jin_x.collide(brick_1);
  jin_x.collide(brick_2);
  jin_x.collide(brick_3);
  jin_x.collide(brick_4);
  jin_x.collide(brick_5);
  jin_x.collide(brick_6);
  jin_x.collide(brick_7);
  jin_x.collide(brick_8);
  jin_x.collide(brick_9);
  jin_x.collide(brick_10);
  jin_x.collide(brick_11);
  jin_x.collide(invisible_gr);

  jin_l.x = jin_a.x;
  jin_l.y = jin_a.y;
  jin_d.x = jin_a.x;
  jin_d.y = jin_a.y;
  jin_x.x = jin_a.x;
  jin_x.y = jin_a.y-45; 
  coin_s.x = jin_a.x+180;
  treasure2.x = jin_a.x-40
  bomb_r.x = bomb_.x;
  bomb_r.y = bomb_.y;
  bomb_1r.x = bomb_1.x;
  bomb_1r.y = bomb_1.y;
  bomb_2r.x = bomb_2.x;
  bomb_2r.y = bomb_2.y;
  bomb_3r.x = bomb_3.x;
  bomb_3r.y = bomb_3.y;
  bomb_4r.x = bomb_4.x;
  bomb_4r.y = bomb_4.y;
  mob_r.x = mob_.x;
  mob_r.y = mob_.y;
  mob_1r.x = mob_1.x;
  mob_1r.y = mob_1.y;
  mob_2r.x = mob_2.x;
  mob_2r.y = mob_2.y;
  
 
  health_obj.x = jin_a.x+550;
  health_obj2.x = jin_a.x+550;
  health_obj3.x = jin_a.x+550;
  health_obj4.x = jin_a.x+550;
  health_obj5.x = jin_a.x+550;
  health_obj6.x = jin_a.x+550;
  health_obj7.x = jin_a.x+550;
  health_obj8.x = jin_a.x+550;
  health_obj9.x = jin_a.x+550;
  health_obj10.x = jin_a.x+550;
  
  heart.x = jin_a.x+400;
  drawSprites();

  if(jin_a.isTouching(treasure)){
    treasure2.visible = true;
    treasure.destroy();
    gameState = 5
    
    }

  if(gameState === 0){
    strokeWeight(3)
    stroke("white")
    fill("black");
    textSize(50);
    
    text("The Lost Fortress", displayWidth-1580,displayHeight-730)
    }

  if(gameState === 1){
  textSize(30)
  textFont("Agency FB");
  fill("white");
  text("Welcome player this adventure will take you to a fortress which ... ę̴̛͓͒̅̐̈́͊̅̑̔̑̀̈́͆͒̑̆̈́̕͝r̶̦̩̜̰̘̈́̑̇̈́̾̈͝g̶̡̝̖͕̦̩̩͙̳͇̟̤̻̫̖̘͈̬̭̎̓̂f̴̲̤͇̺͕̱̖̘͍̣̊̿͆̈́̎͜͜͠v̸͙̪͇̤̲͛̓͝f̶̧̭̦̰̍̈́̎̌̋̓͋̍͐̓͋̓́̅̽͗̓̉̕͝b̷̠̤̙͍͕̠͖͚̹̗̫̬̜̕5̸̢̨̛͚͓̹̫̩͎͔͈̹́̅̿̏̿̾̈́̉̓̏̎g̶̛̺̜̟̝̣̰̻͉͎͓̖͎̙̗̰̲͎̘̹͎̱̿̎̓̎͑͝͠ͅͅr̷̡̛͓͇̝̙̲̱̘̪͎͍̣̀̐̈̅̑̈́͊̇̈́ͅͅ5̵̧̛̬̲̻͙̟̞͓̥̫̲͕̮̱̥͎̦̙̟͓̺͉̂͋̈͗̽̽͂̓̒͊̑̐̈́̈́̓̽͐̈̕̚͘̚͜͜͝͝ͅ4̵̡̡̢̧̘̥͍̖͔̫̩͖̬̰̻̙̙͕̖̰̠̅̄́̿͌͗͛͂̔͋̀̐̂̍̀̈́̀̓́̈́̌̕̕͝͝5̷̯͕̪͎͔̖͍̝̬͈̞̬̟̠̹͍̣̭̃g̴̺͙̺͂͌͆͆̉̔̏̆͆̿̆̓͂̂̈́͆̓̕͘͝͝w̵̭̼̟̥̭̮͕̻̬̩̞̗̓̒̈́͐̋̄͆̊́̄̃͋̈̚͜ͅͅġ̴̛̫̠͈̙̞̝̖̣̥̙͎͇̱̫̿̍̃͒͒̈́̍́̀̉͛̑̎͐̂̀̇̈́̒̈́͗͐͝w̵̨̡̡̢̡͍̞͕͕̼̤̝̤̪̱͙̖̻̣̼̘͍̐͑̈́̒̋̊̓̀̀͛͌͘͜͠ͅr̴͉̻̖̳̳̘͙̱̖̯̫͇̣̻̞̮̂̈́̍̓̆͐̍̈́́̌͝ͅ5̷̡̰̤̺̻̪͓̫̲̣͎̻̓̈͆́̆̍̀̽͆̎̃̊̀͐͆̚ģ̶̟̟̲̙̫̟̘̑̀͗̒͆̌͒̾v̶̨̤͓̟̳̼̦͉̯̫̤̦̜̼͍̫̹̹͈͊͐̔͑̑͋́͑̏͆͊͐͐͘̕͜͝ş̴̛͔̟̰̮̭̫͇͔̂͐̅̇͛͘͜f̶̨̹̦̘̞̘͈̦͚̫̳̫̝͊͆̔̍̒̌̊̀̏͑͐̊̇̾̈́̕v̶̡̛̝̹͔̟̯̳̹̖͖̖̹̙̅͛͆̿͂̍͊̿́̾́̅̓̉͑͛̃͝g̴̛̛̩̓͊̐͒̀̇̾͌͒̀̅͒͆́̈̊̇̕̚͝ř̶̹͓̞͈̰̦̞̗̫̊5̴̡̖̮̝͕̘̹̮̱̹͎̝͍͓͙̱͔͂̆͝ͅ4̶̻͎͍̦̩͖̮͚̟͗̑͑̃̓̇͊̈́͊̇̔̀̀͂̈̇̍́̕̚͝g̸̨̛̦͖͇̟̘̖͉̰͍̯̥̩̏̈́̆́̇̄̐̉̃̚͝ẅ̵̝̳̺̠͕͈̱̜̙̮̪͔̹̦͙̞̠́̅͂̃̏̈͑̃̍̈́̽͆̀̊́̆͛̐͐̚̕̕͝͝ͅr̴̨̫̖̯̥̱̰̻͕̤̭̮̻̞̪͎͔̹̞͇̃̓̔͌̊̉͗̄͑̍͑̄͋̈́̈́̈́̑͗̊͒̌̚ͅḡ̸̨̡̱̭̪̪̠͕͔̼͖̻͚͚͙̭͙̼̲̖̲͍͐̎͌͝͝͝f̶̨̲͓̘̙̠̙̫͈̤̲͍̦͚̐̄̂́̽͐̒̅̈́̀̐̐̔̇̋͊͋̒̌͘͘͠d̵̨̧̮̬͚̺̻͛̋̔͌̆̉͆̈́ḃ̸̘̜̦͕̞̺̝͍̞̱̲͠ģ̷̩̮̬̖͍̻̻̭̹͕̼̅̽̈́̌̀̔͒́͘͜͝͝", -10600, 350)
  }

  if(gameState === 2) {
    textFont("Georgia");
    fill("white")
    textSize(20)
    text("1) Hit the mistery box", jin_a.x-650,displayHeight-700);
    text("2) Collect coins to get hint for treasure", jin_a.x-650, displayHeight-670);
    text("3) Deafeat all the knights to enter the final battle", jin_a.x-650, displayHeight-640);
    textSize(30)
    text("Objectives :-", jin_a.x-650,displayHeight-730);
    text("Use arrow keys to move ", displayHeight-1400, displayHeight-400)
    textSize(70);
    text(": " + score, jin_a.x+230,displayHeight-720);
    
  } 

  if(gameState === 3){
    textFont("Georgia");
    fill("white")
    textSize(25);
    text("Press 'z' to attack", displayWidth+7850,displayHeight-720);
    text("Press 'z' to attack", displayWidth+9950,displayHeight-720);
    textSize(20)
    text("1) Hit the mistery box", jin_a.x-650,displayHeight-700);
    text("2) Collect coins to get hint for treasure", jin_a.x-650, displayHeight-670);
    text("3) Deafeat all the knights to enter the final battle", jin_a.x-650, displayHeight-640);
    textSize(30)
    text("Objectives :-", jin_a.x-650,displayHeight-730);
    textSize(70);
    text(": " + score, jin_a.x+230,displayHeight-720);
  }

  if(gameState === 5){
    textFont("Georgia");
fill("white");
textSize(40)
    text("Treasure Collected ! ", jin_a.x-650, displayHeight-660);
    textSize(70);
    text(": " + score, jin_a.x+230,displayHeight-720);
    }

    if(gameState === 6){
      textFont("Georgia");
  fill("white");
  textSize(40)
      text("Treasure Collected ! ", jin_a.x-650, displayHeight-660);
      textSize(70);
      text(": " + score, jin_a.x+230,displayHeight-720);
      }

      if(gameState === 7){
        game.stop();
        
        jin_a.destroy()
        textFont("Blackadder ITC");
    fill("white");
    textSize(150)
        text("You survived ", 39650, displayHeight-400);
        textSize(30)
        text("By :- Kartikey Das Shukla", 39320, displayHeight-175)
         text("Guide teacher :- Shrutika Nikalje", 39320, displayHeight-140)
        }
}

function startButton(){

  game.loop();
  home.stop();

  gameState = 2;

  bg_home.destroy();
  start_btn.destroy();
  bomb_r.visible = false;;
  bomb_1r.visible = false;
  bg2.visible = true;
  bg3.visible = true;
  bg4.visible = true;
  bg5.visible = true;
  bg6.visible = true;
  bg7.visible = true;
  bg8.visible = true;
  bg9.visible = true;
  bg10.visible = true;
  bg11.visible = true;
  bomb_.visible = true;
  bomb_1.visible = true;
  bomb_2.visible = true;
  bomb_3.visible = true;
  health_obj.visible = true;
  heart.visible = true;
  jin_a.visible = true;
  brick_1.visible = true;
  brick_2.visible = true;
  brick_3.visible = true;
  brick_4.visible = true;
  brick_5.visible = true;
  brick_6.visible = true;
  fireball.visible = true;
 
  fireball2.visible = true;
  fireball3.visible = true;
  fireball4.visible = true;
  fireball5.visible = true
  //spikes3.visible = true;
 // spikes5.visible = true;
  //spikes6.visible = true;
  //spikes7.visible = true;
  brick_7.visible = true;
  brick_8.visible = true;
  brick_9.visible = true;
  brick_10.visible = true;
  brick_11.visible = true;
  coin_s.visible = true;
  bg12.visible = true;
  knight.visible = true;
  bricksr_1.visible = true;
  bricksr_2.visible = true;

  bricks_1 = createSprite(displayWidth-1260, displayHeight-124,0,0);
  bricks_1.scale = 0.3;
  bricks_1.addImage("b_1_",bricks_1_Img);

  bricks_2 = createSprite(displayWidth-1050, displayHeight-124,0,0);
  bricks_2.scale = 0.3;
  bricks_2.addImage("b_2_",bricks_1_Img);

  bricks_3 = createSprite(displayWidth-840, displayHeight-124,0,0);
  bricks_3.scale = 0.3;
  bricks_3.addImage("b_3_",bricks_1_Img); 

  bricks_4 = createSprite(displayWidth-630, displayHeight-124,0,0);
  bricks_4.scale = 0.3;
  bricks_4.addImage("b_3_",bricks_1_Img); 

  bricks_5 = createSprite(displayWidth-420, displayHeight-124,0,0);
  bricks_5.scale = 0.3;
  bricks_5.addImage("b_3_",bricks_1_Img); 

  bricks_6 = createSprite(displayWidth-210, displayHeight-124,0,0);
  bricks_6.scale = 0.3;
  bricks_6.addImage("b_3_",bricks_1_Img); 

  bricks_7 = createSprite(displayWidth-0, displayHeight-124,0,0);
  bricks_7.scale = 0.3;
  bricks_7.addImage("b_3_",bricks_1_Img); 

  bricks_8 = createSprite(displayWidth+435, displayHeight-124,0,0);
  bricks_8.scale = 0.3;
  bricks_8.addImage("b_3_",bricks_1_Img); 

  bricks_9 = createSprite(displayWidth-1470, displayHeight-124,0,0);
  bricks_9.scale = 0.3;
  bricks_9.addImage("b_3_",bricks_1_Img);

  bricks_10 = createSprite(displayWidth+645, displayHeight-124,0,0);
  bricks_10.scale = 0.3;
  bricks_10.addImage("b_3_",bricks_1_Img);

  bricks_11 = createSprite(displayWidth+755, displayHeight-124,0,0);
  bricks_11.scale = 0.3;
  bricks_11.addImage("b_3_",bricks_1_Img);

  bricks_12 = createSprite(displayWidth+895, displayHeight-124,0,0);
  bricks_12.scale = 0.3;
  bricks_12.addImage("b_3_",bricks_1_Img);

  bricks_13 = createSprite(displayWidth+1900, displayHeight-124,0,0);
  bricks_13.scale = 0.3;
  bricks_13.addImage("b_3_",bricks_1_Img);

  bricks_14 = createSprite(displayWidth+2110, displayHeight-124,0,0);
  bricks_14.scale = 0.3;
  bricks_14.addImage("b_3_",bricks_1_Img);

  bricks_15 = createSprite(displayWidth+2320, displayHeight-124,0,0);
  bricks_15.scale = 0.3;
  bricks_15.addImage("b_3_",bricks_1_Img);

  bricks_16 = createSprite(displayWidth+2430, displayHeight-124,0,0);
  bricks_16.scale = 0.3;
  bricks_16.addImage("b_3_",bricks_1_Img);

  bricks_17 = createSprite(displayWidth+2640, displayHeight-124,0,0);
  bricks_17.scale = 0.3;
  bricks_17.addImage("b_3_",bricks_1_Img);

  bricks_18 = createSprite(displayWidth+2850, displayHeight-124,0,0);
  bricks_18.scale = 0.3;
  bricks_18.addImage("b_3_",bricks_1_Img);

  bricks_19 = createSprite(displayWidth+7900, displayHeight-124,0,0);
  bricks_19.scale = 0.3;
  bricks_19.addImage("b_3_",bricks_1_Img);

  bricks_20 = createSprite(displayWidth+8110, displayHeight-124,0,0);
  bricks_20.scale = 0.3;
  bricks_20.addImage("b_3_",bricks_1_Img);

  bricks_21 = createSprite(displayWidth+8320, displayHeight-124,0,0);
  bricks_21.scale = 0.3;
  bricks_21.addImage("b_3_",bricks_1_Img);

  bricks_22 = createSprite(displayWidth+8530, displayHeight-124,0,0);
  bricks_22.scale = 0.3;
  bricks_22.addImage("b_3_",bricks_1_Img);

  bricks_23 = createSprite(displayWidth+8950, displayHeight-124,0,0);
  bricks_23.scale = 0.3;
  bricks_23.addImage("b_3_",bricks_1_Img);

  bricks_24 = createSprite(displayWidth+9160, displayHeight-124,0,0);
  bricks_24.scale = 0.3;
  bricks_24.addImage("b_3_",bricks_1_Img);

  bricks_25 = createSprite(displayWidth+9370, displayHeight-124,0,0);
  bricks_25.scale = 0.3;
  bricks_25.addImage("b_3_",bricks_1_Img);

  bricks_26 = createSprite(displayWidth+9580, displayHeight-124,0,0);
  bricks_26.scale = 0.3;
  bricks_26.addImage("b_3_",bricks_1_Img);

  bricks_27 = createSprite(displayWidth+9790, displayHeight-124,0,0);
  bricks_27.scale = 0.3;
  bricks_27.addImage("b_3_",bricks_1_Img);

  bricks_28 = createSprite(displayWidth+10210, displayHeight-124,0,0);
  bricks_28.scale = 0.3;
  bricks_28.addImage("b_3_",bricks_1_Img);

  bricks_29 = createSprite(displayWidth+10420, displayHeight-124,0,0);
  bricks_29.scale = 0.3;
  bricks_29.addImage("b_3_",bricks_1_Img);

  bricks_30 = createSprite(displayWidth+10630, displayHeight-124,0,0);
  bricks_30.scale = 0.3;
  bricks_30.addImage("b_3_",bricks_1_Img);

  bricks_31 = createSprite(displayWidth+10840, displayHeight-124,0,0);
  bricks_31.scale = 0.3;
  bricks_31.addImage("b_3_",bricks_1_Img);

  
//storm_so.play();

/*
ob_1 = createSprite(0, 50,0,0);
ob_1.velocityX = +9.5;
//ob_1.visible = false;

ob_2 = createSprite(1365, 500,2,1000)
//ob_2.visible = false;

storm_ = createSprite(displayWidth-670, displayHeight-440, 10,10);
storm_.scale = 2.3
storm_.addAnimation("st_", storm_Img);

if(ob_1.isTouching(ob_2)){
  storm_.destroy();
  }

 */
}

function endState(){
gameState = 4;
game.stop();
home.stop();

jin_a.x = 20000;
jin_a.destroy();
jin_l.destroy();
jin_d.destroy();
jin_x.destroy();
coin_s.destroy();
health_obj.destroy();
heart.destroy();
jin_a.x = 20000;
textSize(50);
fill("White")
stroke("Black")
strokeWeight(2)
text("Game Over.. Reload the page to try again ", 19550, 350);
}
