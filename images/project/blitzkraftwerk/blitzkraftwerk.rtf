{\rtf1\ansi\ansicpg1252\cocoartf1671
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 ArrayList<ArcLight> arcsLight;\
ArrayList<ArcRain> arcsRain;\
ArrayList<ArcWind> arcsWind;\
ArrayList<ArcSun> arcsSun;\
Table lightning;\
Table rain;\
Table wind;\
Table sun;\
boolean anim;\
boolean animRain;\
boolean animWind;\
boolean animSun;\
int randomChoose;\
int randomChoose180;\
int randomChoose2;\
int counterLight =0;\
int counterSun =0;\
int counterRain =0;\
int counterWind =0;\
float randomAngle;\
float inter = random(100,2000);\
int previousMillis = 0;\
boolean state, pstate;\
\
void setup()\{\
  //size(850,850,P3D);\
  fullScreen(P3D);\
  strokeWeight(9.5);\
  //strokeCap(SQUARE);\
  //blendMode(REPLACE);\
  smooth();\
  noFill();\
  lightning = loadTable("lightning.csv", "header");\
  rain = loadTable("rain.csv", "header");\
  wind = loadTable("wind.csv", "header");\
  sun = loadTable("sun.csv", "header");\
  arcsLight = new ArrayList<ArcLight>();\
  arcsRain = new ArrayList<ArcRain>();\
  arcsWind = new ArrayList<ArcWind>();\
  arcsSun = new ArrayList<ArcSun>();\
\}\
\
void draw()\{\
  background(0);\
  \
  if(keyPressed)\{\
  anim = true;\
\}\
state = false;\
  state = keyPressed;\
  if(state != pstate)\
  if(arcsRain.size()==0 && arcsWind.size()==0 && arcsSun.size()==0)\{\
  randomChoose2 = int(random(0,11));\
  if(randomChoose2 > 5)\{\
  randomChoose180 = randomChoose2-6;\
  \}\
  else\{\
    randomChoose180 = randomChoose2+6;\
  \}\
  pstate = state;\
  \}\
  \
  if (millis() - previousMillis >= inter) \{\
    randomChoose = int(random(0,11));\
    previousMillis = millis();\
    for(int i=0;i<arcsLight.size();i++)\{\
    arcsLight.get(i).negativeIncrement = 0.1;\
    \}\
    drawArcLight(randomChoose,0.5,0);\
    inter = random(100,2000);\
  \}\
  \
  for(int i=0;i<arcsLight.size();i++)\{\
    if(arcsLight.get(i).LightReset())\{\
    counterLight++;\
    \}\
  \}\
   for(int i= counterLight-1; i>=0;i--)\{\
    arcsLight.remove(i);\
    counterLight=0;\
  \}\
  \
  if(arcsRain.size()<1 && animRain)\{\
  drawArcRain(randomChoose2);\
  drawArcRain(randomChoose180);\
  \}\
  \
  for(int i=0;i<arcsRain.size();i++)\{\
    if(!animRain && arcsRain.get(i).RainReset())\{\
    counterRain++;\
    \}\
  \}\
  if(counterRain >= arcsRain.size())\{\
      arcsRain.clear();\
      counterRain=0;\
  \}\
  \
    if(arcsWind.size()<1 && animWind)\{\
  drawArcWind(randomChoose2);\
  drawArcWind(randomChoose180);\
  \}\
  for(int i=0;i<arcsWind.size();i++)\{\
    if(!animWind && arcsWind.get(i).WindReset())\{\
    counterWind++;\
    \}\
  \}\
  if(counterWind >= arcsWind.size())\{\
      arcsWind.clear();\
      counterWind=0;\
  \}\
    if(arcsSun.size()<1 && animSun)\{\
  drawArcSun(randomChoose2);\
  drawArcSun(randomChoose180);\
  \}\
  for(int i=0;i<arcsSun.size();i++)\{\
    if(!animSun && arcsSun.get(i).SunReset())\{\
    counterSun++;\
    \}\
  \}\
  if(counterSun >= arcsSun.size())\{\
      arcsSun.clear();\
      counterSun=0;\
  \}\
  \
  for (int i = 0; i<arcsLight.size(); i++) \{\
  stroke(255,100);\
    ArcLight tempArc = arcsLight.get(i);\
    tempArc.display();\
  \}\
    for (int i = 0; i<arcsRain.size(); i++) \{\
  stroke(0,255,255,150);\
    ArcRain tempArc = arcsRain.get(i);\
    tempArc.display();\
  \}\
    for (int i = 0; i<arcsWind.size(); i++) \{\
  stroke(255,0,255,125);\
    ArcWind tempArc = arcsWind.get(i);\
    tempArc.display();\
  \}\
      for (int i = 0; i<arcsSun.size(); i++) \{\
  stroke(255,255,0,125);\
    ArcSun tempArc = arcsSun.get(i);\
    tempArc.display();\
  \}\
  //println(animRain, animWind, animSun);\
  //println(arcsRain.size(), randomChoose);\
  //println(frameRate);\
  //saveFrame("line-######.png");\
\}\
\
void drawArcLight(int column,float speedforw, float speedback)\{\
  for (int i = 0; i<lightning.getRowCount(); i++) \{\
   int diameter = lightning.getInt(i, column*3);\
   float startPoint = radians(270+column*30);\
   float endPoint = lightning.getInt(i, (column*3)+2);\
   endPoint = radians(endPoint)+column*radians(30);\
   if (diameter != 0 || endPoint != column*radians(30)) \{\
   arcsLight.add(new ArcLight(150+diameter*19, startPoint, endPoint, speedforw, speedback));\
\}\
//println(endPoint);\
  \}\
\}\
\
void drawArcRain(int column)\{\
  for(int i=0; i<rain.getRowCount();i++)\{\
   int diameter = rain.getInt(i, column*3);\
   float frequenz = rain.getFloat(i, (column*3)+2);\
   float startPoint = radians(270+column*30);\
   if (diameter != 0 || !Float.isNaN(frequenz)) \{\
      arcsRain.add(new ArcRain(155+diameter*19, startPoint, startPoint+radians(360), frequenz, 0.1));\
    \}\
  \}\
\}\
\
void drawArcWind(int column)\{\
  for(int i=0; i<wind.getRowCount();i++)\{\
   int diameter = wind.getInt(i, column*3);\
   float frequenz = wind.getFloat(i, (column*3)+2);\
   float startPoint = radians(270+column*30);\
   if (diameter != 0 || !Float.isNaN(frequenz)) \{\
      arcsWind.add(new ArcWind(160+diameter*19, startPoint, startPoint+radians(360), frequenz, 0.1));\
    \}\
  \}\
\}\
\
void drawArcSun(int column)\{\
  for(int i=0; i<sun.getRowCount();i++)\{\
   int diameter = sun.getInt(i, column*3);\
   float frequenz = sun.getFloat(i, (column*3)+2);\
   float startPoint = radians(270+column*30);\
   if (diameter != 0 || !Float.isNaN(frequenz)) \{\
      arcsSun.add(new ArcSun(165+diameter*19, startPoint, startPoint+radians(360), frequenz, 0.1));\
    \}\
  \}\
\}\
\
void keyPressed()\{\
  if (key =='q')\{\
    animRain = true;\
    anim = true;\
  \}\
  if (key =='w')\{\
  animWind = true;\
  anim = true;\
  \}\
  if (key =='e')\{\
    animSun = true;\
    anim = true;\
  \}\
\}\
void keyReleased()\{\
  if (key =='q')\{\
    animRain = false;\
    anim = false;\
  \}\
  if (key =='w')\{\
    animWind = false;\
    anim = false;\
  \}\
  if (key =='e')\{\
    animSun = false;\
    anim = false;\
  \}\
\}\
\
class ArcLight\{\
  float diameter;\
  float startPoint;\
  float endPoint;\
  float end;\
  float positiveIncrement;\
  float negativeIncrement;\
  boolean direction;\
  boolean trigger;\
  \
  ArcLight(float diameter, float startPoint, float endPoint, float positiveIncrement, float negativeIncrement)\{\
    this.diameter = diameter;\
    this.startPoint = startPoint;\
    this.endPoint = endPoint;\
    this.positiveIncrement = positiveIncrement;\
    this.negativeIncrement = negativeIncrement;\
    direction = false;\
    trigger = false;\
    end = startPoint+0.001;\
  \}\
  \
  void display()\{\
    arc (width/2, height/2, diameter, diameter, startPoint, end);\
    if(end < startPoint)\{\
      direction = false;\
    \}\
        if (end > endPoint) \{\
      direction = true;\
      positiveIncrement = 0;\
  \
  \}\
        if(!direction)\{\
    end+=positiveIncrement;\
    \}\
      if(direction)\{\
    end-=negativeIncrement;\
  \}\
  \}\
boolean LightReset()\{\
  if(end > startPoint)\{\
    return false;\
  \}\
  else if(!trigger)\{\
    trigger = true;\
    return true;\
  \}\
    else\{\
      return false;\
    \}\
\}\
\
boolean Delete()\{\
  if(negativeIncrement >0)\{\
    return true;\
  \}\
    else\{\
      return false;\
    \}\
\}\
\}\
\
class ArcRain\{\
  float diameter;\
  float startPoint;\
  float endPoint;\
  float end;\
  float positiveIncrement;\
  float negativeIncrement;\
  boolean direction;\
  boolean trigger;\
  \
  ArcRain(float diameter, float startPoint, float endPoint, float positiveIncrement, float negativeIncrement)\{\
    this.diameter = diameter;\
    this.startPoint = startPoint;\
    this.endPoint = endPoint;\
    this.positiveIncrement = positiveIncrement;\
    this.negativeIncrement = negativeIncrement;\
    direction = false;\
    trigger = false;\
    end = startPoint;\
  \}\
  \
  void display()\{\
    arc (width/2, height/2, diameter, diameter, startPoint, end);\
    if(end < startPoint)\{\
      direction = false;\
    \}\
        if (end > endPoint) \{\
      direction = true;\
  \
  \}\
        if(!direction && animRain)\{\
    end+=positiveIncrement;\
    \}\
      if(direction)\{\
    end-=negativeIncrement;\
  \}\
  if(!animRain && end > startPoint)\{\
    end-=negativeIncrement;\
\}\
\}\
\
boolean RainReset()\{\
  if(end > startPoint)\{\
    return false;\
  \}\
  else if(!trigger)\{\
    trigger = true;\
    return true;\
  \}\
    else\{\
      return false;\
    \}\
\}\
\}\
\
class ArcSun\{\
  float diameter;\
  float startPoint;\
  float endPoint;\
  float end;\
  float positiveIncrement;\
  float negativeIncrement;\
  boolean direction;\
  boolean trigger;\
  \
  ArcSun(float diameter, float startPoint, float endPoint, float positiveIncrement, float negativeIncrement)\{\
    this.diameter = diameter;\
    this.startPoint = startPoint;\
    this.endPoint = endPoint;\
    this.positiveIncrement = positiveIncrement;\
    this.negativeIncrement = negativeIncrement;\
    direction = false;\
    trigger = false;\
    end = startPoint;\
  \}\
  \
  void display()\{\
    arc (width/2, height/2, diameter, diameter, startPoint, end);\
    if(end < startPoint)\{\
      direction = false;\
    \}\
        if (end > endPoint) \{\
      direction = true;\
  \
  \}\
        if(!direction && animSun)\{\
    end+=positiveIncrement;\
    \}\
      if(direction)\{\
    end-=negativeIncrement;\
  \}\
  if(!animSun && end > startPoint)\{\
    end-=negativeIncrement;\
\}\
\}\
\
boolean SunReset()\{\
  if(end > startPoint)\{\
    return false;\
  \}\
  else if(!trigger)\{\
    trigger = true;\
    return true;\
  \}\
    else\{\
      return false;\
    \}\
\}\
\}\
\
class ArcWind\{\
  float diameter;\
  float startPoint;\
  float endPoint;\
  float end;\
  float positiveIncrement;\
  float negativeIncrement;\
  boolean direction;\
  boolean trigger;\
  \
  ArcWind(float diameter, float startPoint, float endPoint, float positiveIncrement, float negativeIncrement)\{\
    this.diameter = diameter;\
    this.startPoint = startPoint;\
    this.endPoint = endPoint;\
    this.positiveIncrement = positiveIncrement;\
    this.negativeIncrement = negativeIncrement;\
    direction = false;\
    trigger = false;\
    end = startPoint;\
  \}\
  \
  void display()\{\
    arc (width/2, height/2, diameter, diameter, startPoint, end);\
    if(end < startPoint)\{\
      direction = false;\
    \}\
        if (end > endPoint) \{\
      direction = true;\
  \
  \}\
        if(!direction && animWind)\{\
    end+=positiveIncrement;\
    \}\
      if(direction)\{\
    end-=negativeIncrement;\
  \}\
  if(!animWind && end > startPoint)\{\
    end-=negativeIncrement;\
\}\
\}\
boolean WindReset()\{\
  if(end > startPoint)\{\
    return false;\
  \}\
  else if(!trigger)\{\
    trigger = true;\
    return true;\
  \}\
    else\{\
      return false;\
    \}\
\}\
\}}