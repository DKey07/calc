﻿// JobBOBJ --> Stat bonuses from jobLv
JobBOBJ=new Array(); for(i=0;i<=45;i++) JobBOBJ[i]=new Array();
JobBOBJ=[
  ["n"]//0-novice
 ,[2,0,6,2,10,4,14,0,18,2,22,4,26,5,30,1,33,0,36,4,38,2,40,0,42,2,44,5,46,1,47,0,49,0,50,0,"n"]//1-swordman
 ,[2,1,6,0,10,4,14,2,18,3,22,4,26,5,30,0,33,1,36,1,38,0,40,5,42,4,44,2,46,5,47,0,49,4,50,1,"n"]//2-thief
 ,[2,5,6,2,10,3,14,4,18,5,22,1,26,0,30,2,33,3,36,4,38,5,40,1,42,0,44,2,46,3,47,4,49,0,50,5,"n"]//3-acolyte
 ,[2,4,6,0,10,3,14,4,18,4,22,5,26,1,30,4,33,1,36,4,38,0,40,0,42,4,44,5,46,2,47,3,49,1,50,4,"n"]//4-archer
 ,[2,3,6,4,10,4,14,3,18,1,22,3,26,1,30,5,33,3,36,4,38,3,40,1,42,5,44,3,46,3,47,1,49,5,50,3,"n"]//5-magician
 ,[2,2,6,4,10,0,14,4,18,2,22,0,26,3,30,2,33,1,36,5,38,4,40,0,42,4,44,0,46,5,47,2,49,0,50,4,"n"]//6-merchant
 ,[1,2,3,2,4,0,5,5,8,2,10,0,11,4,12,2,13,1,15,0,17,2,18,2,19,4,20,5,21,0,23,2,27,0,28,5,29,2,31,4,33,0,36,2,37,5,38,1,40,4,43,2,46,0,47,0,48,4,49,4,"n"]//7-knight
 ,[1,1,2,1,3,1,4,3,6,2,8,2,9,4,11,0,14,3,15,1,16,1,17,1,18,1,19,1,20,1,21,1,24,4,25,0,27,0,30,4,31,4,32,0,38,3,40,4,41,4,42,3,45,0,46,4,48,0,50,4,"n"]//8-assassin
 ,[1,5,3,5,4,0,6,1,7,2,8,3,9,3,10,5,11,0,14,2,16,4,17,0,20,4,21,5,22,3,25,4,27,0,29,1,31,5,32,4,34,2,35,0,36,2,37,1,39,5,42,3,43,3,45,2,48,1,50,5,"n"]//9-priest
 ,[1,4,3,3,4,4,5,0,7,5,8,4,10,0,11,0,12,1,14,4,15,5,17,2,19,1,20,1,21,4,23,2,27,4,29,5,31,1,33,4,34,3,38,4,39,1,41,3,42,5,43,4,44,0,46,3,47,1,49,4,"n"]//10-hunter
 ,[1,3,2,4,4,3,5,4,6,1,9,3,10,1,12,0,13,4,15,5,18,3,22,3,24,1,26,4,29,3,31,3,32,4,33,3,34,1,36,5,38,2,39,4,40,3,41,1,43,1,45,3,46,1,47,1,48,3,50,3,"n"]//11-wizard
 ,[1,4,3,0,4,4,5,4,7,2,8,0,9,4,11,5,12,4,13,2,16,0,19,4,20,2,21,3,23,0,26,4,28,4,29,1,31,0,32,2,34,3,36,4,37,2,38,1,39,4,40,4,44,0,46,5,47,4,49,2,"n"]//12-blacksmith
 ,[1,5,2,5,3,5,4,5,5,5,7,0,9,3,11,0,12,2,14,4,15,2,17,0,20,3,21,3,22,2,23,0,25,0,28,4,30,1,32,0,34,4,35,3,36,1,38,3,40,2,41,2,44,3,46,2,48,0,50,2,"n"]//13-crusader
 ,[1,1,2,2,3,4,5,0,6,2,7,1,9,2,11,4,14,2,15,2,16,1,18,4,20,4,23,1,25,0,26,2,27,0,29,1,30,0,33,4,34,4,36,0,38,3,39,1,42,0,43,3,45,1,47,3,48,3,50,4,"n"]//14-rogue
 ,[1,0,2,0,4,4,6,1,7,2,10,1,12,0,13,0,14,5,16,3,18,1,20,2,21,1,22,4,23,1,25,2,26,0,27,0,30,4,32,5,33,2,35,1,38,3,40,5,41,2,43,4,44,1,46,2,49,0,50,0,"n"]//15-monk
 ,[1,4,2,1,3,0,5,3,6,5,7,4,9,5,10,1,11,1,13,3,15,4,16,4,17,2,19,4,20,5,21,3,24,1,28,0,30,1,32,4,33,2,35,1,38,4,40,3,41,5,43,2,46,4,47,3,48,1,50,4,"n"]//16-bard
 ,[1,5,2,1,3,0,5,3,6,4,7,5,9,4,10,1,11,1,13,3,15,5,16,4,17,2,19,5,20,4,21,3,24,1,28,0,30,1,32,5,33,2,35,1,38,5,40,3,41,4,43,2,46,5,47,3,48,1,50,5,"n"]//17-dancer
 ,[1,3,3,1,4,2,6,1,8,3,11,2,13,1,15,3,17,5,18,2,20,4,22,1,24,3,25,4,27,4,30,3,32,4,33,1,35,5,37,3,38,3,39,4,40,5,42,0,44,0,45,3,46,0,47,0,48,0,50,3,"n"]//18-sage
 ,[1,3,2,4,3,4,6,0,8,4,9,3,11,1,13,4,14,1,15,0,17,3,19,4,20,2,21,4,23,3,24,3,25,4,26,0,28,4,29,3,31,2,32,4,34,0,36,2,38,3,40,1,43,0,45,1,49,1,50,1,"n"]//19-alchemist
 ,[1,0,3,1,5,2,7,3,9,4,11,5,13,0,15,1,17,2,19,3,21,4,23,5,25,0,27,1,29,2,31,3,33,4,35,5,37,0,39,1,41,2,43,3,45,4,47,5,49,0,52,1,56,2,60,3,64,4,68,5,"n"]//20-super novice
 ,[1,0,2,1,2,5,4,4,5,2,6,0,7,0,8,0,10,1,11,4,12,2,13,3,14,1,16,4,17,1,19,0,22,2,25,0,27,5,28,4,29,2,31,4,33,0,36,4,37,1,38,5,40,2,41,0,43,2,44,4,46,0,47,0,49,4,52,0,53,1,56,0,57,0,58,2,60,1,62,4,64,0,65,1,67,3,68,2,70,0,"n"]//21-lord knight
 ,[1,1,2,0,3,5,4,1,6,1,7,0,8,5,9,2,10,4,12,0,15,1,16,5,18,5,20,1,21,0,23,4,24,1,25,1,26,5,29,0,31,1,32,1,33,1,34,5,37,4,38,0,39,4,42,1,43,4,46,1,47,2,48,5,50,0,51,1,53,4,54,0,56,1,57,4,61,4,62,1,64,4,65,5,66,0,69,2,70,4,"n"]//22-assassin cross
 ,[1,3,3,1,4,2,5,0,7,3,8,1,11,3,12,0,13,4,16,4,19,1,20,3,21,0,22,2,23,3,24,3,26,4,28,4,29,1,30,2,31,0,34,3,37,4,38,0,40,5,42,1,43,4,45,0,46,4,47,3,49,5,50,2,51,2,55,1,56,4,57,3,58,2,60,0,61,3,62,4,65,1,66,3,67,2,68,1,70,3,"n"]//23-high priest
 ,[1,4,2,1,3,4,4,4,5,3,6,1,8,0,10,1,11,1,12,2,14,5,16,4,17,4,20,3,21,1,22,4,24,0,25,5,26,4,28,1,30,4,31,5,32,2,33,1,35,4,36,5,38,1,40,4,42,3,43,1,45,0,46,4,48,1,50,5,51,4,54,3,55,2,57,5,58,1,60,4,61,0,62,5,65,3,69,4,70,5,"n"]//24-sniper
 ,[1,3,2,4,3,2,5,3,8,1,9,4,10,3,12,5,14,3,17,4,18,1,19,3,20,0,22,4,23,4,24,3,26,1,28,3,29,2,31,4,32,3,34,1,37,3,38,3,39,3,40,0,41,5,43,4,46,3,47,2,49,3,50,1,53,2,55,3,56,1,57,5,59,3,60,0,61,4,62,3,65,1,66,2,67,4,69,1,70,3,"n"]//25-high wizard
 ,[1,4,2,0,3,0,4,3,6,4,7,1,8,5,9,2,12,4,13,2,15,3,16,5,17,0,19,1,20,1,22,3,23,4,26,0,28,5,29,2,31,1,32,4,33,0,34,3,36,1,38,4,39,5,41,4,44,5,45,5,47,4,48,2,50,3,52,0,55,4,56,4,58,1,60,2,61,3,62,4,64,1,65,2,66,5,67,5,70,4,"n"]//26-whitesmith
 ,[1,2,2,0,3,1,6,4,7,3,8,1,9,2,10,0,12,4,14,3,15,2,16,1,17,4,18,0,21,2,23,4,24,1,26,0,29,3,30,2,33,0,36,4,37,1,39,5,40,0,42,2,43,3,45,4,48,0,49,2,52,1,53,2,54,3,55,0,57,4,59,5,60,1,61,3,63,2,64,0,65,3,67,5,68,4,69,2,70,1,"n"]//27-paladin
 ,[1,0,2,1,4,5,5,3,6,2,9,1,10,4,11,0,12,1,15,2,16,4,17,4,20,5,21,1,22,0,24,5,26,4,27,1,29,4,31,5,32,0,34,1,37,4,38,4,41,1,42,2,43,0,44,3,45,1,47,0,49,4,50,5,52,4,53,0,56,4,57,3,58,1,59,5,60,4,62,0,63,2,64,1,66,4,67,0,70,1,"n"]//28-stalker
 ,[1,0,2,3,3,2,4,1,6,4,9,0,11,3,12,1,13,5,15,2,16,4,17,0,20,1,21,1,22,4,24,2,27,0,29,1,30,4,33,3,34,5,37,0,38,4,39,2,42,2,44,4,45,1,46,5,47,3,48,0,50,4,52,1,53,4,56,3,58,2,59,0,60,4,62,1,64,3,65,0,66,0,67,4,68,2,69,3,70,1,"n"]//29-champion
 ,[1,1,2,4,4,1,5,0,7,4,8,3,9,1,10,0,11,5,13,1,15,4,16,2,18,5,19,0,21,3,23,4,24,1,26,5,28,3,30,4,32,1,33,0,36,1,39,4,40,4,41,3,43,4,45,0,47,5,49,1,50,4,53,1,54,0,56,4,57,4,58,1,59,2,61,4,62,0,63,4,65,1,66,4,68,1,69,3,70,0,"n"]//30-clown
 ,[1,4,2,0,4,1,6,0,8,3,9,4,11,1,12,1,13,1,14,4,15,4,17,2,18,4,20,0,22,4,23,4,25,1,26,3,27,5,28,4,31,1,33,4,35,0,38,1,39,3,41,4,43,4,45,4,47,1,49,4,50,0,52,1,53,3,54,2,57,1,58,4,60,3,61,1,62,1,63,5,65,4,66,0,67,1,69,4,70,1,"n"]//31-gypsy
 ,[1,3,2,3,3,1,5,0,7,2,8,4,11,3,12,1,14,3,16,4,18,0,20,4,21,5,22,3,23,1,24,2,26,4,27,0,29,4,30,3,32,1,34,4,36,0,37,4,38,3,39,2,41,3,43,1,45,0,46,4,49,3,50,1,52,4,54,1,55,4,56,0,57,3,60,1,62,4,63,2,64,3,66,5,68,3,69,1,70,3,"n"]//32-professor
 ,[1,4,2,5,5,1,6,0,7,3,8,5,9,2,10,4,13,3,15,4,18,1,20,5,22,3,23,4,25,5,27,1,30,3,31,0,33,2,34,5,35,4,38,1,41,4,42,4,43,4,45,5,46,3,47,4,49,4,51,5,52,5,53,0,54,1,56,4,57,4,59,3,60,5,61,2,63,4,64,5,66,0,67,1,68,3,69,5,70,4,"n"]//33-creator
 ,[2,5,3,4,5,1,6,2,8,0,9,3,"n"]//34-high novice
 ,["n"]//35-high swordman
 ,["n"]//36-high thief
 ,["n"]//37-high acolyte
 ,["n"]//38-high archer
 ,["n"]//39-high magician
 ,["n"]//40-high merchant
 ,[1,0,2,0,3,0,4,0,5,0,6,0,10,4,11,4,12,4,13,4,14,4,15,4,20,1,21,1,22,1,23,1,24,1,25,1,"n"]//41-taekwon
 ,[1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,20,4,21,4,22,4,23,4,24,4,25,4,39,1,40,1,41,1,42,1,43,1,44,1,45,1,46,1,47,1,48,1,49,1,50,1,"n"]//42-star gladiator
 ,[1,3,2,3,3,3,4,3,5,3,6,3,7,3,8,3,9,3,10,3,11,3,12,3,20,2,21,2,22,2,23,2,24,2,25,2,39,4,40,4,41,4,42,4,43,4,44,4,45,4,46,4,47,4,48,4,49,4,50,4,"n"]//43-soul linker
 ,[1,1,2,1,10,4,11,1,20,3,21,1,22,4,29,3,30,5,31,1,32,4,40,5,41,1,42,3,43,4,50,3,51,1,52,5,53,4,59,0,60,2,61,1,62,3,63,4,64,5,"n"]//44-ninja
 ,[1,4,2,5,4,5,6,4,11,4,12,5,17,4,21,5,25,4,31,5,32,0,35,4,41,0,45,4,50,0,51,5,52,3,55,4,59,1,60,2,61,3,62,4,63,5,64,0,"n"]//45-gunslinger
//[{Lv,Stat,}"n"]
];

