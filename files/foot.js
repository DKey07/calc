function StCalc(nSC){
  with(document.calcForm){
    for(
      n_A_STR=eval(A_STR.value),
      n_A_AGI=eval(A_AGI.value),
      n_A_VIT=eval(A_VIT.value),
      n_A_DEX=eval(A_DEX.value),
      n_A_INT=eval(A_INT.value),
      n_A_LUK=eval(A_LUK.value),
      StPoint=0,
      i=2;i<=n_A_STR;i++
    )
      StPoint+=StCalc2(i);
    for(i=2;i<=n_A_AGI;i++)
      StPoint+=StCalc2(i);
    for(i=2;i<=n_A_VIT;i++)
      StPoint+=StCalc2(i);
    for(i=2;i<=n_A_INT;i++)
      StPoint+=StCalc2(i);
    for(i=2;i<=n_A_DEX;i++)
      StPoint+=StCalc2(i);
    for(i=2;i<=n_A_LUK;i++)
      StPoint+=StCalc2(i);
    if(n_A_BaseLV=eval(A_BaseLV.value),n_A_JobSet(),n_Tensei?wStPoint=100:wStPoint=48,1==nSC||0==BLVauto.checked)
      for(i=1;i<n_A_BaseLV;i++) wStPoint+=Math.floor(i/5)+3;
    else
      for(i=1;StPoint>wStPoint&&99>i;i++) wStPoint+=Math.floor(i/5)+3;
    i>99&&(i=99),
    A_BaseLV.value=i,
    myInnerHtml("A_STPOINT",wStPoint-StPoint,0)
  }
}
function StCalc2(_){
  return Math.floor((_-2)/10)+2
}
function SuperNoviceFullWeapon(nSNFW){
  1==nSNFW?(SuperNoviceFullWeaponCHECK=1,JobASPD[20][7]=120):(SuperNoviceFullWeaponCHECK=0,JobASPD[20][7]=0);
  var len=document.calcForm.A_WeaponType.length;
  for(i=0;len>i;i++) document.calcForm.A_WeaponType.options[0]=null;
  for(j=0,i=0;21>=i;i++) 0!=JobASPD[20][i]&&(document.calcForm.A_WeaponType.options[j]=new Option(WeaponName[i],i),j++);
  with(document.calcForm){
    if(7!=ItemOBJ[n_A_Equip[0]][2]&&JobEquipItemSearch(ItemOBJ[n_A_Equip[0]][2])){
      var BK_BUKI=n_A_Equip[0];
      A_WeaponType.value=ItemOBJ[BK_BUKI][1],ClickWeaponType(ItemOBJ[BK_BUKI][1]),WeaponSet2(),A_weapon1.value=BK_BUKI
    } else ClickWeaponType(0),WeaponSet2();
    JobEquipItemSearch(ItemOBJ[n_A_Equip[2]][2])&&(A_head1.value=n_A_Equip[2]),
    JobEquipItemSearch(ItemOBJ[n_A_Equip[3]][2])&&(A_head2.value=n_A_Equip[3]),
    JobEquipItemSearch(ItemOBJ[n_A_Equip[4]][2])&&(A_head3.value=n_A_Equip[4]),
    A_left.value=n_A_Equip[5],
    A_body.value=n_A_Equip[6],
    A_shoulder.value=n_A_Equip[7],
    A_shoes.value=n_A_Equip[8],
    A_acces1.value=n_A_Equip[9],
    A_acces2.value=n_A_Equip[10]
  }
}
function StAllCalc(){
  with(document.calcForm){
    if(
      n_A_JobSet(),
      20==n_A_JOB&&(
        0==SuperNoviceFullWeaponCHECK&&1==eval(A_skill9.value)?
          SuperNoviceFullWeapon(1):
        1==SuperNoviceFullWeaponCHECK&&0==eval(A_skill9.value)&&
          SuperNoviceFullWeapon(0)
      ),
      n_A_BaseLV=eval(A_BaseLV.value),
      n_A_JobLV=eval(A_JobLV.value),
      n_A_STR=eval(A_STR.value),
      n_A_AGI=eval(A_AGI.value),
      n_A_VIT=eval(A_VIT.value),
      n_A_DEX=eval(A_DEX.value),
      n_A_INT=eval(A_INT.value),
      n_A_LUK=eval(A_LUK.value),
      SU_STR=n_A_STR,
      SU_AGI=n_A_AGI,
      SU_VIT=n_A_VIT,
      SU_DEX=n_A_DEX,
      SU_INT=n_A_INT,
      SU_LUK=n_A_LUK,
      n_A_WeaponType=eval(A_WeaponType.value),
      n_A_Arrow=eval(A_Arrow.value),
      n_A_HEAD_DEF_PLUS=eval(A_HEAD_DEF_PLUS.value),
      n_A_BODY_DEF_PLUS=eval(A_BODY_DEF_PLUS.value),
      n_A_LEFT_DEF_PLUS=eval(A_LEFT_DEF_PLUS.value),
      n_A_SHOULDER_DEF_PLUS=eval(A_SHOULDER_DEF_PLUS.value),
      n_A_SHOES_DEF_PLUS=eval(A_SHOES_DEF_PLUS.value),
      n_A_DEFplus=n_A_HEAD_DEF_PLUS+n_A_BODY_DEF_PLUS+n_A_LEFT_DEF_PLUS+n_A_SHOULDER_DEF_PLUS+n_A_SHOES_DEF_PLUS,
      n_A_ActiveSkill=eval(A_ActiveSkill.value),
      n_A_ActiveSkill>=3e3?
        n_A_ActiveSkill=InsertSkill[n_A_ActiveSkill-3e3][2]:
      n_A_ActiveSkill>=2e3&&
        (n_A_ActiveSkill=AutoSpellSkill[n_A_ActiveSkill-2e3][2]),
      n_A_ActiveSkillLV=eval(A_ActiveSkillLV.value),
      n_A_Equip[0]=eval(A_weapon1.value),
      n_A_Equip[1]=0,
      n_Nitou&&(n_A_Equip[1]=eval(A_weapon2.value)),
      n_A_Equip[2]=eval(A_head1.value),
      n_A_Equip[3]=eval(A_head2.value),
      n_A_Equip[4]=eval(A_head3.value),
      n_A_Equip[5]=eval(A_left.value),
      n_A_Equip[6]=eval(A_body.value),
      n_A_Equip[7]=eval(A_shoulder.value),
      n_A_Equip[8]=eval(A_shoes.value),
      n_A_Equip[9]=eval(A_acces1.value),
      n_A_Equip[10]=eval(A_acces2.value),
      SetEquip(),
      n_A_WeaponLV=ItemOBJ[n_A_Equip[0]][4],
      n_A_Weapon_ATK=ItemOBJ[n_A_Equip[0]][3],
      n_A_Weapon_ATKplus=eval(A_Weapon_ATKplus.value),
      W_REF=0,
      n_A_WeaponLV_seirenATK=0,
      n_A_WeaponLV_Minplus=0,
      n_A_WeaponLV_Maxplus=0,
      1==n_A_WeaponLV?
        (n_A_WeaponLV_seirenATK=2*n_A_Weapon_ATKplus,n_A_Weapon_ATKplus>=8&&(n_A_WeaponLV_Minplus=1,n_A_WeaponLV_Maxplus=3*(n_A_Weapon_ATKplus-7))):
      2==n_A_WeaponLV?
        (n_A_WeaponLV_seirenATK=3*n_A_Weapon_ATKplus,n_A_Weapon_ATKplus>=7&&(n_A_WeaponLV_Minplus=1,n_A_WeaponLV_Maxplus=5*(n_A_Weapon_ATKplus-6))):
      3==n_A_WeaponLV?
        (n_A_WeaponLV_seirenATK=5*n_A_Weapon_ATKplus,n_A_Weapon_ATKplus>=6&&(n_A_WeaponLV_Minplus=1,n_A_WeaponLV_Maxplus=8*(n_A_Weapon_ATKplus-5))):
      4==n_A_WeaponLV&&
        (n_A_WeaponLV_seirenATK=7*n_A_Weapon_ATKplus,n_A_Weapon_ATKplus>=5&&(n_A_WeaponLV_Minplus=1,n_A_WeaponLV_Maxplus=13*(n_A_Weapon_ATKplus-4))),
      n_A_Weapon2LV=0,
      n_A_Weapon2_ATK=0,
      n_A_Weapon2_ATKplus=0,
      n_A_Weapon2LV_seirenATK=0,
      n_A_Weapon2LV_Minplus=0,
      n_A_Weapon2LV_Maxplus=0,
      n_Nitou&&(
        W_REF2=0,
        n_A_Weapon2LV=ItemOBJ[n_A_Equip[1]][4],
        n_A_Weapon2_ATK=ItemOBJ[n_A_Equip[1]][3],
        n_A_Weapon2_ATKplus=eval(document.calcForm.A_Weapon2_ATKplus.value),
        1==n_A_Weapon2LV?
          (n_A_Weapon2LV_seirenATK=2*n_A_Weapon2_ATKplus,n_A_Weapon2_ATKplus>=8&&(n_A_Weapon2LV_Minplus=1,n_A_Weapon2LV_Maxplus=3*(n_A_Weapon2_ATKplus-7))):
        2==n_A_Weapon2LV?
          (n_A_Weapon2LV_seirenATK=3*n_A_Weapon2_ATKplus,n_A_Weapon2_ATKplus>=7&&(n_A_Weapon2LV_Minplus=1,n_A_Weapon2LV_Maxplus=5*(n_A_Weapon2_ATKplus-6))):
        3==n_A_Weapon2LV?
          (n_A_Weapon2LV_seirenATK=5*n_A_Weapon2_ATKplus,n_A_Weapon2_ATKplus>=6&&(n_A_Weapon2LV_Minplus=1,n_A_Weapon2LV_Maxplus=8*(n_A_Weapon2_ATKplus-5))):
        4==n_A_Weapon2LV&&
          (n_A_Weapon2LV_seirenATK=7*n_A_Weapon2_ATKplus,n_A_Weapon2_ATKplus>=5&&(n_A_Weapon2LV_Minplus=1,n_A_Weapon2LV_Maxplus=13*(n_A_Weapon2_ATKplus-4)))
      ),
      n_A_card[0]=eval(A_weapon1_card1.value),
      n_A_card[1]=eval(A_weapon1_card2.value),
      n_A_card[2]=eval(A_weapon1_card3.value),
      n_A_card[3]=eval(A_weapon1_card4.value),
      n_Nitou
    )
      n_A_card[4]=eval(A_weapon2_card1.value),
      n_A_card[5]=eval(A_weapon2_card2.value),
      n_A_card[6]=eval(A_weapon2_card3.value),
      n_A_card[7]=eval(A_weapon2_card4.value);
    else
      for(var i=4;7>=i;i++) n_A_card[i]=0;
    if(
      n_A_card[8]=eval(A_head1_card.value),
      n_A_card[9]=eval(A_head2_card.value),
      n_A_card[10]=eval(A_left_card.value),
      n_A_card[11]=eval(A_body_card.value),
      n_A_card[12]=eval(A_shoulder_card.value),
      n_A_card[13]=eval(A_shoes_card.value),
      n_A_card[14]=eval(A_acces1_card.value),
      n_A_card[15]=eval(A_acces2_card.value),
      SetCard(),
      n_A_Weapon_zokusei=eval(A_Weapon_zokusei.value),
      n_A_Weapon2_zokusei=n_A_Weapon_zokusei,
      0 == n_A_Weapon_zokusei
    ){
      for(j=0;0!=ItemOBJ[n_A_Equip[0]][j+11];j+=2) 20==ItemOBJ[n_A_Equip[0]][j+11]&&(n_A_Weapon_zokusei=ItemOBJ[n_A_Equip[0]][j+12]);
      for(j=0;0!=ItemOBJ[n_A_Equip[1]][j+11];j+=2) 20==ItemOBJ[n_A_Equip[1]][j+11]&&(n_A_Weapon2_zokusei=ItemOBJ[n_A_Equip[1]][j+12]);
      201<=cardOBJ[n_A_card[0]][0]&&cardOBJ[n_A_card[0]][0]<=204&&(n_A_Weapon_zokusei=cardOBJ[n_A_card[0]][0]-200),
      201<=cardOBJ[n_A_card[4]][0]&&cardOBJ[n_A_card[4]][0]<=204&&(n_A_Weapon2_zokusei=cardOBJ[n_A_card[4]][0]-200),
      (10==n_A_WeaponType||17<=n_A_WeaponType&&n_A_WeaponType<=21)&&ArrowOBJ[n_A_Arrow][1]>0&&(n_A_Weapon_zokusei=ArrowOBJ[n_A_Arrow][1])
    }
    n_A_Buf=new Array;
    for(var i=0;999!=JobSkillPassOBJ[n_A_JOB][i];i++){
      var wOBJ=document.getElementById("A_skill"+i); n_A_Buf[i]=eval(wOBJ.value)
    }
    for(
      n_SkillSW&&(
        n_A_Buf2[0]=eval(A2_Skill0.value),
        n_A_Buf2[1]=eval(A2_Skill1.value),
        n_A_Buf2[2]=eval(A2_Skill2.value),
        n_A_Buf2[3]=eval(A2_Skill3.checked),
        n_A_Buf2[4]=eval(A2_Skill4.value),
        n_A_Buf2[5]=eval(A2_Skill5.checked),
        n_A_Buf2[6]=eval(A2_Skill6.value),
        n_A_Buf2[7]=eval(A2_Skill7.checked),
        n_A_Buf2[8]=eval(A2_Skill8.checked),
        n_A_Buf2[9]=eval(A2_Skill9.value),
        n_A_Buf2[10]=eval(A2_Skill10.value),
        n_A_Buf2[11]=eval(A2_Skill11.value),
        n_A_Buf2[12]=eval(A2_Skill12.value),
        n_A_Buf2[13]=eval(A2_Skill13.value),
        n_A_Buf2[14]=eval(A2_Skill14.value),
        n_A_Buf2[15]=eval(A2_Skill15.value),
        n_A_Buf2[16]=eval(A5_Skill0.checked),
        n_A_Buf2[17]=eval(A5_Skill1.checked),
        n_A_Buf2[18]=eval(A5_Skill2.checked),
        n_A_Buf2[19]=eval(A5_Skill3.checked),
        n_A_Buf2[20]=eval(A5_Skill4.checked),
        n_A_Buf2[21]=eval(A5_Skill5.checked)
      ),
      n_Skill3SW&&(
        n_A_Buf3[0]=eval(A3_Skill0_1.value),
        n_A_Buf3[1]=eval(A3_Skill1_1.value),
        n_A_Buf3[2]=eval(A3_Skill2_1.value),
        n_A_Buf3[3]=eval(A3_Skill3_1.value),
        n_A_Buf3[4]=eval(A3_Skill4_1.value),
        n_A_Buf3[5]=eval(A3_Skill5_1.value),
        n_A_Buf3[6]=eval(A3_Skill6_1.value),
        n_A_Buf3[7]=eval(A3_Skill7.value),
        n_A_Buf3[8]=eval(A3_Skill8.value),
        n_A_Buf3[9]=eval(A3_Skill9.value),
        n_A_Buf3[10]=eval(A3_Skill10.value),
        n_A_Buf3[11]=eval(A3_Skill11.checked),
        n_A_Buf3[11]&&(
          n_A_Buf3[12]=eval(A3_Skill11_STR.value),
          n_A_Buf3[13]=eval(A3_Skill11_AGI.value),
          n_A_Buf3[14]=eval(A3_Skill11_VIT.value),
          n_A_Buf3[15]=eval(A3_Skill11_INT.value),
          n_A_Buf3[16]=eval(A3_Skill11_DEX.value),
          n_A_Buf3[17]=eval(A3_Skill11_LUK.value),
          n_A_Buf3[18]=eval(A3_Skill11a.checked)
        ),
        n_A_Buf3[0]&&(n_A_Buf3[20]=eval(A3_Skill0_2.value),n_A_Buf3[30]=eval(A3_Skill0_3.value)),
        n_A_Buf3[1]&&(n_A_Buf3[21]=eval(A3_Skill1_2.value),n_A_Buf3[31]=eval(A3_Skill1_3.value)),
        n_A_Buf3[2]&&(
          n_A_Buf3[22]=eval(A3_Skill2_2.value),
          n_A_Buf3[29]=eval(A3_Skill2_3.value),
          n_A_Buf3[32]=eval(A3_Skill2_4.value)
        ),
        n_A_Buf3[3]&&(n_A_Buf3[23]=eval(A3_Skill3_2.value),n_A_Buf3[33]=eval(A3_Skill3_3.value)),
        n_A_Buf3[4]&&(n_A_Buf3[24]=eval(A3_Skill4_2.value),n_A_Buf3[34]=eval(A3_Skill4_3.value)),
        n_A_Buf3[5]&&(n_A_Buf3[25]=eval(A3_Skill5_2.value),n_A_Buf3[35]=eval(A3_Skill5_3.value)),
        n_A_Buf3[6]&&(n_A_Buf3[26]=eval(A3_Skill6_2.value),n_A_Buf3[36]=eval(A3_Skill6_3.value))
      ),
      n_Skill4SW&&(
        n_A_Buf3[40]=eval(A3_Skill40.checked),
        n_A_Buf3[41]=eval(A3_Skill41.value),
        n_A_Buf3[42]=eval(A3_Skill42.value),
        n_A_Buf3[43]=eval(A3_Skill43.value),
        n_A_Buf3[44]=eval(A3_Skill44.value)
      ),
      n_Skill6SW&&(
        n_A_Buf6[0]=eval(A6_Skill0.value),
        n_A_Buf6[1]=eval(A6_Skill1.value),
        n_A_Buf6[2]=eval(A6_Skill2.value),
        n_A_Buf6[3]=eval(A6_Skill3.checked),
        n_A_Buf6[4]=eval(A6_Skill4.value),
        n_A_Buf6[5]=eval(A6_Skill5.value),
        n_A_Buf6[6]=eval(A6_Skill6.checked),
        n_A_Buf6[7]=eval(A6_Skill7.checked),
        n_A_Buf6[8]=eval(A6_Skill8.checked),
        n_A_Buf6[9]=eval(A6_Skill9.checked),
        n_A_Buf6[10]=eval(A6_Skill10.checked),
        n_A_Buf6[11]=eval(A6_Skill11.checked),
        n_A_Buf6[12]=eval(A6_Skill12.checked),
        n_A_Buf6[13]=eval(A6_Skill13.checked),
        n_A_Buf6[14]=eval(A6_Skill14.checked),
        n_A_Buf6[15]=eval(A6_Skill15.checked),
        n_A_Buf6[16]=eval(A6_Skill16.checked),
        n_A_Buf6[17]=eval(A6_Skill17.checked),
        n_A_Buf6[18]=eval(A6_Skill18.value),
        n_A_Buf6[19]=eval(A_IJYOU0.value),
        n_A_Buf6[20]=eval(A_IJYOU1.value),
        n_A_Buf6[21]=eval(A_IJYOU2.checked),
        n_A_Buf6[22]=eval(A_IJYOU3.checked)
      ),
      n_Skill7SW&&(
        n_A_Buf7[0]=eval(A7_Skill0.checked),
        n_A_Buf7[1]=eval(A7_Skill1.checked),
        n_A_Buf7[2]=eval(A7_Skill2.checked),
        n_A_Buf7[3]=eval(A7_Skill3.value),
        n_A_Buf7[4]=eval(A7_Skill4.value),
        n_A_Buf7[5]=eval(A7_Skill5.value),
        n_A_Buf7[6]=eval(A7_Skill6.value),
        n_A_Buf7[7]=eval(A7_Skill7.value),
        n_A_Buf7[8]=eval(A7_Skill8.value),
        n_A_Buf7[9]=eval(A7_Skill9.checked),
        n_A_Buf7[10]=eval(A7_Skill10.checked),
        n_A_Buf7[11]=eval(A7_Skill11.checked),
        n_A_Buf7[12]=eval(A7_Skill12.checked),
        n_A_Buf7[13]=eval(A7_Skill13.checked),
        n_A_Buf7[14]=eval(A7_Skill14.checked),
        n_A_Buf7[16]=eval(A7_Skill16.checked),
        n_A_Buf7[17]=eval(A7_Skill17.checked),
        n_A_Buf7[18]=eval(A7_Skill18.checked),
        n_A_Buf7[19]=eval(A7_Skill19.checked),
        n_A_Buf7[20]=eval(A7_Skill20.checked),
        n_A_Buf7[21]=eval(A7_Skill21.checked),
        n_A_Buf7[22]=eval(A7_Skill22.checked),
        n_A_Buf7[23]=eval(A7_Skill23.checked),
        n_A_Buf7[24]=eval(A7_Skill24.checked),
        n_A_Buf7[25]=eval(A7_Skill25.checked),
        n_A_Buf7[26]=eval(A7_Skill26.checked),
        n_A_Buf7[27]=eval(A7_Skill27.checked),
        n_A_Buf7[28]=eval(A7_Skill28.checked),
        n_A_Buf7[29]=eval(A7_Skill29.checked),
        n_A_Buf7[30]=eval(A7_Skill30.checked),
        n_A_Buf7[31]=eval(A7_Skill31.checked),
        n_A_Buf7[32]=eval(A7_Skill32.checked),
        n_A_Buf7[33]=eval(A7_Skill33.checked),
        n_A_Buf7[34]=eval(A7_Skill34.checked),
        n_A_Buf7[35]=eval(A_SpeedPOT.value),
        n_A_Buf7[36]=eval(A7_Skill36.checked),
        n_A_Buf7[37]=eval(A7_Skill37.checked),
        n_A_Buf7[38]=eval(A7_Skill38.checked),
        n_A_Buf7[39]=eval(A7_Skill39.value),
        n_A_Buf7[40]=eval(A7_Skill40.value),
        n_A_Buf7[41]=eval(A7_Skill41.checked),
        n_A_Buf7[42]=eval(A7_Skill42.value),
        n_A_Buf7[43]=eval(A7_Skill43.checked),
        n_A_Buf7[44]=eval(A7_Skill44.checked),
        n_A_Buf7[45]=eval(A7_Skill45.checked),
        n_A_Buf7[46]=eval(A7_Skill46.checked),
        n_A_Buf7[47]=eval(A7_Skill47.checked),
        n_A_Buf7[48]=eval(A7_Skill48.checked),
        n_A_Buf7[49]=eval(A7_Skill49.checked),
        n_A_Buf7[50]=eval(A7_Skill50.checked),
        n_A_Buf7[51]=eval(A7_Skill51.checked)
      ),
      n_Skill8SW&&(
        n_A_Buf8[0]=eval(A8_Skill0.value),
        n_A_Buf8[1]=eval(A8_Skill1.value),
        n_A_Buf8[2]=eval(A8_Skill2.checked),
        n_A_Buf8[3]=eval(A8_Skill3.value),
        n_A_Buf8[5]=eval(A8_Skill5.value),
        n_A_Buf8[6]=eval(A8_Skill6.value),
        n_A_Buf8[7]=eval(A8_Skill7.value),
        n_A_Buf8[8]=eval(A8_Skill8.value),
        n_A_Buf8[9]=eval(A8_Skill9.value),
        n_A_Buf8[10]=eval(A8_Skill10.value),
        n_A_Buf8[11]=eval(A8_Skill11.value)
      ),
      n_Skill9SW&&(
        n_A_Buf9[0]=eval(A9_Skill0.value),
        n_A_Buf9[1]=eval(ARG_RC0.value),
        n_A_Buf9[2]=eval(A9_Skill1.value),
        n_A_Buf9[3]=eval(ARG_RC1.value),
        n_A_Buf9[4]=eval(A9_Skill2.value),
        n_A_Buf9[5]=eval(ARG_RC2.value),
        n_A_Buf9[6]=eval(A9_Skill3.value),
        n_A_Buf9[7]=eval(ARG_RC3.value),
        n_A_Buf9[8]=eval(A9_Skill4.value),
        n_A_Buf9[9]=eval(ARG_RC4.value),
        n_A_Buf9[10]=eval(A9_Skill5.value),
        n_A_Buf9[11]=eval(ARG_RC5.value),
        n_A_Buf9[12]=eval(A9_Skill6.value),
        n_A_Buf9[13]=eval(ARG_RC6.value),
        n_A_Buf9[14]=eval(A9_Skill7.value),
        n_A_Buf9[15]=eval(ARG_RC7.value),
        n_A_Buf9[16]=eval(A9_Skill8.value),
        n_A_Buf9[17]=eval(ARG_RC8.value),
        n_A_Buf9[18]=eval(A9_Skill9.value),
        n_A_Buf9[19]=eval(ARG_RC9.value),
        n_A_Buf9[20]=eval(A9_Skill10.value),
        n_A_Buf9[21]=eval(ARG_RC10.value),
        n_A_Buf9[22]=eval(A9_Skill11.value),
        n_A_Buf9[23]=eval(ARG_RC11.value),
        n_A_Buf9[24]=eval(A9_Skill12.value),
        n_A_Buf9[25]=eval(ARG_RC12.value),
        n_A_Buf9[26]=eval(A9_Skill13.value),
        n_A_Buf9[27]=eval(ARG_RC13.value),
        n_A_Buf9[28]=eval(A9_Skill14.value),
        n_A_Buf9[29]=eval(ARG_RC14.value),
        n_A_Buf9[30]=eval(ARG_RC15.value),
        n_A_Buf9[31]=eval(ARG_RC16.value),
        n_A_Buf9[32]=eval(ARG_RC17.value),
        n_A_Buf9[33]=eval(ARG_RC18.value),
        n_A_Buf9[34]=eval(ARG_RC19.value),
        n_A_Buf9[35]=eval(ARG_RC20.value),
        n_A_Buf9[36]=eval(ARG_RC21.value),
        n_A_Buf9[37]=eval(ARG_RC22.value),
        n_A_Buf9[38]=eval(ARG_RC23.value),
        n_A_Buf9[39]=eval(ARG_RC24.value),
        n_A_Buf9[40]=eval(ARG_RC25.value),
        n_A_Buf9[41]=eval(ARG_RC26.value),
        n_A_Buf9[42]=eval(ARG_RC27.value),
        n_A_Buf9[43]=eval(ARG_RC28.value),
        n_A_Buf9[44]=eval(ARG_RC29.value),
        n_A_Buf9[45]=eval(ARG_RC30.value),
        n_A_Buf9[46]=eval(ARG_RC31.value),
        n_A_Buf9[47]=eval(ARG_RC32.value),
        n_A_Buf9[48]=eval(ARG_RC33.value),
        n_A_Buf9[49]=eval(ARG_RC34.value),
        n_A_Buf9[50]=eval(ARG_RC35.value),
        n_A_Buf9[51]=eval(ARG_RC36.value),
        n_A_Buf9[52]=eval(ARG_RC37.value),
        n_A_Buf9[53]=eval(ARG_RC38.value),
        n_A_Buf9[54]=eval(ARG_RC39.value)
      ),
      n_Skill10SW&&(
        n_B_manual[1]=eval(BRG_RC0.value),
        n_B_manual[2]=eval(Bman1.value),
        n_B_manual[3]=eval(BRG_RC1.value),
        n_B_manual[4]=eval(Bman2.value),
        n_B_manual[5]=eval(BRG_RC2.value),
        n_B_manual[7]=eval(BRG_RC3.value),
        n_B_manual[9]=eval(BRG_RC4.value),
        n_B_manual[21]=eval(BRG_RC10.value),
        n_B_manual[30]=eval(BRG_RC15.value),
        n_B_manual[31]=eval(BRG_RC16.value),
        n_B_manual[34]=eval(BRG_RC19.value),
        n_B_manual[35]=eval(BRG_RC20.value),
        n_B_manual[36]=eval(BRG_RC21.value),
        n_B_manual[37]=eval(BRG_RC22.value),
        n_B_manual[38]=eval(BRG_RC23.value),
        n_B_manual[39]=eval(BRG_RC24.value),
        n_B_manual[40]=eval(BRG_RC25.value),
        n_B_manual[41]=eval(BRG_RC26.value),
        n_B_manual[42]=eval(BRG_RC27.value),
        n_B_manual[43]=eval(BRG_RC28.value),
        n_B_manual[44]=eval(BRG_RC29.value),
        n_B_manual[48]=eval(BRG_RC33.value),
        n_B_manual[49]=eval(BRG_RC34.value),
        n_B_manual[50]=eval(BRG_RC35.value),
        n_B_manual[51]=eval(BRG_RC36.value),
        n_B_manual[52]=eval(BRG_RC37.value),
        n_B_manual[53]=eval(BRG_RC38.value),
        n_B_manual[54]=eval(BRG_RC39.value)
      ),
      i=0;22>=i;i++
    ) n_B[i]=MonsterOBJ[B_Enemy.value][i];
    n_A_BodyZokusei=StPlusCard(198),
    0==n_A_BodyZokusei&&(n_A_BodyZokusei=StPlusCalc2(198)),
    13!=n_A_JOB&&27!=n_A_JOB||!CardNumSearch(456)||(n_A_BodyZokusei=6),
    n_A_Buf6[6]&&(n_A_BodyZokusei=6),
    n_A_Buf6[13]&&(n_A_BodyZokusei=2),
    n_A_Buf6[15]&&(n_A_BodyZokusei=1),
    n_A_Buf6[8]&&(n_A_BodyZokusei=9),
    myInnerHtml("A_BodyELEMENT",ZokuseiOBJ[n_A_BodyZokusei]+"1",0);
    for(var i=0;6>=i;i++) n_Delay[i]=0;
    for(i=1;200>=i;i++) n_tok[i]=0,n_tok[i]+=StPlusCalc2(i),n_tok[i]+=StPlusCard(i);
    {
      // Movement Speed
      var t=777;
      for(var a=0,e=0;20>=e;e++) {
        for(var n=0;0!=ItemOBJ[n_A_Equip[e]][n+11];n+=2) {
          209==ItemOBJ[n_A_Equip[e]][n+11]&&(a=ItemOBJ[n_A_Equip[e]][n+12],(t==777)?(t=a):(t<a)&&(t=a));
        }
      }
      (t==777)&&(t=0);
      n_tok[209]=t,n_tok[209]+=StPlusCard(209);
      n_tok[210]=0,n_tok[210]+=StPlusCalc2(210),n_tok[210]+=StPlusCard(210);
    }
    for(i=290;339>=i;i++) n_tok[i]=0,n_tok[i]+=StPlusCalc2(i),n_tok[i]+=StPlusCard(i);
    for(i=650;659>=i;i++) n_tok[i]=0,n_tok[i]+=StPlusCalc2(i),n_tok[i]+=StPlusCard(i);
    for(
      StPlusCalc(),
      restrictEquipslot(),
      equip_restrict?(
        n_tok[195]?(A_LEFT_DEF_PLUS.disabled=!0,A_LEFT_DEF_PLUS.value=0,A_left.disabled=!0,A_left.value=305,A_left_card.disabled=!0,A_left_card.value=0):
        9==n_A_WeaponType&&(A_LEFT_DEF_PLUS.disabled=!1,A_left.disabled=!1,card_restrict&&0!=ItemOBJ[A_left.value][5]&&(A_left_card.disabled=!1)),
        1==n_tok[200]?
          (A_head2.disabled=!0,A_head2.value=243,A_head2_card.disabled=!0,A_head2_card.value=0,A_head3.disabled=!1):
        2==n_tok[200]?
          (A_head2.disabled=!1,A_head2_card.disabled=!1,A_head3.disabled=!0,A_head3.value=268):
        3==n_tok[200]?
          (A_head3.disabled=!0,A_head3.value=268):
        n_tok[200]>=4?
          (A_head2.disabled=!0,A_head2.value=243,A_head2_card.disabled=!0,A_head2_card.value=0,A_head3.disabled=!0,A_head3.value=268):
          (A_head2.disabled=!1,A_head3.disabled=!1)
      ):(
        A_LEFT_DEF_PLUS.disabled=!1,A_left.disabled=!1,
        card_restrict=eval(document.getElementById("restrict_cardslot").checked),
        card_restrict||(A_left_card.disabled=!1,A_head2_card.disabled=!1),
        A_head2.disabled=!1,
        A_head3.disabled=!1
      ),
      10!=n_A_WeaponType&&14!=n_A_WeaponType&&15!=n_A_WeaponType&&17!=n_A_WeaponType&&18!=n_A_WeaponType&&19!=n_A_WeaponType&&20!=n_A_WeaponType&&21!=n_A_WeaponType?(
        n_A_ATK_w=Math.round(Math.floor(n_A_STR/10)*Math.floor(n_A_STR/10)),n_A_ATK=n_A_STR+n_A_ATK_w+Math.floor(n_A_DEX/5)+Math.floor(n_A_LUK/5)
      ):(
        n_A_ATK_w=Math.round(Math.floor(n_A_DEX/10)*Math.floor(n_A_DEX/10)),n_A_ATK=n_A_DEX+n_A_ATK_w+Math.floor(n_A_STR/5)+Math.floor(n_A_LUK/5)
      ),
      w=n_tok[17],
      w+=n_A_Buf9[40],
      n_A_Buf7[38]?
        w+=30:
      n_A_Buf7[9]||n_A_Buf7[46]?
        w+=20:
      n_A_Buf7[29]?
        w+=15:
      n_A_Buf7[2]&&
        (w+=10),
      SkillSearch(146)&&(w+=3),
      SkillSearch(420)&&(w+=100),
      w+=Math.floor(n_A_JobLV/10)*CardNumSearch(492),
      4==n_A_JobClass()&&(w+=10*EquipNumSearch(1120)),
      676==n_A_Equip[2]&&(w+=2*n_A_HEAD_DEF_PLUS),
      1165==n_A_Equip[0]&&(w+=10*SkillSearch(311)),
      1714==n_A_Equip[7]&&(w+=2*n_A_SHOULDER_DEF_PLUS),
      1723==n_A_Equip[6]&&(w+=3*n_A_BODY_DEF_PLUS),
      SU_AGI>=90&&(w+=10*EquipNumSearch(442)),
      1814==n_A_Equip[2]&&(w+=Math.floor(SU_STR/4),w+=Math.floor(n_A_HEAD_DEF_PLUS/3)),
      SU_STR>=80&&267==n_A_card[12]&&(w+=20),
      SU_STR>=95&&621==n_A_Equip[0]&&(w+=340),
      SU_STR>=44&&625==n_A_Equip[0]&&(w+=44),
      SU_STR>=95&&1160==n_A_Equip[0]&&(w+=20),
      SU_LUK>=90&&1164==n_A_Equip[0]&&(w+=20),
      (953==n_A_Equip[2]||1261==n_A_Equip[2])&&(w+=Math.floor(2*n_A_JobLV/7)),
      n_A_HEAD_DEF_PLUS>=5&&1218==n_A_Equip[2]&&(w+=n_A_HEAD_DEF_PLUS-4),
      n_A_HEAD_DEF_PLUS>=5&&1495==n_A_Equip[2]&&(w+=n_A_HEAD_DEF_PLUS-4),
      n_A_HEAD_DEF_PLUS>=7&&1274==n_A_Equip[2]&&(w+=15),
      n_A_HEAD_DEF_PLUS>=7&&1474==n_A_Equip[2]&&(w+=15),
      n_A_HEAD_DEF_PLUS>=7&&1275==n_A_Equip[2]&&(w+=15),
      n_A_HEAD_DEF_PLUS>=7&&1475==n_A_Equip[2]&&(w+=15),
      n_A_HEAD_DEF_PLUS>=7&&1276==n_A_Equip[2]&&(w+=15),
      n_A_HEAD_DEF_PLUS>=7&&1477==n_A_Equip[2]&&(w+=15),
      n_A_HEAD_DEF_PLUS>=7&&1479==n_A_Equip[2]&&(w+=15),
      n_A_HEAD_DEF_PLUS>=7&&1480==n_A_Equip[2]&&(w+=15),
      n_A_HEAD_DEF_PLUS>=7&&1291==n_A_Equip[2]&&(w+=5),
      10==n_A_HEAD_DEF_PLUS&&1290==n_A_Equip[2]&&(w+=5),
      n_A_SHOULDER_DEF_PLUS>=7&&SU_STR>=90&&1472==n_A_Equip[7]&&(w+=20),
      n_A_SHOULDER_DEF_PLUS>=9&&SU_STR>=90&&1472==n_A_Equip[7]&&(w+=10),
      !SkillSearch(433)||20!=n_A_WeaponType&&0!=n_A_WeaponType||(w+=20+10*SkillSearch(433)),
      0==n_A_Buf6[0]&&n_A_Buf6[1]>=1&&3==n_A_BodyZokusei&&(w+=10*n_A_Buf6[1]),
      n_A_ATK+=w,
      V_ATK=Math.floor(n_A_Weapon_ATK+n_A_Weapon2_ATK+n_A_ATK)-Math.floor(n_A_LUK/5),
      SkillSearch(256)&&(V_ATK+=.05*V_ATK*SkillSearch(256)),
      SkillSearch(12)&&(V_ATK+=.32*V_ATK),
      n_A_Buf7[17]&&(V_ATK+=.05*V_ATK),
      n_A_Buf6[5]&&(V_ATK+=Math.floor((.02+.03*n_A_Buf6[5])*V_ATK)),
      n_A_Buf6[5]&&n_A_Buf7[31]?V_ATK+=0:n_A_Buf7[31]&&(V_ATK+=Math.floor(.05*V_ATK)),
      V_ATK<0&&(V_ATK=0),
      1813==n_A_Equip[4]&&(1===n_A_JobClass()||2==n_A_JobClass()||4==n_A_JobClass()||6==n_A_JobClass()||41==n_A_JobClass()||15==n_A_JobClass2()||44==n_A_JOB||45==n_A_JOB)&&(n_tok[87]+=3),
      w=n_tok[87],
      w+=n_A_Buf9[53],
      SkillSearch(342)&&(w+=SkillSearch(380)<=1?0:2*SkillSearch(342)*SkillSearch(380)),
      n_A_ATK<0&&(n_A_ATK=0),
      n_A_ATK=Math.floor(n_A_ATK*(100+w)/100),
      wImp=5*n_A_Buf2[2],
      n_A_Buf3[9]&&(wImp+=25+25*n_A_Buf3[9]),
      !n_A_Buf3[10]||4!=n_A_WeaponLV&&4!=n_A_Weapon2LV||(V_ATK+=50+25*n_A_Buf3[10]),
      0==n_A_Buf6[0]&&n_A_Buf6[1]>=1&&3==n_A_BodyZokusei&&(V_ATK+=10*n_A_Buf6[1]),
      1==n_A_Buf2[19]&&(V_ATK=2*V_ATK),
      myInnerHtml("A_ATK2",Math.floor(wImp+V_ATK)+"+"+(n_A_WeaponLV_seirenATK+n_A_Weapon2LV_seirenATK),0),
      myInnerHtml("A_RealATK",wImp+Math.floor(V_ATK*(100+w)/100)+n_A_WeaponLV_seirenATK+n_A_Weapon2LV_seirenATK+n_A_WeaponLV_Minplus+"~"+(wImp+Math.floor(V_ATK*(100+w)/100)+n_A_WeaponLV_seirenATK+n_A_Weapon2LV_seirenATK+n_A_WeaponLV_Maxplus),0),

      JobHP_A=new Array(0,70,50,40,50,30,40,150,110,75,85,55,90,110,85,90 ,75,75,75,90,0,150,110,75,85,55,90,110,85,90 ,75,75,75,90,0,0,0,0,0,0,0,70,90 ,75,75,84),
      JobHP_B=new Array(5,5 ,5 ,5 ,5 ,5 ,5 ,5  ,5  ,5 ,5 ,5 ,5 ,7  ,5 ,6.5,3 ,3 ,5 ,5 ,5,5  ,5  ,5 ,5 ,5 ,5 ,7  , 5,6.5, 3, 3, 5, 5,0,0,0,0,0,0,0, 5,6.5, 5, 3,3.5),
      wHPSL=0,
      43==n_A_JOB&&n_A_BaseLV>=70&&(
        n_A_BaseLV<=79?
          wHPSL=40*(n_A_BaseLV-70):
        n_A_BaseLV<=84?
          wHPSL=50*(n_A_BaseLV-80):
        n_A_BaseLV<=89?
          wHPSL=50*(n_A_BaseLV-80)-10:
        n_A_BaseLV<=92?
          wHPSL=50*(n_A_BaseLV-90):
        n_A_BaseLV<=97?
          wHPSL=50*(n_A_BaseLV-90)-10 :
        n_A_BaseLV==98?
          wHPSL=375:
          wHPSL=4
      ),
      w=0,
      i=2;i<=n_A_BaseLV;i++
    ) w+=Math.round(JobHP_A[n_A_JOB]*i/100);
    n_A_MaxHP=Math.floor(JobHP_B[n_A_JOB]*n_A_BaseLV+35+w),
    44==n_A_JOB&&(
      NinHP=new Array(131,137,144,151,159,167,175,184,193,202,212,222,232,243,254,265,277,289,301,316,331,346,364,382,400,420,440,460,482,504,526,548,572,596,620,646,672,698,
        726,754,784,814,844,876,908,940,975,1010,1100,1140,1180,1220,1260,1300,1340,1385,1430,1475,1520,1565,1615,1665,1715,1765,1815,1880,1935,1990,2045,2100,2160,2200,2280,
        2340,2400,2460,2520,2580,2640,2705,2770,2835,2900,2965,3030,3100,3170,3240,3310,3380,3455,3530,3605,3680,3760,3840,3920,4e3,4080),
      n_A_MaxHP=NinHP[n_A_BaseLV-1]
    ),
    45==n_A_JOB&&n_A_BaseLV>=10&&(
      GunHP=new Array(202,212,222,232,243,254,265,277,289,301,316,331,346,364,382,400,420,440,460,490,520,550,580,610,650,680,710,740,770,800,830,860,890,920,950,990,1020,1050,
        1080,1110,1140,1180,1230,1280,1330,1395,1455,1515,1575,1635,1695,1760,1820,1885,1950,2015,2080,2145,2210,2275,2340,2410,2480,2550,2620,2690,2760,2830,2900,2970,3040,3115,
        3190,3265,3340,3415,3490,3565,3640,3715,3790,3870,3950,4030,4110,4190,4270,4350,4430,4510),
      n_A_MaxHP=GunHP[n_A_BaseLV-10]
    ),
    20==n_A_JOB&&99==n_A_BaseLV&&(n_A_MaxHP+=2e3),
    n_Tensei&&(n_A_MaxHP=Math.floor(125*n_A_MaxHP/100));
    var q=document.calcForm.A_youshi.checked;
    if(
      eval(A_youshi.checked)?(n_A_MaxHP=Math.floor(70*n_A_MaxHP/100),myInnerHtml("A_BodySIZE","Demi-Human & Small",0)):myInnerHtml("A_BodySIZE","Demi-Human & Medium",0),
      n_A_MaxHP=Math.floor((n_A_MaxHP-wHPSL)*(100+n_A_VIT)/100),
      41==n_A_JOB&&n_A_BaseLV>=70&&(
        n_A_BaseLV<=79?
          n_A_MaxHP=Math.floor((2127+10*(n_A_BaseLV-70))*(100+n_A_VIT)/100):
        n_A_BaseLV<=89?
          n_A_MaxHP=Math.floor((2200+50*(n_A_BaseLV-80))*(100+n_A_VIT)/100):
        n_A_BaseLV<=99&&(
          n_A_MaxHP=(2700+50*(n_A_BaseLV-90))*(100+n_A_VIT)/100,
          SkillSearch(345)&&(n_A_MaxHP=3*n_A_MaxHP),
          n_A_MaxHP=Math.floor(n_A_MaxHP)
        )
      ),
      42==n_A_JOB&&n_A_BaseLV>=70&&(
        wKenseiHP=[3455,3524,3593,3663,3834,3806,3878,3951,4025,4500],
        n_A_BaseLV<=79?
          n_A_MaxHP=Math.floor((2670+10*(n_A_BaseLV-70))*(100+n_A_VIT)/100):
        n_A_BaseLV<=89?
          n_A_MaxHP=Math.floor((3e3+20*(n_A_BaseLV-80))*(100+n_A_VIT)/100):
        n_A_BaseLV<=99&&
          (n_A_MaxHP=Math.floor(wKenseiHP[n_A_BaseLV-90]*(100+n_A_VIT)/100))
      ),
      1==n_A_Buf7[39]?
        n_A_MaxHP+=Math.floor(500+10*n_A_BaseLV/3):
      2==n_A_Buf7[39]?
        n_A_MaxHP+=Math.floor(1500+10*n_A_BaseLV/3):
      3==n_A_Buf7[39]&&(
        n_A_MaxHP+=Math.floor(2500+10*n_A_BaseLV/3)
      ),
      n_A_MaxHP+=200*SkillSearch(156),
      w=0,
      w+=n_tok[13],
      n_A_BaseLV<=79&&(w+=400*EquipNumSearch(883)),
      5==n_A_JobClass()&&(w-=100*CardNumSearch(474)),
      0==n_A_JobClass()&&(w+=30*EquipNumSearch(1116)),
      1==n_A_JobClass()&&(w+=500*CardNumSearch(477)),
      186==n_A_card[11]&&(w-=40*n_A_BODY_DEF_PLUS),
      836==n_A_Equip[8]&&(w+=10*n_A_BaseLV),
      859==n_A_Equip[6]&&(w+=20*n_A_BaseLV),
      762==n_A_Equip[6]&&(w+=20*n_A_BaseLV),
      EquipNumSearch(770)&&(w+=3*n_A_BaseLV),
      986==n_A_Equip[6]&&(w+=7*n_A_BaseLV),
      1172==n_A_Equip[0]&&(w+=25*n_A_Weapon_ATKplus),
      EquipNumSearch(1058)&&(w+=10*n_A_BaseLV),
      n_A_BODY_DEF_PLUS>=9&&225==n_A_card[11]&&(w+=800),
      n_A_Weapon_ATKplus>=6&&1168==n_A_Equip[0]&&(w-=200*(n_A_Weapon_ATKplus-5)),
      0!=n_A_JOB&&20!=n_A_JOB||1670!=n_A_Equip[3]||(w+=80),
      536==n_A_Equip[8]&&(wHPVS=n_A_JobClass(),(3==wHPVS||4==wHPVS||5==wHPVS)&&(w+=5*n_A_BaseLV)),
      n_A_MaxHP+=w,
      n_A_MaxHP<1&&(n_A_MaxHP=1),
      w=0,
      w+=n_tok[15],
      n_A_Buf3[3]&&(w+=5+2*n_A_Buf3[3]+n_A_Buf3[33]+Math.floor(n_A_Buf3[23]/10)),
      n_A_Buf2[17]&&(w+=100),
      n_A_Buf7[16]&&(w+=3),
      715==n_A_Equip[8]&&(w-=n_A_SHOES_DEF_PLUS),
      1730==n_A_Equip[6]&&(w+=n_A_BODY_DEF_PLUS),
      SU_VIT>=80&&267==n_A_card[12]&&(w+=3),
      n_A_SHOES_DEF_PLUS>=9&&304==n_A_card[13]&&(w+=10),
      n_A_SHOES_DEF_PLUS<=4&&407==n_A_card[13]&&(w+=4),
      n_A_SHOES_DEF_PLUS>=8&&1732==n_A_Equip[8]&&(w+=n_A_SHOES_DEF_PLUS-7),
      405!=n_A_card[12]||1!=n_A_JobClass()&&2!=n_A_JobClass()&&6!=n_A_JobClass()||(w+=5),
      n_A_MaxHP=n_A_MaxHP*(100+w)/100,
      1==n_A_Buf6[0]&&n_A_Buf6[1]>=1&&1==n_A_BodyZokusei
    ){
      var dHP=[5,9,12,14,15];
      n_A_MaxHP=n_A_MaxHP*(100+dHP[n_A_Buf6[1]-1])/100
    }
    for(
      SkillSearch(258)&&(n_A_MaxHP*=3),
      n_A_MaxHP=Math.floor(n_A_MaxHP),
      n_A_MaxHP>=100?n_A_MaxHP>=1e4?myInnerHtml("A_MaxHP"," "+n_A_MaxHP,0):myInnerHtml("A_MaxHP",n_A_MaxHP,0):myInnerHtml("A_MaxHP"," "+n_A_MaxHP,0),
      JobSP_A=new Array(1,2,2,5,2,6,3,3,4,8,4,9,4,4.7,5,4.7,6,6,7,4,1,3,4,8,4,9,4,4.7,5,4.7,6,6,7,4,0,0,0,0,0,0,0,2,4.7,9,3.75,3.75),
      wSPSL=0,
      43==n_A_JOB&&n_A_BaseLV>=70&&(
        n_A_BaseLV<80?
          wSPSL=4*(n_A_BaseLV-70)+5:
        n_A_BaseLV<90?
          wSPSL=4*(n_A_BaseLV-80):
        n_A_BaseLV<93?
          wSPSL=4*(n_A_BaseLV-90):
        n_A_BaseLV<99?
          wSPSL=4*(n_A_BaseLV-90)-10:
          wSPSL=1
      ),
      n_A_MaxSP=10+n_A_BaseLV*JobSP_A[n_A_JOB]-wSPSL,
      44==n_A_JOB&&(
        n_A_BaseLV<=20?
          n_A_MaxSP=11+3*n_A_BaseLV:
        n_A_BaseLV<=40?
          n_A_MaxSP=71+4*(n_A_BaseLV-20):
        n_A_BaseLV<=60?
          n_A_MaxSP=151+5*(n_A_BaseLV-40):
        n_A_BaseLV<=80?
          n_A_MaxSP=251+6*(n_A_BaseLV-60):
          n_A_MaxSP=370+8*(n_A_BaseLV-80)
      ),
      45==n_A_JOB&&(
        n_A_BaseLV<=25?
          n_A_MaxSP=10+3*n_A_BaseLV:
        n_A_BaseLV<=35?
          n_A_MaxSP=85+4*(n_A_BaseLV-25):
        n_A_BaseLV<=40?
          n_A_MaxSP=126+3*(n_A_BaseLV-35):
        n_A_BaseLV<=50?
          n_A_MaxSP=141+4*(n_A_BaseLV-40):
        n_A_BaseLV<=75?
          n_A_MaxSP=181+5*(n_A_BaseLV-50):
        n_A_BaseLV<=78?
          n_A_MaxSP=306+6*(n_A_BaseLV-75):
          n_A_MaxSP=330+6*(n_A_BaseLV-78)
      ),
      n_Tensei&&(n_A_MaxSP=Math.floor(125*n_A_MaxSP/100)),
      eval(A_youshi.checked)&&(n_A_MaxSP=Math.floor(70*n_A_MaxSP/100)),
      n_A_MaxSP=Math.floor(n_A_MaxSP*(100+n_A_INT)/100),
      1==n_A_Buf7[40]?
        n_A_MaxSP=Math.floor(n_A_MaxSP*(95+n_A_BaseLV/10)/100):
      2==n_A_Buf7[40]?
        n_A_MaxSP=Math.floor(n_A_MaxSP*(100+n_A_BaseLV/10)/100):
      3==n_A_Buf7[40]&&
        (n_A_MaxSP=Math.floor(n_A_MaxSP*(105+n_A_BaseLV/10)/100)),
      41==n_A_JOB&&n_A_BaseLV>=70&&(
        n_A_BaseLV<=79?
          n_A_MaxSP=Math.floor((150+1*(n_A_BaseLV-70))*(100+n_A_INT)/100):
        n_A_BaseLV<=89?
          n_A_MaxSP=Math.floor((160+1*(n_A_BaseLV-70))*(100+n_A_INT)/100):
        n_A_BaseLV<=99&&(
          n_A_MaxSP=190*(100+n_A_INT)/100,
          SkillSearch(345)&&(n_A_MaxSP=3*n_A_MaxSP),
          n_A_MaxSP=Math.floor(n_A_MaxSP)
        )
      ),
      42==n_A_JOB&&n_A_BaseLV>=70&&(
        n_A_BaseLV<=79?
          n_A_MaxSP=Math.floor((339+2*(n_A_BaseLV-70))*(100+n_A_INT)/100):
        n_A_BaseLV<=89?
          n_A_MaxSP=Math.floor((386+2*(n_A_BaseLV-80))*(100+n_A_INT)/100):
        n_A_BaseLV<=99&&(
          n_A_MaxSP=Math.floor((430+3*(n_A_BaseLV-90))*(100+n_A_INT)/100))
      ),
      w=0,
      w+=n_tok[14],
      w+=StPlusCalc2(4),
      w+=StPlusCalc2(7),
      w+=30*SkillSearch(372),
      n_A_BaseLV<=79&&(w+=200*EquipNumSearch(883)),
      179==n_A_card[9]&&(w+=40),
      3==n_A_JobClass()&&(w+=50*EquipNumSearch(1118)),
      5==n_A_JobClass()&&(w+=100*CardNumSearch(474)+100*CardNumSearch(476)),
      859==n_A_Equip[6]&&(w+=5*n_A_BaseLV),
      762==n_A_Equip[6]&&(w+=5*n_A_BaseLV),
      EquipNumSearch(770)&&(w+=n_A_JobLV),
      986==n_A_Equip[6]&&(w+=Math.floor(.5*n_A_BaseLV)),
      1671==n_A_Equip[0]&&(w+=50*Math.floor(n_A_Weapon_ATKplus/2)),
      1193==n_A_Equip[7]&&(w+=Math.floor(n_A_BaseLV/3)+10*n_A_SHOULDER_DEF_PLUS),
      EquipNumSearch(1058)&&(w+=2*n_A_BaseLV),
      n_A_HEAD_DEF_PLUS>=9&&1818==n_A_Equip[2]&&(w+=5),
      n_A_HEAD_DEF_PLUS<=4&&179==n_A_card[8]&&(w+=40),
      n_A_HEAD_DEF_PLUS>=9&&298==n_A_card[8]&&(w+=150),
      n_A_Weapon_ATKplus>=9&&642==n_A_Equip[0]&&(w+=300),
      n_A_Weapon_ATKplus>=6&&1168==n_A_Equip[0]&&(w-=100*(n_A_Weapon_ATKplus-5)),
      n_A_HEAD_DEF_PLUS>=6&&1593==n_A_Equip[2]&&(w+=10*(n_A_HEAD_DEF_PLUS-5)),
      n_A_HEAD_DEF_PLUS>=6&&EquipNumSearch(1581)&&(w+=n_A_HEAD_DEF_PLUS),
      0!=n_A_JOB&&20!=n_A_JOB||1670!=n_A_Equip[3]||(w+=30),
      536==n_A_Equip[8]&&(wSPVS=n_A_JobClass(),(1==wSPVS||2==wSPVS||6==wSPVS)&&(w+=2*n_A_JobLV)),
      n_A_MaxSP+=w,
      n_A_MaxSP<0&&(n_A_MaxSP=0),
      w=0,
      w+=n_tok[16],
      w+=SkillSearch(269),
      w+=2*SkillSearch(274),
      n_A_Buf2[18]&&(w+=100+n_tok[16]),
      n_A_Buf7[16]&&(w+=3),
      715==n_A_Equip[8]&&(w-=n_A_SHOES_DEF_PLUS),
      n_A_HEAD_DEF_PLUS>=6&&EquipNumSearch(1581)&&(w+=n_A_HEAD_DEF_PLUS),
      n_A_SHOES_DEF_PLUS>=9&&304==n_A_card[13]&&(w+=10),
      n_A_SHOES_DEF_PLUS<=4&&407==n_A_card[13]&&(w+=4),
      405!=n_A_card[12]||3!=n_A_JobClass()&&4!=n_A_JobClass()&&5!=n_A_JobClass()||(w+=5),
      n_A_Buf3[6]&&(
        w+=SRV?
          15+n_A_Buf3[6]+n_A_Buf3[26]/10+n_A_Buf3[36]:
          15+n_A_Buf3[6]+Math.floor(n_A_Buf3[36]/2)+Math.floor(n_A_Buf3[26]/10)
      ),
      n_A_MaxSP=Math.floor(n_A_MaxSP*(1+w/100)),
      n_A_MaxSP>=100?myInnerHtml("A_MaxSP",n_A_MaxSP,0):myInnerHtml("A_MaxSP"," "+n_A_MaxSP,0),
      n_A_DEF=n_tok[18],
      i=2;10>=i;i++
    ) n_A_DEF+=ItemOBJ[n_A_Equip[i]][3];
    for(
      521==n_A_Equip[0]&&(n_A_Weapon_ATKplus<=5?n_A_DEF+=2:n_A_Weapon_ATKplus>=9?n_A_DEF+=7:n_A_DEF+=5),
      n_A_LEFT_DEF_PLUS<=5&&222==n_A_card[10]&&(n_A_DEF+=2),
      n_A_BODY_DEF_PLUS<=5&&283==n_A_card[11]&&(n_A_DEF+=2),
      n_A_HEAD_DEF_PLUS>=7&&1272==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1273==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1274==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1474==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1275==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1475==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1276==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1280==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1282==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1286==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1287==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1486==n_A_Equip[2]&&(n_A_DEF+=2),
      n_A_HEAD_DEF_PLUS>=7&&1487==n_A_Equip[2]&&(n_A_DEF+=2),
      n_A_HEAD_DEF_PLUS>=7&&1485==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1550==n_A_Equip[2]&&(n_A_DEF+=1),
      n_A_Buf3[9]&&(n_A_DEF+=2+2*n_A_Buf3[9]),
      n_A_Buf7[32]&&(n_A_DEF+=3),
      1==n_A_JobClass()&&(n_A_DEF+=2*EquipNumSearch(1117)),
      658==n_A_Equip[0]&&(n_A_DEF+=n_A_Weapon_ATKplus),
      715==n_A_Equip[8]&&(n_A_DEF+=Math.floor(n_A_SHOES_DEF_PLUS/2)),
      942==n_A_Equip[0]&&(n_A_DEF+=Math.floor(n_A_Weapon_ATKplus/2)),
      1350==n_A_Equip[2]&&(n_A_DEF-=n_A_HEAD_DEF_PLUS),
      EquipNumSearch(1026)&&(n_A_DEF-=5),
      EquipNumSearch(764)&&(SRV?n_A_DEF-=n_A_HEAD_DEF_PLUS+n_A_LEFT_DEF_PLUS:n_A_DEFplus-=n_A_HEAD_DEF_PLUS+n_A_LEFT_DEF_PLUS),
      EquipNumSearch(742)&&1==n_A_JobClass()&&(n_A_DEF+=6),
      986!=n_A_Equip[6]||1!=n_A_JobClass()&&2!=n_A_JobClass()&&6!=n_A_JobClass()||(n_A_DEF+=3),
      809==n_A_Equip[2]&&(n_A_DEFplus-=n_A_HEAD_DEF_PLUS),
      (TimeItemNumSearch(9)||TimeItemNumSearch(50))&&(n_A_DEF+=20),
      (TimeItemNumSearch(33)||TimeItemNumSearch(51))&&(n_A_DEF-=20),
      n_A_totalDEF=n_A_DEF+Math.round(7*n_A_DEFplus/10),
      n_tok[24]&&(n_A_totalDEF=Math.floor(n_A_totalDEF/n_tok[24])),
      n_tok[85]&&(n_A_totalDEF-=Math.floor(n_A_totalDEF*n_tok[85]/100)),
      n_A_Buf6[21]&&(n_A_totalDEF-=Math.floor(25*n_A_totalDEF/100)),
      SkillSearch(256)&&(n_A_totalDEF=Math.floor(n_A_totalDEF*(1-.05*SkillSearch(256)))),
      (n_A_Buf6[13]||n_A_Buf6[15])&&(n_A_totalDEF-=Math.floor(.5*n_A_totalDEF)),
      n_A_Buf2[21]&&(n_A_totalDEF+=Math.floor(.25*n_A_totalDEF)),
      SkillSearch(196)&&(n_A_totalDEF=90),
      document.calcForm.B_num.value>=2&&(n_A_totalDEF-=Math.floor(n_A_totalDEF*(document.calcForm.B_num.value-1)*5/100)),
      n_A_totalDEF>=100&&(n_A_totalDEF=99),
      i=0;11>i;i++
    ) n_A_Buf2[4]==i&&(P_VIT1=.05*n_A_VIT*i);
    if(
      n_A_DEFVIT=parseInt(n_A_VIT+P_VIT1),
      n_A_Buf7[31]&&(n_A_DEFVIT-=Math.floor(.1*n_A_DEFVIT)),
      n_A_Buf6[5]&&(n_A_DEFVIT-=Math.floor((.05+.05*n_A_Buf6[5])*n_A_DEFVIT)),
      SkillSearch(258)&&(n_A_totalDEF=0,n_A_DEFVIT=0),
      myInnerHtml("A_totalDEF",n_A_totalDEF+"+"+n_A_DEFVIT,0),
      n_A_VITDEF=new Array,
      n_A_VITDEF[0]=Math.floor(.5*n_A_VIT)+Math.floor(.3*n_A_VIT),
      n_A_VITDEF[2]=Math.floor(.5*n_A_VIT)+Math.floor(n_A_VIT*n_A_VIT/150)-1,
      n_A_VITDEF[2]>n_A_VITDEF[0]?
        n_A_VITDEF[1]=(n_A_VITDEF[0]+n_A_VITDEF[2])/2:
        (n_A_VITDEF[1]=n_A_VITDEF[0],n_A_VITDEF[2]=n_A_VITDEF[0]),
      SkillSearch(12)
    ) for(i=0;2>=i;i++) n_A_VITDEF[i]=Math.floor(.45*n_A_VITDEF[i]);
    else if(n_A_Buf6[5])
      for(i=0;2>=i;i++) n_A_VITDEF[i]=Math.floor(n_A_VITDEF[i]*(.95-.05*n_A_Buf6[5]));
    else if(n_A_Buf7[31])
      for(i=0;2>=i;i++) n_A_VITDEF[i]=Math.floor(.9*n_A_VITDEF[i]);
    if(n_tok[24])
      for(i=0;2>=i;i++) n_A_VITDEF[i]=Math.floor(n_A_VITDEF[i]/n_tok[24]);
    if(SkillSearch(256))
      for(i=0;2>=i;i++) n_A_VITDEF[i]=Math.floor(n_A_VITDEF[i]*(1-.05*SkillSearch(256)));
    if(n_A_Buf2[4])
      for(i=0;2>=i;i++) n_A_VITDEF[i]=Math.floor(n_A_VITDEF[i]*(1+.05*n_A_Buf2[4]));
    if(n_A_Buf6[21])
      for(i=0;2>=i;i++) n_A_VITDEF[i]-=Math.floor(25*n_A_VITDEF[i]/100);
    if(SkillSearch(258))
      for(i=0;2>=i;i++) n_A_VITDEF[i]=0;
    if(document.calcForm.B_num.value>=2)
      for(i=0;2>=i;i++) n_A_VITDEF[i]-=Math.floor(n_A_VITDEF[i]*(document.calcForm.B_num.value-1)*5/100);
    if(
      n_A_MDEF=n_tok[19],
      3==n_A_JobClass()&&(n_A_MDEF+=CardNumSearch(383)),
      n_A_Buf7[33]&&(n_A_MDEF+=3),
      213==n_A_card[9]&&(n_A_MDEF+=5),
      213==n_A_card[16]&&(n_A_MDEF+=5),
      213==n_A_card[17]&&(n_A_MDEF+=5),
      213==n_A_card[18]&&(n_A_MDEF+=5),
      EquipNumSearch(764)&&(n_A_MDEF+=n_A_HEAD_DEF_PLUS+n_A_LEFT_DEF_PLUS),
      1169==n_A_Equip[0]&&(n_A_MDEF+=n_A_Weapon_ATKplus),
      199==n_A_card[11]&&5==n_A_JobClass()&&(n_A_MDEF+=3),
      (EquipNumSearch(809)||1350==n_A_Equip[2])&&(n_A_MDEF+=n_A_HEAD_DEF_PLUS),
      n_A_HEAD_DEF_PLUS<=5&&213==n_A_card[8]&&(n_A_MDEF+=5),
      n_A_LEFT_DEF_PLUS<=5&&222==n_A_card[10]&&(n_A_MDEF+=3),
      n_A_BODY_DEF_PLUS<=5&&283== n_A_card[11]&&(n_A_MDEF+=5),
      n_A_LEFT_DEF_PLUS>=9&&310==n_A_card[10]&&(n_A_MDEF+=5),
      n_A_SHOES_DEF_PLUS<=5&&381==n_A_card[13]&&(n_A_MDEF+=7),
      n_A_HEAD_DEF_PLUS>=6&&1593==n_A_Equip[2]&&(n_A_MDEF+=n_A_HEAD_DEF_PLUS-5),
      n_A_HEAD_DEF_PLUS>=7&&1277==n_A_Equip[2]&&(n_A_MDEF+=1),
      n_A_HEAD_DEF_PLUS>=7&&1281==n_A_Equip[2]&&(n_A_MDEF+=7),
      n_A_HEAD_DEF_PLUS>=7&&1478==n_A_Equip[2]&&(n_A_MDEF+=7),
      n_A_HEAD_DEF_PLUS>=7&&1483==n_A_Equip[2]&&(n_A_MDEF+=5),
      n_A_SHOULDER_DEF_PLUS<=5&&258==n_A_card[12]&&(n_A_MDEF+=8),
      986!=n_A_Equip[6]||3!=n_A_JobClass()&&4!=n_A_JobClass()&&5!=n_A_JobClass()||(n_A_MDEF+=5),
      SkillSearch(9)?n_A_MDEF+=SkillSearch(9):SkillSearch(256)&&(n_A_MDEF+=1),
      (TimeItemNumSearch(9)||TimeItemNumSearch(50))&&(n_A_MDEF-=20),
      (TimeItemNumSearch(33)||TimeItemNumSearch(51))&&(n_A_MDEF+=20),
      (n_A_Buf6[13]||n_A_Buf6[15])&&(n_A_MDEF+=Math.floor(.25*n_A_MDEF)),
      SkillSearch(196)&&(n_A_MDEF=90),
      1!=n_A_JOB&&7!=n_A_JOB&&13!=n_A_JOB&&21!=n_A_JOB&&27!=n_A_JOB&&35!=n_A_JOB&&n_A_MDEF>=99&&(n_A_MDEF=99),
      n_A_INTMDEF=n_A_INT,
      n_A_softMDEF=n_A_INT+Math.floor(n_A_VIT/2),
      n_A_Buf6[4]&&(n_A_softMDEF-=Math.floor(n_A_softMDEF*n_A_Buf6[4]*.12)),
      SkillSearch(258)&&(n_A_MDEF=0,n_A_INTMDEF=0,n_A_softMDEF=0),
      myInnerHtml("A_MDEF",n_A_MDEF+"+"+n_A_INTMDEF,0),
      myInnerHtml("A_RealMDEF",n_A_MDEF+"+"+n_A_softMDEF,0),
      n_A_HIT=n_A_BaseLV+n_A_DEX,
      n_A_HIT+=n_tok[8],
      n_A_HIT+=Math.floor(n_A_JobLV/10)*CardNumSearch(492),
      SRV&&324==n_A_ActiveSkill&&(n_A_HIT+=20),
      n_A_Buf2[20]&&(n_A_HIT+=50),
      n_A_Buf3[4]&&(n_A_HIT+=10+2*n_A_Buf3[4]+n_A_Buf3[34]+Math.floor(n_A_Buf3[24]/10)),
      n_A_Buf7[0]&&(n_A_HIT+=30),
      n_A_Buf7[26]&&(n_A_HIT+=5),
      n_A_Buf7[27]?n_A_HIT+=33:n_A_Buf7[46]?n_A_HIT+=30:n_A_Buf7[18]&&(n_A_HIT+=10),
      10==n_A_WeaponType&&(n_A_HIT+=5*CardNumSearch(465)),
      654==n_A_Equip[0]&&(n_A_HIT+=Math.floor(SU_AGI/10)),
      656==n_A_Equip[0]&&(n_A_HIT-=Math.floor(SU_DEX/3)),
      SU_STR>=90&&(n_A_HIT+=10*EquipNumSearch(442)),
      SU_STR>=95&&1167==n_A_Equip[0]&&(n_A_HIT+=10),
      (3==n_A_WeaponType||2==n_A_WeaponType)&&(n_A_HIT+=5*CardNumSearch(464)),
      EquipNumSearch(1005)&EquipNumSearch(442)&&(n_A_HIT+=Math.floor(n_A_Weapon_ATKplus/2)),
      1176==n_A_Equip[0]&&10==SkillSearch(81)&&(n_A_HIT+=10),
      n_A_HEAD_DEF_PLUS>=7&&1480==n_A_Equip[2]&&(n_A_HIT+=5),
      n_A_HEAD_DEF_PLUS>=7&&1549==n_A_Equip[2]&&(n_A_HIT+=5),
      n_A_HIT+=1*SkillSearch(39),
      n_A_HIT+=2*SkillSearch(148),
      n_A_HIT+=3*SkillSearch(270),
      n_A_HIT+=10*SkillSearch(256),
      n_A_HIT+=1*SkillSearch(426),
      n_A_HIT+=2*SkillSearch(425),
      SkillSearch(421)&&(n_A_HIT-=30),
      SkillSearch(422)&&(n_A_HIT+=20),
      n_A_Buf7[16]&&(n_A_HIT+=Math.floor(.03*n_A_HIT)),
      n_A_Buf6[11]&&(n_A_HIT=Math.round(.75*n_A_HIT)),
      myInnerHtml("A_HIT",n_A_HIT,0),
      myInnerHtml("A_PefHIT",n_tok[86],0),
      n_A_FLEE=n_A_BaseLV+n_A_AGI,
      n_A_FLEE+=n_tok[9],
      24==n_A_JOB&&(n_A_FLEE+=Math.round(SkillSearch(273)/2)),
      SkillSearch(383)&&(n_A_FLEE+=10),
      SkillSearch(356)&&(n_A_FLEE+=Math.floor((n_A_BaseLV+n_A_LUK+n_A_DEX)/10)),
      SkillSearch(421)&&(n_A_FLEE+=30),
      483==n_A_Equip[0]&&(n_A_FLEE-=n_A_BaseLV+SU_AGI),
      1714==n_A_Equip[7]&&(n_A_FLEE+=2*n_A_SHOULDER_DEF_PLUS),
      1718==n_A_Equip[6]&&(n_A_FLEE+=n_A_BODY_DEF_PLUS),
      n_A_Buf2[20]&&(n_A_FLEE+=50),
      n_A_Buf3[0]&&(n_A_FLEE+=n_A_Buf3[0]+Math.floor(n_A_Buf3[30]/2)+Math.floor(n_A_Buf3[20]/10)),
      n_A_Buf7[1]&&(n_A_FLEE+=30),
      n_A_Buf7[28]?n_A_FLEE+=33:n_A_Buf7[46]&&(n_A_FLEE+=30),
      TimeItemNumSearch(1)&&(n_A_FLEE+=30*TimeItemNumSearch(1)),
      SU_STR>=90&&(n_A_FLEE+=10*EquipNumSearch(442)),
      n_A_Buf2[9]&&0==SkillSearch(273)&&(n_A_FLEE+=Math.round(n_A_Buf2[9]/2)),
      2==n_A_JobClass()&&295==n_A_card[12]&&(n_A_FLEE+=20),
      n_A_HEAD_DEF_PLUS>=6&&1555==n_A_Equip[2]&&(n_A_FLEE+=2),
      n_A_HEAD_DEF_PLUS>=5&&1576==n_A_Equip[2]&&(n_A_FLEE+=5),
      n_A_HEAD_DEF_PLUS>=7&&1576==n_A_Equip[2]&&(n_A_FLEE+=2),
      n_A_HEAD_DEF_PLUS>=7&&1541==n_A_Equip[2]&&(n_A_FLEE+=2),
      n_A_HEAD_DEF_PLUS>=7&&1276==n_A_Equip[2]&&(n_A_FLEE+=10),
      n_A_HEAD_DEF_PLUS>=7&&1280==n_A_Equip[2]&&(n_A_FLEE+=10),
      n_A_HEAD_DEF_PLUS>=7&&1282==n_A_Equip[2]&&(n_A_FLEE+=10),
      n_A_HEAD_DEF_PLUS>=7&&1283==n_A_Equip[2]&&(n_A_FLEE+=10),
      n_A_HEAD_DEF_PLUS>=7&&1481==n_A_Equip[2]&&(n_A_FLEE+=10),
      n_A_HEAD_DEF_PLUS>=7&&1550==n_A_Equip[2]&&(n_A_FLEE+=10),
      n_A_HEAD_DEF_PLUS>=9&&1285==n_A_Equip[2]&&(n_A_FLEE+=5),
      n_A_SHOULDER_DEF_PLUS>=9&&271==n_A_card[12]&&(n_A_FLEE+=20),
      n_A_SHOULDER_DEF_PLUS<=4&&401==n_A_card[12]&&(n_A_FLEE+=10),
      n_A_SHOULDER_DEF_PLUS>=9&&403==n_A_card[12]&&(n_A_FLEE+=5),
      2==n_A_Buf6[0]&&n_A_Buf6[1]>=1&&4==n_A_BodyZokusei&&(n_A_FLEE+=3*n_A_Buf6[1]),
      8==n_A_JOB||14==n_A_JOB||22==n_A_JOB||28==n_A_JOB?n_A_FLEE+=4*SkillSearch(14):n_A_FLEE+=3*SkillSearch(14),
      SkillSearch(433)&&(20==n_A_WeaponType||0==n_A_WeaponType)&&(n_A_FLEE-=5*SkillSearch(433)),
      Mikiri=new Array(0,1,3,4,6,7,9,10,12,13,15),
      n_A_FLEE+=Mikiri[SkillSearch(191)],
      document.calcForm.B_num.value>=2
    ){
      var w=document.calcForm.B_num.value-1;
      w>10&&(w=10),
      n_A_FLEE-=Math.floor(n_A_FLEE*w*10/100)
    }
    if(
      SkillSearch(258)&&(n_A_FLEE=Math.round(n_A_FLEE/2)),
      n_A_Buf6[11]&&(n_A_FLEE=Math.round(.75*n_A_FLEE)),
      n_A_Buf6[12]&&(n_A_FLEE=0),
      n_A_Buf6[14]&&(n_A_FLEE=0),
      n_A_Buf6[15]&&(n_A_FLEE=0),
      n_A_FLEE<0&&(n_A_FLEE=0),
      n_A_Buf7[18]&&(n_A_FLEE+=20),
      myInnerHtml("A_FLEE",n_A_FLEE,0),
      myInnerHtml("A_WoeFLEE",Math.floor(.8*n_A_FLEE),0),
      n_A_LUCKY=1+.1*n_A_LUK,
      n_A_LUCKY+=n_tok[11]+n_A_Buf9[38],
      1==n_A_JobClass()&&(n_A_LUCKY+=3*CardNumSearch(354)),
      2==n_A_JobClass()&&391==n_A_card[13]&&(n_A_LUCKY+=5),
      n_A_SHOULDER_DEF_PLUS>6&&1724==n_A_Equip[7]&&(n_A_LUCKY+=n_A_SHOULDER_DEF_PLUS-6),
      n_A_SHOULDER_DEF_PLUS<=4&&401==n_A_card[12]&&(n_A_LUCKY+=1),
      535==n_A_Equip[7]
    ){
      var wHPVS=n_A_JobClass();
      (3==wHPVS||4==wHPVS||5==wHPVS)&&(n_A_LUCKY+=5,n_A_LUCKY+=2*n_A_SHOULDER_DEF_PLUS)
    }
    41==n_A_JobClass()&&678==n_A_Equip[3]&&(n_A_LUCKY+=2),
    n_A_LUCKY=Math.round(10*n_A_LUCKY)/10,
    n_A_LUCKY<0&&(n_A_LUCKY=0),
    myInnerHtml("A_LUCKY",n_A_LUCKY,0),
    n_A_CRI=1+.3*n_A_LUK,
    w=0,
    w+=n_tok[10],
    w+=n_tok[110+n_B[2]],
    w+=Math.floor(n_A_JobLV/10)*CardNumSearch(492),
    24==n_A_JOB&&(w+=SkillSearch(270)),
    SkillSearch(253)&&(w+=50),
    (n_A_Buf7[16]||n_A_Buf7[19])&&(w+=7),
    2==n_A_JobClass()&&(w+=4*CardNumSearch(328)),
    2==n_A_JobClass()&&(w+=CardNumSearch(550)*Math.floor(n_A_HEAD_DEF_PLUS/2)),
    10==n_A_WeaponType&&(w+=5*CardNumSearch(465)),
    402==n_A_card[12]&&(w+=n_A_SHOULDER_DEF_PLUS),
    640==n_A_Equip[0]&&(w+=Math.floor(SU_LUK/5)),
    689==n_A_Equip[6]&&(w+=Math.floor(SU_LUK/10)),
    623==n_A_Equip[0]&&(w+=n_A_Weapon_ATKplus),
    1161==n_A_Equip[0]&&(w+=2*SkillSearch(89)),
    1709==n_A_Equip[7]&&(w+=n_A_SHOULDER_DEF_PLUS),
    SU_AGI>=90&&(w+=10*EquipNumSearch(442)),
    SU_LUK>=80&&267==n_A_card[12]&&(w+=3),
    SU_DEX>=90&&1164==n_A_Equip[0]&&(w+=5),
    (3==n_A_WeaponType||2==n_A_WeaponType)&&(w+=5*CardNumSearch(464)),
    6==n_A_JobClass()&&(w+=5*EquipNumSearch(1122)),
    41==n_A_JobClass()&&675==n_A_Equip[2]&&(w+=5),
    3!=n_A_JobClass()||1!=n_B[2]&&6!=n_B[2]||(w+=9*CardNumSearch(253)),
    n_A_HEAD_DEF_PLUS>=6&&785==n_A_Equip[2]&&(w+=n_A_HEAD_DEF_PLUS-5),
    n_A_HEAD_DEF_PLUS>=7&&1612==n_A_Equip[2]&&(w+=10),
    n_A_HEAD_DEF_PLUS>=8&&1555==n_A_Equip[2]&&(w+=10),
    n_A_Weapon_ATKplus>=6&&7==n_B[2]&&1091==n_A_Equip[0]&&(w+=5),
    10==n_A_WeaponType&&15==n_A_Arrow&&(w+=20),
    (10==n_A_WeaponType||17<=n_A_WeaponType&&n_A_WeaponType<=21)&&(w+=15*CardNumSearch(462)),
    SkillSearch(195)?w+=7.5+2.5*SkillSearch(195):TimeItemNumSearch(34)&&(w+=10),
    n_A_CRI+=w,
    n_A_Buf3[5]&&(n_A_CRI+=10+n_A_Buf3[5]+Math.floor(n_A_Buf3[35]/2)+Math.floor(n_A_Buf3[25]/10)),
    11==n_A_WeaponType&&(n_A_CRI*=2),
    n_A_CRI=Math.round(10*n_A_CRI)/10,
    n_A_Buf6[9]&&(n_A_CRI=0),
    myInnerHtml("A_CRI",n_A_CRI,0),
    n_A_MATK=[0,0,0];
    var w=Math.floor(n_A_INT/7);
    n_A_MATK[0]=n_A_INT+w*w,
    w=Math.floor(n_A_INT/5),
    n_A_MATK[2]=n_A_INT+w*w,
    w=n_tok[88]+n_A_Buf9[42],
    n_A_Buf7[2]&&(w+=10),
    n_A_Buf7[10]||n_A_Buf7[46]?w+=20:n_A_Buf7[30]&&(w+=15),
    1492==n_A_Equip[2]&&89==n_A_Equip[0]&&(w+=10*n_A_Weapon_ATKplus),
    1492==n_A_Equip[2]&&936==n_A_Equip[0]&&(w+=10*n_A_Weapon_ATKplus),
    1561==n_A_Equip[2]&&1563==n_A_Equip[3]&&(w+=30),
    n_A_HEAD_DEF_PLUS>=7&&1280==n_A_Equip[2]&&(w+=15),
    n_A_SHOULDER_DEF_PLUS>=7&&SU_INT>=90&&1472==n_A_Equip[7]&&(w+=30),
    n_A_SHOULDER_DEF_PLUS>=9&&SU_INT>=90&&1472==n_A_Equip[7]&&(w+=20),
    n_A_Buf7[17]&&(w+=Math.floor(.05*w)),
    n_A_MATK[0]+=w,
    n_A_MATK[2]+=w,
    w=100+n_tok[89],
    n_A_Buf6[2]&&(w+=10),
    646==n_A_Equip[0]&&(w+=Math.floor(n_A_Weapon_ATKplus/2)),
    1682==n_A_Equip[0]&&(w+=3*n_A_Weapon_ATKplus),
    1083==n_A_Equip[0]&&(w+=n_A_Weapon_ATKplus),
    1173==n_A_Equip[0]&&(w+=Math.floor(n_A_Weapon_ATKplus/2)),
    1569==n_A_Equip[0]&&(w+=n_A_Weapon_ATKplus),
    EquipNumSearch(737)&&(w+=n_A_Weapon_ATKplus),
    EquipNumSearch(1042)&&(w+=n_A_Weapon_ATKplus),
    (14==n_A_JOB||28==n_A_JOB)&&(w+=10*CardNumSearch(479)),
    484==n_A_Equip[0]&&SU_INT>=70&&(w+=5),
    5==n_A_JobClass()&&CardNumSearch(454)&&(w+=3),
    n_A_HEAD_DEF_PLUS>=9&&177==n_A_card[8]&&(w+=2),
    n_A_HEAD_DEF_PLUS>=5&&1492==n_A_Equip[2]&&(w+=3),
    n_A_HEAD_DEF_PLUS>=5&&1218==n_A_Equip[2]&&(w+=n_A_HEAD_DEF_PLUS-4),
    n_A_HEAD_DEF_PLUS>=5&&1495==n_A_Equip[2]&&(w+=n_A_HEAD_DEF_PLUS-4),
    n_A_HEAD_DEF_PLUS>=6&&1029==n_A_Equip[2]&&(w+=n_A_HEAD_DEF_PLUS-5),
    n_A_HEAD_DEF_PLUS>=7&&565==n_A_Equip[2]&&(w+=1),
    n_A_HEAD_DEF_PLUS>=7&&1284==n_A_Equip[2]&&(w+=3),
    n_A_HEAD_DEF_PLUS>=7&&1482==n_A_Equip[2]&&(w+=3),
    n_A_HEAD_DEF_PLUS>=7&&1286==n_A_Equip[2]&&(w+=2),
    n_A_HEAD_DEF_PLUS>=7&&1287==n_A_Equip[2]&&(w+=2),
    n_A_HEAD_DEF_PLUS>=7&&1483==n_A_Equip[2]&&(w+=2),
    n_A_HEAD_DEF_PLUS>=7&&1484==n_A_Equip[2]&&(w+=2),
    n_A_HEAD_DEF_PLUS>=7&&1485==n_A_Equip[2]&&(w+=2),
    n_A_HEAD_DEF_PLUS>=7&&1277==n_A_Equip[2]&&(w+=2),
    n_A_HEAD_DEF_PLUS>=7&&1281==n_A_Equip[2]&&(w+=8),
    n_A_HEAD_DEF_PLUS>=7&&1478==n_A_Equip[2]&&(w+=8),
    n_A_HEAD_DEF_PLUS>=7&&1292==n_A_Equip[2]&&(w+=1),
    n_A_HEAD_DEF_PLUS>=7&&1293==n_A_Equip[2]&&(w+=1),
    n_A_HEAD_DEF_PLUS>=7&&1492==n_A_Equip[2]&&(w+=3),
    n_A_HEAD_DEF_PLUS>=7&&1407==n_A_Equip[2]&&(w+=2),
    n_A_HEAD_DEF_PLUS>=9&&1407==n_A_Equip[2]&&(w+=2),
    1813==n_A_Equip[4]&&(5==n_A_JobClass()||3==n_A_JobClass()||44==n_A_JOB||43==n_A_JOB||20==n_A_JOB)&&(w+=2),
    n_A_HEAD_DEF_PLUS>=9&&1482==n_A_Equip[2]&&(w+=5),
    10==n_A_HEAD_DEF_PLUS&&1289==n_A_Equip[2]&&(w+=4),
    n_A_Weapon_ATKplus>=9&&642==n_A_Equip[0]&&(w+=3),
    n_A_Weapon_ATKplus>=9&&1084==n_A_Equip[0]&&(w+=5),
    n_A_Weapon_ATKplus>=9&&1095==n_A_Equip[0]&&(w+=5),
    (14==n_A_JobClass2()||44==n_A_JOB)&&(w+=15*EquipNumSearch(897)),
    (14==n_A_JobClass2()||44==n_A_JOB)&&(w+=15*EquipNumSearch(898)),
    n_A_MATK[0]=Math.floor(n_A_MATK[0]*w/100),
    n_A_MATK[2]=Math.floor(n_A_MATK[2]*w/100),
    849==n_A_Equip[2]&&(
      n_A_MATK[0]+=Math.floor(n_A_MATK[0]*Math.floor(n_A_HEAD_DEF_PLUS/2)/100),
      n_A_MATK[2]+=Math.floor(n_A_MATK[2]*Math.floor(n_A_HEAD_DEF_PLUS/2)/100)
    ),
    BK_n_A_MATK=[0,0,0],
    BK_n_A_MATK[0]=n_A_MATK[0],
    BK_n_A_MATK[2]=n_A_MATK[2],
    BK_n_A_MATK[0]!=BK_n_A_MATK[2]&&(BK_n_A_MATK[2]-=1),
    BK_n_A_MATK[1]=(BK_n_A_MATK[2]+BK_n_A_MATK[0])/2,
    n_A_Buf6[4]&&(
      w=100+20*n_A_Buf6[4],
      n_A_MATK[0]=Math.floor(n_A_MATK[0]*w/100),
      n_A_MATK[2]=Math.floor(n_A_MATK[2]*w/100)
    ),
    SkillSearch(276)&&(
      n_A_MATK[0]=Math.floor(n_A_MATK[0]*(1+.05*SkillSearch(276))),
      n_A_MATK[2]=Math.floor(n_A_MATK[2]*(1+.05*SkillSearch(276)))
    ),
    myInnerHtml("A_MATK",n_A_MATK[0]+"~"+n_A_MATK[2],0),
    n_A_MATK[0]!=n_A_MATK[2]&&(n_A_MATK[2]-=1),
    n_A_MATK[1]=(n_A_MATK[2]+n_A_MATK[0])/2;
    {
      // Movement Speed
      var speed=150;
      var speed_rate=100;
      var ib_speed=n_tok[209]+n_tok[210]; // Permanent item-based speedup
      var val,t;

      SkillSearch(364)?val=25:SkillSearch(78)?val=25:val=0; // Peco Peco Ride or Union
      speed_rate-=val;

      val=0;
      n_A_Buf6[20]&&(val=25);//Decrease AGI
      n_A_Buf6[19]&&(val=50);//Quagmire
      SkillSearch(433)&&(val=100);//Gatling Fever
      n_A_Buf6[22]&&(val=300);//Curse
      (ib_speed<0)&&(t=-ib_speed,val<t)&&(val=t);
      speed_rate+=val;

      val=0;
      n_A_Buf2[1]&&(val=25);//Increase AGI
      t=2*SkillSearch(273);(t>val)&&(val=t);//Wind Walk
      t=2*n_A_Buf2[9];(t>val)&&(val=t);//Wind Walk Party
      8==n_A_JobClass2()&&(t=SkillSearch(14),(t>val)&&(val=t));//Assassin Improve Dodge
      SkillSearch(258)&&(val<25)&&(val=25);//Lork Knight Berserk
      (ib_speed>0)&&(val<ib_speed)&&(val=ib_speed);
      speed_rate-=val;

      (speed_rate<40)&&(speed_rate=40);

      speed=speed*speed_rate/100;
      SkillSearch(196)&&(speed=200);//Steel Body
      (speed<10)&&(speed=10);
      myInnerHtml("A_MovSPEED",Math.floor((150/speed)*100)+" % ("+speed+" units)",0);
    }
    w=0,
    ASPDch=0,
    0==n_A_Buf6[19]&&0==n_A_Buf6[20]&&(
      3==n_A_WeaponType&&SkillSearch(74)&&(w+=30,ASPDch=1),
      2==n_A_WeaponType&&SkillSearch(386)&&(w+=30,ASPDch=1),
      6<=n_A_WeaponType&&n_A_WeaponType<=8&&SkillSearch(152)&&(w+=30,ASPDch=1),
      0==ASPDch&&SkillSearch(389)&&(w+=30,ASPDch=1),
      0==ASPDch&&(TimeItemNumSearch(5))&&(19==n_A_JobClass2())&&(n_A_WeaponType>5&&n_A_WeaponType<9||0==SRV)&&(w+=25,ASPDch=1),
      0==ASPDch&&(TimeItemNumSearch(28))&&(n_A_WeaponType>5&&n_A_WeaponType<9||0==SRV)&&(w+=30,ASPDch=1),
      5==n_A_WeaponType&&SkillSearch(166)&&(w+=SkillSearch(166)+20,ASPDch=1)
    ),
    !SkillSearch(78)||0!=n_A_ActiveSkill&&284!=n_A_ActiveSkill||(w-=10*(6-SkillSearch(78))),
    w+=Math.round(SkillSearch(425)/2),
    12==n_A_WeaponType&&SkillSearch(224)&&(w+=SkillSearch(224)/2),
    624==n_A_Equip[0]&&(w+=n_A_Weapon_ATKplus),
    641==n_A_Equip[0]&&(w+=n_A_Weapon_ATKplus),
    654==n_A_Equip[0]&&(w+=Math.floor(SU_AGI/14)),
    484==n_A_Equip[0]&&SU_STR>=50&&(w+=5),
    SU_STR>=77&&944==n_A_Equip[0]&&(w+=4),
    SU_STR>=95&&621==n_A_Equip[0]&&(w-=40),
    SU_STR>=95&&1167==n_A_Equip[0]&&(w+=3),
    21==n_A_JOB&&EquipNumSearch(855)&&(w-=5),
    2==n_A_JobClass()&&(w+=3*EquipNumSearch(1121)),
    903==n_A_Equip[0]&&13==n_A_JobClass2()&&(w+=20),
    n_A_HEAD_DEF_PLUS>=7&&1283==n_A_Equip[2]&&(w+=3),
    n_A_HEAD_DEF_PLUS>=7&&1481==n_A_Equip[2]&&(w+=3),
    n_A_HEAD_DEF_PLUS>=7&&1288==n_A_Equip[2]&&(w+=2),
    n_A_HEAD_DEF_PLUS>=8&&1290==n_A_Equip[2]&&(w+=2),
    n_A_HEAD_DEF_PLUS>=8&&1555==n_A_Equip[2]&&(w+=8),
    10==n_A_HEAD_DEF_PLUS&&1290==n_A_Equip[2]&&(w+=2),
    n_A_Weapon_ATKplus>=6&&1081==n_A_Equip[0]&&(w+=10),
    n_A_Weapon_ATKplus>=6&&1086==n_A_Equip[0]&&(w+=5),
    n_A_Weapon_ATKplus>=9&&1086==n_A_Equip[0]&&(w+=5),
    n_A_Weapon_ATKplus>=6&&1088==n_A_Equip[0]&&(w+=5),
    n_A_Weapon_ATKplus>=9&&1088==n_A_Equip[0]&&(w+=5),
    n_A_Weapon_ATKplus>=7&&1077==n_A_Equip[0]&&(w+=5),
    n_A_Weapon_ATKplus>=9&&1077==n_A_Equip[0]&&(w+=5),
    n_A_Weapon2_ATKplus>=7&&1077==n_A_Equip[1]&&(w+=5),
    n_A_Weapon2_ATKplus>=9&&1077==n_A_Equip[1]&&(w+=5),
    n_A_SHOULDER_DEF_PLUS>=7&&SU_AGI>=90&&1472==n_A_Equip[7]&&(w+=8),
    SkillSearch(196)&&(w-=25),
    SkillSearch(258)&&(w+=30),
    SkillSearch(420)&&(w+=20),
    SkillSearch(433)&&(20==n_A_WeaponType||0==n_A_WeaponType)&&(w+=2*SkillSearch(433)),
    SkillSearch(357)&&(ASPDch=1,w+=Math.floor((n_A_BaseLV+n_A_LUK+n_A_DEX)/10)),
    SkillSearch(361)&&n_A_JobLV>=50&&(ASPDch=1,w+=3*SkillSearch(361)),
    0==n_A_Buf6[19]&&0==n_A_Buf6[20]&&(
      0==ASPDch&&2==n_A_Buf2[6]?10==n_A_WeaponType||17<=n_A_WeaponType&&n_A_WeaponType<=21||(w+=25,ASPDch=1,12==n_A_JobClass2()&&(w+=5)):
      0==ASPDch&&6<=n_A_WeaponType&&n_A_WeaponType<=8&&1==n_A_Buf2[6]?(w+=25,ASPDch=1,12==n_A_JobClass2()&&(w+=5)):
      0==ASPDch&&6<=n_A_WeaponType&&n_A_WeaponType<=8&&3==n_A_Buf2[6]&&(w+=30,ASPDch=1)
    ),
    n_A_Buf3[1]&&0==ASPDch&&(
      10==n_A_WeaponType||17<=n_A_WeaponType&&n_A_WeaponType<=21||(
        w+=SRV?
          10+n_A_Buf3[1]+Math.round(n_A_Buf3[31]/2)+Math.round(n_A_Buf3[21]/10):
          5+n_A_Buf3[1]+Math.floor(n_A_Buf3[31]/2)+Math.floor(n_A_Buf3[21]/20)
      )
    ),
    w+=n_tok[12],
    3==n_A_Buf7[35]?w+=20:n_A_Buf7[44]||2==n_A_Buf7[35]?w+=15:(n_A_Buf7[26]||1==n_A_Buf7[35])&&(w+=10),
    EquipNumSearch(1003)&EquipNumSearch(442)&&(w+=n_A_Weapon_ATKplus/2),
    1==n_Nitou?
      0==n_A_WeaponType&&0!=n_A_Weapon2Type?
        WD=50*JobASPD[n_A_JOB][n_A_Weapon2Type]:
        WD=35*(JobASPD[n_A_JOB][n_A_WeaponType]+JobASPD[n_A_JOB][n_A_Weapon2Type]):
      WD=50*JobASPD[n_A_JOB][n_A_WeaponType],
    n_A_ASPD_irowiki=200-(WD-(Math.round(WD*n_A_AGI/25)+Math.round(WD*n_A_DEX/100))/10)*(1-w/100),
    w>0?
      n_A_ASPD=200-WD*(1-(4*n_A_AGI+n_A_DEX+1)/1e3)*(1-w/100):
      n_A_ASPD=200-WD*(1-(4*n_A_AGI+n_A_DEX)/1e3)*(1-w/100),
    n_A_ASPD+=EquipNumSearch(1696),
    n_A_Buf2[15]&&(n_A_ASPD-=25-5*n_A_Buf2[15]),
    47==n_A_Equip[0]&&(n_A_ASPD+=2),
    1434==n_A_Equip[0]&&(n_A_ASPD+=Math.floor(n_A_Weapon_ATKplus/2)),
    1632==n_A_Equip[4]&&(n_A_ASPD+=1),
    EquipNumSearch(1722)&&(n_A_ASPD+=2),
    EquipNumSearch(1727)&&(n_A_ASPD-=7),
    EquipNumSearch(1752)&&(n_A_ASPD+=1),
    n_A_SHOULDER_DEF_PLUS>=9&&SU_AGI>=90&&1472==n_A_Equip[7]&&(n_A_ASPD+=1),
    10==n_A_WeaponType&&n_A_Weapon_ATKplus>=7&&(n_A_ASPD+=CardNumSearch(544)),
    10==n_A_WeaponType&&n_A_Weapon_ATKplus>=9&&(n_A_ASPD+=CardNumSearch(544)),
    10==n_A_WeaponType&&n_A_Weapon_ATKplus>=10&&(n_A_ASPD+=CardNumSearch(528)),
    3==n_A_WeaponType&&n_A_Weapon_ATKplus>=10&&(n_A_ASPD+=CardNumSearch(525)),
    n_A_ASPD>190&&(n_A_ASPD=190),
    n_A_ASPD=Math.floor(10*n_A_ASPD)/10,
    myInnerHtml("A_ASPD",n_A_ASPD,0),
    n_A_ASPD=(200-n_A_ASPD)/50,
    n_Delay[1]=Math.floor(1e3*n_A_ASPD)/1e3,
    17==n_A_ActiveSkill&&(n_Delay[1]=Math.floor(75*n_A_ASPD)/100),
    sandanDelay=0,
    SkillSearch(187)&&0==n_A_ActiveSkill&&(sandanDelay=(1e3-4*n_A_AGI-2*n_A_DEX)/1e3,
    SkillSearch(301)&&(sandanDelay+=.3)),
    n_A_CAST=1-n_A_DEX/150,
    n_A_CAST<0&&(n_A_CAST=0);
    var w=100;
    nb_tok=0,
    w+=n_tok[73],
    EquipNumSearch(750)&&(w-=n_A_Weapon_ATKplus),
    EquipNumSearch(1005)&EquipNumSearch(442)&&(w-=n_A_Weapon_ATKplus/2),
    n_A_Weapon_ATKplus>=9&&1084==n_A_Equip[0]&&(w-=5),
    n_A_Weapon_ATKplus>=9&&1095==n_A_Equip[0]&&(w-=5),
    10==n_A_Weapon_ATKplus&&EquipNumSearch(1493)&&(w-=10),
    n_A_HEAD_DEF_PLUS>=8&&1279==n_A_Equip[2]&&(w-=3),
    n_A_HEAD_DEF_PLUS>=8&&1476==n_A_Equip[2]&&(w-=3),
    n_A_HEAD_DEF_PLUS>=7&&1289==n_A_Equip[2]&&(w-=3),
    n_A_HEAD_DEF_PLUS>=9&&1289==n_A_Equip[2]&&(w-=2),
    5==n_A_JobClass()&&CardNumSearch(454)&&(w-=15),
    25==n_A_JOB&&CardNumSearch(527)&&(w-=30),
    18!=n_A_JOB&&32!=n_A_JOB||!CardNumSearch(460)||(w-=15),
    177==n_A_card[8]&&(w-=n_A_HEAD_DEF_PLUS),
    0!=n_A_Buf3[2]&&(
      SRV?(
        w-=w/100*((3*n_A_Buf3[2]+n_A_Buf3[32]+Math.floor(n_A_Buf3[22]/10))/100)*100,
        nb_tok+=(3*n_A_Buf3[2]+n_A_Buf3[32]+Math.floor(n_A_Buf3[22]/10))/100*100
      ):(
        w-=3*n_A_Buf3[2]+n_A_Buf3[32]+Math.floor(n_A_Buf3[22]/10),
        nb_tok+=(3*n_A_Buf3[2]+n_A_Buf3[32]+Math.floor(n_A_Buf3[22]/10))/100*100
      )
    ),
    TimeItemNumSearch(1)&&(w-=50*TimeItemNumSearch(1)),
    0>w&&(w=0),
    n_B_Cast=w,
    n_A_CAST*=w/100,
    w=100,
    0!=StPlusCalc2(7e3+n_A_ActiveSkill)&&(w-=StPlusCalc2(7e3+n_A_ActiveSkill)),
    0!=StPlusCard(7e3+n_A_ActiveSkill)&&(w-=StPlusCard(7e3+n_A_ActiveSkill)),
    (321==n_A_ActiveSkill||197==n_A_ActiveSkill)&&SkillSearch(195)&&n_A_Weapon_ATKplus>=9&&EquipNumSearch(1097)&&(w-=100),
    430==n_A_ActiveSkill&&n_A_Weapon_ATKplus>=9&&1100==n_A_Equip[0]&&0==SRV&&(w-=25),
    131==n_A_ActiveSkill&&n_A_Weapon_ATKplus>=10&&1169==n_A_Equip[0]&&0==SRV&&(w-=8),
    0>w&&(w=0),
    n_A_CAST*=w/100,
    n_A_Buf2[10]&&(n_A_CAST*=(100-15*n_A_Buf2[10])/100),
    SkillSearch(322)&&(n_A_CAST/=2),
    936==n_A_Equip[0]&&(n_tok[74]+=1*n_A_Weapon_ATKplus),
    934==n_A_Equip[0]&&n_A_Weapon_ATKplus>=9&&(n_tok[74]+=20),
    n_A_HEAD_DEF_PLUS>=7&&1818==n_A_Equip[2]&&(n_tok[74]+=5),
    n_A_HEAD_DEF_PLUS>=8&&1818==n_A_Equip[2]&&(n_tok[74]+=2),
    1036==n_A_Equip[2]&&n_A_HEAD_DEF_PLUS>=6&&(n_tok[74]+=n_A_HEAD_DEF_PLUS-5),
    EquipNumSearch(1582)&&n_A_HEAD_DEF_PLUS>=5&&(n_tok[74]+=n_A_HEAD_DEF_PLUS-4),
    1084==n_A_Equip[0]&&n_A_Weapon_ATKplus>=9&&(n_tok[74]+=5),
    1095==n_A_Equip[0]&&n_A_Weapon_ATKplus>=9&&(n_tok[74]+=5),
    AC_I=n_tok[74];
    var w=n_A_Buf3[2];
    w?
      10==w?
        n_tok[74]=5*w+2*n_A_Buf3[32]+Math.floor(n_A_Buf3[29]/5):
        n_tok[74]=3*w+2*n_A_Buf3[32]+Math.floor(n_A_Buf3[29]/5):
      n_tok[74]=0,
    AC_I>100&&(AC_I=100),
    n_tok[74]>100&&(n_tok[74]=100),
    n_A_HPR=Math.floor(n_A_VIT/5)+Math.floor(n_A_MaxHP/200),
    n_A_HPR<1&&(n_A_HPR=1),
    w=100,
    w+=n_tok[75],
    SU_LUK>=77&&(w+=100*CardNumSearch(221)),
    41==n_A_JobClass()&&672==n_A_Equip[2]&&(w+=3),
    n_A_SHOES_DEF_PLUS<=4&&407==n_A_card[13]&&(w+=5),
    n_A_HPR=Math.floor(n_A_HPR*w/100),
    (n_A_Buf6[21]||n_A_Buf6[17]||333==n_A_card[11])&&(n_A_HPR=0),
    myInnerHtml("A_HPR",n_A_HPR,0),
    n_A_SPR=Math.floor(n_A_INT/6)+Math.floor(n_A_MaxSP/100)+1,
    w=100,
    w+=3*SkillSearch(269),
    w+=n_tok[76],
    SU_LUK>=77&&(w+=100*CardNumSearch(221)),
    179==n_A_card[9]&&(w+=5),
    179==n_A_card[16]&&(w+=5),
    179==n_A_card[17]&&(w+=5),
    179==n_A_card[18]&&(w+=5),
    5==n_A_JobClass()&&(w+=5*EquipNumSearch(1119)),
    41==n_A_JobClass()&&673==n_A_Equip[2]&&(w+=3),
    n_A_HEAD_DEF_PLUS<=4&&179==n_A_card[8]&&(w+=5),
    n_A_SHOES_DEF_PLUS<=4&&407==n_A_card[13]&&(w+=5),
    n_A_SPR=Math.floor(n_A_SPR*w/100),
    n_A_INT>=120&&(n_A_SPR+=Math.floor((n_A_INT-120)/2)+4),
    (n_A_Buf6[21]||n_A_Buf6[17]||CardNumSearch(334))&&(n_A_SPR=0),
    myInnerHtml("A_SPR",n_A_SPR,0),
    "Holy Arrow"==ArrowOBJ[n_A_Arrow][2]&&(n_tok[36]+=5),
    n_A_Weapon_ATKplus>=6&&(
      (1076==n_A_Equip[0]||1077==n_A_Equip[0]||1081==n_A_Equip[0]||1082==n_A_Equip[0]||1086==n_A_Equip[0]||1088<=n_A_Equip[0]&&n_A_Equip[0]<=1094||1096==n_A_Equip[0]||
       1097==n_A_Equip[0]||1099<=n_A_Equip[0]&&n_A_Equip[0]<=1103)&&(
        6==n_A_Weapon_ATKplus&&(n_tok[37]+=4),
        7==n_A_Weapon_ATKplus&&(n_tok[37]+=9),
        8==n_A_Weapon_ATKplus&&(n_tok[37]+=16),
        9==n_A_Weapon_ATKplus&&(n_tok[37]+=25),
        n_A_Weapon_ATKplus>=10&&(n_tok[37]+=36)
      ),
      (1080==n_A_Equip[0]||1087==n_A_Equip[0]||1098==n_A_Equip[0])&&(
        6==n_A_Weapon_ATKplus&&(n_tok[37]+=9),
        7==n_A_Weapon_ATKplus&&(n_tok[37]+=16),
        8==n_A_Weapon_ATKplus&&(n_tok[37]+=25),
        9==n_A_Weapon_ATKplus&&(n_tok[37]+=36),
        n_A_Weapon_ATKplus>=10&&(n_tok[37]+=49)
      )
    ),
    n_A_Buf7[42]&&(
      n_tok[150]+=10*n_A_Buf7[42],
      n_tok[151]+=10*n_A_Buf7[42],
      n_tok[152]+=10*n_A_Buf7[42],
      n_tok[153]+=10*n_A_Buf7[42],
      n_tok[154]+=10*n_A_Buf7[42],
      n_tok[155]+=10*n_A_Buf7[42],
      n_tok[156]+=10*n_A_Buf7[42],
      n_tok[157]+=10*n_A_Buf7[42],
      n_tok[158]+=10*n_A_Buf7[42],
      n_tok[159]+=10*n_A_Buf7[42]
    ),
    n_A_Buf9[54]&&(
     n_tok[170]+=n_A_Buf9[54],
     n_tok[171]+=n_A_Buf9[54],
     n_tok[172]+=n_A_Buf9[54],
     n_tok[173]+=n_A_Buf9[54],
     n_tok[174]+=n_A_Buf9[54],
     n_tok[175]+=n_A_Buf9[54],
     n_tok[176]+=n_A_Buf9[54],
     n_tok[177]+=n_A_Buf9[54],
     n_tok[178]+=n_A_Buf9[54],
     n_tok[179]+=n_A_Buf9[54]
    ),
    SkillSearch(156)&&(n_tok[66]+=5*SkillSearch(156)),
    SkillSearch(234)&&(n_tok[59]+=4*SkillSearch(234)),
    SkillSearch(234)&&(n_tok[39]+=4*SkillSearch(234)),
    n_A_Buf7[45]&&(n_tok[91]+=20),
    624==n_A_Equip[0]&&(n_tok[191]+=n_A_Weapon_ATKplus),
    1718==n_A_Equip[6]&&(n_tok[25]+=2*n_A_BODY_DEF_PLUS),
    1161==n_A_Equip[0]&&(n_tok[91]+=SkillSearch(23)),
    CardNumSearch(551)&&(n_tok[91]+=n_A_HEAD_DEF_PLUS/2),
    EquipNumSearch(737)&&(n_tok[60]+=3*n_A_SHOULDER_DEF_PLUS),
    EquipNumSearch(1217)&&(n_tok[25]+=n_A_HEAD_DEF_PLUS),
    EquipNumSearch(1575)&&(n_tok[25]+=n_A_HEAD_DEF_PLUS),
    1089==n_A_Equip[0]&&(n_tok[70]+=2*n_A_Weapon_ATKplus),
    626==n_A_Equip[0]&&2==n_A_Arrow&&(n_tok[25]+=25),
    627==n_A_Equip[0]&&5==n_A_Arrow&&(n_tok[25]+=25),
    628==n_A_Equip[0]&&4==n_A_Arrow&&(n_tok[25]+=25),
    629==n_A_Equip[0]&&6==n_A_Arrow&&(n_tok[25]+=25),
    630==n_A_Equip[0]&&10==n_A_Arrow&&(n_tok[25]+=50),
    101==n_A_Equip[0]&&17==n_A_Arrow&&(n_tok[25]+=50),
    1491==n_A_Equip[0]&&18==n_A_Arrow&&(n_tok[25]+=50),
    1792==n_A_Equip[0]&&18==n_A_Arrow&&(n_tok[25]+=50),
    n_A_HEAD_DEF_PLUS>=9&&543==n_A_card[8]&&(n_tok[54]+=5),
    n_A_LEFT_DEF_PLUS>=6&&1622==n_A_Equip[5]&&(n_tok[60]+=n_A_LEFT_DEF_PLUS-5),
    n_A_HEAD_DEF_PLUS>=8&&1244==n_A_Equip[2]&&(n_tok[61]+=5),
    n_A_HEAD_DEF_PLUS>=9&&1288==n_A_Equip[2]&&(n_tok[25]+=5),
    n_A_HEAD_DEF_PLUS>=9&&1285==n_A_Equip[2]&&(n_tok[80]+=3),
    n_A_HEAD_DEF_PLUS>=7&&1407==n_A_Equip[2]&&(n_tok[80]+=2),
    n_A_HEAD_DEF_PLUS>=9&&1407==n_A_Equip[2]&&(n_tok[80]+=2),
    n_A_HEAD_DEF_PLUS>=9&&1612==n_A_Equip[2]&&(n_tok[80]+=5),
    n_A_Weapon_ATKplus>=9&&1101==n_A_Equip[0]&&(n_tok[80]+=n_A_Weapon_ATKplus),
    n_A_Weapon_ATKplus>=9&&EquipNumSearch(1573)&&(n_tok[80]+=n_A_Weapon_ATKplus),
    n_A_Weapon_ATKplus>=6&&1083==n_A_Equip[0]&&(n_tok[177]+=2*(n_A_Weapon_ATKplus-5)),
    n_A_SHOULDER_DEF_PLUS>=9&&403==n_A_card[12]&&(n_tok[60]+=5),
    n_A_Buf2[11]&&13!=n_A_JOB&&27!=n_A_JOB&&(n_tok[56]+=5*n_A_Buf2[11]),
    n_A_Buf2[11]&&13!=n_A_JOB&&27!=n_A_JOB&&(n_tok[66]+=5*n_A_Buf2[11]),
    (14==n_A_JOB||28==n_A_JOB)&&(n_tok[80]+=10*CardNumSearch(479)),
    n_A_SHOULDER_DEF_PLUS>=7&&1472==n_A_Equip[7]&&(
      SU_DEX>=90&&(n_tok[25]+=5),
      SU_VIT>=90&&(n_tok[60]+=5),
      SU_LUK>=90&&(n_tok[70]+=10)
    ),
    n_A_SHOULDER_DEF_PLUS>=9&&1472==n_A_Equip[7]&&(
      SU_DEX>=90&&(n_tok[25]+=5),
      SU_VIT>=90&&(n_tok[60]+=5),
      SU_LUK>=90&&(n_tok[70]+=5)
    ),
    CardNumSearch(452)&&3==n_A_JobClass()&&(n_tok[51]+=30,n_tok[56]+=30),
    n_A_HEAD_DEF_PLUS>=5&&(1507==n_A_Equip[2]||1508==n_A_Equip[2]||1703==n_A_Equip[2])&&(n_tok[57]+=n_A_HEAD_DEF_PLUS-4,n_tok[37]+=n_A_HEAD_DEF_PLUS-4);
    for(var i=971;977>=i;i++) EquipNumSearch(i)&&(
      n_tok[50]-=200,
      n_tok[51]-=200,
      n_tok[52]-=200,
      n_tok[53]-=200,
      n_tok[54]-=200,
      n_tok[55]-=200,
      n_tok[56]-=200,
      n_tok[58]-=200,
      n_tok[59]-=200
    );
    if((0==n_B[20]&&0==n_B_rangedAtk&&0==n_B_rangedMAtk&&2!=document.calcForm.B_AtkRange.value||1==document.calcForm.B_AtkRange.value)&&957==n_A_Equip[7])
      for(i=0;9>=i;i++) n_tok[60+i]+=30;
    if(n_A_HEAD_DEF_PLUS>=7&&1498==n_A_Equip[2])
      for(i=0;9>=i;i++) n_tok[60+i]+=5;
    if(SkillSearch(150)&&(n_tok[60]+=SkillSearch(150),n_tok[63]+=4*SkillSearch(150)),n_A_Buf3[7]){
      for(i=61;69>=i;i++) n_tok[i]+=55+5*n_A_Buf3[7];
      for(i=150;159>=i;i++) n_tok[i]+=10*n_A_Buf3[7]
    }
    for(
      n_A_Buf7[11]&&(n_tok[61]+=20,n_tok[64]-=15),
      n_A_Buf7[12]&&(n_tok[62]+=20,n_tok[63]-=15),
      n_A_Buf7[13]&&(n_tok[63]+=20,n_tok[61]-=15),
      n_A_Buf7[14]&&(n_tok[64]+=20,n_tok[62]-=15),
      1085==n_A_Equip[0]&&(
        n_A_Weapon_ATKplus>=6&&(n_tok[91]+=5+2*(n_A_Weapon_ATKplus-5),n_tok[94]+=5+2*(n_A_Weapon_ATKplus-5)),
        n_A_Weapon_ATKplus>=10&&(n_tok[91]+=10,n_tok[94]+=10)
      ),
      0==SRV&&EquipNumSearch(1030)&&(n_tok[77]-=5,n_tok[79]-=5),
      534==n_A_Equip[6]&&(wSPVS=n_A_JobClass(),(1==wSPVS||2==wSPVS||6==wSPVS)&&(n_tok[151]+=50),(3==wSPVS||4==wSPVS||5==wSPVS)&&(n_tok[156]+=50)),
      1806==n_A_Equip[2]&&(wSPVS=n_A_JobClass(),(3==wSPVS||4==wSPVS||5==wSPVS)&&(n_tok[151]+=5)),
      828==n_A_Equip[2]&&(n_tok[151]+=2*n_A_HEAD_DEF_PLUS,n_tok[152]+=2*n_A_HEAD_DEF_PLUS,n_tok[159]+=2*n_A_HEAD_DEF_PLUS),
      SU_AGI>=90&&(n_tok[151]+=30*CardNumSearch(176),n_tok[156]+=30*CardNumSearch(176)),
      SU_VIT>=80&&(n_tok[155]+=50*CardNumSearch(176),n_tok[159]+=50*CardNumSearch(176)),
      42==n_A_Buf8[0]&&1218==n_A_Equip[2]&&(n_tok[151]+=10),
      n_A_zokusei=new Array,
      i=0;9>=i;i++
    ) n_A_zokusei[i]=100*zokusei[10*n_A_BodyZokusei+1][i],n_A_zokusei[i]=n_A_zokusei[i]-Math.floor(n_A_zokusei[i]*n_tok[60+i])/100;
    if(
      (1076==n_A_Equip[1]||1077==n_A_Equip[1])&&n_A_Weapon2_ATKplus>=6&&(n_tok[307]+=5),
      (1076==n_A_Equip[0]||1077==n_A_Equip[0]||1080==n_A_Equip[0]||1081==n_A_Equip[0]||1086==n_A_Equip[0]||1088<=n_A_Equip[0]&&n_A_Equip[0]<=1090||
       1092==n_A_Equip[0]||1093==n_A_Equip[0]||1097<=n_A_Equip[0]&&n_A_Equip[0]<=1103)&&n_A_Weapon_ATKplus>=6&&(n_tok[307]+=5),
      (1082==n_A_Equip[0]||1087==n_A_Equip[0]||1094==n_A_Equip[0]||1096==n_A_Equip[0])&&n_A_Weapon_ATKplus>=6&&(n_tok[307]+=5),
      645==n_A_Equip[0]&&(n_tok[295]+=10+n_A_Weapon_ATKplus),
      9==n_A_WeaponType&&(n_tok[295]+=2*CardNumSearch(466)),
      1==n_B[19]&&(n_tok[297]+=30*CardNumSearch(425)),
      936==n_A_Equip[0]&&(n_tok[295]+=1*n_A_Weapon_ATKplus),
      1==n_B[19]&&1228==n_A_Equip[2]&&n_A_HEAD_DEF_PLUS>=6&&(n_tok[297]+=n_A_HEAD_DEF_PLUS-5),
      1==n_B[19]&&(n_tok[295]+=n_tok[297]),
      (1084==n_A_Equip[0]||1095==n_A_Equip[0])&&n_A_Weapon_ATKplus>=6&&(n_tok[317]+=5),
      1085==n_A_Equip[0]&&n_A_Weapon_ATKplus>=6&&(n_tok[317]+=5),
      1083==n_A_Equip[0]&&n_A_Weapon_ATKplus>=6&&(n_tok[317]+=5+2*(n_A_Weapon_ATKplus-5)),
      n_tok[70]+=n_tok[320+n_B[2]],
      535==n_A_Equip[7]
    ){
      var wVM=n_A_JobClass();
      (1==wVM||2==wVM||6==wVM)&&(n_tok[71]+=5,n_tok[71]+=2*n_A_SHOULDER_DEF_PLUS)
    }
    TimeItemNumSearch(52)&&(n_tok[71]+=3*n_A_LEFT_DEF_PLUS),
    ClickB_Enemy(),
    KakutyouKansuu()
  }
}
function StPlusCalc(){
  n_A_JobSet(),
  n_A_JobLV=eval(document.calcForm.A_JobLV.value);
  for(var w2=[0,0,0,0,0,0],i=0;JobBOBJ[n_A_JOB][i]<=n_A_JobLV&&"n"!=JobBOBJ[n_A_JOB][i];i+=2) w2[JobBOBJ[n_A_JOB][i+1]]+=1;
  if(0==n_A_JOB&&n_Tensei)
    for(var i=0;JobBOBJ[34][i]<=n_A_JobLV&&"n"!=JobBOBJ[34][i];i+=2) w2[JobBOBJ[34][i+1]]+=1;
  if(n_A_JobLV>=70&&SkillSearch(309))
    for(var i=0;6>i;i++) w2[i]+=10;
  var wSPC_STR=w2[0],wSPC_AGI=w2[1],wSPC_VIT=w2[2],wSPC_INT=w2[3],wSPC_DEX=w2[4],wSPC_LUK=w2[5];
  wSPCall=StPlusCalc2(7),
  wSPC_STR+=StPlusCalc2(1)+wSPCall,
  wSPC_AGI+=StPlusCalc2(2)+wSPCall,
  wSPC_VIT+=StPlusCalc2(3)+wSPCall,wSPC_VIT+=StPlusCalc2(213),
  wSPC_INT+=StPlusCalc2(4)+wSPCall,wSPC_INT+=StPlusCalc2(214),
  wSPC_DEX+=StPlusCalc2(5)+wSPCall,
  wSPC_LUK+=StPlusCalc2(6)+wSPCall,
  wSPC_DEX+=SkillSearch(38),
  (SkillSearch(68)||TimeItemNumSearch(17))&&(wSPC_STR+=4),
  wSPC_STR+=SkillSearch(146),
  wSPC_STR+=SkillSearch(404),
  wSPC_INT+=SkillSearch(404),
  SkillSearch(234)&&(wSPC_INT+=Math.round(SkillSearch(234)/2)),
  SkillSearch(286)&&(
    5==SkillSearch(286)&&(wSPC_STR+=16),
    4==SkillSearch(286)&&(wSPC_STR+=8),
    3==SkillSearch(286)&&(wSPC_STR+=4),
    2==SkillSearch(286)&&(wSPC_STR+=2),
    1==SkillSearch(286)&&(wSPC_STR+=1)
  );
  var w=SkillSearch(42);
  w?(
    w+=102,
    wSPC_DEX=Math.floor((n_A_DEX+wSPC_DEX)*w/100)-n_A_DEX,wSPC_AGI=Math.floor((n_A_AGI+wSPC_AGI)*w/100)-n_A_AGI
  ):TimeItemNumSearch(31)?(
    wSPC_DEX=Math.floor(104*(n_A_DEX+wSPC_DEX)/100)-n_A_DEX,wSPC_AGI=Math.floor(104*(n_A_AGI+wSPC_AGI)/100)-n_A_AGI
  ):n_A_Buf7[34]?(
    wSPC_DEX=Math.floor(103*(n_A_DEX+wSPC_DEX)/100)-n_A_DEX,wSPC_AGI=Math.floor(103*(n_A_AGI+wSPC_AGI)/100)-n_A_AGI):
  TimeItemNumSearch(4)&&(
    wSPC_DEX=Math.floor(103*(n_A_DEX+wSPC_DEX)/100)-n_A_DEX,wSPC_AGI=Math.floor(103*(n_A_AGI+wSPC_AGI)/100)-n_A_AGI
  ),
  SkillSearch(422)&&(wSPC_DEX+=4,wSPC_AGI+=4),
  wSPC_AGI+=StPlusCalc2(212),
  wSPC_DEX+=StPlusCalc2(215),
  9==n_A_WeaponType&&(wSPC_INT+=CardNumSearch(466)),
  649==n_A_Equip[0]&&(wSPC_DEX-=SU_DEX),
  (1172==n_A_Equip[0]||1671==n_A_Equip[0])&&(wSPC_INT+=Math.floor(n_A_Weapon_ATKplus/2)),
  41==n_A_JobClass()&&672==n_A_Equip[2]&&(wSPC_AGI+=1),
  41==n_A_JobClass()&&673==n_A_Equip[2]&&(wSPC_INT+=1),
  41==n_A_JobClass()&&675==n_A_Equip[2]&&(wSPC_LUK+=2),
  41==n_A_JobClass()&&676==n_A_Equip[2]&&(wSPC_DEX+=2),
  41==n_A_JobClass()&&678==n_A_Equip[3]&&(wSPC_LUK+=1),
  5==SkillSearch(234)&&1171==n_A_Equip[0]&&(wSPC_INT+=3),
  n_A_HEAD_DEF_PLUS>=6&&1555==n_A_Equip[2]&&(wSPC_AGI+=2),
  n_A_HEAD_DEF_PLUS>=7&&1576==n_A_Equip[2]&&(wSPC_AGI+=2),
  n_A_HEAD_DEF_PLUS>=5&&1069==n_A_Equip[2]&&(wSPC_LUK+=n_A_HEAD_DEF_PLUS-4),
  n_A_Weapon_ATKplus>=6&&1168==n_A_Equip[0]&&(wSPC_INT+=n_A_Weapon_ATKplus-5),
  n_A_SHOES_DEF_PLUS>=9&&717==n_A_Equip[8]&&(wSPC_AGI+=2),
  n_A_SHOES_DEF_PLUS>=8&&1737==n_A_Equip[8]&&(wSPC_AGI+=n_A_SHOES_DEF_PLUS-7),
  (1078==n_A_Equip[0]||1079==n_A_Equip[0])&&(
    wSPC_INT+=n_A_Weapon_ATKplus,
    1078==n_A_Equip[0]&&n_A_Weapon_ATKplus>=9&&(wSPC_INT+=5),
    1079==n_A_Equip[0]&&n_A_Weapon_ATKplus>=10&&(wSPC_INT+=5)
  ),
  (1078==n_A_Equip[1]||1079==n_A_Equip[1])&&(
    wSPC_INT+=n_A_Weapon2_ATKplus,
    1078==n_A_Equip[1]&&n_A_Weapon2_ATKplus>=9&&(wSPC_INT+=5),
    1079==n_A_Equip[1]&&n_A_Weapon2_ATKplus>=10&&(wSPC_INT+=3)
  ),
  wSPCall=StPlusCard(7),
  wSPC_STR+=StPlusCard(1)+wSPCall,
  wSPC_AGI+=StPlusCard(2)+wSPCall,
  wSPC_VIT+=StPlusCard(3)+wSPCall,
  wSPC_INT+=StPlusCard(4)+wSPCall,
  wSPC_DEX+=StPlusCard(5)+wSPCall,
  wSPC_LUK+=StPlusCard(6)+wSPCall,
  3==n_A_JobClass()&&(wSPC_INT+=CardNumSearch(383)),
  4==n_A_JobClass()&&540==n_A_card[8]&&(wSPC_DEX+=Math.floor(n_A_HEAD_DEF_PLUS/3)),
  180==n_A_card[8]&&(wSPC_STR+=n_A_HEAD_DEF_PLUS),
  1815==n_A_Equip[2]&&n_A_HEAD_DEF_PLUS>=6&&(wSPC_STR+=n_A_HEAD_DEF_PLUS-5),
  173==n_A_card[10]&&(wSPC_INT+=n_A_LEFT_DEF_PLUS),
  198==n_A_card[11]&&(wSPC_VIT+=n_A_BODY_DEF_PLUS),
  402==n_A_card[12]&&(wSPC_LUK+=n_A_SHOULDER_DEF_PLUS),
  406==n_A_card[13]&&(wSPC_AGI+=n_A_SHOES_DEF_PLUS),
  (1==n_A_JobClass()||2==n_A_JobClass()||6==n_A_JobClass()||41==n_A_JOB||42==n_A_JOB)&&(wSPC_STR+=1*EquipNumSearch(1670)),
  (3==n_A_JobClass()||5==n_A_JobClass()||43==n_A_JOB||44==n_A_JOB)&&(wSPC_INT+=1*EquipNumSearch(1670)),
  (4==n_A_JobClass()||45==n_A_JOB)&&(wSPC_DEX+=1*EquipNumSearch(1670)),
  n_A_HEAD_DEF_PLUS>=7&&1272==n_A_Equip[2]&&(wSPC_VIT+=1),
  n_A_HEAD_DEF_PLUS>=7&&1273==n_A_Equip[2]&&(wSPC_VIT+=1),
  n_A_HEAD_DEF_PLUS>=7&&1277==n_A_Equip[2]&&(n_tok[91]+=3),
  n_A_HEAD_DEF_PLUS>=7&&1279==n_A_Equip[2]&&(wSPC_INT+=2),
  n_A_HEAD_DEF_PLUS>=7&&1280==n_A_Equip[2]&&(n_tok[64]+=5),
  n_A_HEAD_DEF_PLUS>=7&&1281==n_A_Equip[2]&&(n_tok[64]+=5),
  n_A_HEAD_DEF_PLUS>=7&&1291==n_A_Equip[2]&&(wSPC_DEX+=1),
  n_A_HEAD_DEF_PLUS>=7&&1292==n_A_Equip[2]&&(wSPC_DEX+=1),
  n_A_HEAD_DEF_PLUS>=7&&1293==n_A_Equip[2]&&(wSPC_DEX+=1),
  n_A_HEAD_DEF_PLUS>=7&&1294==n_A_Equip[2]&&(n_tok[62]+=5),
  n_A_HEAD_DEF_PLUS>=7&&1476==n_A_Equip[2]&&(wSPC_INT+=2),
  n_A_HEAD_DEF_PLUS>=7&&1477==n_A_Equip[2]&&(n_tok[64]+=5),
  n_A_HEAD_DEF_PLUS>=7&&1478==n_A_Equip[2]&&(n_tok[64]+=5),
  n_A_HEAD_DEF_PLUS>=7&&1484==n_A_Equip[2]&&(wSPC_INT+=3),
  n_A_HEAD_DEF_PLUS>=7&&1486==n_A_Equip[2]&&(n_tok[63]+=7),
  n_A_HEAD_DEF_PLUS>=7&&1487==n_A_Equip[2]&&(wSPC_VIT+=2),
  n_A_HEAD_DEF_PLUS>=8&&1288==n_A_Equip[2]&&(wSPC_AGI+=2),
  n_A_HEAD_DEF_PLUS>=9&&1279==n_A_Equip[2]&&(n_tok[91]+=4),
  n_A_HEAD_DEF_PLUS>=9&&1476==n_A_Equip[2]&&(n_tok[91]+=4),
  n_A_HEAD_DEF_PLUS>=7&&1825==n_A_Equip[2]&&(n_tok[17]+=Math.floor(SU_INT/5)),
  185==n_A_card[11]&&(wSPC_VIT+=Math.floor(SU_DEX/18)),
  187==n_A_card[11]&&(wSPC_STR+=Math.floor(SU_INT/18)),
  189==n_A_card[11]&&(wSPC_LUK+=Math.floor(SU_AGI/18)),
  191==n_A_card[11]&&(wSPC_AGI+=Math.floor(SU_LUK/18)),
  196==n_A_card[11]&&(wSPC_INT+=Math.floor(SU_STR/18)),
  197==n_A_card[11]&&(wSPC_DEX+=Math.floor(SU_VIT/18)),
  98==n_A_card[14]&&98==n_A_card[15]&&2==CardNumSearch(273)&&(wSPC_STR+=3),
  872==n_A_Equip[2]&&(n_tok[77]+=n_A_HEAD_DEF_PLUS),
  n_A_HEAD_DEF_PLUS>=7&&565==n_A_Equip[2]&&(n_tok[80]+=1,n_tok[91]+=1,n_tok[94]+=1),
  n_A_HEAD_DEF_PLUS>=6&&1629==n_A_Equip[2]&&(n_tok[177]+=n_A_HEAD_DEF_PLUS-5,n_tok[57]+=n_A_HEAD_DEF_PLUS-5),
  405==n_A_card[12]&&(
    (1==n_A_JobClass()||2==n_A_JobClass()||6==n_A_JobClass())&&(wSPC_STR+=2),
    (3==n_A_JobClass()||4==n_A_JobClass()||5==n_A_JobClass())&&(wSPC_INT+=2)
  ),
  1687==n_A_Equip[2]&&(
    (1==n_A_JobClass()||2==n_A_JobClass()||6==n_A_JobClass())&&(wSPC_AGI+=2,wSPC_VIT+=2,n_tok[60]+=Math.floor(n_A_JobLV/14),n_tok[61]+=Math.floor(n_A_JobLV/14)),
    (3==n_A_JobClass()||4==n_A_JobClass()||5==n_A_JobClass())&&(wSPC_INT+=2,wSPC_DEX+=2,n_tok[60]+=Math.floor(n_A_JobLV/14),n_tok[61]+=Math.floor(n_A_JobLV/14))
  ),
  wSPC_STR+=n_A_Buf2[0],
  wSPC_INT+=n_A_Buf2[0],
  wSPC_DEX+=n_A_Buf2[0],
  n_A_Buf2[1]>0&&0==n_A_Buf6[19]&&0==n_A_Buf6[20]&&(wSPC_AGI+=n_A_Buf2[1]+2),
  wSPC_LUK+=30*n_A_Buf2[3],
  24==n_A_JOB&&SkillSearch(270)&&(wSPC_STR+=5,wSPC_AGI+=5,wSPC_VIT+=5,wSPC_DEX+=5,wSPC_INT+=5,wSPC_LUK+=5),
  SkillSearch(379)&&0==n_A_WeaponType&&(wSPC_STR+=10),
  n_A_Buf3[40]&&(wSPC_STR+=5,wSPC_DEX+=5,wSPC_INT+=5),
  wSPC_STR+=n_A_Buf3[41],
  wSPC_VIT+=n_A_Buf3[42],
  wSPC_AGI+=n_A_Buf3[43],
  wSPC_DEX+=n_A_Buf3[44],
  n_A_Buf2[16]&&(wSPC_STR+=20,wSPC_AGI+=20,wSPC_VIT+=20,wSPC_DEX+=20,wSPC_INT+=20,wSPC_LUK+=20),
  1==n_A_Buf6[2]&&(wSPC_STR+=3,wSPC_AGI+=3,wSPC_VIT+=3,wSPC_DEX+=3,wSPC_INT+=3,wSPC_LUK+=3),
  2==n_A_Buf6[2]&&(wSPC_STR+=5,wSPC_AGI+=5,wSPC_VIT+=5,wSPC_DEX+=5,wSPC_INT+=5,wSPC_LUK+=5),
  n_A_Buf6[10]&&(wSPC_STR+=1,wSPC_AGI+=1,wSPC_VIT+=1,wSPC_DEX+=1,wSPC_INT+=1,wSPC_LUK+=1),
  SkillSearch(310)&&(wSPC_STR-=1,wSPC_AGI-=1,wSPC_VIT-=1,wSPC_DEX-=1,wSPC_INT-=1,wSPC_LUK-=1),
  n_A_Buf7[3]&&(wSPC_STR+=n_A_Buf7[3]),
  n_A_Buf7[4]&&(wSPC_AGI+=n_A_Buf7[4]),
  n_A_Buf7[5]&&(wSPC_VIT+=n_A_Buf7[5]),
  n_A_Buf7[6]&&(wSPC_INT+=n_A_Buf7[6]),
  n_A_Buf7[7]&&(wSPC_DEX+=n_A_Buf7[7]),
  n_A_Buf7[8]&&(wSPC_LUK+=n_A_Buf7[8]),
  (n_A_Buf7[36]||n_A_Buf7[43])&&(wSPC_STR+=3,wSPC_AGI+=3,wSPC_VIT+=3,wSPC_DEX+=3,wSPC_INT+=3,wSPC_LUK+=3),
  n_A_Buf7[37]&&(wSPC_LUK+=21),
  n_A_Buf7[41]&&(wSPC_STR+=20),
  n_A_Buf7[47]&&(wSPC_AGI+=20),
  n_A_Buf7[48]&&(wSPC_VIT+=20),
  n_A_Buf7[49]&&(wSPC_INT+=20),
  n_A_Buf7[50]&&(wSPC_DEX+=20),
  n_A_Buf7[51]&&(wSPC_LUK+=20);
  var wHSE=eval(document.calcForm.A_HSE.value);
  if(wHSE){
    var w=wHSE%10;
    wHSE>=1&&9>=wHSE&&(wSPC_STR+=w),
    wHSE>=11&&19>=wHSE&&(wSPC_AGI+=w),
    wHSE>=21&&29>=wHSE&&(wSPC_VIT+=w),
    wHSE>=31&&39>=wHSE&&(wSPC_INT+=w),
    wHSE>=41&&49>=wHSE&&(wSPC_DEX+=w),
    wHSE>=51&&59>=wHSE&&(wSPC_LUK+=w)
  }
  var wHSE2=eval(document.calcForm.A_HSE_HEAD1.value);
  if(wHSE2){
    var w=wHSE2%10;
    wHSE2>=1&&9>=wHSE2&&(wSPC_STR+=w),
    wHSE2>=11&&19>=wHSE2&&(wSPC_AGI+=w),
    wHSE2>=21&&29>=wHSE2&&(wSPC_VIT+=w),
    wHSE2>=31&&39>=wHSE2&&(wSPC_INT+=w),
    wHSE2>=41&&49>=wHSE2&&(wSPC_DEX+=w),
    wHSE2>=51&&59>=wHSE2&&(wSPC_LUK+=w)
  }
  if(0==SRV&&Math.floor(wHSE/10)==Math.floor(wHSE2/10)){
    var w1=wHSE%10,w2=wHSE2%10;
    w1>w2&&(w1=w2),
    wHSE>=1&&9>=wHSE&&(wSPC_STR-=w1),
    wHSE>=11&&19>=wHSE&&(wSPC_AGI-=w1),
    wHSE>=21&&29>=wHSE&&(wSPC_VIT-=w1),
    wHSE>=31&&39>=wHSE&&(wSPC_INT-=w1),
    wHSE>=41&&49>=wHSE&&(wSPC_DEX-=w1),
    wHSE>=51&&59>=wHSE&&(wSPC_LUK-=w1)
  }
  if(
    1==SkillSearch(392)&&1==n_Tensei&&n_A_BaseLV>10&&n_A_BaseLV<70&&(
      n_A_STR+wSPC_STR<=50&&(wSPC_STR=50-n_A_STR),
      n_A_AGI+wSPC_AGI<=50&&(wSPC_AGI=50-n_A_AGI),
      n_A_VIT+wSPC_VIT<=50&&(wSPC_VIT=50-n_A_VIT),
      n_A_INT+wSPC_INT<=50&&(wSPC_INT=50-n_A_INT),
      n_A_DEX+wSPC_DEX<=50&&(wSPC_DEX=50-n_A_DEX),
      n_A_LUK+wSPC_LUK<=50&&(wSPC_LUK=50-n_A_LUK)
    ),
    2==SkillSearch(392)&&1==n_Tensei&&n_A_BaseLV>10&&n_A_BaseLV<70
  ){
    var linkboni=n_A_BaseLV-10;
    linkboni>50?(
      wSPC_STR=50,wSPC_AGI=50,wSPC_VIT=50,wSPC_INT=50,wSPC_DEX=50,wSPC_LUK=50
    ):(
      n_A_STR<linkboni&&(wSPC_STR=linkboni-n_A_STR),
      n_A_AGI<linkboni&&(wSPC_AGI=linkboni-n_A_AGI),
      n_A_VIT<linkboni&&(wSPC_VIT=linkboni-n_A_VIT),
      n_A_INT<linkboni&&(wSPC_INT=linkboni-n_A_INT),
      n_A_DEX<linkboni&&(wSPC_DEX=linkboni-n_A_DEX),
      n_A_LUK<linkboni&&(wSPC_LUK=linkboni-n_A_LUK)
    )
  }
  if(3==SkillSearch(392)&&1==n_Tensei&&n_A_BaseLV>10&&n_A_BaseLV<70){
    var linkboni=n_A_BaseLV-10;
    wSPC_STR>50||(wSPC_STR+linkboni>50?wSPC_STR=50:wSPC_STR+=linkboni),
    wSPC_AGI>50||(wSPC_AGI+linkboni>50?wSPC_AGI=50:wSPC_AGI+=linkboni),
    wSPC_VIT>50||(wSPC_VIT+linkboni>50?wSPC_VIT=50:wSPC_VIT+=linkboni),
    wSPC_INT>50||(wSPC_INT+linkboni>50?wSPC_INT=50:wSPC_INT+=linkboni),
    wSPC_DEX>50||(wSPC_DEX+linkboni>50?wSPC_DEX=50:wSPC_DEX+=linkboni),
    wSPC_LUK>50||(wSPC_LUK+linkboni>50?wSPC_LUK=50:wSPC_LUK+=linkboni)
  }
  if(
    n_A_Buf3[11]&&0==n_A_Buf3[18]?(
      n_A_STR+wSPC_STR<99&&(n_A_STR+wSPC_STR+Math.floor(n_A_Buf3[12]/2)<99?wSPC_STR+=Math.floor(n_A_Buf3[12]/2):wSPC_STR=99-n_A_STR),
      n_A_AGI+wSPC_AGI<99&&(n_A_AGI+wSPC_AGI+Math.floor(n_A_Buf3[13]/2)<99?wSPC_AGI+=Math.floor(n_A_Buf3[13]/2):wSPC_AGI=99-n_A_AGI),
      n_A_VIT+wSPC_VIT<99&&(n_A_VIT+wSPC_VIT+Math.floor(n_A_Buf3[14]/2)<99?wSPC_VIT+=Math.floor(n_A_Buf3[14]/2):wSPC_VIT=99-n_A_VIT),
      n_A_INT+wSPC_INT<99&&(n_A_INT+wSPC_INT+Math.floor(n_A_Buf3[15]/2)<99?wSPC_INT+=Math.floor(n_A_Buf3[15]/2):wSPC_INT=99-n_A_INT),
      n_A_DEX+wSPC_DEX<99&&(n_A_DEX+wSPC_DEX+Math.floor(n_A_Buf3[16]/2)<99?wSPC_DEX+=Math.floor(n_A_Buf3[16]/2):wSPC_DEX=99-n_A_DEX),
      n_A_LUK+wSPC_LUK<99&&(n_A_LUK+wSPC_LUK+Math.floor(n_A_Buf3[17]/2)<99?wSPC_LUK+=Math.floor(n_A_Buf3[17]/2):wSPC_LUK=99-n_A_LUK)
    ):n_A_Buf3[11]&&n_A_Buf3[18]&&(
      w=SRV?2:1,
      wSPC_STR+=Math.floor(n_A_Buf3[12]/w),
      wSPC_AGI+=Math.floor(n_A_Buf3[13]/w),
      wSPC_VIT+=Math.floor(n_A_Buf3[14]/w),
      wSPC_INT+=Math.floor(n_A_Buf3[15]/w),
      wSPC_DEX+=Math.floor(n_A_Buf3[16]/w),
      wSPC_LUK+=Math.floor(n_A_Buf3[17]/w)
    ),
    n_A_Buf6[19]
  ){
    var w1=Math.floor((n_A_AGI+wSPC_AGI)/2),w2;
    w2=Taijin?5*n_A_Buf6[19]:10*n_A_Buf6[19],
    wSPC_AGI-=w1>w2?w2:w1,
    w1=Math.floor((n_A_DEX+wSPC_DEX)/2),
    wSPC_DEX-=w1>w2?w2:w1
  }
  n_A_Buf6[20]&&(wSPC_AGI-=n_A_Buf6[20]+2),
  n_A_Buf6[22]&&(wSPC_LUK=-1*n_A_LUK),
  n_A_STR+=wSPC_STR,
  n_A_AGI+=wSPC_AGI,
  n_A_VIT+=wSPC_VIT,
  n_A_INT+=wSPC_INT,
  n_A_DEX+=wSPC_DEX,
  n_A_LUK+=wSPC_LUK,
  wSPC_STR>=0?myInnerHtml("A_STRp"," + "+wSPC_STR,0):myInnerHtml("A_STRp"," - "+-wSPC_STR,0),
  wSPC_AGI>=0?myInnerHtml("A_AGIp"," + "+wSPC_AGI,0):myInnerHtml("A_AGIp"," - "+-wSPC_AGI,0),
  wSPC_VIT>=0?myInnerHtml("A_VITp"," + "+wSPC_VIT,0):myInnerHtml("A_VITp"," - "+-wSPC_VIT,0),
  wSPC_INT>=0?myInnerHtml("A_INTp"," + "+wSPC_INT,0):myInnerHtml("A_INTp"," - "+-wSPC_INT,0),
  wSPC_DEX>=0?myInnerHtml("A_DEXp"," + "+wSPC_DEX,0):myInnerHtml("A_DEXp"," - "+-wSPC_DEX,0),
  wSPC_LUK>=0?myInnerHtml("A_LUKp"," + "+wSPC_LUK,0):myInnerHtml("A_LUKp"," - "+-wSPC_LUK,0)
}
function StPlusCalc2(_){
  for(var a=0,e=0;20>=e;e++) for(var n=0;0!=ItemOBJ[n_A_Equip[e]][n+11];n+=2) _==ItemOBJ[n_A_Equip[e]][n+11]&&(a+=ItemOBJ[n_A_Equip[e]][n+12]);
  return a
}
function StPlusCard(_){
  for(var a=0,e=0;25>=e;e++)
    for(var n=0;0!=cardOBJ[n_A_card[e]][n+4];n+=2) _==cardOBJ[n_A_card[e]][n+4]&&(a+=cardOBJ[n_A_card[e]][n+5]);
  for(var n=0;0!=PET_OBJ[n_A_Buf8[0]][n+3];n+=2) _==PET_OBJ[n_A_Buf8[0]][n+3]&&(a+=PET_OBJ[n_A_Buf8[0]][n+4]);
  var t=[0,0,0,0];
  for(e=0;3>=e;e++) t[e]=n_A_Buf8[8+e];
  for(e=0;2>=e;e++)
    for(n=e+1;3>=n;n++) t[e]==t[n]&&(t[n]=0);
  for(e=0;3>=e;e++)
    for(var n=0;0!=ITEM_SP_TIME_OBJ[t[e]][5+n];n+=2) _==ITEM_SP_TIME_OBJ[t[e]][5+n]&&(a+=ITEM_SP_TIME_OBJ[t[e]][6+n]);
  for(e=0;8>e;e+=2)   _==n_A_Buf9[e]+30&&(a+=n_A_Buf9[e+1]);
  for(e=8;16>e;e+=2)  _==n_A_Buf9[e]+40&&(a+=n_A_Buf9[e+1]);
  for(e=16;22>e;e+=2) _==n_A_Buf9[e]+27&&(a+=n_A_Buf9[e+1]);
  for(e=22;30>e;e+=2)
    _==n_A_Buf9[e]+80&&1==n_A_Buf9[e]?
      a+=n_A_Buf9[e+1]:
    _==n_A_Buf9[e]+82&&2==n_A_Buf9[e]?
      a+=n_A_Buf9[e+1]:
    1063!=_&&1064!=_&&1065!=_&&1575!=_&&1576!=_||3!=n_A_Buf9[e]?_==n_A_Buf9[e]+78&&4==n_A_Buf9[e]?
      a+=n_A_Buf9[e+1]:
    _==n_A_Buf9[e]+78&&5==n_A_Buf9[e]?
      a+=n_A_Buf9[e+1]:
    1495!=_&&1496!=_||6!=n_A_Buf9[e]||
      (a+=n_A_Buf9[e+1]):
      a+=n_A_Buf9[e+1];
  for(e=47;53>e;e++) _==e-46&&(a+=n_A_Buf9[e]);
  return 13==_&&(a+=n_A_Buf9[30]),
    15==_&&(a+=n_A_Buf9[31]),
    14==_&&(a+=n_A_Buf9[32]),
    16==_&&(a+=n_A_Buf9[33]),
    18==_&&(a+=n_A_Buf9[34]),
    19==_&&(a+=n_A_Buf9[35]),
     8==_&&(a+=n_A_Buf9[36]),
     9==_&&(a+=n_A_Buf9[37]),
    10==_&&(a+=n_A_Buf9[39]),
    80==_&&(a+=n_A_Buf9[41]),
    89==_&&(a+=n_A_Buf9[43]),
    12==_&&(a+=n_A_Buf9[44]),
    75==_&&(a+=n_A_Buf9[45]),
    76==_&&(a+=n_A_Buf9[46]),
    a
}
function sort(_){
  var n;
  for(var a=1;"EOF"!=_[a];a++)
    for(var e=a;e>0;e--)
      if(ItemOBJ[_[e-1]][8]>ItemOBJ[_[e]][8]){n=_[e-1];_[e-1]=_[e],_[e]=n}
  return _
}
function WeaponSet(){
  n_A_JobSet(),
  n_A_WeaponType=eval(document.calcForm.A_WeaponType.value);
  for(var len=document.calcForm.A_weapon1.length,i=0;len>i;i++) document.calcForm.A_weapon1.options[0]=null;
  for(work=new Array,j=0,i=0;i<=ItemMax;i++)
    ItemOBJ[i][1]==n_A_WeaponType&&1==JobEquipItemSearch(ItemOBJ[i][2])?
      (work[j]=i,j++):
    SRV&&ItemOBJ[i][4]>=1&&ItemOBJ[i][1]==n_A_WeaponType&&SuperNoviceFullWeaponCHECK?(
      1==ItemOBJ[i][1]&&4==ItemOBJ[i][4]&&(work[j]=i,j++),
      (2==ItemOBJ[i][1]||ItemOBJ[i][1]>3)&&(work[j]=i,j++)
    ):0==SRV&&4==ItemOBJ[i][4]&&ItemOBJ[i][1]==n_A_WeaponType&&SuperNoviceFullWeaponCHECK&&(work[j]=i,j++);
  for(work[j]="EOF",work=sort(work),i=0;j>i;i++)
    ItemOBJ[work[i]][5]?
      document.calcForm.A_weapon1.options[i]=new Option(ItemOBJ[work[i]][8]+" ["+ItemOBJ[work[i]][5]+"]",ItemOBJ[work[i]][0]):
      document.calcForm.A_weapon1.options[i]=new Option(ItemOBJ[work[i]][8],ItemOBJ[work[i]][0])
}
function WeaponSetLeft() {
  n_A_JobSet(),
  n_A_Weapon2Type=eval(document.calcForm.A_Weapon2Type.value);
  for(var len=document.calcForm.A_weapon2.length,i=0;len>i;i++) document.calcForm.A_weapon2.options[0]=null;
  for(work=new Array,j=0,i=0;i<=ItemMax;i++)
    ItemOBJ[i][1]==n_A_Weapon2Type&&1==JobEquipItemSearch(ItemOBJ[i][2])&&(work[j]=i,j++);
  for(work[j]="EOF",work=sort(work),i=0;j>i;i++)
    ItemOBJ[work[i]][5]?
      document.calcForm.A_weapon2.options[i]=new Option(ItemOBJ[work[i]][8]+" ["+ItemOBJ[work[i]][5]+"]",ItemOBJ[work[i]][0]):
      document.calcForm.A_weapon2.options[i]=new Option(ItemOBJ[work[i]][8],ItemOBJ[work[i]][0])
}
function WeaponSet2(x){
  with(document.calcForm){
    var equiplvl_restrict=eval(document.getElementById("restrict_lvlequip").checked);
    if(x&&0==equiplvl_restrict) return;
    n_A_JobSet();
    for(var i=0;i<A_head1.length;i++) A_head1.options[0]=null;
    for(i=0;i<A_head2.length;i++) A_head2.options[0]=null;
    for(i=0;i<A_head3.length;i++) A_head3.options[0]=null;
    for(i=0;i<A_left.length;i++) A_left.options[0]=null;
    for(i=0;i<A_body.length;i++) A_body.options[0]=null;
    for(i=0;i<A_shoulder.length;i++) A_shoulder.options[0]=null;
    for(i=0;i<A_shoes.length;i++) A_shoes.options[0]=null;
    for(i=0;i<A_acces1.length;i++) A_acces1.options[0]=null,A_acces2.options[0]=null;
    if(0==first_check) return first_check=1,
      A_head1.options[0]=new Option(ItemOBJ[142][8],ItemOBJ[142][0]),
      A_head2.options[0]=new Option(ItemOBJ[243][8],ItemOBJ[243][0]),
      A_head3.options[0]=new Option(ItemOBJ[268][8],ItemOBJ[268][0]),
      A_left.options[0]=new Option(ItemOBJ[305][8],ItemOBJ[305][0]),
      A_body.options[0]=new Option(ItemOBJ[279][8],ItemOBJ[279][0]),
      A_shoulder.options[0]=new Option(ItemOBJ[311][8],ItemOBJ[311][0]),
      A_shoes.options[0]=new Option(ItemOBJ[317][8],ItemOBJ[317][0]),
      A_acces1.options[0]=new Option(ItemOBJ[326][8],ItemOBJ[326][0]),
      void(A_acces2.options[0]=new Option(ItemOBJ[326][8],ItemOBJ[326][0]));
    first_check=2;
    var workB=new Array,
    equipjob_restrict=eval(document.getElementById("restrict_jobequip").checked),
    equiplvl_restrict=eval(document.getElementById("restrict_lvlequip").checked);
    for(i=0;7>=i;i++) workB[i]=new Array;
    var wsj=new Array;
    for(i=0;7>=i;i++) wsj[i]=0;
    for(i=0;i<=ItemMax;i++)
      50==ItemOBJ[i][1]&&(1==JobEquipItemSearch(ItemOBJ[i][2])||SuperNoviceFullWeaponCHECK||0==equipjob_restrict)&&(ItemOBJ[i][7]<=n_A_BaseLV||SuperNoviceFullWeaponCHECK||0==equiplvl_restrict)?(workB[0][wsj[0]]=i,wsj[0]++):
      51==ItemOBJ[i][1]&&(1==JobEquipItemSearch(ItemOBJ[i][2])||SuperNoviceFullWeaponCHECK||0==equipjob_restrict)&&(ItemOBJ[i][7]<=n_A_BaseLV||SuperNoviceFullWeaponCHECK||0==equiplvl_restrict)?(workB[1][wsj[1]]=i,wsj[1]++):
      52==ItemOBJ[i][1]&&(1==JobEquipItemSearch(ItemOBJ[i][2])||SuperNoviceFullWeaponCHECK||0==equipjob_restrict)&&(ItemOBJ[i][7]<=n_A_BaseLV||SuperNoviceFullWeaponCHECK||0==equiplvl_restrict)?(workB[2][wsj[2]]=i,wsj[2]++):
      61!=ItemOBJ[i][1]||1!=JobEquipItemSearch(ItemOBJ[i][2])&&0!=equipjob_restrict||!(ItemOBJ[i][7]<=n_A_BaseLV||0==equiplvl_restrict)?
      60!=ItemOBJ[i][1]||1!=JobEquipItemSearch(ItemOBJ[i][2])&&0!=equipjob_restrict||!(ItemOBJ[i][7]<=n_A_BaseLV||0==equiplvl_restrict)?
      62!=ItemOBJ[i][1]||1!=JobEquipItemSearch(ItemOBJ[i][2])&&0!=equipjob_restrict||!(ItemOBJ[i][7]<=n_A_BaseLV||0==equiplvl_restrict)?
      63!=ItemOBJ[i][1]||1!=JobEquipItemSearch(ItemOBJ[i][2])&&0!=equipjob_restrict||!(ItemOBJ[i][7]<=n_A_BaseLV||0==equiplvl_restrict)?
      64!=ItemOBJ[i][1]||1!=JobEquipItemSearch(ItemOBJ[i][2])&&0!=equipjob_restrict||!(ItemOBJ[i][7]<=n_A_BaseLV||0==equiplvl_restrict)||(workB[7][wsj[7]]=i,wsj[7]++):
        (workB[6][wsj[6]]=i,wsj[6]++):
        (workB[5][wsj[5]]=i,wsj[5]++):
        (workB[4][wsj[4]]=i,wsj[4]++):
        (workB[3][wsj[3]]=i,wsj[3]++);
    for(i=0;7>=i;i++) workB[i][wsj[i]]="EOF";
    for (var m = 0; 7 >= m; m++) workB[m] = sort(workB[m]);
    var z = 0,
        w = "";
    for(i=0;i<wsj[0];i++)
      z=workB[0][i],
      w=ItemOBJ[z][2]>=3e3&&n_A_JOB>=41?" (aRO)":"",
      ItemOBJ[z][5]?
        A_head1.options[i]=new Option(ItemOBJ[z][8]+w+" ["+ItemOBJ[z][5]+"]",ItemOBJ[z][0]):
        A_head1.options[i]=new Option(ItemOBJ[z][8]+w,ItemOBJ[z][0]);
    for(i=0;i<wsj[1];i++)
      z=workB[1][i],
      w=ItemOBJ[z][2]>=3e3&&n_A_JOB>=41?" (aRO)":"",
      ItemOBJ[z][5]?
        A_head2.options[i]=new Option(ItemOBJ[z][8]+w+" ["+ItemOBJ[z][5]+"]",ItemOBJ[z][0]):
        A_head2.options[i]=new Option(ItemOBJ[z][8]+w,ItemOBJ[z][0]);
    for(i=0;i<wsj[2];i++)
      z=workB[2][i],
      w=ItemOBJ[z][2]>=3e3&&n_A_JOB>=41?" (aRO)":"",
      ItemOBJ[z][5]?
        A_head3.options[i]=new Option(ItemOBJ[z][8]+w+" ["+ItemOBJ[z][5]+"]",ItemOBJ[z][0]):
        A_head3.options[i]=new Option(ItemOBJ[z][8]+w,ItemOBJ[z][0]);
    for(i=0;i<wsj[3];i++)
      z=workB[3][i],
      w=ItemOBJ[z][2]>=3e3&&n_A_JOB>=41?" (aRO)":"",
      ItemOBJ[z][5]?
        A_left.options[i]=new Option(ItemOBJ[z][8]+w+" ["+ItemOBJ[z][5]+"]",ItemOBJ[z][0]):
        A_left.options[i]=new Option(ItemOBJ[z][8]+w,ItemOBJ[z][0]);
    for(i=0;i<wsj[4];i++)
      z=workB[4][i],
      w=ItemOBJ[z][2]>=3e3&&n_A_JOB>=41?" (aRO)":"",
      ItemOBJ[z][5]?
        A_body.options[i]=new Option(ItemOBJ[z][8]+w+" ["+ItemOBJ[z][5]+"]",ItemOBJ[z][0]):
        A_body.options[i]=new Option(ItemOBJ[z][8]+w,ItemOBJ[z][0]);
    for(i=0;i<wsj[5];i++)
      z=workB[5][i],
      w=ItemOBJ[z][2]>=3e3&&n_A_JOB>=41?" (aRO)":"",
      ItemOBJ[z][5]?
        A_shoulder.options[i]=new Option(ItemOBJ[z][8]+w+" ["+ItemOBJ[z][5]+"]",ItemOBJ[z][0]):
        A_shoulder.options[i]=new Option(ItemOBJ[z][8]+w,ItemOBJ[z][0]);
    for(i=0;i<wsj[6];i++)
      z=workB[6][i],
      w=ItemOBJ[z][2]>=3e3&&n_A_JOB>=41?" (aRO)":"",
      ItemOBJ[z][5]?
        A_shoes.options[i]=new Option(ItemOBJ[z][8]+w+" ["+ItemOBJ[z][5]+"]",ItemOBJ[z][0]):
        A_shoes.options[i]=new Option(ItemOBJ[z][8]+w,ItemOBJ[z][0]);
    for(i=0;i<wsj[7];i++)
      z=workB[7][i],
      w=ItemOBJ[z][2]>=3e3&&n_A_JOB>=41?" (aRO)":"",
      ItemOBJ[z][5]?(
        A_acces1.options[i]=new Option(ItemOBJ[z][8]+w+" ["+ItemOBJ[z][5]+"]",ItemOBJ[z][0]),
        A_acces2.options[i]=new Option(ItemOBJ[z][8]+w+" ["+ItemOBJ[z][5]+"]",ItemOBJ[z][0])
      ):(
        A_acces1.options[i]=new Option(ItemOBJ[z][8]+w,ItemOBJ[z][0]),
        A_acces2.options[i]=new Option(ItemOBJ[z][8]+w,ItemOBJ[z][0])
      )
  }
}
function FirstNovis(){
  1==first_check&&(first_check=2,WeaponSet2())
}
function JobEquipItemSearch(_){
  if(
    _>=2e3&&n_A_JOB<=40&&(_-=2e3),
    _>=1e3&&1999>=_
  ){
    if(1!=n_Tensei) return 0;
    _-=1e3
  }
  for(var a=0;999!=JobEquipItemOBJ[n_A_JOB][a];a++)
    if(JobEquipItemOBJ[n_A_JOB][a]==_) return 1;
  return 0
}
function n_A_JobSet(){
  n_A_JOB=eval(document.calcForm.A_JOB.value),
  21<=n_A_JOB&&n_A_JOB<=40?
    (n_Tensei=1,34<=n_A_JOB&&n_A_JOB<=40&&(n_A_JOB-=34)):
    n_Tensei=0
}
function n_A_JobClass(){
  return n_A_JOB<=6?n_A_JOB:
    20==n_A_JOB?0:
     7==n_A_JOB||13==n_A_JOB||21==n_A_JOB||27==n_A_JOB?1:
     8==n_A_JOB||14==n_A_JOB||22==n_A_JOB||28==n_A_JOB?2:
     9==n_A_JOB||15==n_A_JOB||23==n_A_JOB||29==n_A_JOB?3:
    10==n_A_JOB||16==n_A_JOB||17==n_A_JOB||24==n_A_JOB||30==n_A_JOB||31==n_A_JOB?4:
    11==n_A_JOB||18==n_A_JOB||25==n_A_JOB||32==n_A_JOB?5:
    12==n_A_JOB||19==n_A_JOB||26==n_A_JOB||33==n_A_JOB?6:
    41==n_A_JOB||42==n_A_JOB||43==n_A_JOB?41:7
}
function n_A_JobClass2(){
  return 7==n_A_JOB||21==n_A_JOB?7:
     8==n_A_JOB||22==n_A_JOB?8:
     9==n_A_JOB||23==n_A_JOB?9:
    10==n_A_JOB||24==n_A_JOB?10:
    11==n_A_JOB||25==n_A_JOB?11:
    12==n_A_JOB||26==n_A_JOB?12:
    13==n_A_JOB||27==n_A_JOB?13:
    14==n_A_JOB||28==n_A_JOB?14:
    15==n_A_JOB||29==n_A_JOB?15:
    16==n_A_JOB||30==n_A_JOB?16:
    17==n_A_JOB||31==n_A_JOB?16:
    18==n_A_JOB||32==n_A_JOB?18:
    19==n_A_JOB||33==n_A_JOB?19:0
}
function EquipNumSearch(_){
  for(var a=0,e=0;20>=e;e++) _==n_A_Equip[e]&&(a+=1);
  return a
}
function CardNumSearch(_) {
  for(var a=0,e=0;25>=e;e++) _==n_A_card[e]&&(a+=1);
  return a
}
function TimeItemNumSearch(_){
  for(var a=0,e=0;3>=e;e++) _==n_A_Buf8[8+e]&&(a+=1);
  return a
}
function NumSearch(_,a){
  for(var e=a.length-1,n=0;e>=n;n++)
    if(_==a[n]) return 1;
  return 0
}
function ActiveSkillSetPlus(){
  for(w_ASSP0=new Array,w_ASSP9=new Array,i=0;20>i;i++) w_ASSP0[i]=999,w_ASSP9[i]=0;
  j=0;
  var AutoSkillNum=0;
  for(i=0;20>=i;i++)
    for(j2=0;0!=ItemOBJ[n_A_Equip[i]][11+j2];j2+=2)
      AutoSkillNum=Math.abs(ItemOBJ[n_A_Equip[i]][12+j2]),
      220==ItemOBJ[n_A_Equip[i]][11+j2]?
        1==InsertSkill[AutoSkillNum][1]&&(w_ASSP0[j]=InsertSkill[AutoSkillNum][2],w_ASSP9[j]=InsertSkill[AutoSkillNum][0]+3e3,j++):
      221==ItemOBJ[n_A_Equip[i]][11+j2]&&
        1==AutoSpellSkill[AutoSkillNum][1]&&(w_ASSP0[j]=AutoSpellSkill[AutoSkillNum][2],w_ASSP9[j]=AutoSpellSkill[AutoSkillNum][0]+2e3,j++);
  for(i=0;25>=i;i++)
    for(j2=0;0!=cardOBJ[n_A_card[i]][4+j2];j2+=2)
      220==cardOBJ[n_A_card[i]][4+j2]?
        1==InsertSkill[cardOBJ[n_A_card[i]][5+j2]][1]&&(w_ASSP0[j]=InsertSkill[cardOBJ[n_A_card[i]][5+j2]][2],w_ASSP9[j]=cardOBJ[n_A_card[i]][5+j2]+3e3,j++):
      221==cardOBJ[n_A_card[i]][4+j2]&&
        1==AutoSpellSkill[cardOBJ[n_A_card[i]][5+j2]][1]&&(w_ASSP0[j]=AutoSpellSkill[cardOBJ[n_A_card[i]][5+j2]][2],w_ASSP9[j]=cardOBJ[n_A_card[i]][5+j2]+2e3,j++);
  if(
    !CardNumSearch(164)||9!=n_A_JOB&&23!=n_A_JOB||(w_ASSP0[j]=162,w_ASSP9[j]=2095,j++),
    CardNumSearch(277)&&1==n_A_JobClass()&&(w_ASSP0[j]=76,w_ASSP9[j]=2096,j++),
    EquipNumSearch(1096)&&9!=n_A_JobClass2()&&(w_ASSP0[j]=193,w_ASSP9[j]=2108,j++),
    document.calcForm.scrollygg.checked
  ){
    for(var wSC=[33,34,35,36,13,37,38,39,7],i=0;8>=i;i++) w_ASSP0[j]=InsertSkill[wSC[i]][2],w_ASSP9[j]=wSC[i]+3e3,j++;
    w_ASSP0[j]=InsertSkill[40][2],
    w_ASSP9[j]=3040,j++
  }
  for(w_ASSPch=0,i=0;20>i;i++) w_ASSP0bk[i]!=w_ASSP0[i]&&(w_ASSPch=1);
  if(w_ASSPch){
    for(k=0;999!=JobSkillActiveOBJ[n_A_JOB][k];k++);
    for(i=k+20;i>=k;i--) document.calcForm.A_ActiveSkill.options[i]=null;
    for(j=0,i=k;999!=w_ASSP0[j];i++,j++)
      w_ASSP9[j]>=3e3?
        document.calcForm.A_ActiveSkill.options[i]=new Option(SkillOBJ[w_ASSP0[j]][2]+" (Acquired Skill)",w_ASSP9[j]):
        document.calcForm.A_ActiveSkill.options[i]=new Option(SkillOBJ[w_ASSP0[j]][2]+" (Auto-Casted Skill)",w_ASSP9[j])
  }
  for(i=0;20>i;i++) w_ASSP0bk[i]=w_ASSP0[i];
  0==eval(document.calcForm.A_ActiveSkill.value)&&(document.calcForm.A_ActiveSkillLV.style.visibility="hidden")
}
function KakutyouKansuu(){
  if(wKK=eval(document.calcForm.A_Kakutyou.value),0==wKK) return void myInnerHtml("A_KakutyouData","",0);
  if(Heal=new Array,Heal2=new Array,1==wKK){
    for(w="<table><tr><td></td><td class=title>Heal on yourself</td><td class=title>Heal on other player</td></tr>",i=0;10>=i;i++) Heal[i]=HealCalc(i,1),Heal2[i]=HealCalc(i,0);
    3==n_A_JobClass()||13==n_A_JOB||14==n_A_JOB||20==n_A_JOB||27==n_A_JOB||28==n_A_JOB?(
      w+="<tr><td><b>Heal Level 1</b></td><td class=center>"+Heal[1]+"</td><td class=center>"+Heal2[1]+"</td></tr>",
      w+="<tr><td><b>Heal Level 2</b></td><td class=center>"+Heal[2]+"</td><td class=center>"+Heal2[2]+"</td></tr>",
      w+="<tr><td><b>Heal Level 3</b></td><td class=center>"+Heal[3]+"</td><td class=center>"+Heal2[3]+"</td></tr>",
      w+="<tr><td><b>Heal Level 4</b></td><td class=center>"+Heal[4]+"</td><td class=center>"+Heal2[4]+"</td></tr>",
      w+="<tr><td><b>Heal Level 5</b></td><td class=center>"+Heal[5]+"</td><td class=center>"+Heal2[5]+"</td></tr>",
      w+="<tr><td><b>Heal Level 6</b></td><td class=center>"+Heal[6]+"</td><td class=center>"+Heal2[6]+"</td></tr>",
      w+="<tr><td><b>Heal Level 7</b></td><td class=center>"+Heal[7]+"</td><td class=center>"+Heal2[7]+"</td></tr>",
      w+="<tr><td><b>Heal Level 8</b></td><td class=center>"+Heal[8]+"</td><td class=center>"+Heal2[8]+"</td></tr>",
      w+="<tr><td><b>Heal Level 9</b></td><td class=center>"+Heal[9]+"</td><td class=center>"+Heal2[9]+"</td></tr>",
      w+="<tr><td><b>Heal Level 10</b></td><td class=center>"+Heal[10]+"</td><td class=center>"+Heal2[10]+"</td></tr></table>"
    ):(
      w+="<tr><td><b>Heal Level 1 [Vitata Card]</b></td><td class=center>"+Heal[1]+"</td><td class=center>"+Heal2[1]+"</td></tr>",
      w+="<tr><td><b>Heal Level 2</b></td><td class=center>"+Heal[2]+"</td><td class=center>"+Heal2[2]+"</td></tr>",
      w+="<tr><td><b>Heal Level 3</b></td><td class=center>"+Heal[3]+"</td><td class=center>"+Heal2[3]+"</td></tr>",
      w+="<tr><td><b>Heal Level 4</b></td><td class=center>"+Heal[4]+"</td><td class=center>"+Heal2[4]+"</td></tr>",
      w+="<tr><td><b>Heal Level 5 [Scroll]</b></td><td class=center>"+Heal[5]+"</td><td class=center>"+Heal2[5]+"</td></tr></table>"
    ),
    w+="<br><b>Required Int/Lv for next bonus:</b> +"+(8-(n_A_BaseLV+n_A_INT)%8)+" [Heal Boost: "+n_tok[91]+"%]",
    myInnerHtml("A_KakutyouData",w,0)
  }
  else if(2==wKK)
    1==n_A_JobClass()||20==n_A_JOB?(
      HPRLV=eval(document.calcForm.A_KakutyouSelNum.value),
      w="<br>HP regen: "+Math.floor((5+n_A_MaxHP/500)*HPRLV),
      (EquipNumSearch(1240)||20==n_A_JOB)&&(SPRLV=eval(document.calcForm.A_KakutyouSelNumSP.value),w+="<br>SP regen: "+Math.floor((3+n_A_MaxSP/500)*SPRLV)),
      myInnerHtml("A_KakutyouData", w, 0)
    ):
    5==n_A_JobClass()||9==n_A_JOB||23==n_A_JOB||44==n_A_JOB?(
      SPRLV=eval(document.calcForm.A_KakutyouSelNum.value),
      w="<br>SP regen: "+Math.floor((3+n_A_MaxSP/500)*SPRLV),
      EquipNumSearch(1240)&&(HPRLV=eval(document.calcForm.A_KakutyouSelNumHP.value),w+="<br>HP regen: "+Math.floor((5+n_A_MaxHP/500)*HPRLV)),
      myInnerHtml("A_KakutyouData", w, 0)
    ):
    EquipNumSearch(1240)?(
      HPRLV=eval(document.calcForm.A_KakutyouSelNumHP.value),
      SPRLV=eval(document.calcForm.A_KakutyouSelNumSP.value),
      w1=Math.floor((5+n_A_MaxHP/500)*HPRLV),
      w2=Math.floor((3+n_A_MaxSP/500)*SPRLV),
      myInnerHtml("A_KakutyouData","<br>HP regen: "+w1+"<br>SP regen: "+w2,0)
    ):
      myInnerHtml("A_KakutyouData","",0);
  else if(3==wKK)
    15==n_A_JOB||29==n_A_JOB?(
      SPRLV = eval(document.calcForm.A_KakutyouSelNum.value),
      w1=Math.floor((4+n_A_MaxHP/500)*SPRLV),
      w2=Math.floor((2+n_A_MaxSP/500)*SPRLV),
      myInnerHtml("A_KakutyouData","<br>HP regen: "+w1+"<br>SP regen: "+w2,0)
    ):
      myInnerHtml("A_KakutyouData","",0);
  else if(4==wKK){
    for(
      syozijob=[0,800,400,400,600,200,800,800,400,600,700,400,1e3,800,400,600,700,700,400,1e3,0,800,400,600,700,400,1e3,800,400,600,700,700,400,1e3,0,0,0,0,0,0,0,800,800,400,600,800],
      syoziryou=2e3+syozijob[n_A_JOB],
      syoziryou2=200*eval(document.calcForm.A_KakutyouSelNum2.value),
      eval(document.calcForm.A_youshi.checked)&&(syoziryou=2e3),
      syoziryou+=30*eval(document.calcForm.A_STR.value),
      SkillSearch(78)&&(syoziryou+=1e3),
      (6==n_A_JobClass()||20==n_A_JOB)&&(syoziryou+=200*eval(document.calcForm.A_KakutyouSelNum.value)),
      42==n_A_JOB?Knowledge=1+.1*eval(document.calcForm.SG_Weight.value):Knowledge=1,
      EquipKG=0,
      i=0;10>=i;i++
    ) EquipKG+=ItemOBJ[n_A_Equip[i]][6];
    w="<table>",
    w+="<tr><td><b><font color=red>Weight Limit: </font></b>"+(Math.floor(syoziryou*Knowledge)+syoziryou2)+"</td></tr><tr><td><b>Total Weight of Items: </b>"+EquipKG,
    w+="</td></tr></table>",
    myInnerHtml("A_KakutyouData",w,0)
  }
  else if(5==wKK){
    var JyoutaiTaisei=new Array,GensanTaisei=(n_A_BaseLV+n_A_LUK)/10;
    if(SRV){
      JyoutaiTaisei[0]=Math.floor(100*(3+n_A_VIT)/100),
      JyoutaiTaisei[1]=JyoutaiTaisei[0],
      JyoutaiTaisei[2]=Math.floor(100*(3+n_A_MDEF)/100),
      JyoutaiTaisei[3]=Math.floor(100*(3+n_A_LUK)/100),
      JyoutaiTaisei[4]=Math.floor(100*(3+(n_A_INT+n_A_VIT)/2)/100),
      JyoutaiTaisei[5]=Math.floor(100*(3+n_A_INT)/100),
      JyoutaiTaisei[6]=JyoutaiTaisei[0],
      JyoutaiTaisei[7]=Math.floor(100*(3+(n_A_STR+n_A_INT)/2)/100),
      JyoutaiTaisei[8]=JyoutaiTaisei[0],
      JyoutaiTaisei[9]=JyoutaiTaisei[2];
      for(var i=0;9>=i;i++) JyoutaiTaisei[i]>100&&(JyoutaiTaisei[i]=100),JyoutaiTaisei[i]<0&&(JyoutaiTaisei[i]=0);
      n_A_LUK<1&&(JyoutaiTaisei[3]=100),
      n_A_VIT>99&&(JyoutaiTaisei[3]=100),
      n_A_LUK>n_A_BaseLV&&(JyoutaiTaisei[3]=100)
    }else
      JyoutaiTaisei[0]=Math.floor(100*n_A_VIT)/100,
      JyoutaiTaisei[1]=JyoutaiTaisei[0],
      JyoutaiTaisei[2]=Math.floor(100*n_A_MDEF)/100,
      JyoutaiTaisei[3]=Math.floor(100*n_A_LUK)/100,
      JyoutaiTaisei[4]=Math.floor(100*n_A_INT)/150,
      JyoutaiTaisei[5]=Math.floor(100*n_A_INT)/100,
      JyoutaiTaisei[6]=JyoutaiTaisei[0],
      JyoutaiTaisei[7]=JyoutaiTaisei[4],
      JyoutaiTaisei[8]=JyoutaiTaisei[0],
      JyoutaiTaisei[9]=JyoutaiTaisei[2],
      0==n_A_LUK&&(JyoutaiTaisei[3]=100);
    9==n_A_BodyZokusei&&(JyoutaiTaisei[2]=100,JyoutaiTaisei[8]=100,JyoutaiTaisei[9]=100);
    for(var i=0;9>=i;i++)
      JyoutaiTaisei[i]+=Math.floor((100-JyoutaiTaisei[i])*n_tok[150+i])/100,
      JyoutaiTaisei[i]=Math.floor(100*JyoutaiTaisei[i])/100,
      JyoutaiTaisei[i]>100&&(JyoutaiTaisei[i]=100);
    w="<table>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[0]+"</b></td><td class='data'><b>"+n_A_zokusei[0]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[0]+"</b></td><td class='data'><b>"+n_tok[50]+" %</b></td>",
    w+="<td class='center'><b>"+IjyouOBJ[0]+"</b></td><td><b>"+JyoutaiTaisei[0]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[1]+"</b></td><td class='data'><b>"+n_A_zokusei[1]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[1]+"</b></td><td class='data'><b>"+n_tok[51]+" %</b></td>",
    w+="<td class='center'><b>"+IjyouOBJ[1]+"</b></td><td><b>"+JyoutaiTaisei[1]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[2]+"</b></td><td class='data'><b>"+n_A_zokusei[2]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[2]+"</b></td><td class='data'><b>"+n_tok[52]+" %</b></td>",
    w+="<td class='center'><b>"+IjyouOBJ[2]+"</b></td><td><b>"+JyoutaiTaisei[2]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[3]+"</b></td><td class='data'><b>"+n_A_zokusei[3]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[3]+"</b></td><td class='data'><b>"+n_tok[53]+" %</b></td>",
    w+="<td class='center'><b>"+IjyouOBJ[3]+"</b></td><td><b>"+JyoutaiTaisei[3]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[4]+"</b></td><td class='data'><b>"+n_A_zokusei[4]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[4]+"</b></td><td class='data'><b>"+n_tok[54]+" %</b></td>",
    w+="<td class='center'><b>"+IjyouOBJ[4]+"</b></td><td><b>"+JyoutaiTaisei[4]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[5]+"</b></td><td class='data'><b>"+n_A_zokusei[5]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[5]+"</b></td><td class='data'><b>"+n_tok[55] + " %</b></td>",
    w+="<td class='center'><b>"+IjyouOBJ[5]+"</b></td><td><b>"+JyoutaiTaisei[5]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[6]+"</b></td><td class='data'><b>"+n_A_zokusei[6]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[6]+"</b></td><td class='data'><b>"+n_tok[56] + " %</b></td>",
    w+="<td class='center'><b>"+IjyouOBJ[6]+"</b></td><td><b>"+JyoutaiTaisei[6]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[7]+"</b></td><td class='data'><b>"+n_A_zokusei[7]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[7]+"</b></td><td class='data'><b>"+n_tok[57] + " %</b></td>",
    w+="<td class='center'><b>"+IjyouOBJ[7]+"</b></td><td><b>"+JyoutaiTaisei[7]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[8]+"</b></td><td class='data'><b>"+n_A_zokusei[8]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[8]+"</b></td><td class='data'><b>"+n_tok[58] + " %</b></td>",
    w+="<td class='center'><b>"+IjyouOBJ[8]+"</b></td><td><b>"+JyoutaiTaisei[8]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[9]+"</b></td><td class='data'><b>"+n_A_zokusei[9]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[9]+"</b></td><td class='data'><b>"+n_tok[59] + " %</b></td>",
    w+="<td class='center'><b>"+IjyouOBJ[9]+"</b></td><td><b>"+JyoutaiTaisei[9]+" %</b></td></tr>",
    w+="<tr><td colspan='6' class='center'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</td></tr></table>",
    w+="<table>",
    w+="<tr><td class='center'><b>Small Resistance</b></td><td class='data'><b>"+n_tok[190]+" %</b></td>",
    w+="<td class='center'><b>Boss Resistance</b></td><td><b>"+n_tok[77]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>Medium Resistance</b></td><td class='data'><b>"+n_tok[191]+" %</b></td>",
    w+="<td class='center'><b>Normal Resistance</b></td><td><b>"+n_tok[79]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>Large Resistance</b></td><td class='data'><b>"+n_tok[192]+" %</b></td>",
    w+="<td class='center'><b>Long-range Resistance</b></td><td><b>"+n_tok[78]+" %</b></td></tr>",
    w+="</table>";
    var gt=Math.floor(100*(GensanTaisei-9.9))/100;
    0>gt&&(gt=0),
    myInnerHtml("A_KakutyouData",w,0)
  }
  else if(6==wKK){
    var w;
    F_MOD=0,G_MOD=0,B_MOD=0,SM_MOD=0,B_MOD+=n_tok[80]+n_tok[26];
    for(var i=0;7>=i;i++) 244==n_A_card[i]&&(G_MOD+=40);
    for(EquipNumSearch(835)&&(SM_MOD+=10),844==n_A_Equip[9]&&(SM_MOD+=10),844==n_A_Equip[10]&&(SM_MOD+=10),i=22;30>i;i+=2) 6==n_A_Buf9[i]&&(SM_MOD+=n_A_Buf9[i+1]);
    for(i=22;30>i;i+=2) 3==n_A_Buf9[i]&&(G_MOD+=n_A_Buf9[i+1]);
    F_M1=eval(document.calcForm.R_OBJ.value),
    F_M2=eval(document.calcForm.S_OBJ.value),
    F_M3=eval(document.calcForm.E_OBJ.value),
    F_M4=eval(document.calcForm.B_OBJ.value),
    F_M5=eval(document.calcForm.SP_OBJ.value),
    0==F_M1?F_M1=n_tok[30]:1==F_M1?F_M1=n_tok[31]:2==F_M1?F_M1=n_tok[32]:3==F_M1?F_M1=n_tok[33]:4==F_M1?F_M1=n_tok[34]:5==F_M1?F_M1=n_tok[35]:6==F_M1?F_M1=n_tok[36]:7==F_M1?F_M1=n_tok[37]:8==F_M1?F_M1=n_tok[38]:9==F_M1&&(F_M1=n_tok[39]),
    0==F_M2?F_M2=n_tok[27]:1==F_M2?F_M2=n_tok[28]:2==F_M2&&(F_M2=n_tok[29]),
    0==F_M3?F_M3=n_tok[40]:1==F_M3?F_M3=n_tok[41]:2==F_M3?F_M3=n_tok[42]:3==F_M3?F_M3=n_tok[43]:4==F_M3?F_M3=n_tok[44]:5==F_M3?F_M3=n_tok[45]:6==F_M3?F_M3=n_tok[46]:7==F_M3?F_M3=n_tok[47]:8==F_M3?F_M3=n_tok[48]:9==F_M3&&(F_M3=n_tok[49]),
    0==F_M4?F_M4=n_tok[80]:1==F_M4&&(F_M4=B_MOD),
    0==F_M5?F_M5=0:1==F_M5?F_M5=n_tok[81]:2==F_M5?F_M5=n_tok[84]:3==F_M5?F_M5=G_MOD:4==F_M5?F_M5=n_tok[82]:5==F_M5?F_M5=n_tok[83]:6==F_M5&&(F_M5=SM_MOD),
    F_M1=1+F_M1/100, F_M2=1+F_M2/100, F_M3=1+F_M3/100, F_M4=1+F_M4/100, F_M5=1+F_M5/100, F_M6=1+n_tok[25]/100, F_M7=1+n_tok[70]/100,
    F_MOD=Math.round(F_M1*F_M2*F_M3*F_M4*F_M5*100),
    F_MOD2=Math.round(F_M1*F_M2*F_M3*F_M4*F_M5*F_M6*100),
    F_MOD3=Math.round(F_M1*F_M2*F_M3*F_M4*F_M5*F_M7*100),
    F_MOD4=Math.round(F_M1*F_M2*F_M3*F_M4*F_M5*F_M6*F_M7*100),
    w="<table>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[0]+"</b></td><td class='data'><b>"+n_tok[40]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[0]+"</b></td><td class='data'><b>"+n_tok[30]+" %</b></td>",
    w+="<td class='center'><b>Goblin</b></td><td><b>"+n_tok[81]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[1]+"</b></td><td class='data'><b>"+n_tok[41]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[1]+"</b></td><td class='data'><b>"+n_tok[31]+" %</b></td>",
    w+="<td class='center'><b>Golem</b></td><td><b>"+n_tok[84]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[2]+"</b></td><td class='data'><b>"+n_tok[42]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[2]+"</b></td><td class='data'><b>"+n_tok[32]+" %</b></td>",
    w+="<td class='center'><b>Kobold</b></td><td><b>"+n_tok[82]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[3]+"</b></td><td class='data'><b>"+n_tok[43]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[3]+"</b></td><td class='data'><b>"+n_tok[33]+" %</b></td>",
    w+="<td class='center'><b>Orc</b></td><td><b>"+n_tok[83]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[4]+"</b></td><td class='data'><b>"+n_tok[44]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[4]+"</b></td><td class='data'><b>"+n_tok[34]+" %</b></td>",
    w+="<td class='center'><b>Satan Morroc</b></td><td><b>"+SM_MOD+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[5]+"</b></td><td class='data'><b>"+n_tok[45]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[5]+"</b></td><td class='data'><b>"+n_tok[35]+" %</b></td>",
    w+="<td class='center'><b>Guardian</b></td><td><b>"+G_MOD+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[6]+"</b></td><td class='data'><b>"+n_tok[46]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[6]+"</b></td><td class='data'><b>"+n_tok[36]+" %</b></td>",
    w+="<td class='center'><b>Normal</b></td><td><b>"+n_tok[80]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[7]+"</b></td><td class='data'><b>"+n_tok[47]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[7]+"</b></td><td class='data'><b>"+n_tok[37]+" %</b></td>",
    w+="<td class='center'><b>Boss</b></td><td><b>"+B_MOD+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[8]+"</b></td><td class='data'><b>"+n_tok[48]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[8]+"</b></td><td class='data'><b>"+n_tok[38]+" %</b></td>",
    w+="<td class='center'><b>Long-range</b></td><td><b>"+n_tok[25]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+ZokuseiOBJ[9]+"</b></td><td class='data'><b>"+n_tok[49]+" %</b></td>",
    w+="<td class='center'><b>"+SyuzokuOBJ[9]+"</b></td><td class='data'><b>"+n_tok[39]+" %</b></td>",
    w+="<td class='center'><b>Critical damage</b></td><td><b>"+n_tok[70]+" %</b></td></tr>",
    w+="<tr><td colspan='6' class='center'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</td></tr></table>",
    w+="<table>",
    w+="<tr><td class='center'><b>Small</b></td><td class='data'><b>"+n_tok[27]+" %</b></td>",
    w+="<td class='center'><b>Medium</b></td><td class='data'><b>"+n_tok[28]+" %</b></td>",
    w+="<td class='center'><b>Large</b></td><td><b>"+n_tok[29]+" %</b></td></tr>",
    w+="</table>",
    w+="<hr><table>",
    w+="<tr><td><b>Final Non-Critical Melee ATK based Damage Modifier: </b>"+F_MOD+" %</td></tr>",
    w+="<tr><td><b>Final Non-Critical Long-range ATK based Damage Modifier: </b>"+F_MOD2+" %</td></tr>",
    w+="<tr><td><b>Final Critical Melee ATK based Damage Modifier: </b>"+F_MOD3+" %</td></tr>",
    w+="<tr><td><b>Final Critical Long-range ATK based Damage Modifier: </b>"+F_MOD4+" %</td></tr>",
    w+="</table>",
    myInnerHtml("A_KakutyouSel",w,0)
  }
  //else if(7==wKK) n_B[6]=CYE[0],myInnerHtml("A_KakutyouData",w,0);
  else if(8==wKK){
    var w;
    w="<table>",
    w+="<tr>",
    w+="<tr><td class='center'><b>"+SyuzokuOBJ[0]+"</b></td><td class='data'><b>"+n_tok[170]+" %</b></td>",
    w+="<td class='center'><b>"+ZokuseiOBJ[0]+"</b></td><td class='data'><b>"+n_tok[650]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+SyuzokuOBJ[1]+"</b></td><td class='data'><b>"+n_tok[171]+" %</b></td>",
    w+="<td class='center'><b>"+ZokuseiOBJ[1]+"</b></td><td class='data'><b>"+n_tok[651]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+SyuzokuOBJ[2]+"</b></td><td class='data'><b>"+n_tok[172]+" %</b></td>",
    w+="<td class='center'><b>"+ZokuseiOBJ[2]+"</b></td><td class='data'><b>"+n_tok[652]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+SyuzokuOBJ[3]+"</b></td><td class='data'><b>"+n_tok[173]+" %</b></td>",
    w+="<td class='center'><b>"+ZokuseiOBJ[3]+"</b></td><td class='data'><b>"+n_tok[653]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+SyuzokuOBJ[4]+"</b></td><td class='data'><b>"+n_tok[174]+" %</b></td>",
    w+="<td class='center'><b>"+ZokuseiOBJ[4]+"</b></td><td class='data'><b>"+n_tok[654]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+SyuzokuOBJ[5]+"</b></td><td class='data'><b>"+n_tok[175]+" %</b></td>",
    w+="<td class='center'><b>"+ZokuseiOBJ[5]+"</b></td><td class='data'><b>"+n_tok[655]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+SyuzokuOBJ[6]+"</b></td><td class='data'><b>"+n_tok[176]+" %</b></td>",
    w+="<td class='center'><b>"+ZokuseiOBJ[6]+"</b></td><td class='data'><b>"+n_tok[656]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+SyuzokuOBJ[7]+"</b></td><td class='data'><b>"+n_tok[177]+" %</b></td>",
    w+="<td class='center'><b>"+ZokuseiOBJ[7]+"</b></td><td class='data'><b>"+n_tok[657]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+SyuzokuOBJ[8]+"</b></td><td class='data'><b>"+n_tok[178]+" %</b></td>",
    w+="<td class='center'><b>"+ZokuseiOBJ[8]+"</b></td><td class='data'><b>"+n_tok[658]+" %</b></td></tr>",
    w+="<tr><td class='center'><b>"+SyuzokuOBJ[9]+"</b></td><td class='data'><b>"+n_tok[179]+" %</b></td>",
    w+="<td class='center'><b>"+ZokuseiOBJ[9]+"</b></td><td class='data'><b>"+n_tok[659]+" %</b></td></tr>",
    myInnerHtml("A_KakutyouData",w,0)
  }
  else if(9==wKK){
    var w;
    w="<b>Cast Time: </b>"+Math.floor(1e4*n_A_CAST)/100+" % [<b>Bragi:</b> "+nb_tok+" %| <b>Gear:</b> "+-n_tok[73]+" % | <b>DEX:</b> "+n_A_DEX+" ]<BR>",
    w+="<b>Cast Delay: </b>"+Math.floor(100-AC_I-(100-AC_I)*n_tok[74]/100)+" % [<b>Bragi:</b> "+n_tok[74]+" % | <b>Gear:</b> "+AC_I+" %]<BR>",
    myInnerHtml("A_KakutyouData",w,0)
  }
  else if(10==wKK){
    var NowBaseExp=eval(document.calcForm.A_KakutyouSelNum.value),NowJobExp=eval(document.calcForm.A_KakutyouSelNum2.value);
    NowBaseExp>=0&&100>=NowBaseExp||(NowBaseExp=0,document.calcForm.A_KakutyouSelNum.value=0),
    NowJobExp>=0&&100>=NowJobExp||(NowJobExp=0,document.calcForm.A_KakutyouSelNum2.value=0);
    var JobType=0;
    0==n_A_JOB&&n_Tensei&&(JobType=1),
    (1<=n_A_JOB&&n_A_JOB<=6||41==n_A_JOB||20==n_A_JOB)&&(JobType=2,n_Tensei&&(JobType=3)),
    (7<=n_A_JOB&&n_A_JOB<=19||43==n_A_JOB)&&(JobType=4),
    21<=n_A_JOB&&n_A_JOB<=33&&(JobType=5),
    42==n_A_JOB&&(JobType=7),
    (44==n_A_JOB||45==n_A_JOB)&&(JobType=6),
    NowBaseExp=Math.floor(PC_BaseExp[n_Tensei][n_A_BaseLV]*NowBaseExp/100);
    var w="Required BaseExp for Base Up: <B>"+Kanma(PC_BaseExp[n_Tensei][n_A_BaseLV]-NowBaseExp)+" </B>exp<BR>",
    MonsterNum=0,
    OneCheck=0;
    if(0!=n_B[16]){
      for(i=n_A_BaseLV;99>i;i++)
      {
        var LvUpExp=PC_BaseExp[n_Tensei][i],w1=Math.floor((LvUpExp-NowBaseExp)/n_B[16]);
        for(MonsterNum+=w1,NowBaseExp+=w1*n_B[16];LvUpExp>NowBaseExp;) NowBaseExp+=n_B[16],MonsterNum+=1;
        0==OneCheck&&(OneCheck=1,w+="(Equals <B>"+Kanma(MonsterNum)+"</B> "+n_B[1]+" kill"+(1!=Kanma(MonsterNum)?"s":"")+")<BR>"),
        NowBaseExp-=LvUpExp,
        NowBaseExp>LvUpExp-1&&(NowBaseExp=LvUpExp-1)
      }
      w+="Until BaseLv99: <B>"+Kanma(MonsterNum)+"</B> more "+n_B[1]+" kill"+(1!=Kanma(MonsterNum)?"s":"")+"<BR><BR>"
    }
    if(
      NowJobExp=Math.floor(PC_JobExp[JobType][n_A_JobLV]*NowJobExp/100),
      (1<=n_A_JOB&&n_A_JOB<=6||41==n_A_JOB)&&50==n_A_JobLV&&(NowJobExp=0),
      w+="Required JobExp for Job Up: <B>"+Kanma(PC_JobExp[JobType][n_A_JobLV]-NowJobExp)+"</B> exp<BR>",
      MonsterNum=0,
      OneCheck=0,
      0!=n_B[17]
    ){
      for(i=1;0!=PC_JobExp[JobType][i];i++);
      var MaxJobLV=i;
      for((1<=n_A_JOB&&n_A_JOB<=6||41==n_A_JOB)&&(MaxJobLV=50),i=n_A_JobLV;MaxJobLV>i;i++){
        var LvUpExp=PC_JobExp[JobType][i],w1=Math.floor((LvUpExp-NowJobExp)/n_B[17]);
        for(MonsterNum+=w1,NowJobExp+=w1*n_B[17];LvUpExp>NowJobExp;) NowJobExp+=n_B[17],MonsterNum+=1;
        0==OneCheck&&(OneCheck=1,w+="(Equals <B>"+Kanma(MonsterNum)+"</B> "+n_B[1]+" kill"+(1!=Kanma(MonsterNum)?"s":"")+")<BR>"),
        NowJobExp-=LvUpExp,
        NowJobExp>LvUpExp-1&&(NowJobExp=LvUpExp-1)
      }
      w+="Until JobLv"+MaxJobLV+": <B>"+Kanma(MonsterNum)+"</B> more "+n_B[1]+" kill"+(1!=Kanma(MonsterNum)?"s":"")+"<BR>"
    }
    myInnerHtml("A_KakutyouData",w,0)
  }
  else if(11==wKK)
    if(H_Bonus=1,H_Bonus2=1,H_Bonus3=1,19==n_A_JOB||33==n_A_JOB){
      slv=eval(document.calcForm.SL_LV.value),
      evit=eval(document.calcForm.E_VIT.value),
      eint=eval(document.calcForm.E_INT.value),
      potr=eval(document.calcForm.POT_RLevel.value),
      isp=eval(document.calcForm.ISP.value),
      irp=eval(document.calcForm.IRP.value),
      rank_bonus=eval(document.calcForm.RNK_BNS.value),
      pot1=eval(document.calcForm.PP.value),
      prate1=Potion_Type_2[pot1][1],
      prate2=Potion_Type_2[pot1][2],
      1==rank_bonus&&(prate1=1.5*prate1),
      1==rank_bonus&&(prate2=1.5*prate2),
      33==n_A_JOB&&(pot2=eval(document.calcForm.SPP.value),
      prate3=Potion_Type_3[pot2][1],
      prate4=Potion_Type_3[pot2][2]),
      EquipNumSearch(712)&&(H_Bonus2+=.2),
      EquipNumSearch(1194)&&(H_Bonus3+=.05);
      for(var i=8;12>i;i++) 10==n_A_Buf8[i]&&EquipNumSearch(1e3)&&(H_Bonus+=.2);
      for(var i=8;9>=i;i++) 332==n_A_card[i]&&(H_Bonus+=.3),513==n_A_card[i]&&(H_Bonus+=.03);
      844==n_A_Equip[9]&&(H_Bonus+=.05),
      844==n_A_Equip[10]&&(H_Bonus+=.05),
      1111==n_A_Equip[9]&&(H_Bonus+=.05),
      1111==n_A_Equip[10]&&(H_Bonus+=.05),
      EquipNumSearch(1162)&&(H_Bonus+=.1),
      EquipNumSearch(1258)&&(H_Bonus+=.1),
      EquipNumSearch(1194)&&(H_Bonus+=.05),
      n_A_HEAD_DEF_PLUS>=7&&EquipNumSearch(1277)&&(H_Bonus+=.03),
      n_A_HEAD_DEF_PLUS>=9&&EquipNumSearch(1279)&&(H_Bonus+=.04),
      n_A_HEAD_DEF_PLUS>=9&&EquipNumSearch(1476)&&(H_Bonus+=.04),
      (1111==n_A_Equip[9]&&983==n_A_Equip[10]||1111==n_A_Equip[10]&&983==n_A_Equip[9])&&(H_Bonus+=.05),
      EquipNumSearch(1104)&&EquipNumSearch(1107)&&EquipNumSearch(1110)&&(H_Bonus+=.03),
      EquipNumSearch(959)&&EquipNumSearch(965)&&EquipNumSearch(968)&&(H_Bonus+=.1),
      H_HEALS=1+.1*irp,
      S_HEALS=1+.1*isp,
      4==pot1?(
        potheal1=Math.floor(prate1*(1+.1*potr+.05*pot1)*(1+slv/100)*(1+.02*eint)*S_HEALS),
        potheal2=Math.floor(prate2*(1+.1*potr+.05*pot1)*(1+slv/100)*(1+.02*eint)*S_HEALS)
      ):(
        potheal1=Math.floor(prate1*(1+.1*potr+.05*pot1)*(1+slv/100)*(1+.02*evit)*H_HEALS*H_Bonus*H_Bonus2*H_Bonus3),
        potheal2=Math.floor(prate2*(1+.1*potr+.05*pot1)*(1+slv/100)*(1+.02*evit)*H_HEALS*H_Bonus*H_Bonus2*H_Bonus3)
      ),
      33==n_A_JOB&&(
        potheal3=Math.floor(prate3*(1+.1*potr+.1*pot2)*(1+.02*evit)*H_HEALS*H_Bonus3),
        potheal4=Math.floor(prate4*(1+.1*potr+.1*pot2)*(1+.02*evit)*H_HEALS*H_Bonus3)
      ),
      Heal_POT="<table><tr><td><b>Potion Pitcher heals for: </b>"+potheal1+" ~ "+potheal2+"</td>",
      33==n_A_JOB&&(Heal_POT+="<td><b>Slim Potion Pitch heals for: </b>"+potheal3+" ~ "+potheal4),
      Heal_POT+="</td></tr></table>",
      myInnerHtml("A_KakutyouData",Heal_POT,0)
    } else myInnerHtml("A_KakutyouData","",0);
  else if(12==wKK)
    12==n_A_JOB||26==n_A_JOB?(
      smithing=eval(document.calcForm.A_SmithT.value),
      orideconres=eval(document.calcForm.A_OriR.value),
      weaponres=eval(document.calcForm.A_WepR.value),
      starcrumb=eval(document.calcForm.A_StarC.value),
      elemstone=eval(document.calcForm.A_ElemS.value),
      anvil=eval(document.calcForm.A_KakutyouSelNum.value),
      iron=eval(document.calcForm.A_Iron.value),
      steel=eval(document.calcForm.A_Steel.value),
      stone=eval(document.calcForm.A_StoneC.value),
      anvil2=Anvil_Type[anvil][1],
      adopted=eval(document.calcForm.A_youshi.checked),
      srate1=Math.floor(100*(50+5*smithing+weaponres+anvil2+.2*n_A_JobLV+.1*(n_A_DEX+n_A_LUK)-15*starcrumb-20*elemstone))/100,
      srate2=Math.floor(100*(50+5*smithing+weaponres+anvil2+.2*n_A_JobLV+.1*(n_A_DEX+n_A_LUK)-15*starcrumb-20*elemstone-20))/100,
      srate3=Math.floor(100*(50+5*smithing+orideconres+weaponres+anvil2+.2*n_A_JobLV+.1*(n_A_DEX+n_A_LUK)-15*starcrumb-20*elemstone-30))/100,
      srate4=Math.floor(100*(40+.2*n_A_JobLV+.1*(n_A_DEX+n_A_LUK)+5*iron))/100,
      srate5=Math.floor(100*(30+.2*n_A_JobLV+.1*(n_A_DEX+n_A_LUK)+5*steel))/100,
      srate6=Math.floor(100*(10+.2*n_A_JobLV+.1*(n_A_DEX+n_A_LUK)+5*stone))/100,
      srate1<0&&(srate1=0),
      srate2<0&&(srate2=0),
      srate3<0&&(srate3=0),
      srate4<0&&(srate4=0),
      srate5<0&&(srate5=0),
      srate6<0&&(srate6=0),
      adopted&&(srate1=Math.floor(.7*srate1*100)/100,srate2=Math.floor(.7*srate2*100)/100,srate3=Math.floor(.7*srate3*100)/100),
      w="<br><table><tr><td><b>Weapon Lvl 1: </b>"+srate1+" %</td>",
      w+="<td><b>Weapon Lvl 2: </b>"+srate2+" %</td>",
      w+="<td><b>Weapon Lvl 3: </b>"+srate3+" %</td></tr>",
      w+="<tr><td><b>Iron: </b>"+srate4+" %</td>",
      w+="<td><b>Steel: </b>"+srate5+" %</td>",
      w+="<td><b>Elemental Stone: </b>"+srate6+" %</td></tr></table>",
      myInnerHtml("A_KakutyouData",w,0)
    ):
    19==n_A_JOB||33==n_A_JOB?(
      potionr=eval(document.calcForm.A_PotionRLevel.value),
      vani=eval(document.calcForm.A_Van.value),
      preparep=eval(document.calcForm.A_PreparePLevel.value),
      selpot=eval(document.calcForm.A_KakutyouSelNum.value),
      potrate=Potion_Type[selpot][1],
      adopted=eval(document.calcForm.A_youshi.checked),
      srate=Math.floor(100*(.5*potionr+3*preparep+.2*n_A_JobLV+.1*(n_A_DEX+n_A_LUK+n_A_INT/2)+potrate+vani))/100,
      srate<0&&(srate=0),
      adopted&&(srate=Math.floor(.7*srate)),
      (3==selpot||4==selpot||13==selpot||14==selpot||15==selpot||16==selpot)&&(brate=0),
      5==selpot&&(brate=2.5),
      (0==selpot||1==selpot||2==selpot||6==selpot||7==selpot||8==selpot||9==selpot||10==selpot||11==selpot||12==selpot)&&(brate=5),
      frate1=Math.floor(100*(srate-brate))/100,
      frate1<0&&(frate1=0),
      frate2=Math.floor(100*(srate+brate))/100,
      frate2<0&&(frate2=0),
      myInnerHtml("A_KakutyouData","<b><br>Success rate: </b>"+srate+" % [ "+frate1+" % ~ "+frate2+" % ]",0)
    ):
    22==n_A_JOB?(
      myInnerHtml("A_KakutyouSel",'Potion to Create: <select name="A_KakutyouSelNum" onChange="StAllCalc()"></select><BR>',0),
      document.calcForm.A_KakutyouSelNum.options[0]=new Option("Poison Bottle",0),
      srate=Math.floor(100*(.2+.4*n_A_DEX+.2*n_A_LUK))/100,
      myInnerHtml("A_KakutyouData","<b><br>Sucess rate: </b>"+srate+" %",0)
    ):
      myInnerHtml("A_KakutyouData","",0);
  else if(13==wKK){
    var w="";
    (2==n_A_JobClass()||EquipNumSearch(1630)||CardNumSearch(152))&&(
      E_DEX1=eval(document.calcForm.E_DEX.value),
      StealLV=eval(document.calcForm.Steal_LV.value),
      DropC=eval(document.calcForm.DropChance.value),
      StealC=Math.round(DropC*(n_A_DEX+3*StealLV-E_DEX1+10))/100,
      StealC<0&&(StealC=0),StealC>100&&(StealC=100),
      myInnerHtml("Steal_CHANCE",StealC+" %",0),
      (14==n_A_JOB||28==n_A_JOB)&&(SmugLV=eval(document.calcForm.Steal_LV.value),
      SmugC=Math.round(DropC*(10+3*SmugLV+n_A_DEX-E_DEX1))/100,
      SmugC<0&&(SmugC=0),SmugC>100&&(SmugC=100),
      myInnerHtml("Smug_CHANCE",SmugC+" %",0))
    ),
    myInnerHtml("A_KakutyouData","",0)
  }
  else if(14==wKK)
    (CardNumSearch(157)||CardNumSearch(413)||EquipNumSearch(633)||14==n_A_JOB||28==n_A_JOB)&&(
      E_DEX1=eval(document.calcForm.E_DEX.value),
      (14==n_A_JOB||28==n_A_JOB)&&(
        S_LV1=eval(document.calcForm.S_LV.value),
        Strip=5+5*S_LV1+(n_A_DEX-E_DEX1)/5,
        S_Time=60+15*S_LV1+(n_A_DEX-E_DEX1)/2,
        Strip<5+5*S_LV1&&(Strip=5+5*S_LV1),
        S_Time<60&&(S_Time=60),
        myInnerHtml("S_CHANCE",Math.floor(10*Strip)/10+" %",0),
        myInnerHtml("S_TIME",Math.floor(10*S_Time)/10+" seconds",0)
      ),
      28==n_A_JOB&&(
        FS_LV1=eval(document.calcForm.FS_LV.value),
        FStrip=5+2*FS_LV1+(n_A_DEX-E_DEX1)/5,
        FS_Time=60+15*FS_LV1+(n_A_DEX-E_DEX1)/2,
        FStrip<5+2*FS_LV1&&(FStrip=5+2*FS_LV1),
        FS_Time<60&&(FS_Time=60),
        myInnerHtml("FS_CHANCE",Math.floor(10*FStrip)/10+" %",0),
        myInnerHtml("FS_TIME",Math.floor(10*FS_Time)/10+" seconds",0)
      ),
      CardNumSearch(157)&&(
        S_LV1=eval(document.calcForm.S2_LV.value),
        Strip=5+5*S_LV1+(n_A_DEX-E_DEX1)/5,
        S_Time=60+15*S_LV1+(n_A_DEX-E_DEX1)/2,
        Strip<5+5*S_LV1&&(Strip=5+5*S_LV1),
        S_Time<60&&(S_Time=60),
        myInnerHtml("S2_CHANCE",Math.floor(10*Strip)/10+" %",0),
        myInnerHtml("S2_TIME",Math.floor(10*S_Time)/10+" seconds",0)
      ),
      CardNumSearch(413)&&(
        S_LV1=eval(document.calcForm.S3_LV.value),
        Strip=5+5*S_LV1+(n_A_DEX-E_DEX1)/5,
        S_Time=60+15*S_LV1+(n_A_DEX-E_DEX1)/2,
        Strip<5+5*S_LV1&&(Strip=5+5*S_LV1),
        S_Time<60&&(S_Time=60),
        myInnerHtml("S3_CHANCE",Math.floor(10*Strip)/10+" %",0),
        myInnerHtml("S3_TIME",Math.floor(10*S_Time)/10+" seconds",0)
      ),
      EquipNumSearch(633)&&(
        FS_LV1=eval(document.calcForm.FS2_LV.value),
        FStrip=5+2*FS_LV1+(n_A_DEX-E_DEX1)/5,
        FS_Time=60+15*FS_LV1+(n_A_DEX-E_DEX1)/2,
        FStrip<5+2*FS_LV1&&(FStrip=5+2*FS_LV1),
        FS_Time<60&&(FS_Time=60),
        myInnerHtml("FS2_CHANCE",Math.floor(10*FStrip)/10+" %",0),
        myInnerHtml("FS2_TIME",Math.floor(10*FS_Time)/10+" seconds",0)
      )
    ), myInnerHtml("A_KakutyouData","",0);
  else if(15==wKK)
    Flv1=eval(document.calcForm.Flv.value),
    FStat1=eval(document.calcForm.FStat.value),
    CKit1=eval(document.calcForm.CKit.value),
    CExp1=eval(document.calcForm.CExp.value),
    adopted=eval(document.calcForm.A_youshi.checked),
    CExp1>2e3&&(CExp1=2e3),
    adopted?adp=.7:adp=1,
    1==Flv1&&4==FStat1&&(ItemN=2),
    (1==Flv1&&4!=FStat1||2==Flv1&&4==FStat1||3==Flv1&&4==FStat1)&&(ItemN=3),
    (2==Flv1&&4!=FStat1||3==Flv1&&(2==FStat1||3==FStat1||6==FStat1)||6==Flv1&&2==FStat1)&&(ItemN=4),
    (3==Flv1&&(1==FStat1||5==FStat1)||4==Flv1&&(1!=FStat1||5!=FStat1)||5==Flv1&&5!=FStat1||6==Flv1&&(2!=FStat1||5!=FStat1)||7==Flv1&&4==FStat1)&&(ItemN=5),
    (4==Flv1&&(4==FStat1||5==FStat1)||5==Flv1&&5==FStat1||6==Flv1&&5==FStat1||7==Flv1&&4!=FStat1||8==Flv1&&5!=FStat1)&&(ItemN = 6),
    (8==Flv1&&5==FStat1||9==Flv1)&&(ItemN=7),
    10==Flv1&&(ItemN=8),
    Food_Powa=1200*(CKit1+1)+20*(n_A_BaseLV+1)+20*n_A_DEX-400*Flv1-10*(100-(n_A_LUK+1))-500*(ItemN-1),
    Food_MIN=Math.round(Food_Powa+100*(0+(6+CExp1/80))*adp)/100,
    Food_AVG=Math.round(Food_Powa+100*(12+(6+CExp1/80))*adp)/100,
    Food_MAX=Math.round(Food_Powa+100*(24+(6+CExp1/80))*adp)/100,
    FDA1=Math.round(100*(Food_MIN-5))/100,
    FDA2=Math.round(100*(Food_MIN-1))/100,
    FDB1=Math.round(100*(Food_AVG-5))/100,
    FDB2=Math.round(100*(Food_AVG-1))/100,
    FDC1=Math.round(100*(Food_MAX-5))/100,
    FDC2=Math.round(100*(Food_MAX-1))/100,
    Food_MIN<=0&&(Food_MIN=0,FDA1=0,FDA2=0),
    FDA1<=0&&(FDA1=0), FDA2<=0&&(FDA1=0,FDA2=0), Food_AVG<=0&&(Food_AVG=0,FDB1=0,FDB2=0),
    FDB1<=0&&(FDB1=0), FDB2<=0&&(FDB1=0,FDB2=0), Food_MAX<=0&&(Food_MAX=0,FDC1=0,FDC2=0),
    FDC1<=0&&(FDC1=0), FDC2<=0&&(FDC1=0,FDC2=0), Food_MIN>100&&(Food_MIN=100),
    FDA1>100&&(FDA1=100), FDA2>100&&(FDA2=100), Food_AVG>100&&(Food_AVG=100),
    FDB1>100&&(FDB1=100), FDB2>100&&(FDB2=100), Food_MAX>100&&(Food_MAX=100),
    FDC1>100&&(FDC1=100), FDC2>100&&(FDC2=100),
    4==CKit1?(
      myInnerHtml("COOK_MIN","100%",0),
      myInnerHtml("COOK_AVE","",0),
      myInnerHtml("COOK_MAX","",0)
    ):(
      myInnerHtml("COOK_MIN","Minimum: "+Food_MIN+"% ["+FDA1+"% ~ "+FDA2+"%]",0),
      myInnerHtml("COOK_AVE","Average: "+Food_AVG+"% ["+FDB1+"% ~ "+FDB2+"%]",0),
      myInnerHtml("COOK_MAX","Maximum: "+Food_MAX+"% ["+FDC1+"% ~ "+FDC2+"%]",0)
    ),
    myInnerHtml("A_KakutyouData", "", 0);
  else if(16==wKK){
    var pet=eval(document.calcForm.Pet.value),
      pethp=eval(document.calcForm.PetHP.value),
      PetC=Math.round((Pets[0][pet]+30*(n_A_BaseLV-MonsterOBJ[pet][5])+20*n_A_LUK)*(100-(pethp-100))/100)/100;
    0>PetC&&(PetC=0);
    var w="<HR><table><tr><td>Chance to pet: </td><td>"+PetC+" %</td></tr></table>";
    myInnerHtml("A_KakutyouData",w,0)
  }
  else if(17==wKK){
    var w;
    refinetype=[[
        [1,1,1,1, 1,  1,   1,   .6,   .24,  .048],
        [1,1,1,1, 1,  1,  .6,  .24,  .048, .0096],
        [1,1,1,1, 1, .6,  .3,  .06,  .012, .0024],
        [1,1,1,1,.6,.24,.096,.0192,.00384,384e-6],
        [1,1,1,1,.6,.24,.096,.0192,.00384,384e-6]
      ],[
        [1,1,1,1, 1,  1,   1,   .9,   .54,   .108],
        [1,1,1,1, 1,  1,  .9,  .54,  .162,  .0324],
        [1,1,1,1, 1, .9,.675,.2025,.06075,  .0121],
        [1,1,1,1,.9,.54,.324,.0972,.02916,.002916],
        [1,1,1,1,.9,.54,.324,.0972,.02916,.002916]
      ],[
        [.9,.81,.729,.6561,.52488,.419904,.2519424,.15116544,.060466176,.0120932352],
        [.9,.81,.729,.5832,.46656,.279936,.1679616,.06718464,.013436928,.0026873856],
        [.9,.81,.648,.5184,.31104,.186624, .093312, .0186624, .00373248,  746496e-9],
        [.9,.72,.576,.3456,.20736,.082944,.0331776,.00663552,.001327104,.0001327104],
        [.8,.64,.512,.3072,.18432,.073728,.0294912,.00589824,.001179648,.0001179648]
      ],[
        [1,1,1,1, 1,  1,   1,   .6,   .24,  .048],
        [1,1,1,1, 1,  1,  .6,  .24,  .048, .0096],
        [1,1,1,1, 1, .6,  .3,  .06,  .012, .0024],
        [1,1,1,1,.6,.24,.096,.0192,.00384,384e-6],
        [1,1,1,1,.6,.24,.096,.0192,.00384,384e-6]
      ]
    ];
    var equipval=eval(document.calcForm.EquipValue.value),
        equiptype=eval(document.calcForm.EquipType.value),
        oretype=eval(document.calcForm.OreType.value),
        oreval=eval(document.calcForm.OreValue.value),
        npccost=eval(document.calcForm.npcCost.value),
        desiredrefine=eval(document.calcForm.DesiredRefine.value),
        refinechance=refinetype[oretype][equiptype][desiredrefine-1],
        refinemeancost=Math.round((equipval+(oreval+npccost)*desiredrefine)/refinechance)-equipval;
    w="<HR><table><tr><td>Chance to refine up to +"+desiredrefine+" = "+Math.round(1e6*refinechance)/1e4+" %</td></tr>",
    w+="<tr><td>Mean investment = "+refinemeancost+" zeny</td></tr></table>",
    myInnerHtml("A_KakutyouData",w,0)
  }
  else if(18==wKK){
    var equipval=eval(document.calcForm.EquipValue.value),
        itemval=eval(document.calcForm.ItemValue.value),
        npccost=eval(document.calcForm.npcCost.value),
        socketchance=eval(document.calcForm.SocketChance.value),
        socketmeancost=Math.round((equipval+itemval+npccost)/(socketchance/100)),
    w="<HR><table><tr><td>Mean investment = "+socketmeancost+" zeny</td></tr></table>";
    myInnerHtml("A_KakutyouData",w,0)
  }
  else if(19==wKK){
    hiddentype=[
      [   .2,   .4,.0667,.2667,.0444,.1333,.0222],
      [  .28,  .36,  .06,  .24,  .04,  .12,  .02],
      [.3333,.3333,.0555,.2222, .037,.1111,.0185]
    ];
    var equipval=eval(document.calcForm.EquipValue.value),
        equiptype=eval(document.calcForm.EquipType.value),
        npccost=eval(document.calcForm.npcCost.value),
        w='<HR><table style="text-align:right;"><tr><td></td><td class=title>Chance to get</td><td class=title>Mean zeny cost</td></tr>';
    w+="<tr><td>Any +1 stat enchant</td><td>"+1e6*hiddentype[equiptype][1]/1e4+" %</td><td>"+Math.round((equipval+npccost)/hiddentype[equiptype][1])+"</td></tr>",
    w+="<tr><td>Specific +1 stat enchant</td><td>"+1e6*hiddentype[equiptype][2]/1e4+" %</td><td>"+Math.round((equipval+npccost)/hiddentype[equiptype][2])+"</td></tr>",
    w+="<tr><td>Any +2 stat enchant</td><td>"+1e6*hiddentype[equiptype][3]/1e4+" %</td><td>"+Math.round((equipval+npccost)/hiddentype[equiptype][3])+"</td></tr>",
    w+="<tr><td>Specific +2 stat enchant</td><td>"+1e6*hiddentype[equiptype][4]/1e4+" %</td><td>"+Math.round((equipval+npccost)/hiddentype[equiptype][4])+"</td></tr>",
    w+="<tr><td>Any +3 stat enchant</td><td>"+1e6*hiddentype[equiptype][5]/1e4+" %</td><td>"+Math.round((equipval+npccost)/hiddentype[equiptype][5])+"</td></tr>",
    w+="<tr><td>Specific +3 stat enchant</td><td>"+1e6*hiddentype[equiptype][6]/1e4+" %</td><td>"+Math.round((equipval+npccost)/hiddentype[equiptype][6])+"</td></tr>",
    w+="<tr><td>Break</td><td>"+1e6*hiddentype[equiptype][0]/1e4+" %</td><td></td></tr>",
    w+="</table>",
    myInnerHtml("A_KakutyouData",w,0)
  }
  else if(20==wKK){
    var w;
    19==n_A_JOB||33==n_A_JOB?(
      Amistr=n_A_STR+n_A_AGI+n_A_VIT,
      Filir=n_A_STR+n_A_AGI+n_A_LUK,
      Vanilmirth=n_A_INT+n_A_DEX+n_A_LUK,
      Lif=n_A_VIT+n_A_INT+n_A_DEX,
      homontotal=Amistr+Filir+Vanilmirth+Lif,
      Amistr=Amistr/homontotal*100,
      Filir=Filir/homontotal*100,
      Vanilmirth=Vanilmirth/homontotal*100,
      Lif=Lif/homontotal*100,
      w="<table><tr><td>Chance to get Amistr: </td><td>"+Math.floor(10*Amistr)/10+" %</td></tr>",
      w+="<tr><td>Chance to get Filir: </td><td>"+Math.floor(10*Filir)/10+" %</td></tr>",
      w+="<tr><td>Chance to get Vanilmirth: </td><td>"+Math.floor(10*Vanilmirth)/10+" %</td></tr>",
      w+="<tr><td>Chance to get Lif: </td><td>"+Math.floor(10*Lif)/10+" %</td></tr></table>"
    ):
      w='<p class="center">Not available for this class.</p>',
    myInnerHtml("A_KakutyouData",w,0)
  }
}
function Kanma(_){
  var a="",e=new Array;
  0>_&&(_=-1*_,a+="-");
  for(var n=0;0!=Math.floor(_/1e3);n++){
    var t=_%1e3;
    0==t?e[n]=",000":10>t?e[n]=",00"+t:100>t?e[n]=",0"+t:e[n]=","+t,_=Math.floor(_/1e3)
  }
  for(e[n]=_;n>=0;) a+=e[n],n--;
  return a
}
function KakutyouKansuu2(){
  if(wKK=eval(document.calcForm.A_Kakutyou.value),2==wKK){
    if(1==n_A_JobClass()||20==n_A_JOB){
      for(
        HPRname='Increase HP Recovery Lv: <select name="A_KakutyouSelNum" onChange="StAllCalc()"></select>',
        20==n_A_JOB?
          HPRname+='<br>Increase SP Recovery Lv: <select name="A_KakutyouSelNumSP" onChange="StAllCalc()"></select>':
          EquipNumSearch(1240)&&(HPRname+='<br>Increase SP Recovery Lv: <select name="A_KakutyouSelNumSP" onChange="StAllCalc()"><option value="3">3</option></select>'),
        myInnerHtml("A_KakutyouSel",HPRname,0),
        i=0;10>=i;i++
      ) document.calcForm.A_KakutyouSelNum.options[i]=new Option(i,i);
      if(document.calcForm.A_KakutyouSelNum.value=10,20==n_A_JOB){
        for(i=0;10>=i;i++) document.calcForm.A_KakutyouSelNumSP.options[i]=new Option(i,i);
        document.calcForm.A_KakutyouSelNumSP.value=10
      }
      return
    }
    if(5==n_A_JobClass()||9==n_A_JOB||23==n_A_JOB||44==n_A_JOB){
      for(
        SPRname="Increase SP Recovery Lv: ",
        44==n_A_JOB&&(SPRname="Ninja Mastery Lv: "),
        SPRname+='<select name="A_KakutyouSelNum" onChange="StAllCalc()"></select>',
        EquipNumSearch(1240)&&(SPRname+='<br>Increase HP Recovery Lv: <select name="A_KakutyouSelNumHP" onChange="StAllCalc()"><option value="3">3</option></select>'),
        myInnerHtml("A_KakutyouSel",SPRname,0),
        i=0;10>=i;i++
      ) document.calcForm.A_KakutyouSelNum.options[i]=new Option(i,i);
      return void(document.calcForm.A_KakutyouSelNum.value=10)
    }
    return EquipNumSearch(1240)?(
      w='Increase HP Recovery Lv: <select name="A_KakutyouSelNumHP" onChange="StAllCalc()"><option value="3">3</option></select><br>',
      w+='Increase SP Recovery Lv: <select name="A_KakutyouSelNumSP" onChange="StAllCalc()"><option value="3">3</option></select><br>',
      void myInnerHtml("A_KakutyouSel",w,0)
    ):
      void myInnerHtml("A_KakutyouSel",'<p class="center">Not available for this class.</p>',0)
  }
  if(3==wKK){
    if(15==n_A_JOB||29==n_A_JOB){
      for(myInnerHtml("A_KakutyouSel",'Spiritual Cadence Lv: <select name="A_KakutyouSelNum" onChange="StAllCalc()"></select>',0),i=0;5>=i;i++) document.calcForm.A_KakutyouSelNum.options[i]=new Option(i,i);
      return void(document.calcForm.A_KakutyouSelNum.value=5)
    }
    return void myInnerHtml("A_KakutyouSel",'<p class="center">Not available for this class.</p>',0)
  }
  if(4!=wKK){
    if(6==wKK){
      for(
        w="<table>",
        w+='<tr><td>Target: <select name="R_OBJ" onChange="StAllCalc()"></select><select name="S_OBJ" onChange="StAllCalc()"></select><select name="E_OBJ" onChange="calc()"></select><select name="B_OBJ" onChange="calc()"></select><select name="SP_OBJ" onChange="calc()"></select></td></tr>',
        w+="</table>",
        myInnerHtml("A_KakutyouData",w,0),
        i=0;i<SyuzokuOBJ2.length;i++
      ) document.calcForm.R_OBJ.options[i]=new Option(SyuzokuOBJ2[i],i);
      for(document.calcForm.R_OBJ.value=0,i=0;i<SizeOBJ.length;i++) document.calcForm.S_OBJ.options[i]=new Option(SizeOBJ[i],i);
      for(document.calcForm.S_OBJ.value=0,i=0;i<ZokuseiOBJ2.length;i++) document.calcForm.E_OBJ.options[i]=new Option(ZokuseiOBJ2[i],i);
      for(document.calcForm.E_OBJ.value=0,i=0;i<BossTypeOBJ.length;i++) document.calcForm.B_OBJ.options[i]=new Option(BossTypeOBJ[i],i);
      for(document.calcForm.B_OBJ.value=0,i=0;i<SpecialTypeOBJ.length;i++) document.calcForm.SP_OBJ.options[i]=new Option(SpecialTypeOBJ[i],i);
      return void(document.calcForm.SP_OBJ.value=0)
    }
    /*
    if(7==wKK){
      for(
        w="<table>",
        w+='<tr><td>HP</td><td><input type="text" onChange="StAllCalc()" name="EN_HP" value="0" size=7></td><td>STR</td><td><input type="text" onChange="StAllCalc()" name="EN_STR" value="0" size=1></td>',
        w+='<td>Element</td><td><select name="EN_ELEM" onChange="StAllCalc()"></select><select name="EN_ELEM2" onChange="StAllCalc()"></select></td><td>Flee</td><td><input type="text" onChange="StAllCalc()" name="EN_FLEE" value="0" size=1></td></tr>',
        w+='<tr><td>VIT</td><td><input type="text" onChange="StAllCalc()" name="EN_VIT" value="0" size=1></td><td>INT</td><td><input type="text" onChange="StAllCalc()" name="EN_INT" value="0" size=1></td>',
        w+='<td>Race</td><td><select name="EN_RACE" onChange="StAllCalc()"></select></td><td>Perfect Dodge</td><td><input type="text" onChange="StAllCalc()" name="EN_PD" value="0" size=1></td></tr>',
        w+='<tr><td>DEF</td><td><select name="EN_DEF" onChange="StAllCalc()"></select></td><td>AGI</td><td><input type="text" onChange="StAllCalc()" name="EN_AGI" value="0" size=1></td>',
        w+='<td>Size</td><td><select name="EN_SIZE" onChange="StAllCalc()"></select></td><td>Demi-Human Resistance</td><td><select name="EN_DHR" onChange="StAllCalc()"></select> %</td></tr>',
        w+='<tr><td>MDEF</td><td><select name="EN_MDEF" onChange="cStAllCalc()"></select></td><td>LUK</td><td><input type="text" onChange="StAllCalc()" name="EN_LUK" value="0" size=1></td>',
        w+='<td>Type</td><td><select name="EN_TYPE" onChange="StAllCalc()"></select></td><td>Long Range Resistance</td><td><select name="EN_RR" onChange="StAllCalc()"></select> %</td></tr>',
        w+='<tr><td>+ HP Gear</td><td><input type="text" onChange="StAllCalc()" name="EN_HP1" value="0" size=1></td><td>+% HP Gear</td><td><input type="text" onChange="StAllCalc()" name="EN_HP2" value="0" size=1></td>',
        w+='<td>Energy Coat</td><td><select name="EN_EC" onChange="StAllCalc()"></select></td><td>Element Resistance</td><td><select name="EN_ELR1" onChange="StAllCalc()"></select><input type="text" onChange="StAllCalc()" name="EN_ELR11" value="0" size=1></tr>',
        w+='<tr><td>Angelus</td><td><select name="EN_ANG" onChange="StAllCalc()"></select></td><td>Auto-Guard</td><td><select name="EN_AG" onChange="StAllCalc()"></select></td><td>Defender</td><td><select name="EN_DF" onChange="StAllCalc()"></select></td><td>Element Resistance</td><td><select name="EN_ELR2" onChange="StAllCalc()"></select><input type="text" onChange="StAllCalc()" name="EN_ELR21" value="0" size=1></tr>',
        w+="</table>",
        myInnerHtml("A_KakutyouSel",w,0),
        i=0;99>=i;i++
      ) document.calcForm.EN_DEF.options[i]=new Option(i,i);
      for(document.calcForm.EN_DEF.value=0,i=0;99>=i;i++) document.calcForm.EN_MDEF.options[i]=new Option(i,i);
      for(document.calcForm.EN_MDEF.value=0,i=0;i<SyuzokuOBJ2.length;i++) document.calcForm.EN_RACE.options[i]=new Option(SyuzokuOBJ2[i],i);
      for(document.calcForm.EN_RACE.value=0,i=0;i<ZokuseiOBJ2.length;i++) document.calcForm.EN_ELEM.options[i]=new Option(ZokuseiOBJ2[i],i);
      for(document.calcForm.EN_ELEM.value=0,i=0;4>i;i++) document.calcForm.EN_ELEM2.options[i]=new Option(i+1,i);
      for(document.calcForm.EN_ELEM2.value=0,i=0;i<SizeOBJ.length;i++) document.calcForm.EN_SIZE.options[i]=new Option(SizeOBJ[i],i);
      for(document.calcForm.EN_SIZE.value=0,i=0;100>=i;i++) document.calcForm.EN_DHR.options[i]=new Option(i,i);
      for(document.calcForm.EN_DHR.value=0,i=0;i<BossTypeOBJ.length;i++) document.calcForm.EN_TYPE.options[i]=new Option(BossTypeOBJ[i],i);
      for(document.calcForm.EN_TYPE.value=0,i=0;100>=i;i++) document.calcForm.EN_RR.options[i]=new Option(i,i);
      for(document.calcForm.EN_RR.value=0,i=0;i<EnergyCoatOBJ.length;i++) document.calcForm.EN_EC.options[i]=new Option(EnergyCoatOBJ[i],i);
      for(document.calcForm.EN_EC.value=0,i=0;i<ZokuseiOBJ2.length;i++) document.calcForm.EN_ELR1.options[i]=new Option(ZokuseiOBJ2[i],i);
      for(document.calcForm.EN_ELR1.value=0,i=0;i<ZokuseiOBJ2.length;i++) document.calcForm.EN_ELR2.options[i]=new Option(ZokuseiOBJ2[i],i);
      for(document.calcForm.EN_ELR2.value=0,i=0;10>=i;i++) document.calcForm.EN_ANG.options[i]=new Option(i,i);
      for(document.calcForm.EN_ANG.value=0,i=0;10>=i;i++) document.calcForm.EN_AG.options[i]=new Option(i,i);
      for(document.calcForm.EN_AG.value=0,i=0;5>=i;i++) document.calcForm.EN_DF.options[i]=new Option(i,i);
      for(document.calcForm.EN_DF.value=0,i=0;99>=i;i++) document.calcForm.EN_MDEF.options[i]=new Option(i,i);
      return document.calcForm.EN_MDEF.value=0,void(EN_HP.value=CYE[0])
    }
    */
    if(10==wKK){
      var w;
      return w='Current Base Exp <input type="text" name="A_KakutyouSelNum" value="0" size=4 onkeyup="StAllCalc()" style="text-align: right;">%<BR>',
        w+='Current Job Exp <input type="text" name="A_KakutyouSelNum2" value="0" size=4 onkeyup="StAllCalc()" style="text-align: right;">%<BR>',
        void myInnerHtml("A_KakutyouSel",w,0)
    }
    if(11==wKK){
      if(19==n_A_JOB||33==n_A_JOB){
        for(
          w="<table>",
          w+='<tr><td>Soul Linker Lv:</td><td><select name="SL_LV" onChange="StAllCalc()"></select>',
          w+='<td>Target\'s VIT:</td><td><select name="E_VIT" onChange="StAllCalc()"></select></td>',
          w+='<td>Target\'s INT:</td><td><select name="E_INT" onChange="StAllCalc()"></select></td></tr>',
          w+='<tr><td>Potion Pitcher:</td><td><select name="PP" onChange="StAllCalc()"></select></td>',
          w+='<td>Learning Potion:</td><td><select name="POT_RLevel" onChange="StAllCalc()"></select></td>',
          w+='<td>Ranked:</td><td><select name="RNK_BNS" onChange="StAllCalc()"></select></td>',
          w+="</tr>",
          33==n_A_JOB&&(w+='<td>Slim Potion Pitcher:</td><td><select name="SPP" onChange="StAllCalc()"></select></td>'),
          w+='<td>Increase Spiritual Power: <td><select name="ISP" onChange="StAllCalc()"></select></td>',
          w+='<td>Increase Recuperative Power: <td><select name="IRP" onChange="StAllCalc()"></select></td>',
          w+="</tr></table>",
          myInnerHtml("A_KakutyouSel",w+"<br>",0),
          i=0;i<Potion_Max_2;i++
        ) document.calcForm.PP.options[i]=new Option(Potion_Type_2[i][3],i);
        if(document.calcForm.PP.value=0,33==n_A_JOB){
          for(i=0;i<Potion_Max_3;i++) document.calcForm.SPP.options[i]=new Option(Potion_Type_3[i][3],i);
          document.calcForm.SPP.value=0
        }
        for(i=0;10>=i;i++) document.calcForm.POT_RLevel.options[i]=new Option(i,i);
        for(document.calcForm.POT_RLevel.value=0,i=0;1>=i;i++) document.calcForm.RNK_BNS.options[i]=new Option(Pot_Rank[i][1],i);
        for(document.calcForm.RNK_BNS.value=0,i=0;200>=i;i++) document.calcForm.E_VIT.options[i]=new Option(i,i);
        for(document.calcForm.E_VIT.value=0,i=0;200>=i;i++) document.calcForm.E_INT.options[i]=new Option(i,i);
        for(document.calcForm.E_INT.value=0,i=0;99>=i;i++) document.calcForm.SL_LV.options[i]=new Option(i,i);
        for(document.calcForm.SL_LV.value=0,i=0;10>=i;i++) document.calcForm.ISP.options[i]=new Option(i,i);
        for(document.calcForm.ISP.value=0,i=0;10>=i;i++) document.calcForm.IRP.options[i]=new Option(i,i);
        return void(document.calcForm.IRP.value=0)
      }
      return void myInnerHtml("A_KakutyouSel", '<p class="center">Not available for this class.</p>', 0)
    }
    if(12==wKK){
      if(12==n_A_JOB||26==n_A_JOB){
        for(
          w='<table><tr><td>Oridecon Research:</td><td><select name="A_OriR" onChange="StAllCalc()"></select></td>',
          w+='<td>Weapon Research:</td><td><select name="A_WepR" onChange="StAllCalc()"></select></td>',
          w+='<td>Smith Lvl:</td><td><select name="A_SmithT" onChange="StAllCalc()"></select></td></tr>',
          w+='<tr><td>Star Crumb:</td><td><select name="A_StarC" onChange="StAllCalc()"></select></td>',
          w+='<td>Elemental Stone:</td><td><select name="A_ElemS" onChange="StAllCalc()"></select></td>',
          w+='<td>Anvil:</td><td><select name="A_KakutyouSelNum" onChange="StAllCalc()"></select></td></tr>',
          w+='<tr><td>Iron Tempering</td><td><select name="A_Iron" onChange="StAllCalc()"></select></td>',
          w+='<td>Steel Tempering :</td><td><select name="A_Steel" onChange="StAllCalc()"></select></td>',
          w+='<td>Enchanted Stone Craft:</td><td><select name="A_StoneC" onChange="StAllCalc()"></select></td></tr></table>',
          myInnerHtml("A_KakutyouSel",w,0),
          i=0;i<Anvil_Max;i++
        ) document.calcForm.A_KakutyouSelNum.options[i]=new Option(Anvil_Type[i][2],i);
        for(document.calcForm.A_KakutyouSelNum.value=0,i=0;5>=i;i++) document.calcForm.A_OriR.options[i]=new Option(i,i);
        for(document.calcForm.A_OriR.value=0,i=0;10>=i;i++) document.calcForm.A_WepR.options[i]=new Option(i,i);
        for(document.calcForm.A_WepR.value=0,i=0;3>=i;i++) document.calcForm.A_StarC.options[i]=new Option(i,i);
        for(document.calcForm.A_StarC.value=0,i=0;1>=i;i++) document.calcForm.A_ElemS.options[i]=new Option(i,i);
        for(document.calcForm.A_ElemS.value=0,i=0;3>=i;i++) document.calcForm.A_SmithT.options[i]=new Option(i,i);
        for(document.calcForm.A_SmithT.value=0,i=0;5>=i;i++) document.calcForm.A_Iron.options[i]=new Option(i,i);
        for(document.calcForm.A_Iron.value=0,i=0;5>=i;i++) document.calcForm.A_Steel.options[i]=new Option(i,i);
        for(document.calcForm.A_Steel.value=0,i=0;5>=i;i++) document.calcForm.A_StoneC.options[i]=new Option(i,i);
        return void(document.calcForm.A_StoneC.value=0)
      }
      if(19==n_A_JOB||33==n_A_JOB){
        for(
          potiontext='<table><tr><td>Potion to Create:</td><td><select name="A_KakutyouSelNum" onChange="StAllCalc()"></select></td>',
          potiontext+='<td>Change Instruction Level:</td><td><select name="A_Van" onChange="StAllCalc()"></select><td></tr>',
          potiontext+='<tr><td>Learning Potion:</td><td><select name="A_PotionRLevel" onChange="StAllCalc()"></select></td>',
          potiontext+='<td>Pharmacy:</td><td><select name="A_PreparePLevel" onChange="StAllCalc()"></select></td></tr></table>',
          myInnerHtml("A_KakutyouSel",potiontext+"",0),
          i=0;i<Potion_Max;i++
        ) document.calcForm.A_KakutyouSelNum.options[i]=new Option(Potion_Type[i][2],i);
        for(document.calcForm.A_KakutyouSelNum.value=0,i=0;10>=i;i++) document.calcForm.A_PotionRLevel.options[i]=new Option(i,i);
        for(document.calcForm.A_PotionRLevel.value=0,i=0;5>=i;i++) document.calcForm.A_Van.options[i]=new Option(i,i);
        for(document.calcForm.A_Van.value=0,i=0;10>=i;i++) document.calcForm.A_PreparePLevel.options[i]=new Option(i,i);
        return void(document.calcForm.A_PreparePLevel.value=0)
      }
      return void myInnerHtml("A_KakutyouSel", '<p class="center">Not available for this class.</p>',0)
    }
    if(13!=wKK){
      if(14!=wKK){
        if(15==wKK){
          for(
            w='<table><tr><td>Level of the Food:</td><td><select name="Flv" onChange="StAllCalc()"></select></td><td class="title">Success Rate</td></tr>',
            w+='<tr><td>Stat of the Food:</td><td><select name="FStat" onChange="StAllCalc()"></select></td><td class="center"><span id="COOK_MIN"></span></td></tr>',
            w+='<tr><td>Cooking Kit Used:</td><td><select name="CKit" onChange="StAllCalc()" style="width:130px;"></select></td><td class="center"><span id="COOK_AVE"></span></td></tr>',
            w+='<tr><td>Cooking Experience:</td><td><input type="text" onkeyup="StAllCalc()" name="CExp" value="0" size=2></td><td class="center"><span id="COOK_MAX"></span></td></tr></table>',
            myInnerHtml("A_KakutyouSel",w,0),
            i=1;10>=i;i++
          ) document.calcForm.Flv.options[i-1]=new Option(i,i);
          for(document.calcForm.Flv.value=0,i=0;5>=i;i++) document.calcForm.FStat.options[i]=new Option(Stat_Food[i][1],i);
          for(document.calcForm.FStat.value=0,i=0;i<Cook_Kit_Max;i++) document.calcForm.CKit.options[i]=new Option(Cook_Kit[i][1],i);
          return void(document.calcForm.CKit.value=0)
        }
        if(16==wKK){
          for(
            w='<table><tr><td>Monster to pet:</td><td><select name="Pet" onChange="StAllCalc()"></select></td></tr>',
            w+='<tr><td>Monster remaining HP:</td><td><select name="PetHP" onChange="StAllCalc()"></select></td></tr>',
            myInnerHtml("A_KakutyouSel",w,0),
            i=0;55>=i;i++
          ) document.calcForm.Pet.options[i]=new Option(MonsterOBJ[Pets[1][i]][1],i);
          for(document.calcForm.Pet.value=0,i=0;100>=i;i++) document.calcForm.PetHP.options[i]=new Option(i+" %",i);
          return void(document.calcForm.PetHP.value=100)
        }
        if(17==wKK){
          for(
            w='<table style="text-align:right;"><tr><td>Equipment zeny value:</td><td><input type="text" name="EquipValue" onkeyup="StAllCalc()" value="0" size="9" class="center"></td></tr>',
            w+='<tr><td>Equipment type:</td><td><select name="EquipType" onChange="StAllCalc()"><option value="0">Weapon Lv1</option><option value="1">Weapon Lv2</option><option value="2">Weapon Lv3</option><option value="3">Weapon Lv4</option><option value="4">Armor</option></select></td></tr>',
            w+='<tr><td>Ore type:</td><td><select name="OreType" onChange="StAllCalc()"><option value="0">Normal Ores</option><option value="1">Enriched Ores</option><option value="2">Normal Ores (F2P server)</option><option value="3">Enriched Ores (F2P server)</option></select></td></tr>',
            w+='<tr><td>Ore zeny value:</td><td><input type="text" name="OreValue" onkeyup="StAllCalc()" value="0" size="4" class="center"></td></tr>',
            w+='<tr><td>Refining zeny cost:</td><td><input type="text" name="npcCost" onkeyup="StAllCalc()" value="0" size="4" class="center"></td></tr>',
            w+='<tr><td>Desired refine:</td><td><select name="DesiredRefine" onChange="StAllCalc()"></select></td></tr></table>',
            myInnerHtml("A_KakutyouSel",w,0),
            i=1;10>=i;i++
          ) document.calcForm.DesiredRefine.options[i-1]=new Option("+"+i,i);
          return void(document.calcForm.DesiredRefine.value=0)
        }
        if(18==wKK){
          for(
            w='<table style="text-align:right;"><tr><td>Equipment zeny value:</td><td><input type="text" name="EquipValue" onkeyup="StAllCalc()" value="0" size="9" class="center"></td></tr>',
            w+='<tr><td>Used item zeny value:</td><td><input type="text" name="ItemValue" onkeyup="StAllCalc()" value="0" size="6" class="center"></td></tr>',
            w+='<tr><td>Enchanting zeny cost:</td><td><input type="text" name="npcCost" onkeyup="StAllCalc()" value="0" size="6" class="center"></td></tr>',
            w+='<tr><td>Enchanting success chance:</td><td><select name="SocketChance" onChange="StAllCalc()"></select></td></tr></table>',
            myInnerHtml("A_KakutyouSel",w,0),
            i=1;100>=i;i++
          ) document.calcForm.SocketChance.options[i-1]=new Option(i+" %",i);
          return void(document.calcForm.SocketChance.value=0)
        }
        return 19==wKK?(
          w='<table style="text-align:right;"><tr><td>Equipment zeny value:</td><td><input type="text" name="EquipValue" onkeyup="StAllCalc()" value="0" size="9" class="center"></td></tr>',
          w+='<tr><td>Equipment type:</td><td><select name="EquipType" onChange="StAllCalc()"><option value="0">Non slotted</option><option value="1">Slotted</option><option value="2">Special</option></select></td></tr>',
          w+='<tr><td>Enchanting zeny cost:</td><td><input type="text" name="npcCost" onkeyup="StAllCalc()" value="0" size="6" class="center"></td></tr></table>',
          void myInnerHtml("A_KakutyouSel",w,0)
        ):void myInnerHtml("A_KakutyouSel","",0)
      }
      if(
        w="",
        CardNumSearch(157)||CardNumSearch(413)||EquipNumSearch(633)||14==n_A_JOB||28==n_A_JOB?(
          w+='<table><tr><td>Enemy DEX: <select name="E_DEX" onChange="StAllCalc()"></select></td><td class="title">Skill Lv</td><td class="title">Chance</td><td class="title">Duration Time</td></tr>',
          (14==n_A_JOB||28==n_A_JOB)&&(w+='<tr class="center"><td>Strip [Helm], [Armor], [Weapon] or [Shield]</td><td><select name="S_LV" onChange="StAllCalc()"></select></td><td><span id="S_CHANCE"></span></td><td><span id="S_TIME"></span></td></tr>'),
          28==n_A_JOB&&(w+='<tr class="center"><td>Full Strip</td><td><select name="FS_LV" onChange="StAllCalc()"></select></td><td><span id="FS_CHANCE"></span></td><td><span id="FS_TIME"></span></td></tr>'),
          CardNumSearch(157)&&(w+='<tr class="center"><td>Strip [Weapon] (Auto-Casted)</td><td><select name="S2_LV" onChange="StAllCalc()"><option value="1">1</option></select></td><td><span id="S2_CHANCE"></span></td><td><span id="S2_TIME"></span></td></tr>'),
          CardNumSearch(413)&&(w+='<tr class="center"><td>Strip [Armor] (Auto-Casted)</td><td><select name="S3_LV" onChange="StAllCalc()"></select></td><td><span id="S3_CHANCE"></span></td><td><span id="S3_TIME"></span></td></tr>'),
          EquipNumSearch(633)&&(w+='<tr class="center"><td>Full Strip (Auto-Casted)</td><td><select name="FS2_LV" onChange="StAllCalc()"><option value="1">1</option></select></td><td><span id="FS2_CHANCE"></span></td><td><span id="FS2_TIME"></span></td></tr>'),
          w+="</table>",
          myInnerHtml("A_KakutyouSel",w,0)
        ):
          myInnerHtml("A_KakutyouSel",'<p class="center">Not available for this class.</p>',0),
        CardNumSearch(157)||CardNumSearch(413)||EquipNumSearch(633)||14==n_A_JOB||28==n_A_JOB
      ){
        for(i=0;200>=i;i++) document.calcForm.E_DEX.options[i]=new Option(i,i);
        if(document.calcForm.E_DEX.value=0,14==n_A_JOB||28==n_A_JOB){
          for(i=1;5>=i;i++) document.calcForm.S_LV.options[i-1]=new Option(i,i);
          document.calcForm.S_LV.value=1
        }
        if(28==n_A_JOB){
          for(i=1;5>=i;i++) document.calcForm.FS_LV.options[i-1]=new Option(i,i);
          document.calcForm.FS_LV.value=1
        }
        CardNumSearch(413)&&(CardNumSearch(113)&&CardNumSearch(295)&&CardNumSearch(391)&&CardNumSearch(260)&&(14==n_A_JOB||28==n_A_JOB)?document.calcForm.S3_LV.options[0]=new Option("5",5):document.calcForm.S3_LV.options[0]=new Option("1",1))
      }
    }
    else if(
      w='<table><tr><td>Enemy DEX: <select name="E_DEX" onChange="StAllCalc()"></select></td><td></td><td></td></tr>',
      w+='<tr><td>Monster Item Drop Chance: <input type="text" name="DropChance" onkeyup="StAllCalc()" value="0" size="4" class="center">%</td><td class="title">Skill Lv</td><td class="title">Chance</td></tr>',
      2==n_A_JobClass()||EquipNumSearch(1630)||CardNumSearch(152)?(
        w+='<tr class="center"><td style="text-align:right;">Steal</td><td><select name="Steal_LV" onChange="StAllCalc()"></select></td><td><span id="Steal_CHANCE"></span></td></tr>',
        (14==n_A_JOB||28==n_A_JOB)&&(w+='<tr class="center"><td style="text-align:right;">Smug</td><td><select name="Smug_LV" onChange="StAllCalc()"></select></td><td><span id="Smug_CHANCE"></span></td></tr>'),
        w+="</table>"
      ):w='<p class="center">Not available for this class.</p>',
      myInnerHtml("A_KakutyouSel",w,0),
      2==n_A_JobClass()||EquipNumSearch(1630)||CardNumSearch(152)
    ){
      for(i=0;200>=i;i++) document.calcForm.E_DEX.options[i]=new Option(i,i);
      if(document.calcForm.E_DEX.value=0,2==n_A_JobClass()){
        for(i=1;10>=i;i++) document.calcForm.Steal_LV.options[i-1]=new Option(i,i);
        document.calcForm.Steal_LV.value=1
      }
      else if(EquipNumSearch(1630)||CardNumSearch(152)){
        for(i=1;1>=i;i++) document.calcForm.Steal_LV.options[i-1]=new Option(i,i);
        document.calcForm.Steal_LV.value=1
      }
      if(14==n_A_JOB||28==n_A_JOB){
        for(i=1;5>=i;i++) document.calcForm.Smug_LV.options[i-1]=new Option(i,i);
        document.calcForm.Smug_LV.value=1
      }
    }
  }
  else if(6==n_A_JobClass()||20==n_A_JOB){
    for(
      myInnerHtml("A_KakutyouSel",'Enlarge Weight Limit Lv: <select name="A_KakutyouSelNum" onChange="StAllCalc()"></select><BR>Enlarge Weight Limit R Lv: <select name="A_KakutyouSelNum2" onChange="StAllCalc()"></select><BR>', 0),
      i=0;10>=i;i++
    ) document.calcForm.A_KakutyouSelNum2.options[i]=new Option(i,i);
    for(i=0;10>=i;i++) document.calcForm.A_KakutyouSelNum.options[i]=new Option(i,i);
    20==n_A_JOB?document.calcForm.A_KakutyouSelNum.value=0:document.calcForm.A_KakutyouSelNum.value=10
  }
  else if(42==n_A_JOB){
    for(
      myInnerHtml("A_KakutyouSel",'Enlarge Weight Limit R Lv: <select name="A_KakutyouSelNum2" onChange="StAllCalc()"></select><BR>Knowledge of the Sun, Moon and Stars Lv: <select name="SG_Weight" onChange="StAllCalc()"></select><BR>',0),
      i=0;10>=i;i++
    ) document.calcForm.A_KakutyouSelNum2.options[i]=new Option(i,i);
    for(i=0;10>=i;i++) document.calcForm.SG_Weight.options[i]=new Option(i, i)
  }
  else
    for(myInnerHtml("A_KakutyouSel", 'Enlarge Weight Limit R Lv: <select name="A_KakutyouSelNum2" onChange="StAllCalc()"></select><BR>',0),i=0;10>=i;i++) document.calcForm.A_KakutyouSelNum2.options[i]=new Option(i,i)
}
function SetCardShort(){
  with(document.calcForm)
    w=eval(A_cardshort.value),
    w>0&&(
      CardShort[w][1]<1e4?(
        A_weapon1_card1.value=CardShort[w][1],
        A_weapon1_card2.value=CardShort[w][2],
        A_weapon1_card3.value=CardShort[w][3],
        A_weapon1_card4.value=CardShort[w][4],
        (16==w||17==w)&&(
          w=MonsterOBJ[eval(B_Enemy.value)][3],
          10<=w&&w<=14&&(A_weapon1_card1.value=204),
          (20<=w&&w<=24||80<=w&&w<=94)&&(A_weapon1_card1.value=203),
          30<=w&&w<=34&&(A_weapon1_card1.value=201),
          40<=w&&w<=44&&(A_weapon1_card1.value=202)
        )
      ):"Remove All Cards"!=CardShort[w][0]?(
        0!=CardShort[w][2]&&(A_weapon1_card1.value=CardShort[w][2]),
        0!=CardShort[w][3]&&(A_head1_card.value=CardShort[w][3]),
        0!=CardShort[w][4]&&(A_left_card.value=CardShort[w][4]),
        0!=CardShort[w][5]&&(A_body_card.value=CardShort[w][5]),
        0!=CardShort[w][6]&&(A_shoulder_card.value=CardShort[w][6]),
        0!=CardShort[w][7]&&(A_shoes_card.value=CardShort[w][7]),
        0!=CardShort[w][8]&&(A_acces1_card.value=CardShort[w][8]),
        0!=CardShort[w][9]&&(A_acces2_card.value=CardShort[w][9]),
        0!=CardShort[w][10]&&(A_head2_card.value=CardShort[w][10])
      ):(
        A_weapon1_card1.value=0,A_weapon1_card2.value=0,A_weapon1_card3.value=0,A_weapon1_card4.value=0,
        "undefined"!=typeof A_weapon2_card1&&(A_weapon2_card1.value=0,A_weapon2_card2.value=0,A_weapon2_card3.value=0,A_weapon2_card4.value=0),
        A_head1_card.value=0,A_head2_card.value=0,
        A_left_card.value=0,
        A_body_card.value=0,
        A_shoulder_card.value=0,
        A_shoes_card.value=0,
        A_acces1_card.value=0,A_acces2_card.value=0
      ),
      ActiveSkillSetPlus()
    )
}
function SetCardShortLeft(){
  with(document.calcForm)
    w=eval(A_cardshortLeft.value),
    w>0&&(w+=1,
      CardShort[w][1]<1e4&&(
        A_weapon2_card1.value=CardShort[w][1],
        A_weapon2_card2.value=CardShort[w][2],
        A_weapon2_card3.value=CardShort[w][3],
        A_weapon2_card4.value=CardShort[w][4],
        (16==w||17==w)&&(
          w=MonsterOBJ[eval(B_Enemy.value)][3],
          10<=w&&w<=14&&(A_weapon2_card1.value=204),
          (20<=w&&w<=24||80<=w&&w<=94)&&(A_weapon2_card1.value=203),
          30<=w&&w<=34&&(A_weapon2_card1.value=201),
          40<=w&&w<=44&&(A_weapon2_card1.value=202)
        )
      )
    )
}
function EnemySort(){
  for(var len=document.calcForm.B_Enemy.length,i=0;len>i;i++) document.calcForm.B_Enemy.options[0]=null;
  ESNum=[1,3,2,21,22,16,17,13,100];
  var wES2=eval(document.calcForm.ENEMY_SORT.value);
  if(0!=wES2){
    for(wES=ESNum[eval(document.calcForm.ENEMY_SORT.value)],wESx[0][0]="S",wESx[0][1]="E",STERTw=0,ENDw=0,i=1;i<=EnemyNum;i++)
      if(j=ENDw,MonsterOBJ[i][wES]>=MonsterOBJ[j][wES]) wESx[j][1]=i,wESx[i][0]=j,wESx[i][1]="E",ENDw=i;
      else if(j=STERTw,MonsterOBJ[i][wES]<=MonsterOBJ[j][wES]) wESx[j][0]=i,wESx[i][0]="S",wESx[i][1]=j,STERTw=i;
      else{
        for(j=STERTw,jbk=STERTw;MonsterOBJ[i][wES]>MonsterOBJ[j][wES];) jbk=j,j=wESx[j][1];
        wESx[jbk][1]=i,wESx[i][0]=jbk,wESx[i][1]=j,wESx[j][0]=i
      }
    var x=new Array,i;
    x[0]=i=STERTw;
    for(var j=1;"E"!=wESx[i][1];j++) x[j]=wESx[i][1],i=wESx[i][1];
    if(x=SZ(x),ESwork2=new Array,21==wES||22==wES)
      for(i=0;i<=EnemyNum;i++) ESwork2[i]="["+MonsterOBJ[i][wES]+"] ";
    else if(2==wES)
      for(i=0;i<=EnemyNum;i++) ESwork2[i]="["+SyuzokuOBJ2[MonsterOBJ[i][2]]+"] ";
    else if(3==wES)
      for(i=0;i<=EnemyNum;i++) ESwork2[i]="["+ZokuseiOBJ2[Math.floor(MonsterOBJ[i][3]/10)]+MonsterOBJ[i][3]%10+"] ";
    else
      for(i=0;i<=EnemyNum;i++) ESwork2[i]="";
    var j=0;
    for(i=0;i<=EnemyNum;i++) -1!=x[i]&&(document.calcForm.B_Enemy.options[j]=new Option(ESwork2[x[i]]+MonsterOBJ[x[i]][1],x[i]),j++)
  }else{
    for(var x=new Array,i=0;i<=EnemyNum;i++) x[i]=MonsterABC[i];
    x=SZ(x);
    for(var j=0,i=0;i<=EnemyNum;i++) -1!=x[i]&&(document.calcForm.B_Enemy.options[j]=new Option(MonsterOBJ[x[i]][1],x[i]),j++)
  }
}
function SZ(_){
  var a=document.calcForm.ENEMY_SORT2.value;
  if(0!=a)
    for(var e=0;e<=EnemyNum;e++)
      if(-1!=_[e]){
        for(var n=0;"N"!=MonMap[a][n]&&_[e]!=MonMap[a][n];n++);
        "N"==MonMap[a][n]&&(_[e]=-1)
      }
  return _
}
function MANUKU_MONSTER(){
  for(var _=0;_<nMANUKU.length;_++)
    if(n_B[0]==nMANUKU[_]) return 1;
  return 0
}
function SUPURE_MONSTER(){
  for(var _=0;_<nSUPURE.length;_++)
    if(n_B[0]==nSUPURE[_]) return 1;
  return 0
}
function SaveLocal(){
  with(document.calcForm) if("undefined"==typeof Storage) alert("Sorry, your browser does not support web storage...");
  else{
    for(SaveData=new Array,i=0;414>=i;i++) SaveData[i]=0;
    SaveData[0]=1,
    SaveData[2]=eval(A_JOB.value),
    SaveData[3]=eval(A_JobLV.value),
    SaveData[4]=eval(A_BaseLV.value),
    SaveData[5]=eval(A_youshi.checked),1==SaveData[5]?SaveData[5]=1:0==SaveData[5]&&(SaveData[5]=0),
    SaveData[6]=eval(A_STR.value),
    SaveData[7]=eval(A_AGI.value),
    SaveData[8]=eval(A_VIT.value),
    SaveData[9]=eval(A_DEX.value),
    SaveData[10]=eval(A_INT.value),
    SaveData[11]=eval(A_LUK.value),
    SaveData[12]=eval(A_Weapon_zokusei.value),
    SaveData[13]=eval(A_WeaponType.value),
    SaveData[14]=eval(A_weapon1.value),
    SaveData[15]=eval(A_Weapon_ATKplus.value),
    SaveData[16]=eval(A_weapon1_card1.value),
    SaveData[17]=eval(A_weapon1_card2.value),
    SaveData[18]=eval(A_weapon1_card3.value),
    SaveData[19]=eval(A_weapon1_card4.value),
    n_Nitou?(
      SaveData[20]=eval(A_Weapon2Type.value),
      SaveData[21]=eval(A_weapon2.value),
      SaveData[22]=eval(A_Weapon2_ATKplus.value),
      SaveData[23]=eval(A_weapon2_card1.value),
      SaveData[24]=eval(A_weapon2_card2.value),
      SaveData[25]=eval(A_weapon2_card3.value),
      SaveData[26]=eval(A_weapon2_card4.value)
    ):(
      SaveData[20]=0,
      SaveData[21]=0,
      SaveData[22]=0,
      SaveData[23]=0,
      SaveData[24]=0,
      SaveData[25]=0,
      SaveData[26]=0
    ),
    (2==n_A_JobClass()||4==n_A_JobClass()||45==n_A_JOB&&0!=n_A_WeaponType)&&(SaveData[27]=eval(A_Arrow.value)),
    SaveData[28]=eval(A_head1.value),
    SaveData[29]=eval(A_head1_card.value),
    SaveData[30]=eval(A_HEAD_DEF_PLUS.value),
    SaveData[31]=eval(A_head2.value),
    SaveData[32]=eval(A_head2_card.value),
    SaveData[33]=eval(A_head3.value),
    SaveData[34]=eval(A_left.value),
    SaveData[35]=eval(A_left_card.value),
    SaveData[36]=eval(A_LEFT_DEF_PLUS.value),
    SaveData[37]=eval(A_body.value),
    SaveData[38]=eval(A_body_card.value),
    SaveData[39]=eval(A_BODY_DEF_PLUS.value),
    SaveData[40]=eval(A_shoulder.value),
    SaveData[41]=eval(A_shoulder_card.value),
    SaveData[42]=eval(A_SHOULDER_DEF_PLUS.value),
    SaveData[43]=eval(A_shoes.value),
    SaveData[44]=eval(A_shoes_card.value),
    SaveData[45]=eval(A_SHOES_DEF_PLUS.value),
    SaveData[46]=eval(A_acces1.value),
    SaveData[47]=eval(A_acces1_card.value),
    SaveData[48]=eval(A_acces2.value),
    SaveData[49]=eval(A_acces2_card.value),
    SaveData[50]=eval(A_HSE_HEAD1.value),
    SaveData[51]=eval(A_HSE.value),
    SaveData[52]=0,
    SaveData[53]=0,
    SaveData[54]=0,
    SaveData[55]=0,
    n_A_JobSet(),
    w=n_A_JOB;
    for(var ch=0,i=0;14>=i&&0==ch;i++)
      if(999!=JobSkillPassOBJ[w][i]){
        var wOBJ=document.getElementById("A_skill"+i);
          SaveData[56+i]=eval(wOBJ.value)
      }else ch=1;
    for(SaveData[71]=0,SaveData[72]=0,i=0;21>=i;i++) SaveData[73+i]=n_A_Buf2[i],1==SaveData[73+i]?SaveData[73+i]=1:0==SaveData[73+i]&&(SaveData[73+i]=0);
    for(SaveData[95]=0,SaveData[96]=0,i=0;36>=i;i++) SaveData[96+i]=n_A_Buf3[i],1==SaveData[96+i]?SaveData[96+i]=1:0==SaveData[96+i]&&(SaveData[96+i]=0);
    for(
      SaveData[134]=0,
      SaveData[135]=0,
      SaveData[136]=n_A_Buf3[40],
      SaveData[137]=n_A_Buf3[41],
      SaveData[138]=n_A_Buf3[42],
      SaveData[139]=n_A_Buf3[43],
      SaveData[140]=n_A_Buf3[44],
      SaveData[141]=0,
      SaveData[142]=0,i=0;23>=i;i++
    ) SaveData[143+i]=n_A_Buf6[i],1==SaveData[143+i]?SaveData[143+i]=1:0==SaveData[143+i]&&(SaveData[143+i]=0);
    for(SaveData[167]=0,SaveData[168]=0,i=0;51>=i;i++) SaveData[169+i]=n_A_Buf7[i],1==SaveData[169+i]?SaveData[169+i]=1:0==SaveData[169+i]&&(SaveData[169+i]=0);
    for(i=0;11>=i;i++) SaveData[221+i]=n_A_Buf8[i],1==SaveData[221+i]?SaveData[221+i]=1:0==SaveData[221+i]&&(SaveData[221+i]=0);
    for(
      SaveData[233]=0,
      SaveData[234]=0,
      SaveData[235]=0,
      SaveData[236]=0,
      SaveData[237]=Conf01.value,
      SaveData[238]=B_num.value,
      SaveData[239]=A8_Skill14.value,
      SaveData[240]=A8_Skill15.value,
      SaveData[241]=scrollygg.checked,
      SaveData[242]=0,
      SaveData[243]=eval(A_ActiveSkill.value),
      SaveData[244]=eval(A_ActiveSkillLV.value),
      (66==n_A_ActiveSkill||326==n_A_ActiveSkill||131==n_A_ActiveSkill||88==n_A_ActiveSkill||197==n_A_ActiveSkill||
        394==n_A_ActiveSkill||395==n_A_ActiveSkill||405==n_A_ActiveSkill||429==n_A_ActiveSkill)&&(SaveData[245] = eval(SkillSubNum.value)),
      SaveData[246]=B_Enemy.value,
      SaveData[247]=eval(B_AtkSkill.value),
      (444==n_B_AtkSkill||445==n_B_AtkSkill||131==n_B_AtkSkill)&&(SaveData[248]=eval(BSkillSubNum.value)),
      i=0;24>=i;i++
    ) SaveData[253+i]=n_B_IJYOU[i],1==SaveData[253+i]?SaveData[253+i]=1:0==SaveData[253+i]&&(SaveData[253+i]=0);
    for(SaveData[278]=0,SaveData[279]=0,SaveData[280]=0,i=0;14>=i;i++) SaveData[281+i]=n_B_KYOUKA[i],1==SaveData[281+i]?SaveData[281+i]=1:0==SaveData[281+i]&&(SaveData[281+i]=0);
    for(SaveData[296]=0,SaveData[297]=0,SaveData[298]=0,SaveData[299]=0,SaveData[300]=0,SaveData[301]=0,SaveData[302]=0,i=0;54>=i;i++) SaveData[303+i]=n_A_Buf9[i],1==SaveData[303+i]?SaveData[303+i]=1:0==SaveData[303+i]&&(SaveData[303+i]=0);
    for(SaveData[358]=0,SaveData[359]=0,SaveData[360]=0,SaveData[361]=0,SaveData[362]=0,SaveData[363]=0,i=0;54>=i;i++) SaveData[364+i]=n_B_manual[i],1==SaveData[364+i]?SaveData[364+i]=1:0==SaveData[364+i]&&(SaveData[364+i]=0);
    SaveData[419]=0,
    SaveData[420]=0,
    SaveData[421]=0,
    SaveData[422]=0,
    SaveData[423]=0,
    SaveData[424]=0,
    slotNum=A_SaveSlotLocal.value,
    localStorage["Slot"+slotNum]=JSON.stringify(SaveData),
    bkcN=slotNum,
    LoadLocal3(),
    A_SaveSlotLocal.value=bkcN
  }
}
function LoadLocal(){
  with(document.calcForm){
    if("undefined"==typeof Storage) alert("Sorry, your browser does not support web storage...");
    else if(slotNum=A_SaveSlotLocal.value,SaveData=new Array,"undefined"==typeof localStorage["Slot"+slotNum]){
      A_JOB.value=0,
      ClickJob(0),
      A_JobLV.value=1,
      A_BaseLV.value=1,
      A_youshi.checked=0,
      A_STR.value=1,
      A_AGI.value=1,
      A_VIT.value=1,
      A_DEX.value=1,
      A_INT.value=1,
      A_LUK.value=1,
      A_Weapon_zokusei.value=0,
      A_WeaponType.value=0,
      ClickWeaponType(0),
      n_A_JobSet(),
      A_weapon1.value=0,
      A_Weapon_ATKplus.value=0,
      A_weapon1_card1.value=0,
      A_weapon1_card2.value=0,
      A_weapon1_card3.value=0,
      A_weapon1_card4.value=0,
      A_head1.value=0,
      A_head1_card.value=0,
      A_HEAD_DEF_PLUS.value=0,
      A_head2.value=0,
      A_head2_card.value=0,
      A_head3.value=0,
      A_left.value=0,
      A_left_card.value=0,
      A_LEFT_DEF_PLUS.value=0,
      A_body.value=0,
      A_body_card.value=0,
      A_BODY_DEF_PLUS.value=0,
      A_shoulder.value=0,
      A_shoulder_card.value=0,
      A_SHOULDER_DEF_PLUS.value=0,
      A_shoes.value=0,
      A_shoes_card.value=0,
      A_SHOES_DEF_PLUS.value=0,
      A_acces1.value=0,
      A_acces1_card.value=0,
      A_acces2.value=0,
      A_acces2_card.value=0,
      A_HSE_HEAD1.value=0,
      A_HSE.value=0,
      n_itemSW=0,
      ClickB_Item("SW"),
      w=n_A_JOB;
      for(var ch=0,i=0;14>=i&&0==ch;i++)
        if(999!=JobSkillPassOBJ[w][i]){
          var wOBJ=document.getElementById("A_skill"+i);
          wOBJ.value = 0
        } else ch=1;
      for(i=0;21>=i;i++) n_A_Buf2[i]=0;
      for(n_SkillSW=0,i=0;36>=i;i++) n_A_Buf3[i]=0;
      for(n_Skill3SW=0,i=0;4>=i;i++) n_A_Buf3[40+i]=0;
      for(n_Skill4SW=0,i=0;23>=i;i++) n_A_Buf6[i]=0;
      for(n_Skill6SW=0,i=0;51>=i;i++) n_A_Buf7[i]=0;
      for(n_Skill7SW=0,i=0;15>=i;i++) n_A_Buf8[i]=0;
      for(n_Skill8SW=0,
        Conf01.value=30,B_num.value=1,A8_Skill14.value=0,A8_Skill15.value=0,scrollygg.checked=0,A_ActiveSkill.value=0,ClickActiveSkill(),A_ActiveSkillLV.value=0,
        (66==n_A_ActiveSkill||326==n_A_ActiveSkill||131==n_A_ActiveSkill||88==n_A_ActiveSkill||197==n_A_ActiveSkill||394==n_A_ActiveSkill||395==n_A_ActiveSkill||405==n_A_ActiveSkill||429==n_A_ActiveSkill)&&(SkillSubNum.value=0),
        B_Enemy.value=144,Bskill(),B_AtkSkill.value=0,i=0;24>=i;i++) n_B_IJYOU[i]=0;
      for(n_IjyouSW=0,i=0;14>=i;i++) n_B_KYOUKA[i]=0;
      for(n_KyoukaSW=0,i=0;54>=i;i++) n_A_Buf9[i]=0;
      for(n_Skill9SW=0,i=0;54>=i;i++) n_B_manual[i]=0;
      n_Skill10SW=0
    }else{
      for(i=0;336>=i;i++) SaveData[i]=0;
      SaveData=JSON.parse(localStorage["Slot"+slotNum]),
      A_JOB.value=SaveData[2],
      ClickJob(SaveData[2]),
      A_JobLV.value=SaveData[3],
      A_BaseLV.value=SaveData[4],
      A_youshi.checked=SaveData[5],
      A_STR.value=SaveData[6],
      A_AGI.value=SaveData[7],
      A_VIT.value=SaveData[8],
      A_DEX.value=SaveData[9],
      A_INT.value=SaveData[10],
      A_LUK.value=SaveData[11],
      A_Weapon_zokusei.value=SaveData[12],
      A_WeaponType.value=SaveData[13],
      ClickWeaponType(SaveData[13]),
      8!=SaveData[2]&&22!=SaveData[2]||11==SaveData[13]||(A_Weapon2Type.value=SaveData[20],ClickWeaponType2(SaveData[20])),
      n_A_JobSet(),
      (2==n_A_JobClass()||4==n_A_JobClass()||45==n_A_JOB&&0!=SaveData[13])&&(A_Arrow.value=SaveData[27]),
      A_weapon1.value=SaveData[14],
      ClickB_Item(SaveData[14]),
      A_Weapon_ATKplus.value=SaveData[15],
      A_weapon1_card1.value=SaveData[16],
      A_weapon1_card2.value=SaveData[17],
      A_weapon1_card3.value=SaveData[18],
      A_weapon1_card4.value=SaveData[19],
      n_Nitou&&(A_weapon2.value=SaveData[21],A_Weapon2_ATKplus.value=SaveData[22],A_weapon2_card1.value=SaveData[23],A_weapon2_card2.value=SaveData[24],A_weapon2_card3.value=SaveData[25],A_weapon2_card4.value=SaveData[26]),
      A_head1.value=SaveData[28],
      A_head1_card.value=SaveData[29],
      A_HEAD_DEF_PLUS.value=SaveData[30],
      A_head2.value=SaveData[31],
      A_head2_card.value=SaveData[32],
      A_head3.value=SaveData[33],
      A_left.value=SaveData[34],
      A_left_card.value=SaveData[35],
      A_LEFT_DEF_PLUS.value=SaveData[36],
      A_body.value=SaveData[37],
      A_body_card.value=SaveData[38],
      A_BODY_DEF_PLUS.value=SaveData[39],
      A_shoulder.value=SaveData[40],
      A_shoulder_card.value=SaveData[41],
      A_SHOULDER_DEF_PLUS.value=SaveData[42],
      A_shoes.value=SaveData[43],
      A_shoes_card.value=SaveData[44],
      A_SHOES_DEF_PLUS.value=SaveData[45],
      A_acces1.value=SaveData[46],
      A_acces1_card.value=SaveData[47],
      A_acces2.value=SaveData[48],
      A_acces2_card.value=SaveData[49],
      A_HSE_HEAD1.value=SaveData[50],
      A_HSE.value=SaveData[51],
      w=n_A_JOB;
      for(var ch=0,i=0;14>=i&&0==ch;i++)
        if(999!=JobSkillPassOBJ[w][i]){
          var wOBJ=document.getElementById("A_skill"+i);
          wOBJ.value=SaveData[56+i]
        }else ch=1;
        for(i=0;21>=i;i++) n_A_Buf2[i]=SaveData[73+i];
        for(i=0;36>=i;i++) n_A_Buf3[i]=SaveData[96+i];
        for(Buf3SW(0),i=0;4>=i;i++) n_A_Buf3[40+i]=SaveData[136+i];
        for(i=0;23>=i;i++) n_A_Buf6[i]=SaveData[143+i];
        for(i=0;51>=i;i++) n_A_Buf7[i]=SaveData[169+i];
        for(i=0;11>=i;i++) n_A_Buf8[i]=SaveData[221+i];
        for(Conf01.value=SaveData[237],B_num.value=SaveData[238],
          A8_Skill14.value=SaveData[239],A8_Skill15.value=SaveData[240],scrollygg.checked=SaveData[241],StCalc(1),ActiveSkillSetPlus(),A_ActiveSkill.value=SaveData[243],
          ClickActiveSkill(),A_ActiveSkillLV.value=SaveData[244],
          (66==n_A_ActiveSkill||326==n_A_ActiveSkill||131==n_A_ActiveSkill||88==n_A_ActiveSkill||197==n_A_ActiveSkill||394==n_A_ActiveSkill||395==n_A_ActiveSkill||405==n_A_ActiveSkill||429==n_A_ActiveSkill)&&(SkillSubNum.value=SaveData[245]),
          B_Enemy.value=SaveData[246],Bskill(),B_AtkSkill.value=SaveData[247],
          (444==SaveData[247]||445==SaveData[247]||131==SaveData[247])&&(BSkillSubNum.value=SaveData[248]),i=0;24>=i;i++) n_B_IJYOU[i]=SaveData[253+i];
        if(0==SaveData[0]){
          for(i=0;9>=i;i++) n_B_KYOUKA[i]=SaveData[281+i];
          var v1=0
        }else{
          for(i=0;14>=i;i++) n_B_KYOUKA[i]=SaveData[281+i];
          var v1=10
        }
        for(i=0;54>=i;i++) n_A_Buf9[i]=SaveData[293+i+v1];
        for(i=0;54>=i;i++) n_B_manual[i]=SaveData[354+i+v1]
    }
    refreshFields(),
    StCalc(1),
    StAllCalc(),
    ActiveSkillSetPlus(),
    calc()
  }
}
function LoadLocal3(){
  for(SaveData=new Array,k=1;k<=19;k++)
    slotNum="num0"+(k-1),9==k&&(slotNum="num0"+k),
    k>=10&&(slotNum="num"+k),
    "undefined"==typeof localStorage["Slot"+slotNum]?document.calcForm.A_SaveSlotLocal.options[k-1]=new Option("Save"+k+": No Data",slotNum):(SaveData=JSON.parse(localStorage["Slot"+slotNum]),
    1<=SaveData[2]&&SaveData[2]<=45?
      0==SaveData[5]?
        document.calcForm.A_SaveSlotLocal.options[k-1]=new Option("Save"+k+": "+JobName[SaveData[2]],slotNum):
        document.calcForm.A_SaveSlotLocal.options[k-1]=new Option("Save"+k+": Baby "+JobName[SaveData[2]],slotNum):
      999==SaveData[2]||0==SaveData[2]?
        document.calcForm.A_SaveSlotLocal.options[k-1]=new Option("Save"+k+": Novice",slotNum):
        document.calcForm.A_SaveSlotLocal.options[k-1]=new Option("Save"+k+": No Data",slotNum))
}
function delLocal(){
  window.confirm("Do you want to delete selected saved data?")&&(
    slotNum=document.calcForm.A_SaveSlotLocal.value,localStorage["Slot"+slotNum]=0,bkcN=slotNum,LoadLocal3(),document.calcForm.A_SaveSlotLocal.value=bkcN)
}
function NtoS2(_,a){
  var e="";
  return 3==a?(e+=n_NtoS2[Math.floor(_/3844)],e+=n_NtoS2[Math.floor(_%3844/62)],e+=n_NtoS2[_%62]):2==a?(e+=n_NtoS2[Math.floor(_/62)],e+=n_NtoS2[_%62]):e+=n_NtoS2[_],e
}
function NtoS01(_,a,e,n,t){
  var A=0;
  return 1==_&&(A+=16),1==a&&(A+=8),1==e&&(A+=4),1==n&&(A+=2),1==t&&(A+=1),NtoS2(A,1)
}
function NtoS05(_,a){
  var e;
  return e=6*_,e+=a,NtoS2(e,1)
}
function URLOUT(){
  with(document.calcForm){
    calc(),
    SaveData = new Array;
    for(var i=0;88>=i;i++) SaveData[i]="a";
    SaveData[0]=NtoS2(5,1),
    SaveData[1]=NtoS2(eval(A_JOB.value),2),
    SaveData[2]=NtoS2(eval(A_BaseLV.value),2),
    SaveData[3]=NtoS2(eval(A_JobLV.value),2),
    SaveData[4]=NtoS2(eval(A_STR.value),2),
    SaveData[5]=NtoS2(eval(A_AGI.value),2),
    SaveData[6]=NtoS2(eval(A_VIT.value),2),
    SaveData[7]=NtoS2(eval(A_DEX.value),2),
    SaveData[8]=NtoS2(eval(A_INT.value),2),
    SaveData[9]=NtoS2(eval(A_LUK.value),2),
    SaveData[10]=NtoS2(10*n_A_Buf7[35]+eval(A_Weapon_zokusei.value),1),
    SaveData[11]=NtoS2(eval(A_WeaponType.value),1),
    n_Nitou&&(SaveData[12]=NtoS2(eval(A_Weapon2Type.value),1)),
    (2==n_A_JobClass()||4==n_A_JobClass()||45==n_A_JOB&&0!=n_A_WeaponType)&&(SaveData[13]=NtoS2(eval(A_Arrow.value),1)),
    SaveData[14]=NtoS2(eval(A_weapon1.value),2),
    SaveData[15]=NtoS2(eval(A_Weapon_ATKplus.value),1),
    SaveData[16]=NtoS2(eval(A_weapon1_card1.value),2),
    SaveData[17]=NtoS2(eval(A_weapon1_card2.value),2),
    SaveData[18]=NtoS2(eval(A_weapon1_card3.value),2),
    SaveData[19]=NtoS2(eval(A_weapon1_card4.value),2),
    n_Nitou?(
      SaveData[20]=NtoS2(eval(A_weapon2.value),2),
      SaveData[21]=NtoS2(eval(A_Weapon2_ATKplus.value),1),
      SaveData[22]=NtoS2(eval(A_weapon2_card1.value),2),
      SaveData[23]=NtoS2(eval(A_weapon2_card2.value),2),
      SaveData[24]=NtoS2(eval(A_weapon2_card3.value),2),
      SaveData[25]=NtoS2(eval(A_weapon2_card4.value),2)
    ):(
      SaveData[20]=NtoS2(eval(A_left.value),2),
      SaveData[21]=NtoS2(eval(A_LEFT_DEF_PLUS.value),1),
      SaveData[22]=NtoS2(eval(A_left_card.value),2),
      SaveData[24]=SaveData[25]=SaveData[23]=NtoS2(0,2)
    ),
    SaveData[26]=NtoS2(eval(A_head1.value),2),
    SaveData[27]=NtoS2(eval(A_head1_card.value),2),
    SaveData[28]=NtoS2(eval(A_head2.value),2),
    SaveData[29]=NtoS2(eval(A_head2_card.value),2),
    SaveData[30]=NtoS2(eval(A_head3.value),2),
    SaveData[31]=NtoS2(eval(A_body.value),2),
    SaveData[32]=NtoS2(eval(A_body_card.value),2),
    SaveData[33]=NtoS2(eval(A_shoulder.value),2),
    SaveData[34]=NtoS2(eval(A_shoulder_card.value),2),
    SaveData[35]=NtoS2(eval(A_shoes.value),2),
    SaveData[36]=NtoS2(eval(A_shoes_card.value),2),
    SaveData[37]=NtoS2(eval(A_acces1.value),2),
    SaveData[38]=NtoS2(eval(A_acces1_card.value),2),
    SaveData[39]=NtoS2(eval(A_acces2.value),2),
    SaveData[40]=NtoS2(eval(A_acces2_card.value),2),
    SaveData[41]=NtoS2(eval(A_HEAD_DEF_PLUS.value),1),
    SaveData[42]=NtoS2(eval(A_BODY_DEF_PLUS.value),1),
    SaveData[43]=NtoS2(eval(A_SHOULDER_DEF_PLUS.value),1),
    SaveData[44]=NtoS2(eval(A_SHOES_DEF_PLUS.value),1),
    SaveData[45]=NtoS01(A_youshi.checked,0,0,0,0),
    SaveData[46]=NtoS2(eval(document.calcForm.A_HSE.value),2),
    SaveData[47]=NtoS2(eval(document.calcForm.A_HSE_HEAD1.value),2),
    SaveData[48]=NtoS2(0,2),
    SaveData[49]=NtoS2(0,2),
    n_A_JobSet();
    for(var w=n_A_JOB,ch=0,i=0;19>=i&&0==ch;i++)
      if(999!=JobSkillPassOBJ[w][i]){
        var wOBJ=document.getElementById("A_skill"+i);
        SaveData[51+i]=NtoS2(eval(wOBJ.value),1)
      }else SaveData[50]=NtoS2(i,1),ch=1;
    for(var x=51+i-1,i=0;21>=i&&0==n_A_Buf2[i];i++);
    22==i?SaveData[x]=NtoS2(0,1):(
      SaveData[x]=NtoS2(1,1),
      SaveData[x+1]=NtoS2(n_A_Buf2[0],1),
      SaveData[x+2]=NtoS2(n_A_Buf2[1],1),
      SaveData[x+3]=NtoS2(n_A_Buf2[4],1),
      SaveData[x+4]=NtoS2(n_A_Buf2[9],1),
      SaveData[x+5]=NtoS2(n_A_Buf2[13],1),
      SaveData[x+6]=NtoS2(n_A_Buf2[14],1),
      SaveData[x+7]=NtoS05(n_A_Buf2[2],n_A_Buf2[6]),
      SaveData[x+8]=NtoS05(n_A_Buf2[10],n_A_Buf2[11]),
      SaveData[x+9]=NtoS05(n_A_Buf2[12],n_A_Buf2[15]),
      SaveData[x+10]=NtoS01(n_A_Buf2[3],n_A_Buf2[5],n_A_Buf2[7],n_A_Buf2[8],n_A_Buf2[16]),
      SaveData[x+11]=NtoS01(n_A_Buf2[17],n_A_Buf2[18],n_A_Buf2[19],n_A_Buf2[20],n_A_Buf2[21]),
      x+=11
    ),
    x+=1;
    for(var i=0;24>=i&&0==n_B_IJYOU[i];i++);
    25==i?SaveData[x]=NtoS2(0,1):(
      SaveData[x]=NtoS2(1,1),
      SaveData[x+1]=NtoS2(n_B_IJYOU[0],1),
      SaveData[x+2]=NtoS05(n_B_IJYOU[1],n_B_IJYOU[18]),
      SaveData[x+3]=NtoS01(n_B_IJYOU[2],n_B_IJYOU[3],n_B_IJYOU[4],n_B_IJYOU[5],n_B_IJYOU[6]),
      SaveData[x+4]=NtoS01(n_B_IJYOU[7],n_B_IJYOU[8],n_B_IJYOU[9],n_B_IJYOU[10],n_B_IJYOU[19]),
      SaveData[x+5]=NtoS2(n_B_IJYOU[11],1),
      SaveData[x+6]=NtoS2(n_B_IJYOU[12],1),
      SaveData[x+7]=NtoS01(n_B_IJYOU[13],n_B_IJYOU[14],n_B_IJYOU[15],n_B_IJYOU[16],n_B_IJYOU[17]),
      SaveData[x+8]=NtoS01(n_B_IJYOU[20],n_B_IJYOU[21],n_B_IJYOU[22],0,0),
      SaveData[x+9]=NtoS05(n_B_IJYOU[23],n_B_IJYOU[24]),
      x+=9
    ),
    x+=1;
    for(var i=0;19>=i&&0==n_B_KYOUKA[i];i++);
    10==i?SaveData[x]=NtoS2(0,1):(
      SaveData[x]=NtoS2(1,1),
      SaveData[x+1]=NtoS2(n_B_KYOUKA[0],1),
      SaveData[x+2]=NtoS01(n_B_KYOUKA[1],n_B_KYOUKA[2],n_B_KYOUKA[3],n_B_KYOUKA[4],n_B_KYOUKA[9]),
      SaveData[x+3]=NtoS2(n_B_KYOUKA[6],2),
      SaveData[x+4]=NtoS05(n_B_KYOUKA[7],n_B_KYOUKA[8]),
      SaveData[x+5]=NtoS2(n_B_KYOUKA[5],1),
      SaveData[x+6]=NtoS2(n_B_KYOUKA[10],1),
      SaveData[x+7]=NtoS2(n_B_KYOUKA[11],1),
      SaveData[x+8]=NtoS2(n_B_KYOUKA[12],1),
      SaveData[x+9]=NtoS2(n_B_KYOUKA[13],1),
      SaveData[x+10]=NtoS2(n_B_KYOUKA[14],1),
      x+=10
    ),
    x+=1;
    for(var checkHIT=[0,0,0,0,0],i=0;36>=i&&0==n_A_Buf3[i];i++);
    for(37!=i&&(checkHIT[0]=1),i=0;4>=i&&0==n_A_Buf3[40+i];i++);
    for(5!=i&&(checkHIT[1]=1),i=0;5>=i&&0==n_A_Buf2[i+16];i++);
    for(6!=i&&(checkHIT[2]=1),i=0;23>=i&&0==n_A_Buf6[i];i++);
    for(24!=i&&(checkHIT[3]=1),i=0;40>=i&&0==n_A_Buf7[i];i++);
    41!=i&&(checkHIT[4]=1),
    SaveData[x]=NtoS01(checkHIT[0],checkHIT[1],checkHIT[2],checkHIT[3],checkHIT[4]),
    checkHIT[0]&&(
      SaveData[x+1]=NtoS2(n_A_Buf3[0],1),
      SaveData[x+2]=NtoS2(n_A_Buf3[1],1),
      SaveData[x+3]=NtoS2(n_A_Buf3[2],1),
      SaveData[x+4]=NtoS2(n_A_Buf3[3],1),
      SaveData[x+5]=NtoS2(n_A_Buf3[4],1),
      SaveData[x+6]=NtoS2(n_A_Buf3[5],1),
      SaveData[x+7]=NtoS2(n_A_Buf3[6],1),
      SaveData[x+8]=NtoS05(n_A_Buf3[7],n_A_Buf3[8]),
      SaveData[x+9]=NtoS05(n_A_Buf3[9],n_A_Buf3[10]),
      SaveData[x+10]=NtoS01(n_A_Buf3[11],n_A_Buf3[18],0,0,0),
      SaveData[x+11]=NtoS2(n_A_Buf3[12],2),
      SaveData[x+12]=NtoS2(n_A_Buf3[13],2),
      SaveData[x+13]=NtoS2(n_A_Buf3[14],2),
      SaveData[x+14]=NtoS2(n_A_Buf3[15],2),
      SaveData[x+15]=NtoS2(n_A_Buf3[16],2),
      SaveData[x+16]=NtoS2(n_A_Buf3[17],2),
      SaveData[x+17]=NtoS2(n_A_Buf3[20],2),
      SaveData[x+18]=NtoS2(n_A_Buf3[30],1),
      SaveData[x+19]=NtoS2(n_A_Buf3[21],2),
      SaveData[x+20]=NtoS2(n_A_Buf3[31],1),
      SaveData[x+21]=NtoS2(n_A_Buf3[22],2),
      SaveData[x+22]=NtoS2(n_A_Buf3[29],2),
      SaveData[x+23]=NtoS2(n_A_Buf3[32],1),
      SaveData[x+24]=NtoS2(n_A_Buf3[23],2),
      SaveData[x+25]=NtoS2(n_A_Buf3[33],1),
      SaveData[x+26]=NtoS2(n_A_Buf3[24],2),
      SaveData[x+27]=NtoS2(n_A_Buf3[34],1),
      SaveData[x+28]=NtoS2(n_A_Buf3[25],2),
      SaveData[x+29]=NtoS2(n_A_Buf3[35],1),
      SaveData[x+30]=NtoS2(n_A_Buf3[26],2),
      SaveData[x+31]=NtoS2(n_A_Buf3[36],1),
      x+=31
    ),
    checkHIT[1]&&(
      SaveData[x+1]=NtoS01(n_A_Buf3[40],0,0,0,0),
      SaveData[x+2]=NtoS05(n_A_Buf3[41],n_A_Buf3[42]),
      SaveData[x+3]=NtoS05(n_A_Buf3[43],n_A_Buf3[44]),
      x+=3
    ),
    checkHIT[3]&&(
      SaveData[x+1]=NtoS2(n_A_Buf6[5],1),
      SaveData[x+2]=NtoS2(n_A_Buf6[20],1),
      SaveData[x+3]=NtoS05(n_A_Buf6[0],n_A_Buf6[1]),
      SaveData[x+4]=NtoS05(n_A_Buf6[2],n_A_Buf6[4]),
      SaveData[x+5]=NtoS05(n_A_Buf6[18],n_A_Buf6[19]),
      SaveData[x+6]=NtoS01(n_A_Buf6[3],n_A_Buf6[6],n_A_Buf6[7],n_A_Buf6[8],n_A_Buf6[9]),
      SaveData[x+7]=NtoS01(n_A_Buf6[10],n_A_Buf6[11],n_A_Buf6[12],n_A_Buf6[13],n_A_Buf6[14]),
      SaveData[x+8]=NtoS01(n_A_Buf6[15],n_A_Buf6[16],n_A_Buf6[17],n_A_Buf6[21],n_A_Buf6[22]),
      x+=8
    ),
    checkHIT[4]&&(
      SaveData[x+1]=NtoS2(n_A_Buf7[3],1),
      SaveData[x+2]=NtoS2(n_A_Buf7[4],1),
      SaveData[x+3]=NtoS2(n_A_Buf7[5],1),
      SaveData[x+4]=NtoS2(n_A_Buf7[6],1),
      SaveData[x+5]=NtoS2(n_A_Buf7[7],1),
      SaveData[x+6]=NtoS2(n_A_Buf7[8],1),
      SaveData[x+7]=NtoS05(n_A_Buf7[35],n_A_Buf7[42]),
      SaveData[x+8]=NtoS05(n_A_Buf7[39],n_A_Buf7[40]),
      SaveData[x+9]=NtoS01(n_A_Buf7[0],n_A_Buf7[1],n_A_Buf7[2],n_A_Buf7[9],n_A_Buf7[10]),
      SaveData[x+10]=NtoS01(n_A_Buf7[11],n_A_Buf7[12],n_A_Buf7[13],n_A_Buf7[14],0),
      SaveData[x+11]=NtoS01(n_A_Buf7[16],n_A_Buf7[17],n_A_Buf7[18],n_A_Buf7[19],n_A_Buf7[20]),
      SaveData[x+12]=NtoS01(n_A_Buf7[21],n_A_Buf7[22],n_A_Buf7[23],n_A_Buf7[24],n_A_Buf7[25]),
      SaveData[x+13]=NtoS01(n_A_Buf7[26],n_A_Buf7[27],n_A_Buf7[28],n_A_Buf7[29],n_A_Buf7[30]),
      SaveData[x+14]=NtoS01(n_A_Buf7[31],n_A_Buf7[32],n_A_Buf7[33],n_A_Buf7[34],n_A_Buf7[36]),
      SaveData[x+15]=NtoS01(n_A_Buf7[37],n_A_Buf7[38],n_A_Buf7[41],n_A_Buf7[43],n_A_Buf7[44]),
      SaveData[x+16]=NtoS01(n_A_Buf7[45],n_A_Buf7[46],n_A_Buf7[47],n_A_Buf7[48],n_A_Buf7[49]),
      x+=16
    ),
    x+=1;
    for(var i=0;11>=i&&0==n_A_Buf8[i];i++);
    for(
      12==i?SaveData[x]=NtoS2(0,1):(
        SaveData[x]=NtoS2(1,1),
        SaveData[x+1]=NtoS2(n_A_Buf8[0],2),
        SaveData[x+2]=NtoS2(n_A_Buf8[3],2),
        SaveData[x+3]=NtoS2(n_A_Buf8[7],2),
        SaveData[x+4]=NtoS2(n_A_Buf8[8],2),
        SaveData[x+5]=NtoS2(n_A_Buf8[9],2),
        SaveData[x+6]=NtoS2(n_A_Buf8[10],2),
        SaveData[x+7]=NtoS2(n_A_Buf8[11],2),
        SaveData[x+8]=NtoS2(n_A_Buf8[5],1),
        SaveData[x+9]=NtoS2(n_A_Buf8[6],1),
        SaveData[x+10]=NtoS05(n_A_Buf8[1],0),
        SaveData[x+11]=NtoS01(n_A_Buf8[2],0,0,0,0),
        x+=11
      ),
      SaveData[x+1]=NtoS2(eval(document.calcForm.Conf01.value),2),
      SaveData[x+2]=NtoS2(B_num.value,1),
      SaveData[x+3]=NtoS2(A8_Skill14.value,1),
      SaveData[x+4]=NtoS2(A8_Skill15.value,2),
      eval(scrollygg.checked)?SaveData[x+5]=NtoS01(1,0,0,0,0):SaveData[x+5]=NtoS01(0,0,0,0,0),
      SaveData[x+6]=NtoS2(A_ActiveSkill.value,2),
      SaveData[x+7]=NtoS2(eval(A_ActiveSkillLV.value),1),
      66==n_A_ActiveSkill||326==n_A_ActiveSkill||131==n_A_ActiveSkill||88==n_A_ActiveSkill||197==n_A_ActiveSkill||394==n_A_ActiveSkill||395==n_A_ActiveSkill||405==n_A_ActiveSkill||429==n_A_ActiveSkill?SaveData[x+8]=NtoS2(eval(SkillSubNum.value),3):SaveData[x+8]=NtoS2(0,3),
      SaveData[x+9]=NtoS2(n_B[0],2),
      SaveData[x+10]=NtoS2(B_AtkSkill.value,2),
      x+=10,
      wStr=""+SaveData[0],
      i=1;x>=i;i++) wStr+=""+SaveData[i];
    var w=location.href.split("#");
    URL_TEXT.value=w[0]+"#"+wStr,
    window.location.replace(w[0]+"#"+wStr),
    alert("Your current character can be saved in your bookmarks/favorites by pressing Ctrl+D on your keyboard.\n\nEl personaje actual puede guardarse en marcadores/favoritos pulsando Ctrl+D en su teclado.")
  }
}
function StoNx(_){
  _+="";
  for(var a=0;61>=a;a++)
    if(_==n_NtoS2[a]) return a
}
function StoN2(_){
  _+="";
  var a=_.length;
  if(3==a){
    var e=_.charAt(0),n=62*StoNx(e)*62;
    e=_.charAt(1),
    n+=62*StoNx(e),
    e=_.charAt(2),
    n+=StoNx(e)
  }else if(2==a){
    var e=_.charAt(0),n=62*StoNx(e);
    e=_.charAt(1),
    n+=StoNx(e)
  }else var e=_.charAt(0),n=StoNx(e);
  return n
}
function URLIN(){
  with(document.calcForm){
    var u=location.href.match(/\#/),
    w=location.href.match(/\?/),
    t=otherURL_TEXT.value.match(/\#/),
    v=otherURL_TEXT.value.match(/\?/);
    if(w||v||u||t){
      var SaveData=new Array;
      v&&(SaveData=otherURL_TEXT.value.split("?")),
      t&&(SaveData=otherURL_TEXT.value.split("#")),
      w&&(SaveData=location.href.split("?")),
      u&&(SaveData=location.href.split("#"));
      var w=SaveData[1];
      20==StoN2(w.substr(1,2))&&StoN2(w.substr(90,1))?SuperNoviceFullWeaponCHECK=1:SuperNoviceFullWeaponCHECK=0;
      var w_Version=StoN2(w.substr(0,1));
      A_JOB.value=StoN2(w.substr(1,2)),
      ClickJob(StoN2(w.substr(1,2)),2),
      A_BaseLV.value=StoN2(w.substr(3,2)),
      A_JobLV.value=StoN2(w.substr(5,2)),
      A_STR.value=StoN2(w.substr(7,2)),
      A_AGI.value=StoN2(w.substr(9,2)),
      A_VIT.value=StoN2(w.substr(11,2)),
      A_DEX.value=StoN2(w.substr(13,2)),
      A_INT.value=StoN2(w.substr(15,2)),
      A_LUK.value=StoN2(w.substr(17,2)),
      n_A_Buf7[35]=Math.floor(StoN2(w.substr(19,1))/10),
      A_Weapon_zokusei.value=StoN2(w.substr(19,1))%10,
      A_WeaponType.value=StoN2(w.substr(20,1)),
      ClickWeaponType(A_WeaponType.value),
      8!=A_JOB.value&&22!=A_JOB.value||11==A_WeaponType.value||(A_Weapon2Type.value=StoN2(w.substr(21,1)),ClickWeaponType2(A_Weapon2Type.value)),
      n_A_JobSet(),
      (2==n_A_JobClass()||4==n_A_JobClass()||45==n_A_JOB&&0!=n_A_WeaponType)&&(A_Arrow.value=StoN2(w.substr(22,1))),
      A_weapon1.value=StoN2(w.substr(23,2)),
      A_Weapon_ATKplus.value=StoN2(w.substr(25,1)),
      A_weapon1_card1.value=StoN2(w.substr(26,2)),
      A_weapon1_card2.value=StoN2(w.substr(28,2)),
      A_weapon1_card3.value=StoN2(w.substr(30,2)),
      A_weapon1_card4.value=StoN2(w.substr(32,2)),
      n_Nitou?(
        A_weapon2.value=StoN2(w.substr(34,2)),
        A_Weapon2_ATKplus.value=StoN2(w.substr(36,1)),
        A_weapon2_card1.value=StoN2(w.substr(37,2)),
        A_weapon2_card2.value=StoN2(w.substr(39,2)),
        A_weapon2_card3.value=StoN2(w.substr(41,2)),
        A_weapon2_card4.value=StoN2(w.substr(43,2))
      ):(
        A_left.value=StoN2(w.substr(34,2)),
        A_LEFT_DEF_PLUS.value=StoN2(w.substr(36,1)),
        A_left_card.value=StoN2(w.substr(37,2))
      ),
      A_head1.value=StoN2(w.substr(45,2)),
      A_head1_card.value=StoN2(w.substr(47,2)),
      A_head2.value=StoN2(w.substr(49,2)),
      A_head2_card.value=StoN2(w.substr(51,2)),
      A_head3.value=StoN2(w.substr(53,2)),
      A_body.value=StoN2(w.substr(55,2)),
      A_body_card.value=StoN2(w.substr(57,2)),
      A_shoulder.value=StoN2(w.substr(59,2)),
      A_shoulder_card.value=StoN2(w.substr(61,2)),
      A_shoes.value=StoN2(w.substr(63,2)),
      A_shoes_card.value=StoN2(w.substr(65,2)),
      A_acces1.value=StoN2(w.substr(67,2)),
      A_acces1_card.value=StoN2(w.substr(69,2)),
      A_acces2.value=StoN2(w.substr(71,2)),
      A_acces2_card.value=StoN2(w.substr(73,2)),
      A_HEAD_DEF_PLUS.value=StoN2(w.substr(75,1)),
      A_BODY_DEF_PLUS.value=StoN2(w.substr(76,1)),
      A_SHOULDER_DEF_PLUS.value=StoN2(w.substr(77,1)),
      A_SHOES_DEF_PLUS.value=StoN2(w.substr(78,1));
      var wn=StoN2(w.substr(79,1));
      if(A_youshi.checked=Math.floor(wn/16),4>w_Version){
        var max=StoN2(w.substr(80,1));
        if(12==A_JOB.value||26==A_JOB.value){
          for(var i=0;4>i;i++){
            var wOBJ=document.getElementById("A_skill"+i);
            wOBJ.value=StoN2(w.substr(81+i,1))
          }
          if(StoN2(w.substr(85,1))>0){
            var wOBJ=document.getElementById("A_skill4");
            wOBJ.value=1
          }
          n_A_Buf2[7]=StoN2(w.substr(86,1));
          for(var i=5;max-1>i;i++){
            var wOBJ=document.getElementById("A_skill"+i);
            wOBJ.value=StoN2(w.substr(82+i,1))
          }
        }else if(13==A_JOB.value||27==A_JOB.value){
          for(var i=0;8>i;i++){
            var wOBJ=document.getElementById("A_skill"+i);
            wOBJ.value=StoN2(w.substr(81+i,1))
          }
          n_A_Buf2[13]=StoN2(w.substr(89,1)),
          document.getElementById("A_skill8").value=StoN2(w.substr(90,1)),
          n_A_Buf2[15]=StoN2(w.substr(91,1)),
          document.getElementById("A_skill9").value=StoN2(w.substr(92,1)),
          n_A_Buf2[14]=StoN2(w.substr(93,1)),
          i+=12
        }else if(15==A_JOB.value||29==A_JOB.value){
          for(var i=0;3>i;i++){
            var wOBJ=document.getElementById("A_skill"+i);
            wOBJ.value=StoN2(w.substr(81+i,1))
          }
          n_A_Buf2[12]=StoN2(w.substr(84,1));
          for(var i=3;max-1>i;i++){
            var wOBJ=document.getElementById("A_skill"+i);
            wOBJ.value=StoN2(w.substr(82+i,1))
          }
        } else
          for(var i=0;max>i;i++){
            var wOBJ=document.getElementById("A_skill"+i);
            wOBJ.value=StoN2(w.substr(81+i,1))
          }
        var x=81+max;
        if(1==StoN2(w.substr(x,1))){
          n_A_Buf2[0]=StoN2(w.substr(x+1,1)),
          n_A_Buf2[1]=StoN2(w.substr(x+2,1)),
          n_A_Buf2[4]=StoN2(w.substr(x+3,1)),
          n_A_Buf2[9]=StoN2(w.substr(x+4,1)),
          n_A_Buf2[2]=Math.floor(StoN2(w.substr(x+5,1))/6),
          n_A_Buf2[6]=StoN2(w.substr(x+5,1))%6,
          n_A_Buf2[8]=Math.floor(StoN2(w.substr(x+6,1))/6),
          n_A_Buf2[12]=StoN2(w.substr(x+6,1))%6,
          n_A_Buf2[10]=Math.floor(StoN2(w.substr(x+7,1))/6),
          n_A_Buf2[11]=StoN2(w.substr(x+7,1))%6;
          var wn=StoN2(w.substr(x+8,1));
          n_A_Buf2[3]=Math.floor(wn/16),
          n_A_Buf2[5]=Math.floor(wn%16/8),
          n_A_Buf2[7]=Math.floor(wn%8/4),
          n_A_Buf6[7]=Math.floor(wn%4/2),
          n_A_Buf7[31]=Math.floor(wn%2/1),
          x+=8,
          (12==A_JOB.value||26==A_JOB.value)&&StoN2(w.substr(86,1))>0&&(n_A_Buf2[7]=1),
          (15==A_JOB.value||29==A_JOB.value)&&StoN2(w.substr(84,1))>n_A_Buf2[12]&&(n_A_Buf2[12]=StoN2(w.substr(84,1)))
        }
        var BackupX=x;
        if(x+=8,x+=1,1==StoN2(w.substr(x,1))){
          n_B_IJYOU[0]=StoN2(w.substr(x+1,1)),
          n_B_IJYOU[1]=Math.floor(StoN2(w.substr(x+2,1))/6),
          n_B_IJYOU[18]=StoN2(w.substr(x+2,1))%6;
          var wn=StoN2(w.substr(x+3,1));
          n_B_IJYOU[2]=Math.floor(wn/16),
          n_B_IJYOU[3]=Math.floor(wn%16/8),
          n_B_IJYOU[4]=Math.floor(wn%8/4),
          n_B_IJYOU[5]=Math.floor(wn%4/2),
          n_B_IJYOU[6]=Math.floor(wn%2/1),
          wn=StoN2(w.substr(x+4,1)),
          n_B_IJYOU[7]=Math.floor(wn/16),
          n_B_IJYOU[8]=Math.floor(wn%16/8),
          n_B_IJYOU[9]=Math.floor(wn%8/4),
          n_B_IJYOU[10]=Math.floor(wn%4/2),
          n_B_IJYOU[19]=Math.floor(wn%2/1),
          n_B_IJYOU[11]=StoN2(w.substr(x+5,1)),
          n_B_IJYOU[12]=StoN2(w.substr(x+6,1)),
          wn=StoN2(w.substr(x+7,1)),
          n_B_IJYOU[13]=Math.floor(wn/16),
          n_B_IJYOU[14]=Math.floor(wn%16/8),
          n_B_IJYOU[15]=Math.floor(wn%8/4),
          n_B_IJYOU[16]=Math.floor(wn%4/2),
          n_B_IJYOU[17]=Math.floor(wn%2/1),
          wn=StoN2(w.substr(x+8,1)),
          n_B_IJYOU[20]=Math.floor(wn/16),
          n_B_IJYOU[21]=Math.floor(wn%16/8),
          n_B_IJYOU[22]=Math.floor(wn%8/4),
          n_B_IJYOU[23]=Math.floor(StoN2(w.substr(x+9,1))/6),
          n_B_IJYOU[24]=StoN2(w.substr(x+9,1))%6,
          x+=9
        }
        if(x+=1,1==StoN2(w.substr(x,1))){
          n_B_KYOUKA[0]=StoN2(w.substr(x+1,1));
          var wn=StoN2(w.substr(x+2,1));
          n_B_KYOUKA[1]=Math.floor(wn/16),
          n_B_KYOUKA[2]=Math.floor(wn%16/8),
          n_B_KYOUKA[3]=Math.floor(wn%8/4),
          n_B_KYOUKA[4]=Math.floor(wn%4/2),
          n_B_KYOUKA[6]=StoN2(w.substr(x+3,2)),
          n_B_KYOUKA[7]=Math.floor(StoN2(w.substr(x+5,1))/6),
          n_B_KYOUKA[8]=StoN2(w.substr(x+5,1))%6,
          wn=StoN2(w.substr(x+6,1)),
          n_B_KYOUKA[9]=Math.floor(wn/16),
          x+=6
        }
        var checkHIT=[0,0,0,0,0];
        if(
          wn=StoN2(w.substr(x+1,1)),
          checkHIT[0]=Math.floor(wn/16),
          checkHIT[1]=Math.floor(wn%16/8),
          checkHIT[2]=Math.floor(wn%8/4),
          checkHIT[3]=Math.floor(wn%4/2),
          checkHIT[4]=Math.floor(wn%2/1),
          x+=1,
          Buf3SW(0),
          checkHIT[0]&&(
            n_A_Buf3[0]=StoN2(w.substr(x+1,1)),
            n_A_Buf3[1]=StoN2(w.substr(x+2,1)),
            n_A_Buf3[2]=StoN2(w.substr(x+3,1)),
            n_A_Buf3[3]=StoN2(w.substr(x+4,1)),
            n_A_Buf3[4]=StoN2(w.substr(x+5,1)),
            n_A_Buf3[5]=StoN2(w.substr(x+6,1)),
            n_A_Buf3[6]=StoN2(w.substr(x+7,1)),
            n_A_Buf3[7]=Math.floor(StoN2(w.substr(x+8,1))/6),
            n_A_Buf3[8]=StoN2(w.substr(x+8,1))%6,
            n_A_Buf3[9]=Math.floor(StoN2(w.substr(x+9,1))/6),
            n_A_Buf3[10]=StoN2(w.substr(x+9,1))%6,
            n_A_Buf3[11]=Math.floor(StoN2(w.substr(x+10,1))/16),
            n_A_Buf3[18]=Math.floor(StoN2(w.substr(x+10,1))%16/8),
            n_A_Buf3[12]=StoN2(w.substr(x+11,2)),
            n_A_Buf3[13]=StoN2(w.substr(x+13,2)),
            n_A_Buf3[14]=StoN2(w.substr(x+15,2)),
            n_A_Buf3[15]=StoN2(w.substr(x+17,2)),
            n_A_Buf3[16]=StoN2(w.substr(x+19,2)),
            n_A_Buf3[17]=StoN2(w.substr(x+21,2)),
            n_A_Buf3[20]=StoN2(w.substr(x+23,2)),
            n_A_Buf3[30]=StoN2(w.substr(x+25,1)),
            n_A_Buf3[21]=StoN2(w.substr(x+26,2)),
            n_A_Buf3[31]=StoN2(w.substr(x+28,1)),
            n_A_Buf3[22]=StoN2(w.substr(x+29,2)),
            n_A_Buf3[29]=StoN2(w.substr(x+31,2)),
            n_A_Buf3[32]=StoN2(w.substr(x+33,1)),
            n_A_Buf3[23]=StoN2(w.substr(x+34,2)),
            n_A_Buf3[33]=StoN2(w.substr(x+36,1)),
            n_A_Buf3[24]=StoN2(w.substr(x+37,2)),
            n_A_Buf3[34]=StoN2(w.substr(x+39,1)),
            n_A_Buf3[25]=StoN2(w.substr(x+40,2)),
            n_A_Buf3[35]=StoN2(w.substr(x+42,1)),
            n_A_Buf3[26]=StoN2(w.substr(x+43,2)),
            n_A_Buf3[36]=StoN2(w.substr(x+45,1)),
            x+=45
          ),
          checkHIT[1]
        ){
          var wn=StoN2(w.substr(x+1,1));
          n_A_Buf3[40]=Math.floor(wn/16),
          n_A_Buf3[41]=Math.floor(StoN2(w.substr(x+2,1))/6),
          n_A_Buf3[42]=StoN2(w.substr(x+2,1))%6,
          n_A_Buf3[43]=Math.floor(StoN2(w.substr(x+3,1))/6),
          n_A_Buf3[44]=StoN2(w.substr(x+3,1))%6,
          x+=3
        }
        for(
          checkHIT[2]&&(
            wn=StoN2(w.substr(x+1,1)),
            n_A_Buf2[16]=Math.floor(wn/16),
            n_A_Buf2[17]=Math.floor(wn%16/8),
            n_A_Buf2[18]=Math.floor(wn%8/4),
            n_A_Buf2[19]=Math.floor(wn%4/2),
            n_A_Buf2[20]=Math.floor(wn%2/1),
            wn=StoN2(w.substr(x+2,1)),
            n_A_Buf2[21]=Math.floor(wn/16),
            x+=2
          ),
          checkHIT[3]&&(
            n_A_Buf6[0]=Math.floor(StoN2(w.substr(x+1,1))/6),
            n_A_Buf6[1]=StoN2(w.substr(x+1,1))%6,
            n_A_Buf6[2]=Math.floor(StoN2(w.substr(x+2,1))/6),
            n_A_Buf6[4]=StoN2(w.substr(x+2,1))%6,
            n_A_Buf6[5]=Math.floor(StoN2(w.substr(x+3,1))/6),
            n_A_Buf7[34]=StoN2(w.substr(x+4,1)),
            wn=StoN2(w.substr(x+5,1)),
            n_A_Buf6[6]=Math.floor(wn/16),
            x+=5
          ),
          checkHIT[4]&&(
            n_A_Buf7[3]=StoN2(w.substr(x+1,2)),
            n_A_Buf7[4]=StoN2(w.substr(x+3,2)),
            n_A_Buf7[5]=StoN2(w.substr(x+5,2)),
            n_A_Buf7[6]=StoN2(w.substr(x+7,2)),
            n_A_Buf7[7]=StoN2(w.substr(x+9,2)),
            n_A_Buf7[8]=StoN2(w.substr(x+11,2)),
            wn=StoN2(w.substr(x+13,1)),
            n_A_Buf7[0]=Math.floor(wn/16),
            n_A_Buf7[1]=Math.floor(wn%16/8),
            n_A_Buf7[2]=Math.floor(wn%8/4),
            n_A_Buf7[9]=Math.floor(wn%4/2),
            n_A_Buf7[10]=Math.floor(wn%2/1),
            wn = StoN2(w.substr(x+14,1)),
            n_A_Buf7[11]=Math.floor(wn/16),
            n_A_Buf7[12]=Math.floor(wn%16/8),
            n_A_Buf7[13]=Math.floor(wn%8/4),
            n_A_Buf7[14]=Math.floor(wn%4/2),
            scrollygg.checked=Math.floor(wn%2/1),
            x+=14
          ),
          i=0;54>=i;i++
        ) n_A_Buf9[i]=0;
        for(n_Skill9SW=0,i=0;54>=i;i++)n_B_manual[i]=0;
        n_Skill10SW=0,
        document.calcForm.Conf01.value=StoN2(w.substr(x+1,2)),
        x+=2,
        w_Version>=1&&(document.calcForm.A_HSE.value=StoN2(w.substr(x+1,2)),x+=2),
        w_Version>=2&&(document.calcForm.A_HSE_HEAD1.value=StoN2(w.substr(x+1,2)),x+=2),
        StCalc(1),
        ActiveSkillSetPlus(),
        x=BackupX,
        A_ActiveSkill.value=StoN2(w.substr(x+1,2)),
        ClickActiveSkill(),
        A_ActiveSkillLV.value=StoN2(w.substr(x+3,1)),
        (66==n_A_ActiveSkill||326==n_A_ActiveSkill||131==n_A_ActiveSkill||88==n_A_ActiveSkill||197==n_A_ActiveSkill||394==n_A_ActiveSkill||395==n_A_ActiveSkill||405==n_A_ActiveSkill||429==n_A_ActiveSkill)&&(SkillSubNum.value=StoN2(w.substr(x+4,3))),
        B_Enemy.value=StoN2(w.substr(x+7,2))
      }else if(w_Version>=4){
        document.calcForm.A_HSE.value=StoN2(w.substr(80,2)),
        document.calcForm.A_HSE_HEAD1.value=StoN2(w.substr(82,2));
        for(var max=StoN2(w.substr(88,1)),i=0;max>i;i++){
          var wOBJ=document.getElementById("A_skill"+i);
          wOBJ.value=StoN2(w.substr(89+i,1))
        }
        var x=89+i;
        if(1==StoN2(w.substr(x,1))){
          n_A_Buf2[0]=StoN2(w.substr(x+1,1)),
          n_A_Buf2[1]=StoN2(w.substr(x+2,1)),
          n_A_Buf2[4]=StoN2(w.substr(x+3,1)),
          n_A_Buf2[9]=StoN2(w.substr(x+4,1)),
          n_A_Buf2[13]=StoN2(w.substr(x+5,1)),
          n_A_Buf2[14]=StoN2(w.substr(x+6,1)),
          n_A_Buf2[2]=Math.floor(StoN2(w.substr(x+7,1))/6),
          n_A_Buf2[6]=StoN2(w.substr(x+7,1))%6,
          n_A_Buf2[10]=Math.floor(StoN2(w.substr(x+8,1))/6),
          n_A_Buf2[11]=StoN2(w.substr(x+8,1))%6,
          n_A_Buf2[12]=Math.floor(StoN2(w.substr(x+9,1))/6),
          n_A_Buf2[15]=StoN2(w.substr(x+9,1))%6;
          var wn=StoN2(w.substr(x+10,1));
          n_A_Buf2[3]=Math.floor(wn/16),
          n_A_Buf2[5]=Math.floor(wn%16/8),
          n_A_Buf2[7]=Math.floor(wn%8/4),
          n_A_Buf2[8]=Math.floor(wn%4/2),
          n_A_Buf2[16]=Math.floor(wn%2/1);
          var wn=StoN2(w.substr(x+11,1));
          n_A_Buf2[17]=Math.floor(wn/16),
          n_A_Buf2[18]=Math.floor(wn%16/8),
          n_A_Buf2[19]=Math.floor(wn%8/4),
          n_A_Buf2[20]=Math.floor(wn%4/2),
          n_A_Buf2[21]=Math.floor(wn%2/1),
          x+=11
        }
        if(x+=1,1==StoN2(w.substr(x,1))){
          n_B_IJYOU[0]=StoN2(w.substr(x+1,1)),
          n_B_IJYOU[1]=Math.floor(StoN2(w.substr(x+2,1))/6),
          n_B_IJYOU[18]=StoN2(w.substr(x+2,1))%6;
          var wn=StoN2(w.substr(x+3,1));
          n_B_IJYOU[2]=Math.floor(wn/16),
          n_B_IJYOU[3]=Math.floor(wn%16/8),
          n_B_IJYOU[4]=Math.floor(wn%8/4),
          n_B_IJYOU[5]=Math.floor(wn%4/2),
          n_B_IJYOU[6]=Math.floor(wn%2/1),
          wn=StoN2(w.substr(x+4,1)),
          n_B_IJYOU[7]=Math.floor(wn/16),
          n_B_IJYOU[8]=Math.floor(wn%16/8),
          n_B_IJYOU[9]=Math.floor(wn%8/4),
          n_B_IJYOU[10]=Math.floor(wn%4/2),
          n_B_IJYOU[19]=Math.floor(wn%2/1),
          n_B_IJYOU[11]=StoN2(w.substr(x+5,1)),
          n_B_IJYOU[12]=StoN2(w.substr(x+6,1)),
          wn=StoN2(w.substr(x+7,1)),
          n_B_IJYOU[13]=Math.floor(wn/16),
          n_B_IJYOU[14]=Math.floor(wn%16/8),
          n_B_IJYOU[15]=Math.floor(wn%8/4),
          n_B_IJYOU[16]=Math.floor(wn%4/2),
          n_B_IJYOU[17]=Math.floor(wn%2/1),
          wn=StoN2(w.substr(x+8,1)),
          n_B_IJYOU[20]=Math.floor(wn/16),
          n_B_IJYOU[21]=Math.floor(wn%16/8),
          n_B_IJYOU[22]=Math.floor(wn%8/4),
          n_B_IJYOU[23]=Math.floor(StoN2(w.substr(x+9,1))/6),
          n_B_IJYOU[24]=StoN2(w.substr(x+9,1))%6,
          x+=9
        }
        if(x+=1,1==StoN2(w.substr(x,1))){
          n_B_KYOUKA[0]=StoN2(w.substr(x+1,1));
          var wn=StoN2(w.substr(x+2,1));
          n_B_KYOUKA[1]=Math.floor(wn/16),
          n_B_KYOUKA[2]=Math.floor(wn%16/8),
          n_B_KYOUKA[3]=Math.floor(wn%8/4),
          n_B_KYOUKA[4]=Math.floor(wn%4/2),
          n_B_KYOUKA[9]=Math.floor(wn%2/1),
          n_B_KYOUKA[6]=StoN2(w.substr(x+3,2)),
          n_B_KYOUKA[7]=Math.floor(StoN2(w.substr(x+5,1))/6),
          n_B_KYOUKA[8]=StoN2(w.substr(x+5,1))%6,
          n_B_KYOUKA[5]=StoN2(w.substr(x+6,1)),
          w_Version>=5&&(
            n_B_KYOUKA[10]=StoN2(w.substr(x+7,1)),
            n_B_KYOUKA[11]=StoN2(w.substr(x+8,1)),
            n_B_KYOUKA[12]=StoN2(w.substr(x+9,1)),
            n_B_KYOUKA[13]=StoN2(w.substr(x+10,1)),
            n_B_KYOUKA[14]=StoN2(w.substr(x+11,1)),
            x+=5
          ),
          x+=6
        }
        var checkHIT=[0,0,0,0,0];
        if(
          wn=StoN2(w.substr(x+1,1)),
          checkHIT[0]=Math.floor(wn/16),
          checkHIT[1]=Math.floor(wn%16/8),
          checkHIT[2]=Math.floor(wn%8/4),
          checkHIT[3]=Math.floor(wn%4/2),
          checkHIT[4]=Math.floor(wn%2/1),
          x+=1,
          Buf3SW(0),
          checkHIT[0]&&(
            n_A_Buf3[0]=StoN2(w.substr(x+1,1)),
            n_A_Buf3[1]=StoN2(w.substr(x+2,1)),
            n_A_Buf3[2]=StoN2(w.substr(x+3,1)),
            n_A_Buf3[3]=StoN2(w.substr(x+4,1)),
            n_A_Buf3[4]=StoN2(w.substr(x+5,1)),
            n_A_Buf3[5]=StoN2(w.substr(x+6,1)),
            n_A_Buf3[6]=StoN2(w.substr(x+7,1)),
            n_A_Buf3[7]=Math.floor(StoN2(w.substr(x+8,1))/6),
            n_A_Buf3[8]=StoN2(w.substr(x+8,1))%6,
            n_A_Buf3[9]=Math.floor(StoN2(w.substr(x+9,1))/6),
            n_A_Buf3[10]=StoN2(w.substr(x+9,1))%6,
            n_A_Buf3[11]=Math.floor(StoN2(w.substr(x+10,1))/16),
            n_A_Buf3[18]=Math.floor(StoN2(w.substr(x+10,1))%16/8),
            n_A_Buf3[12]=StoN2(w.substr(x+11,2)),
            n_A_Buf3[13]=StoN2(w.substr(x+13,2)),
            n_A_Buf3[14]=StoN2(w.substr(x+15,2)),
            n_A_Buf3[15]=StoN2(w.substr(x+17,2)),
            n_A_Buf3[16]=StoN2(w.substr(x+19,2)),
            n_A_Buf3[17]=StoN2(w.substr(x+21,2)),
            n_A_Buf3[20]=StoN2(w.substr(x+23,2)),
            n_A_Buf3[30]=StoN2(w.substr(x+25,1)),
            n_A_Buf3[21]=StoN2(w.substr(x+26,2)),
            n_A_Buf3[31]=StoN2(w.substr(x+28,1)),
            n_A_Buf3[22]=StoN2(w.substr(x+29,2)),
            n_A_Buf3[29]=StoN2(w.substr(x+31,2)),
            n_A_Buf3[32]=StoN2(w.substr(x+33,1)),
            n_A_Buf3[23]=StoN2(w.substr(x+34,2)),
            n_A_Buf3[33]=StoN2(w.substr(x+36,1)),
            n_A_Buf3[24]=StoN2(w.substr(x+37,2)),
            n_A_Buf3[34]=StoN2(w.substr(x+39,1)),
            n_A_Buf3[25]=StoN2(w.substr(x+40,2)),
            n_A_Buf3[35]=StoN2(w.substr(x+42,1)),
            n_A_Buf3[26]=StoN2(w.substr(x+43,2)),
            n_A_Buf3[36]=StoN2(w.substr(x+45,1)),
            x+=45
          ),
          checkHIT[1]
        ){
          var wn=StoN2(w.substr(x+1,1));
          n_A_Buf3[40]=Math.floor(wn/16),
          n_A_Buf3[41]=Math.floor(StoN2(w.substr(x+2,1))/6),
          n_A_Buf3[42]=StoN2(w.substr(x+2,1))%6,
          n_A_Buf3[43]=Math.floor(StoN2(w.substr(x+3,1))/6),
          n_A_Buf3[44]=StoN2(w.substr(x+3,1))%6,
          x+=3
        }
        if(
          checkHIT[3]&&(
            n_A_Buf6[5]=StoN2(w.substr(x+1,1)),
            n_A_Buf6[20]=StoN2(w.substr(x+2,1)),
            n_A_Buf6[0]=Math.floor(StoN2(w.substr(x+3,1))/6),
            n_A_Buf6[1]=StoN2(w.substr(x+3,1))%6,
            n_A_Buf6[2]=Math.floor(StoN2(w.substr(x+4,1))/6),
            n_A_Buf6[4]=StoN2(w.substr(x+4,1))%6,
            n_A_Buf6[18]=Math.floor(StoN2(w.substr(x+5,1))/6),
            n_A_Buf6[19]=StoN2(w.substr(x+5,1))%6,
            wn=StoN2(w.substr(x+6,1)),
            n_A_Buf6[3]=Math.floor(wn/16),
            n_A_Buf6[6]=Math.floor(wn%16/8),
            n_A_Buf6[7]=Math.floor(wn%8/4),
            n_A_Buf6[8]=Math.floor(wn%4/2),
            n_A_Buf6[9]=Math.floor(wn%2/1),
            wn=StoN2(w.substr(x+7,1)),
            n_A_Buf6[10]=Math.floor(wn/16),
            n_A_Buf6[11]=Math.floor(wn%16/8),
            n_A_Buf6[12]=Math.floor(wn%8/4),
            n_A_Buf6[13]=Math.floor(wn%4/2),
            n_A_Buf6[14]=Math.floor(wn%2/1),
            wn=StoN2(w.substr(x+8,1)),
            n_A_Buf6[15]=Math.floor(wn/16),
            n_A_Buf6[16]=Math.floor(wn%16/8),
            n_A_Buf6[17]=Math.floor(wn%8/4),
            n_A_Buf6[21]=Math.floor(wn%4/2),
            n_A_Buf6[22]=Math.floor(wn%2/1),
            x+=8
          ),
          checkHIT[4]&&(
            n_A_Buf7[3]=StoN2(w.substr(x+1,1)),
            n_A_Buf7[4]=StoN2(w.substr(x+2,1)),
            n_A_Buf7[5]=StoN2(w.substr(x+3,1)),
            n_A_Buf7[6]=StoN2(w.substr(x+4,1)),
            n_A_Buf7[7]=StoN2(w.substr(x+5,1)),
            n_A_Buf7[8]=StoN2(w.substr(x+6,1)),
            n_A_Buf7[35]=Math.floor(StoN2(w.substr(x+7,1))/6),
            n_A_Buf7[42]=StoN2(w.substr(x+7,1))%6,
            n_A_Buf7[39]=Math.floor(StoN2(w.substr(x+8,1))/6),
            n_A_Buf7[40]=StoN2(w.substr(x+8,1))%6,
            wn=StoN2(w.substr(x+9,1)),
            n_A_Buf7[0]=Math.floor(wn/16),
            n_A_Buf7[1]=Math.floor(wn%16/8),
            n_A_Buf7[2]=Math.floor(wn%8/4),
            n_A_Buf7[9]=Math.floor(wn%4/2),
            n_A_Buf7[10]=Math.floor(wn%2/1),
            wn=StoN2(w.substr(x+10,1)),
            n_A_Buf7[11]=Math.floor(wn/16),
            n_A_Buf7[12]=Math.floor(wn%16/8),
            n_A_Buf7[13]=Math.floor(wn%8/4),
            n_A_Buf7[14]=Math.floor(wn%4/2),
            wn=StoN2(w.substr(x+11,1)),
            n_A_Buf7[16]=Math.floor(wn/16),
            n_A_Buf7[17]=Math.floor(wn%16/8),
            n_A_Buf7[18]=Math.floor(wn%8/4),
            n_A_Buf7[19]=Math.floor(wn%4/2),
            n_A_Buf7[20]=Math.floor(wn%2/1),
            wn=StoN2(w.substr(x+12,1)),
            n_A_Buf7[21]=Math.floor(wn/16),
            n_A_Buf7[22]=Math.floor(wn%16/8),
            n_A_Buf7[23]=Math.floor(wn%8/4),
            n_A_Buf7[24]=Math.floor(wn%4/2),
            n_A_Buf7[25]=Math.floor(wn%2/1),
            wn=StoN2(w.substr(x+13,1)),
            n_A_Buf7[26]=Math.floor(wn/16),
            n_A_Buf7[27]=Math.floor(wn%16/8),
            n_A_Buf7[28]=Math.floor(wn%8/4),
            n_A_Buf7[29]=Math.floor(wn%4/2),
            n_A_Buf7[30]=Math.floor(wn%2/1),
            wn=StoN2(w.substr(x+14,1)),
            n_A_Buf7[31]=Math.floor(wn/16),
            n_A_Buf7[32]=Math.floor(wn%16/8),
            n_A_Buf7[33]=Math.floor(wn%8/4),
            n_A_Buf7[34]=Math.floor(wn%4/2),
            n_A_Buf7[36]=Math.floor(wn%2/1),
            wn=StoN2(w.substr(x+15,1)),
            n_A_Buf7[37]=Math.floor(wn/16),
            n_A_Buf7[38]=Math.floor(wn%16/8),
            n_A_Buf7[41]=Math.floor(wn%8/4),
            n_A_Buf7[43]=Math.floor(wn%4/2),
            n_A_Buf7[44]=Math.floor(wn%2/1),
            wn=StoN2(w.substr(x+16,1)),
            n_A_Buf7[45]=Math.floor(wn/16),
            n_A_Buf7[46]=Math.floor(wn%16/8),
            n_A_Buf7[47]=Math.floor(wn%8/4),
            n_A_Buf7[48]=Math.floor(wn%4/2),
            n_A_Buf7[49]=Math.floor(wn%2/1),
            x+=16
          ),
          x+=1,
          1==StoN2(w.substr(x,1))
        ){
          n_A_Buf8[0]=StoN2(w.substr(x+1,2)),
          n_A_Buf8[3]=StoN2(w.substr(x+3,2)),
          n_A_Buf8[7]=StoN2(w.substr(x+5,2)),
          n_A_Buf8[8]=StoN2(w.substr(x+7,2)),
          n_A_Buf8[9]=StoN2(w.substr(x+9,2)),
          n_A_Buf8[10]=StoN2(w.substr(x+11,2)),
          n_A_Buf8[11]=StoN2(w.substr(x+13,2)),
          n_A_Buf8[5]=StoN2(w.substr(x+15,1)),
          n_A_Buf8[6]=StoN2(w.substr(x+16,1)),
          n_A_Buf8[1]=Math.floor(StoN2(w.substr(x+17,1))/6);
          var wn=StoN2(w.substr(x+18,1));
          n_A_Buf8[2]=Math.floor(wn/16),
          x+=18
        }
        for(i=0;54>=i;i++) n_A_Buf9[i]=0;
        for(n_Skill9SW=0,i=0;54>=i;i++) n_B_manual[i]=0;
        n_Skill10SW=0,
        document.calcForm.Conf01.value=StoN2(w.substr(x+1,2)),
        B_num.value=StoN2(w.substr(x+3,1)),
        A8_Skill14.value=StoN2(w.substr(x+4,1)),
        A8_Skill15.value=StoN2(w.substr(x+5,2));
        var wn=StoN2(w.substr(x+7,1));
        scrollygg.checked=Math.floor(wn/16),
        StCalc(1),
        ActiveSkillSetPlus(),
        A_ActiveSkill.value=StoN2(w.substr(x+8,2)),
        ClickActiveSkill(),
        A_ActiveSkillLV.value=StoN2(w.substr(x+10,1)),
        (66==n_A_ActiveSkill||326==n_A_ActiveSkill||131==n_A_ActiveSkill||88==n_A_ActiveSkill||197==n_A_ActiveSkill||394==n_A_ActiveSkill||395==n_A_ActiveSkill||405==n_A_ActiveSkill||429==n_A_ActiveSkill)&&(SkillSubNum.value=StoN2(w.substr(x+11,3))),
        B_Enemy.value=StoN2(w.substr(x+14,2)),
        Bskill(),
        B_AtkSkill.value=StoN2(w.substr(x+16,2)),
        n_B_AtkSkill=eval(B_AtkSkill.value),
        (444==n_B_AtkSkill||445==n_B_AtkSkill||131==n_B_AtkSkill)&&(BSkillSubNum.value=StoN2(w.substr(x+18,2)))
      }
      refreshFields(),
      calc()
    }
  }
}
function refreshFields(){
  ClickB_Item("SW"),
  IjyouSW(n_IjyouSW),
  EnemyKyoukaSW(n_KyoukaSW),
  BufSW(n_SkillSW),
  Buf3SW(n_Skill3SW),
  Buf4SW(n_Skill4SW),
  Buf6SW(n_Skill6SW),
  Buf7SW(n_Skill7SW),
  Buf8SW(n_Skill8SW),
  Buf9SW(n_Skill9SW),
  Buf10SW(n_Skill10SW)
}
for(var i=1;99>=i;i++) with(document.calcForm) {
  A_BaseLV.options[i-1]=new Option(i,i),
  A_STR.options[i-1]=new Option(i,i),
  A_AGI.options[i-1]=new Option(i,i),
  A_VIT.options[i-1]=new Option(i,i),
  A_INT.options[i-1]=new Option(i,i),
  A_DEX.options[i-1]=new Option(i,i),
  A_LUK.options[i-1]=new Option(i,i);
}
for(var i=1;22>=i;i++) with(document.calcForm) B_num.options[i-1]=new Option(i,i-1);
for(var i=1;20>=i;i++) with(document.calcForm) A8_Skill15.options[i]=new Option(5*i,i);
for(w_ASSP0bk=new Array,i=0;20>i;i++) w_ASSP0bk[i]=999;
for(wESx=new Array,i=0;i<=EnemyNum;i++) wESx[i]=new Array;
var nMANUKU=[524,527,528,530,531,534,541,588,591,592,594,595,598,648],
    nSUPURE=[525,526,529,532,533,537,589,590,593,596,597];
for(
  n_NtoS=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  n_NtoS2=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],
  JobName=["Novice","Swordman","Thief","Acolyte","Archer","Magician","Merchant","Knight","Assassin","Priest","Hunter","Wizard","Blacksmith","Crusader","Rogue","Monk","Bard","Dancer","Sage","Alchemist","Super Novice","Lord Knight","Assassin Cross","High Priest","Sniper","High Wizard","Whitesmith","Paladin","Stalker","Champion","Clown","Gypsy","Professor","Creator","High Novice","High Swordman","High Thief","High Acolyte","High Archer","High Magician","High Merchant","Taekwon Kid","Star Gladiator","Soul Linker","Ninja","Gunslinger"],
  i=0;45>=i;i++) document.calcForm.A_JOB.options[i]=new Option(JobName[i],i);
for(EnName=["Neutral","Water","Earth","Fire","Wind","Poison","Holy","Shadow","Ghost","Undead"],i=0;9>=i;i++) document.calcForm.A_Weapon_zokusei.options[i]=new Option(EnName[i],i);
for(
  CardShort=[
    ["(Card Shortcuts)",0,0,0,0],
    ["Remove All Cards",1e4,0],
    ["Remove Right Hand Cards",0,0,0,0],
    ["+40% [2 Race Card]",1,1,0,0],
    ["+60% [3 Race Card]",1,1,1,0],
    ["+80% [4 Race Card]",1,1,1,1],
    ["+61% [2 Race + 1 Size Cards]",1,1,3,0],
    ["+68% [2 Race + 1 Element Cards]",1,1,2,0],
    ["+84% [3 Race + 1 Size Cards]",1,1,1,3],
    ["+96% [2 Race + 2 Element Cards]",1,1,2,2],
    ["+110% [2 AK + 2 Race Cards]",31,31,1,1],
    ["+110% [3 AK + 1 Race Cards]",31,31,31,1],
    ["+110% [3 AK + 1 Element Cards]",31,31,31,2],
    ["2 Size Cards",3,3,0,0],
    ["3 Size Cards",3,3,3,0],
    ["4 Size Cards",3,3,3,3],
    ["1 Elemental Stone + 1 Star Crumb",0,106,0,0],
    ["1 Elemental Stone + 2 Star Crumbs",0,106,106,0],
    ["3 Star Crumbs",106,106,106,0],
    ["+40 ATK [2 Andre Cards]",11,11,0,0],
    ["+60 ATK [3 Andre Cards]",11,11,11,0],
    ["+80 ATK [4 Andre Cards]",11,11,11,11],
    ["+60 ATK [2 Zipper Bear Cards]",326,326,0,0],
    ["+90 ATK [3 Zipper Bear Cards]",326,326,326,0],
    ["+120 ATK [4 Zipper Bear Cards]",326,326,326,326],
    ["+18 CRIT [2 Soldier Skeleton Cards]",41,41,0,0],
    ["+27 CRIT [3 Soldier Skeleton Cards]",41,41,41,0],
    ["+36 CRIT [4 Soldier Skeleton Cards]",41,41,41,41],
    ["+40 HIT [2 Mummy Cards]",40,40,0,0],
    ["+60 HIT [3 Mummy Cards]",40,40,40,0],
    ["+80 HIT [4 Mummy Cards]",40,40,40,40],
    ["+60% [2 Orc Lady Cards]",252,252,0,0],
    ["+92% [2 Orc Lady + 1 Hydra Cards]",252,252,13,0],
    ["+128% [3 Orc Lady + 1 Hydra Cards]",252,252,252,13],
    ["+20% [2 Archer Skeleton Cards]",107,107,0,0],
    ["+30% [3 Archer Skeleton Cards]",107,107,107,0],
    ["+40% [4 Archer Skeleton Cards]",107,107,107,107],
    ["2 Fabre Cards",4,4,0,0],
    ["3 Fabre Cards",4,4,4,0],
    ["4 Fabre Cards",4,4,4,4],
    ["2 Drops Cards",5,5,0,0],
    ["3 Drops Cards",5,5,5,0],
    ["4 Drops Cards",5,5,5,5],
    ["+50% [2 Abysmal Knight Cards]",31,31,0,0],
    ["+75% [3 Abysmal Knight Cards]",31,31,31,0],
    ["+100% [4 Abysmal Knight Cards]",31,31,31,31],
    ["2 Crit Dmg +10%, CRIT +7 Cards",156,156,0,0],
    ["3 Crit Dmg +10%, CRIT +7 Cards",156,156,156,0],
    ["4 Crit Dmg +10%, CRIT +7 Cards",156,156,156,156],
    ["2 Cecil Damon Cards",160,160,0,0],
    ["3 Cecil Damon Cards",160,160,160,0],
    ["4 Cecil Damon Cards",160,160,160,160],
    ["Swordman Set",1e4,223,347,0,317,0,362,354,0,0],
    ["Thief Set",1e4,233,0,0,0,295,391,395,260,0],
    ["Acolyte Set",1e4,253,383,307,301,0,0,270,0,0],
    ["Archer Set",1e4,279,0,0,224,340,351,230,0,0],
    ["Magician Set",1e4,0,337,358,220,346,379,350,0,0],
    ["Merchant Set",1e4,326,376,0,281,0,388,216,0,0],
    ["Crusader Set",1e4,0,347,0,190,0,362,354,0,0],
    ["Rogue Set",1e4,0,113,0,0,295,391,260,413,0],
    ["Monk Set",1e4,253,383,0,181,0,0,270,0,0],
    ["Bard/Dancer Set",1e4,279,0,0,224,340,408,230,0,0],
    ["Sage Set",1e4,0,337,0,193,346,379,350,0,0],
    ["Alchemist Set",1e4,326,175,0,281,0,388,104,0,0],
    ["[POS64]",0,0,0,0]
  ],
  i=0;63>=i;i++) document.calcForm.A_cardshort.options[i]=new Option(CardShort[i][0],i);
var HSEname=["STR","AGI","VIT","INT","DEX","LUK"];
document.calcForm.A_HSE.options[0]=new Option("(Enchant)",0);
var iHSE=1;
for(i=0;5>=i;i++) for(var j=1;3>=j;j++) document.calcForm.A_HSE.options[iHSE]=new Option(HSEname[i]+"+"+j,10*i+j),iHSE++;
document.calcForm.A_HSE_HEAD1.options[0]=new Option("(Headgear Hidden Slot Enchant)",0);
var iHSE=1;
for(i=0;5>=i;i++) for(var j=1;3>=j;j++) document.calcForm.A_HSE_HEAD1.options[iHSE]=new Option(HSEname[i]+"+"+j,10*i+j),iHSE++;
for(n_A_Buf2=new Array,i=0;21>=i;i++) n_A_Buf2[i]=0;
for(n_A_Buf3=new Array,i=0;45>=i;i++) n_A_Buf3[i]=0;
for(n_A_Buf6=new Array,i=0;23>=i;i++) n_A_Buf6[i]=0;
for(n_A_Buf7=new Array,i=0;45>=i;i++) n_A_Buf7[i]=0;
for(n_A_Buf8=new Array,i=0;15>=i;i++) n_A_Buf8[i]=0;
for(n_A_Buf9=new Array,i=0;54>=i;i++) n_A_Buf9[i]=0;
for(n_B_manual=new Array,i=0;54>=i;i++) n_B_manual[i]=0;
for(n_A_IJYOU=new Array,i=0;3>=i;i++) n_A_IJYOU[i]=0;
for(n_B_IJYOU=new Array,i=0;24>=i;i++) n_B_IJYOU[i]=0;
for(n_B_KYOUKA=new Array,i=0;14>=i;i++) n_B_KYOUKA[i]=0;
for(n_A_Equip=new Array,i=0;20>=i;i++) n_A_Equip[i]=0;
for(n_A_card=new Array,i=0;25>=i;i++) n_A_card[i]=0;
for(tPlusTaiseiSyokia(),i=0;i<ITEM_SP_TIME_OBJ.length;i++)
  if(1==ITEM_SP_TIME_OBJ[i][3]){
    var str="<B>(Special Effect: ["+ITEM_SP_TIME_OBJ[i][2]+"] can be activated under 'Additional Effects' at 'BUFF, ITEMS AND OTHER STUFF')</B>";
    0==ItemOBJ[ITEM_SP_TIME_OBJ[i][4]][10]?ItemOBJ[ITEM_SP_TIME_OBJ[i][4]][10]=str:ItemOBJ[ITEM_SP_TIME_OBJ[i][4]][10]+="<BR>"+str
  }
for(i=0;i<ITEM_SP_TIME_OBJ.length;i++)
  if(2==ITEM_SP_TIME_OBJ[i][3]){
    var str="<B>(Special Effect: ["+ITEM_SP_TIME_OBJ[i][2]+"] can be activated under 'Additional Effects' at 'BUFF, ITEMS AND OTHER STUFF')</B>";
    0==cardOBJ[ITEM_SP_TIME_OBJ[i][4]][3]?cardOBJ[ITEM_SP_TIME_OBJ[i][4]][3]=str:cardOBJ[ITEM_SP_TIME_OBJ[i][4]][3]+="<BR>"+str
  }
document.getElementsByName("scrollygg").checked=!1,
document.getElementById("server").value=10,
document.getElementById("autocalc").checked=!0,
document.getElementById("restrict_jobequip").checked=!0,
document.getElementById("restrict_lvlequip").checked=!1,
document.getElementById("restrict_equipslot").checked=!1,
document.getElementById("restrict_cardslot").checked=!1,
document.getElementById("all_card").checked=!1,
document.calcForm.A_JOB.value=0,
n_A_Buf8[3]=2,n_A_Buf8[7]=2,
ClickJob(0),
allCard(),
EnemySort(),
StCalc(),
calc(),
Bskill(),
LoadLocal3(),
URLIN(),
refreshFields();