// zokusei --> Element weakness list
zokusei=new Array();
// Neutral
zokusei[1]=new Array(1,1,1,1,1,1,1,1,0.25,1);
zokusei[2]=new Array(1,1,1,1,1,1,1,1,0,1);
zokusei[3]=new Array(1,1,1,1,1,1,1,1,0,1);
zokusei[4]=new Array(1,1,1,1,1,1,1,1,0,1);
// Water
zokusei[11]=new Array(1,0.25,1,0.5,1.75,1,1,1,1,1);
zokusei[12]=new Array(1,0,1,0.25,1.75,0.75,1,1,0.75,0.75);
zokusei[13]=new Array(1,-0.25,1,0,2,0.5,1,1,0.5,0.5);
zokusei[14]=new Array(1,-0.5,1,0,2,0.25,0.75,0.75,0.25,0.25);
// Earth
zokusei[21]=new Array(1,1,1,1.5,0.5,1.25,1,1,1,1);
zokusei[22]=new Array(1,1,0.5,1.75,0.25,1.25,1,1,0.75,0.75);
zokusei[23]=new Array(1,1,0,2,0,1,1,1,0.5,0.5);
zokusei[24]=new Array(1,1,-0.25,2,0,0.75,0.75,0.75,0.25,0.25);
// Fire
zokusei[31]=new Array(1,1.5,0.5,0.25,1,1.25,1,1,1,1);
zokusei[32]=new Array(1,1.75,0.25,0,1,1.25,1,1,0.75,0.75);
zokusei[33]=new Array(1,2,0,-0.25,1,1,1,1,0.5,0.5);
zokusei[34]=new Array(1,2,0,-0.5,1,0.75,0.75,0.75,0.25,0.25);
// Wind
zokusei[41]=new Array(1,0.5,1.5,1,0.25,1.25,1,1,1,1);
zokusei[42]=new Array(1,0.25,1.75,1,0,1.25,1,1,0.75,0.75);
zokusei[43]=new Array(1,0,2,1,-0.25,1,1,1,0.5,0.5);
zokusei[44]=new Array(1,0,2,1,-0.5,0.75,0.75,0.75,0.25,0.25);
// Poison
zokusei[51]=new Array(1,1,1,1,1,0,1,0.5,1,0.5);
zokusei[52]=new Array(1,1,1,1,1,0,1,0.25,0.75,0.25);
zokusei[53]=new Array(1,1,1,1,1,0,1.25,0,0.5,0);
zokusei[54]=new Array(1,0.75,0.75,0.75,0.75,0,1.25,-0.25,0.25,-0.25);
// Holy
zokusei[61]=new Array(1,0.75,0.75,0.75,0.75,0.75,0,1.25,0.75,1);
zokusei[62]=new Array(1,0.5,0.5,0.5,0.5,0.5,-0.25,1.5,0.5,1.25);
zokusei[63]=new Array(1,0.25,0.25,0.25,0.25,0.25,-0.5,1.75,0.25,1.5);
zokusei[64]=new Array(1,0,0,0,0,0,-1,2,0,1.75);
// Shadow
zokusei[71]=new Array(1,1,1,1,1,0.5,1.25,0,0.75,0);
zokusei[72]=new Array(1,0.75,0.75,0.75,0.75,0.25,1.5,-0.25,0.5,0);
zokusei[73]=new Array(1,0.5,0.5,0.5,0.5,0,1.75,-0.5,0.25,0);
zokusei[74]=new Array(1,0.25,0.25,0.25,0.25,-0.25,2,-1,0,0);
// Ghost
zokusei[81]=new Array(0.25,1,1,1,1,1,1,1,1.25,1);
zokusei[82]=new Array(0.25,1,1,1,1,0.75,1,1,1.50,1);
zokusei[83]=new Array(0,1,1,1,1,0.5,1,1,1.75,1);
zokusei[84]=new Array(0,1,1,1,1,0.25,1,1,2,1);
// Undead
zokusei[91]=new Array(1,1,1,1.25,1,-0.25,1.5,-0.25,1,0);
zokusei[92]=new Array(1,1,1,1.5,1,-0.5,1.75,-0.5,1.25,0);
zokusei[93]=new Array(1,1.25,0.75,1.75,1,-0.75,2,-0.75,1.5,0);
zokusei[94]=new Array(1,1.5,0.5,2,1,-1,2,-1,1.75,0);

// JobASPD --> Attack speed base modifier
JobASPD=[
//FIST,DAG ,1hSW,2hSW,1hSP,2hSP,AXE ,2hAXE,MACE,ROD ,BOW,KATAR,BOOK,KNU ,INSTR,WHIP,SHUR,GUN,RIFLE,SHOTG,GATL,GREN
  [1  ,1.3 ,1.4 ,0   ,0   ,0   ,1.6 ,0    ,1.4 ,1.3 ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//0-novice
 ,[0.8,1   ,1.1 ,1.2 ,1.3 ,1.4 ,1.4 ,1.5  ,1.3 ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//1-swordman
 ,[0.8,1   ,1.3 ,0   ,0   ,0   ,1.6 ,0    ,0   ,0   ,1.6,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//2-thief
 ,[0.8,0   ,0   ,0   ,0   ,0   ,0   ,0    ,1.2 ,1.2 ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//3-acolyte
 ,[0.8,1.2 ,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,1.4,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//4-archer
 ,[1  ,1.2 ,0   ,0   ,0   ,0   ,0   ,0    ,0   ,1.4 ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//5-magician
 ,[0.8,1.2 ,1.4 ,0   ,0   ,0   ,1.4 ,1.5  ,1.4 ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//6-merchant
 ,[0.8,1   ,1   ,1.1 ,1.2 ,1.2 ,1.4 ,1.4  ,1.3 ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//7-knight
 ,[0.8,1   ,1.3 ,0   ,0   ,0   ,1.6 ,0    ,0   ,0   ,0  ,1    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//8-assassin
 ,[0.8,0   ,0   ,0   ,0   ,0   ,0   ,0    ,1.2 ,1.2 ,0  ,0    ,1.2 ,0.95,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//9-priest
 ,[0.8,1.15,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,1.2,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//10-hunter
 ,[1  ,1.15,0   ,0   ,0   ,0   ,0   ,0    ,0   ,1.25,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//11-wizard
 ,[0.8,1.2 ,1.3 ,0   ,0   ,0   ,1.3 ,1.3  ,1.35,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//12-blacksmith
 ,[0.8,1   ,1   ,1.1 ,1.2 ,1.2 ,1.4 ,1.4  ,1.3 ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//13-crusader
 ,[0.8,1   ,1.1 ,0   ,0   ,0   ,4   ,0    ,0   ,0   ,1.3,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//14-rogue
 ,[0.8,0   ,0   ,0   ,0   ,0   ,0   ,0    ,1.15,1.15,0  ,0    ,0   ,0.95,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//15-monk
 ,[0.8,1.1 ,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,1.3,0    ,0   ,0   ,1.15 ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//16-bard
 ,[0.8,1.1 ,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,1.3,0    ,0   ,0   ,0    ,1.15,0   ,0  ,0    ,0    ,0   ,0  ]//17-dancer
 ,[0.9,1.05,0   ,0   ,0   ,0   ,0   ,0    ,0   ,1.25,0  ,0    ,1.1 ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//18-sage
 ,[0.8,1.1 ,1.15,0   ,0   ,0   ,1.35,1.4  ,1.3 ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//19-alchemist
 ,[1  ,1.3 ,1.4 ,0   ,0   ,0   ,1.6 ,0    ,1.4 ,1.3 ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//20-super novice
 ,[0.8,1   ,1   ,1.1 ,1.2 ,1.2 ,1.4 ,1.4  ,1.3 ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//21-lord knight
 ,[0.8,1   ,1.3 ,0   ,0   ,0   ,1.6 ,0    ,0   ,0   ,0  ,1    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//22-assassin cross
 ,[0.8,0   ,0   ,0   ,0   ,0   ,0   ,0    ,1.2 ,1.2 ,0  ,0    ,1.2 ,0.95,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//23-high priest
 ,[0.8,1.15,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,1.2,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//24-sniper
 ,[1  ,1.15,0   ,0   ,0   ,0   ,0   ,0    ,0   ,1.25,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//25-high wizard
 ,[0.8,1.2 ,1.3 ,0   ,0   ,0   ,1.3 ,1.3  ,1.35,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//26-whitesmith
 ,[0.8,1   ,1.1 ,1.2 ,1.2 ,1.2 ,1.4 ,1.4  ,1.3 ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//27-paladin
 ,[0.8,1   ,1.1 ,0   ,0   ,0   ,4   ,0    ,0   ,0   ,1.3,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//28-stalker
 ,[0.8,0   ,0   ,0   ,0   ,0   ,0   ,0    ,1.15,1.15,0  ,0    ,0   ,0.95,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//29-champion
 ,[0.8,1.1 ,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,1.3,0    ,0   ,0   ,1.15 ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//30-clown
 ,[0.8,1.1 ,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,1.3,0    ,0   ,0   ,0    ,1.15,0   ,0  ,0    ,0    ,0   ,0  ]//31-gypsy
 ,[0.9,1.05,0   ,0   ,0   ,0   ,0   ,0    ,0   ,1.25,0  ,0    ,1.1 ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//32-professor
 ,[0.8,1.1 ,1.15,0   ,0   ,0   ,1.35,1.4  ,1.3 ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//33-creator
 ,[0]//34-high novice
 ,[0]//35-high swordman
 ,[0]//36-high thief
 ,[0]//37-high acolyte
 ,[0]//38-high archer
 ,[0]//39-high magician
 ,[0]//40-high merchant
 ,[0.8,0   ,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//41-taekwon
 ,[0.8,0   ,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,1   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//42-star gladiator
 ,[1  ,1.15,0   ,0   ,0   ,0   ,0   ,0    ,0   ,1.25,0  ,0    ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0    ,0   ,0  ]//43-soul linker
 ,[0.8,1   ,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,1.5 ,0  ,0    ,0    ,0   ,0  ]//44-ninja
 ,[1  ,0   ,0   ,0   ,0   ,0   ,0   ,0    ,0   ,0   ,0  ,0    ,0   ,0   ,0    ,0   ,0   ,1.4,1.5  ,3    ,1.4 ,3  ]//45-gunslinger
];

// weaponsize --> Attack modifier of weapon by target size
weaponsize=[
  [1   ,1    ,1  ]//FIST
 ,[1   ,0.75,0.5 ]//DAGger
 ,[0.75,1   ,0.75]//1h SWord
 ,[0.75,0.75,1   ]//2h SWord
 ,[0.75,0.75,1   ]//1h SPear
 ,[0.75,0.75,1   ]//2h SPear
 ,[0.5 ,0.75,1   ]//1h AXE
 ,[0.5 ,0.75,1   ]//2h AXE
 ,[0.75,1   ,1   ]//MACE
 ,[1   ,1   ,1   ]//ROD
 ,[1   ,1   ,0.75]//BOW
 ,[0.75,1   ,0.75]//KATAR
 ,[1   ,1   ,0.5 ]//BOOK
 ,[1   ,0.75,0.5 ]//KNUckles
 ,[0.75,1   ,0.75]//INSTRument
 ,[0.75,1   ,0.5 ]//WHIP
 ,[0.75,0.75,1   ]//huuma SHURiken
 ,[1   ,1   ,1   ]//handGUN
 ,[1   ,1   ,1   ]//RIFLE
 ,[1   ,1   ,1   ]//SHOTGun
 ,[1   ,1   ,1   ]//GATLing gun
 ,[1   ,1   ,1   ]//GRENade launcher
];

// PC_BaseExp --> Base level experience chart
PC_BaseExp=[
  [0,9,16,25,36,77,112,153,200,253,320,385,490,585,700,830,970,1120,1260,1420,1620,1860,1990,2240,2504,2950,3426,3934,4474,6889,7995,9174,10425,
11748,13967,15775,17678,19677,21773,30543,34212,38065,42102,46323,53026,58419,64041,69892,75973,102468,115254,128692,142784,157528,178184,196300,
215198,234879,255341,330188,365914,403224,442116,482590,536948,585191,635278,687211,740988,925400,1473746,1594058,1718928,1848355,1982340,2230113,
2386162,2547417,2713878,3206160,3681024,4022472,4377024,4744680,5125440,5767272,6204000,6655464,7121664,7602600,9738720,11649960,13643520,18339300,
23836800,35658000,48687000,58135000,99999998,0],//first born
  [0,10,18,28,40,85,123,168,220,278,400,481,613,731,875,1038,1213,1400,1575,1775,2268,2604,2786,3136,3506,4130,4796,5508,6264,9645,12392,14220,16159,
18209,21649,24451,27401,30499,33748,47342,58160,64711,71573,78749,90144,99312,108870,118816,129154,174196,213220,238080,264150,291427,329640,363155,
398116,434526,472381,610848,731828,806448,884232,965180,1073896,1170382,1270556,1374422,1481976,1850800,3389616,3666333,3953534,4251217,4559382,5129260,
5488173,5859059,6241919,7374168,9570662,10458427,11380262,12336168,13326144,14994907,16130400,17304206,18516326,19766760,29216160,34949880,40930560,
55017900,71510400,106974000,146061000,174405000,343210000,0]//reborned
];

// PC_JobExp --> Job level experience chart
PC_JobExp=[
  [0,10,20,28,40,91,151,205,268,340,0],//novice
  [0,11,22,31,44,100,166,226,295,374,0],//high novice
  [0,30,43,58,76,116,180,220,272,336,520,604,699,802,948,1125,1668,1937,2226,3040,3988,5564,6272,7021,9114,11473,15290,16891,18570,23229,28359,36478,
39716,43088,52417,62495,78160,84175,90404,107611,125915,153941,191781,204351,248352,286212,386371,409795,482092,509596,982092,992092,1002092,1012092,
1022092,1032092,1042092,1052092,1062092,1072092,1082092,1092092,1102092,1112092,1122092,1132092,1142092,1152092,1162092,1172092,1182092,1192092,1202092,
1212092,1222092,1232092,1242092,1252092,1262092,1272092,1282092,1292092,1302092,1312092,1322092,1332092,1342092,1352092,1362092,1372092,1382092,1392092,
1402092,1412092,1422092,1432092,1442092,1452092,1462092,0],//first jobs,taekwons,super novice
  [0,60,86,116,152,232,360,440,544,672,1040,1208,1398,1604,1896,2250,3336,3874,4452,6080,7976,11128,12544,14042,18228,28683,38225,42228,46425,58073,70898,
91195,99290,107720,131043,156238,195400,210438,226010,269028,314788,384853,479453,510878,620880,715530,965928,1024488,1205230,1273990,0],//reborn first jobs
  [0,144,184,284,348,603,887,1096,1598,2540,3676,4290,4946,6679,9492,12770,14344,16005,20642,27434,35108,38577,42206,52708,66971,82688,89544,96669,117821,
144921,174201,186677,199584,238617,286366,337147,358435,380376,447685,526989,610246,644736,793535,921810,1106758,1260955,1487304,1557657,1990632,2083386,0],//second jobs,soul linker
  [0,288,368,568,696,1206,1774,2192,3196,5080,7352,8580,9892,13358,18984,31925,35860,40013,51605,68585,87770,96443,105515,131770,167428,206720,223860,241673,
294553,362303,479053,513362,548856,656197,787507,927154,985696,1046034,1231134,1449220,1678177,1773024,2380605,2765430,3320274,3782865,4461912,4672971,5971896,
6250158,6875174,7562652,8318960,9150856,10065942,11877812,14015818,16538655,19515624,23028437,28094693,34275525,41816141,51015692,62239144,79666104,101672614,
130524946,167071930,213852071,0],//reborn second jobs
  [0,72,92,142,174,301,443,548,799,1270,1838,2145,2473,3339,4746,6385,7172,8002,10321,13717,17554,19288,21103,26354,33485,41344,44772,48344,58910,72460,
87100,93338,99792,119308,143183,231068,257377,274363,314246,371105,431038,476309,588548,665256,801731,916689,1130023,1188623,1377408,1551289,1746582,1845236,
1954741,2124555,2345698,2548763,2759555,3021488,3254111,3489547,3695474,4012251,4181112,4302211,4496584,4578951,4869523,5022114,5123654,5395117,0]//gunslinger,ninja
];
PC_JobExp[7]=new Array();for(var i=0;i<=18;i++) PC_JobExp[7][i]=27434;for(var i=19;i<=50;i++)PC_JobExp[7][i]=PC_JobExp[4][i]*2;//star gladiator

// PET_OBJ --> Pet bonuses list
PET_OBJ=[
  [0,"(No Pet)",0,0]
 ,[1,"Alice [MDEF+1, Demi-Human race resistance +1%]",0,19,1,57,1,0]
 ,[2,"Isis [ATK +1%, MATK -1%]",0,80,1,89,-1,0]
 ,[3,"Incubus [MaxSP +5%]",0,16,5,0]
 ,[4,"Fire Imp [Fire element resistance +2%, +2% ATK based damage against Fire element]",0,63,2,43,2,0]
 ,[5,"Whisper [FLEE +7,DEF -3]",0,9,7,18,-3,0]
 ,[6,"Orc Warrior [ATK +10,DEF -3]",0,17,10,18,-3,0]
 ,[7,"Shinobi [AGI +2]",0,2,2,0]
 ,[8,"Christmas Goblin [MaxHP +30, Water element resistance +1%]",0,13,30,61,1,0]
 ,[9,"Golem [MaxHP +100, FLEE -5]",0,13,100,9,-5,0]
 ,[10,"Baby Desert Wolf [INT +1, MaxSP +20]",0,4,1,14,20,0]
 ,[11,"Goblin Leader [+3% ATK based damage against Demi-Human race]",0,37,3,0]
 ,[12,"Succubus [5% to get 5% of dealt damage as HP with each ATK based attack]","",0]
 ,[13,"Savage Babe [VIT +1, MaxHP +50]",0,3,1,13,50,0]
 ,[14,"Zealotus [+2% ATK/MATK based damage against Demi-Human race]",0,37,2,177,2,0]
 ,[15,"Steel Chonchon [FLEE +6, AGI -1]",0,9,6,2,-1,0]
 ,[16,"Spore [HIT +5 ,ATK -2]",0,8,5,17,-2,0]
 ,[17,"Smokie [AGI +1, Perfect Dodge +1]",0,2,1,11,1,0]
 ,[18,"Sohee [STR +1, DEX +1]",0,1,1,5,1,0]
 ,[19,"Green Maiden [DEF +1, Demi-Human race resistance +1%]",0,18,1,57,1,0]
 ,[20,"Chonchon [AGI +1, FLEE +2]",0,2,1,9,2,0]
 ,[21,"Deviruchi [ATK +1%, MATK +1%, MaxHP -3%, MaxSP -3%]",0,80,1,89,1,15,-3,16,-3,0]
 ,[22,"Dullahan (iRO) [CRIT +5]",0,10,5,0]
 ,[23,"Evil Nymph [MaxSP +30, SP Recovery +5%]",0,14,30,76,5,0]
 ,[24,"Dokebi [MATK +1%, ATK -1%]",0,89,1,80,-1,0]
 ,[25,"Drops [HIT +3, ATK +3]",0,8,3,17,3,0]
 ,[26,"Nightmare Terror [Sleep status resistance +100%]",0,155,100,0]
 ,[27,"Baphomet Jr. [DEF +1, MDEF +1, Stun status resistance -1%]",0,18,1,19,1,151,-1,0]
 ,[28,"Hunter Fly [Perfect Dodge +2, FLEE -5]",0,11,2,9,-5,0]
 ,[29,"Picky [STR +1, ATK +5]",0,1,1,17,5,0]
 ,[30,"Earth Petite [ASPD +1%, DEF -2, MDEF -2]",0,12,1,18,-2,19,-2,0]
 ,[31,"Stone Shooter [Fire element resistance +3%]",0,63,3,0]
 ,[32,"Peco Peco [MaxHP +150, MaxSP -10]",0,13,150,14,-10,0]
 ,[33,"Poison Spore [STR +1, INT +1]",0,1,1,4,1,0]
 ,[34,"Poporing [LUK +2, Poison element resistance +10%]",0,6,2,65,10,0]
 ,[35,"Poring [LUK +2, CRIT +1]",0,6,2,10,1,0]
 ,[36,"Bongun [VIT +1, Stun status resistance +1%]",0,3,1,151,1,0]
 ,[37,"Marionette [SP Recovery +3%]",0,76,3,0]
 ,[38,"Miyabi Doll [INT +1, Cast Time -3%]",0,4,1,73,-3,0]
 ,[39,"Mao Guai [MaxSP +10]",0,14,10,0]
 ,[40,"Munak [INT +1, DEF +1]",0,4,1,18,1,0]
 ,[41,"Medusa [VIT +1, Stone Curse status Resistance +5%]",0,3,1,159,5,0]
 ,[42,"Rice Cake [Neutral element resistance +1%, MaxHP -1%]",0,50,1,15,-1,0]
 ,[43,"Yoyo [CRIT +3,LUK -1]",0,10,3,6,-1,0]
 ,[44,"Leaf Cat [Brute race resistance +3%]",0,52,3,0]
 ,[45,"Lunatic [CRIT +2, ATK +2]",0,10,2,17,2,0]
 ,[46,"Rocker [HP Recovery +5%, MaxHP +25]",0,75,5,13,25,0]
 ,[47,"Loli Ruri [MaxHP +3%, When receiving ATK based damage, 5% chance to use Heal Lv 1]","5% chance to cast Heal Lv 1 on owner when receiving Physical Damage",15,3,0]
 ,[48,"Wanderer [AGI +3, DEX +1]",0,2,3,5,1,0]
 ,[49,"Christmas Goblin [MaxHP +30, Water element resistance +5%]",0,13,30,61,5,0]
 ,[50,"Christmas Goblin [MaxHP +30, Frozen status resistance +5%]",0,13,30,152,5,0]
 ,[51,"Dullahan [Critical Damage +5%]",0,70,5,0]
 ,[52,"Nightmare Terror (iRO) [Sleep status resistance +10%]",0,155,10,0]
 ,[53,"Goblin Leader (iRO) [Demi-Human race resistance +3%]",0,57,3,0]
 ,[54,"Golem (iRO) [MaxHP +100, FLEE +5]",0,13,100,9,5,0]
 ,[55,"Incubus (iRO) [MaxSP +5%, 2% to get 5% of dealt damage as SP with each ATK based attack]",0,16,5,0]
 ,[56,"Succubus (iRO) [5% to get 2% of dealt damage as HP with each ATK based attack]","",0]
 ,[57,"Marionette (iRO) [When receiving ATK based damage, chance to gain Neutral element resistance +20%]",0,60,20,0]
 ,[58,"Fire Imp (iRO) [Fire element resistance +2%, +1% ATK based damage against Fire element]",0,63,2,43,1,0]
 ,[59,"Zealotus (iRO) [ATK +2%, +2% MATK based damage against Demi-Human race]",0,87,2,177,2,0]
 ,[60,"Incubus (aRO) [MaxSP +3%]",0,16,3,0]
//[petID,"name+description",0{,bonusNum,bonusValue},0]
];
// PET_OBJ_SORT --> Sort list for pets
PET_OBJ_SORT=[0,1,10,27,36,20,49,50,8,21,24,25,51,22,30,23,4,58,11,53,9,54,19,28,3,60,55,2,44,47,45,39,37,57,41,38,40,26,52,6,32,29,33,34,35,42,46,7,13,17,18,16,15,31,12,56,48,5,43,14,59];

// ITEM_SP_TIME_OBJ --> Temporary Card/Item Effects
ITEM_SP_TIME_OBJ=[
  [0,"Temporary Card/Item Effects","none",0,0,0]
 ,[1,"Isilla Card","Cast Time -50%, FLEE +30",2,472,0]
 ,[2,"Ice Titan Card","DEF +10",2,484,18,10,0]
 ,[3,"Atroce Card","ASPD +100%",2,463,12,100,0]
 ,[4,"Anolian Card","Improve Concentration Lv1",2,224,0]
 ,[5,"Alchemist Card Set","Adrenaline Rush",2,461,0]
 ,[6,"Valorous Assassin Damascus","Ice Pick Effect",1,898,23,1,0]
 ,[7,"Ixion Wings","ASPD +7%",1,821,12,7,0]
 ,[8,"Vanberk Card","CRIT +100",2,471,10,100,0]
 ,[9,"Ulfhedinn","DEF +20, MDEF -20 [Stone Skin Lv1]",1,708,0]
 ,[10,"Angelic Ring","Heal/Sanctuary/Potion Pitcher Effectiveness +20%",1,1000,91,20,94,20,0]
 ,[11,"Glorious Grenade Launcher","ASPD + 20%",1,1103,12,20,0]
 ,[12,"Glorious Jamadhar [+9]","ASPD + 100%",1,1091,12,100,0]
 ,[13,"Glorious Tablet","ATK + 200",1,1094,17,200,0]
 ,[14,"Glorious Shuriken","Throw Fuuma Shuriken/Final Strike Damage +100%",1,1098,5396,100,5405,100,5438,100,0]
 ,[15,"Glorious Bloody Roar [+9]","ASPD +100%",1,1090,12,100,0]
 ,[16,"Naght Sieger Twin-Blade [Red]","Ignore [Non-Boss] Monster Defense",1,933,22,1,0]
 ,[17,"Her National Treasury","Loud Exclamation",1,1012,0]
 ,[18,"Desert Twilight + Desert Wind","190 ASPD",1,818,12,100,0]
 ,[19,"Shadow Guard Set [Shadow Walk + Shadow Guard]","FLEE +20",1,995,9,20,0]
 ,[20,"Valorous Huuma Front Shuriken","Throw Fuuma Shuriken/Final Strike Damage +100%",1,931,5396,100,5405,100,5438,100,0]
 ,[21,"Naght Sieger Twin-Blade [Blue]","Ignore [Non-Boss] Monster Defense",1,932,22,1,0]
 ,[22,"Soldier Gatling Gun","ATK +80",1,927,17,80,0]
 ,[23,"Soldier Grenade Launcher","ATK +300",1,929,17,300,0]
 ,[24,"Soldier Revolver","ASPD +100%",1,925,12,100,0]
 ,[25,"Tae Goo Lyeon [JobLv70]","ATK +50",1,934,17,50,0]
 ,[26,"Brave Battle Fist","Asura Strike Cast Time -100%",1,916,7197,100,7321,100,0]
 ,[27,"Armor of Naga","ATK +20",1,989,17,20,0]
 ,[28,"Noble Hat","Adrenaline Rush",1,1129,0]
 ,[29,"Violet Fear","Ignore [Non-Boss] Monster Defense",1,935,22,1,0]
 ,[30,"Bloody Eater","CRIT +100, ATK +50",1,819,10,100,17,50,0]
 ,[31,"Blue Ribbon","Attention Concentrate Lv2",1,885,0]
 ,[32,"Hodremlin Card","Perfect Dodge +30",2,467,11,30,0]
 ,[33,"Mithril Magic Cape","DEF -20, MDEF +20 [Anti-Magic Lv1]",1,709,0]
 ,[34,"Ring of Flame Lord","Critical Explosion Lv1",1,728,0]
 ,[35,"Lord Knight Card","Berserk",2,178,0]
 ,[36,"Soldier Shotgun","ATK +80",1,928,17,80,0]
 ,[37,"Weihna","Physical Damage +10%",1,1157,80,10,0]
 ,[38,"Roubel","Bash / Bowling Bash Damage +20%",1,1158,5006,20,5076,20,0]
 ,[39,"Chronos","MATK +12%",1,1172,89,12,0]
 ,[40,"Nemesis","ATK +50",1,820,17,50,0]
 ,[41,"Sorin Doll Hat","ATK +50",1,892,17,50,0]
 ,[42,"Sagittarius Diadem","DEX/AGI +10",1,1288,2,10,5,10,0]
 ,[43,"Virgo Crown","DEX +20",1,1294,5,20,0]
 ,[44,"Benit Doll Hat","ASPD +5%",1,1028,12,5,0]
 ,[45,"Dark Knight Glove [Type A]","ASPD +2%",1,1052,12,2,0]
 ,[46,"Dark Knight Glove [Type B]","MaxHP +10%",1,1310,15,10,0]
 ,[47,"Jaguar Hat","Loud Exclamation",1,1317,1,4,0]
 ,[48,"Duneyrr Card","Perfect Dodge +10",2,511,11,10,0]
 ,[49,"Phylla Card","CRIT +20",2,531,10,20,0]
 ,[50,"Twin Ribbon","DEF +20, MDEF -20 [Stone Skin Lv1]",1,531,0]
 ,[51,"Twin Ribbon","DEF -20, MDEF +20 [Anti-Magic Lv1]",1,531,0]
 ,[52,"Shield of Naga","Reflect Melee Physical Attacks by 3*(refine)%",1,993,0]
 ,[53,"Power of Thor (iRO)","ATK +40",1,1545,17,40,0]
 ,[54,"Power of Thor (iRO)","MATK +40",1,1545,88,40,0]
 ,[55,"Duneyrr Card (aRO)","ASPD +5%",2,545,12,5,0]
 ,[56,"Kafra Blossom Card","Elemental resistance +10%",2,546,61,10,62,10,63,10,64,10,66,10,67,10,0]
 ,[57,"Witch's Pumpkin Hat + Hahoe Mask","ATK +50",1,1567,17,50,0]
 ,[58,"Weihna (iRO)","Physical Damage +5%",1,1157,80,5,0]
 ,[59,"Drooping Alicel","ASPD +100%",1,1617,12,100,0]
 ,[60,"Mace Of Judgement","+20% ATK/MATK based damage against Demon race",1,1662,36,20,176,20,0]
 ,[61,"Empowered Mace Of Judgement","+20% ATK/MATK based damage against Demon race",1,1663,36,20,176,20,0]
 ,[62,"White Wing Manteau","FLEE +20",1,1719,9,20,0]
 ,[63,"Bible Promise Vol1","Odin's Power Lv1 (ATK +70, MATK +70, DEF -20, MDEF -20)",1,1728,17,70,88,70,18,-20,19,-20,0]
 ,[64,"Bible Promise Vol2","Odin's Power Lv2 (ATK +100, MATK +100, DEF -20, MDEF -20)",1,1728,17,100,88,100,18,-20,19,-20,0]
 ,[65,"Pervomai Hat","ATK +50",1,1818,17,50,0]
 ,[66,"Pervomai Hat","MATK +40",1,1818,88,40,0]
 ,[67,"Pumpkin Head","All stats +2, MDEF +7",1,1830,7,2,19,7,0]
 ,[68,"Awakened Bad Grader Cap (Autumn)","STR +2, DEX +1",1,1766,1,2,5,1,0]
 ,[69,"Awakened Brighthead Cap (Autumn)","DEX +1, Experience gained +3%",1,1767,5,2,120,4,121,4,122,4,123,4,124,4,125,4,126,4,127,4,128,4,129,4,0]
 ,[70,"Halloween Event","All Stats +2",1,1860,7,2,0]
 ,[71,"Snow Rabbit (FreeRO)","CRIT +100",1,1876,10,100,0]
//[tempID,"name","description",slot,slotID,{,bonusNum,bonusValue},0]
//  slot: 2-cardOBJ,1-ItemOBJ
//  slotID: cardID/itemID determined by slot
];
// ITEM_SP_TIME_OBJ_SORT --> Sort list for temporary effects
ITEM_SP_TIME_OBJ_SORT=[0,5,10,4,27,3,68,69,30,26,39,18,48,15,11,12,14,13,70,32,2,1,7,35,33,21,16,40,65,66,67,34,19,52,71,22,23,24,36,25,9,6,20,8,29];

// 'Other Info' Creation rate calc
Potion_Type=[
  [0 ,28.4,"Red Potion"]
 ,[1 ,28.4,"Yellow Potion"]
 ,[2 ,28.4,"White Potion"]
 ,[3 ,3.4 ,"Blue Potion"]
 ,[4 ,3.4 ,"Slim Red Potion"]
 ,[5 ,0.9 ,"Slim Yellow Potion"]
 ,[6 ,0   ,"Slim White Potion"]
 ,[7 ,18.4,"Alcohol"]
 ,[8 ,8.4 ,"Acid Bottle"]
 ,[9 ,8.4 ,"Bottle Grenade"]
 ,[10,8.4 ,"Plant Bottle"]
 ,[11,8.4 ,"Marine Sphere Bottle"]
 ,[12,0   ,"Glistening Coat"]
 ,[13,3.4 ,"Anodyne"]
 ,[14,3.4 ,"Aloevera"]
 ,[15,3.4 ,"Embryo"]
 ,[16,3.4 ,"Elemental Resist Potions"]
];
Potion_Max=Potion_Type.length;

// 'Other Info' Forging rate calc
Anvil_Type=[
  [0,0 ,"Anvil/No Anvil"]
 ,[1,0 ,"Oridecon Anvil"]
 ,[2,5 ,"Gold Anvil"]
 ,[3,10,"Emperium Anvil"]
];
Anvil_Max=Anvil_Type.length;

// 'Other Info' Potion pitcher calc
Potion_Type_2=[
  [0,45 ,65 ,"Red Potion"]
 ,[1,105,145,"Orange Potion"]
 ,[2,175,235,"Yellow Potion"]
 ,[3,325,405,"White Potion"]
 ,[4,40 ,60 ,"Blue Potion"]
];
Potion_Max_2=Potion_Type_2.length;
Potion_Type_3=[
  [0,45 ,65 ,"Slim Red Potion[+10%]"]
 ,[1,45 ,65 ,"Slim Red Potion[+20%]"]
 ,[2,45 ,65 ,"Slim Red Potion[+30%]"]
 ,[3,45 ,65 ,"Slim Red Potion[+40%]"]
 ,[4,45 ,65 ,"Slim Red Potion[+50%]"]
 ,[5,175,235,"Slim Yellow Potion[+60%]"]
 ,[6,175,235,"Slim Yellow Potion[+70%]"]
 ,[7,175,235,"Slim Yellow Potion[+80%]"]
 ,[8,175,235,"Slim Yellow Potion[+90%]"]
 ,[9,325,405,"Slim White Potion[+100%]"]
];
Potion_Max_3=Potion_Type_3.length;
Pot_Rank=[
  [0,"No"],[1,"Yes"]
];
Pot_Rank_Max=Pot_Rank.length;

// 'Other Info' Cooking rate calc
Cook_Kit=[
  [0,"Outdoor Cooking Kit"]
 ,[1,"Home Cooking Kit"]
 ,[2,"Professional Cooking Kit"]
 ,[3,"Royal Cooking Kit"]
 ,[4,"Fantastic Cooking Kit"]
];
Cook_Kit_Max=Cook_Kit.length;
Stat_Food=[
  [0,"STR"],[1,"AGI"],[2,"VIT"],[3,"INT"],[4,"DEX"],[5,"LUK"]
];
Stat_Food_Max=Stat_Food.length;
