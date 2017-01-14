---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORK TRIGGER 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORK TRIGGER{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [ORKCHK](http://code.osehra.org/dox/Routine_ORKCHK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This function returns a list of order check messages.  {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number from the Patient File [#2].{:/} | 
| {::nomarkdown}ORDER INFO{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of order information in the format: orderable item #filler appnat't id^nat'l text^nat'l coding system^local id^local text^local codingsystemorder effective date/timeorder number.{:/} | 
| {::nomarkdown}ORDER MODE/EVENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Indicates the mode or event which trigger the need for order checking.Set of codes including: DISPLAY, SELECT, ACCEPT, SESSION, NOTIF, ALL.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | EN^[ORKCHK](http://code.osehra.org/dox/Routine_ORKCHK_source.html)
 Method comment | initiate order checking
 First comment | {::nomarkdown}ORKY: array of returned msgs in format: ornum^orderchk ien^clin danger^msg<br/>ORKDFN: patient dfn<br/>ORKA: array of order information in the format:<br/>orderable item ien|<br/>display group-filler app|<br/>nat'l id^nat'l text^nat'l code sys^local id^local text^local code sys|<br/>effective d/t|<br/>order number|<br/>filler data (LR: specimen ien, PS: meds prev ordered during this session in format med1^med2^...)<br/>ORKMODE: mode/event trigger (DISPLAY,SELECT,ACCEPT,SESSION,ALL,NOTIF)<br/>PS: meds previously ordered during this session med1^med2^...<br/>OROIL: array containing the order info passed in (oly for ACCEPT mode)<br/>ORDODSG: flag that denotes if dosage checks should be performed<br/>1 for perform dosage checks<br/>0 for do not perform dosage checks{:/}
 Input parameters | {::nomarkdown}ORKDFN<br/>ORKA<br/>ORKMODE<br/>OROIL<br/>ORDODSG{:/}
 Code | ```  N ORKQ,ORKN S ORKQ=0,ORKN=1
 S:+$G(ORKDFN)<1 ORKY(ORKN)="^^^Order Checking Unavailable - invalid patient id",ORKQ=1,ORKN=ORKN+1
 S:'$L($G(ORKMODE)) ORKY(ORKN)="^^^Order Checking Unavailable - invalid mode/event",ORKQ=1,ORKN=ORKN+1
 Q:$G(ORKQ)=1
 Q:+$G(ORKA)<1
 N ORKX,ORKS,DNGR,ORENT,ORKENT,ORKNENT,ORNUM,ORKOFF,ORKTMODE
 N ORKADUZ,ORKNDUZ,ORKI,ORKPRIM,ORKNMSG,ORKMSG,ORKLOG,ORKLD,ORKLI,ORKOI
 N ORKDG,ORKLPS,ORKPSA,ORKCNT,ORKDGI,ORIVORDR
 M ^TMP("ORKA",$J)=ORKA
 N DFN,ORKLOC
 S DFN=ORKDFN,VA200="" D OERR^VADPT
 S ORKLOC=+$G(^DIC(42,+VAIN(4),44))
 K VA200,VAIN
 N ORKSRV
 S ORKSRV=$$GET1^DIQ(200,DUZ,29,"I") I +ORKSRV>0 S ORKSRV=$P(ORKSRV,U)
 S ORKLOG=$$GET^XPAR("DIV^SYS^PKG","ORK DEBUG ENABLE/DISABLE",1,"I")
 I $G(ORKLOG)="D" K ^XTMP("ORKLOG") S ^XTMP("ORKLOG",0)=""
 I +$P($G(^XTMP("ORKLOG",0)),U,3)>5000 K ^XTMP("ORKLOG")
 I ORKMODE="SESSION" D
 .S ORKDG=$P(ORKA(1),"|",2)
 .I $E($G(ORKDG),1,2)="PS" D
 ..S ORKDGI=0,ORKDGI=$O(^ORD(100.98,"B","PHARMACY",ORKDGI))
 ..K ^TMP("ORR",$J)
 ..D EN^ORQ1(DFN_";DPT(",ORKDGI,11,"","","",0,0)
 ..;store unsigned med orders in ^TMP("ORR",$J for processing in ORKPS
 S (ORKX,ORIVORDR)="" F  S ORKX=$O(ORKA(ORKX)) Q:ORKX=""  D
 .S ORKOI=$P(ORKA(ORKX),"|")
 .;
 .;log debug msgs if parameter is enabled:
 .I $G(ORKLOG)="E" D
 ..S ORKLD=$$NOW^XLFDT
 ..S ORKLI=0
 ..I +$P($G(^XTMP("ORKLOG",0)),U,3)<1 S $P(^XTMP("ORKLOG",0),U,3)=0
 ..S ORKCNT=$P(^XTMP("ORKLOG",0),U,3)+1
 ..S ^XTMP("ORKLOG",0)=$$FMADD^XLFDT(ORKLD,3,"","","")_U_ORKLD_U_ORKCNT
 ..S ^XTMP("ORKLOG",ORKLD,ORKDFN,+$G(ORKOI),ORKMODE,DUZ,ORKLI)=ORKA(ORKX)
 .;
 .S ORKDG=$P(ORKA(ORKX),"|",2),ORKTMODE=""
 .S ORKENT="USR^LOC.`"_+$G(ORKLOC)_"^SRV.`"_+$G(ORKSRV)_"^DIV^SYS^PKG"
 .Q:'$L($G(ORKDG))
 .;
 .;if pharmacy order and multiple pharmacy orders in session add data node:
 .I $E(ORKDG,1,2)="PS",($L($G(ORKPSA))) D
 ..S $P(ORKA(ORKX),"|",6)=ORKPSA
 .;
 .S ORNUM=$P(ORKA(ORKX),"|",5)
 .; get correct DUZ for notification processing if in NOTIF mode:
 .I ORKMODE="NOTIF" D
 ..S:+$G(ORNUM)>0 ORKNDUZ=$$ORDERER^ORQOR2(ORNUM) ;ordering provider
 ..S:+$G(ORNUM)<1 ORKNDUZ=$P($$PRIM^ORQPTQ4(ORKDFN),U) ;prim provider
 ..I +$G(ORKNDUZ)>0 D
 ...S ORKSRV=$$GET1^DIQ(200,ORKNDUZ,29,"I") I +ORKSRV>0 S ORKSRV=$P(ORKSRV,U)
 ...S ORKNENT="USR.`"_+ORKNDUZ_"^LOC.`"_+$G(ORKLOC)_"^SRV.`"_+$G(ORKSRV)_"^DIV^SYS^PKG"
 ..S:+$G(ORKNDUZ)<1 ORKNENT="LOC.`"_+$G(ORKLOC)_"^DIV^SYS^PKG"
 .S ORENT=$S(ORKMODE="NOTIF":ORKNENT,1:ORKENT)
 .;
 .;If the order is a delayed release order (NOTIF) process all nodes.
 .;If it is a renewal, edit or delayed signature order (ALL) process all
 .;modes except SESSION which gets processed just before signature:
 .I ORKMODE="NOTIF"!(ORKMODE="ALL") S ORKTMODE=ORKMODE D
 ..D EN^ORKCHK3(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE)  ;DISPLAY
 ..D EN^ORKCHK4(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE,.OROIL,.ORIVORDR,.ORDODSG)  ;SELECT
 ..D EN^ORKCHK5(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE,.OROIL,.ORDODSG)  ;ACCEPT
 ..I ORKMODE="NOTIF" D EN^ORKCHK6(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE)  ;SESSION
 ..S ORKMODE=ORKTMODE
 .;
 .;Process regular orders/modes:
 .I '$L($G(ORKTMODE)) D
 ..I ORKMODE="DISPLAY" D EN^ORKCHK3(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE)
 ..I ORKMODE="SELECT" D EN^ORKCHK4(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE,.OROIL,.ORIVORDR,.ORDODSG)
 ..I ORKMODE="ACCEPT" D EN^ORKCHK5(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE,.OROIL,.ORDODSG)
 ..I ORKMODE="SESSION" D EN^ORKCHK6(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE)
 S ORKX="",ORKI=1
 F  S ORKX=$O(ORKS("ORK",ORKX)) Q:ORKX=""  D
 .S ORKY(ORKI)=ORKS("ORK",ORKX)
 .;S ORKY(ORKI)=$E(ORKS("ORK",ORKX),1,500)
 .;
 .;log debug msgs if parameter is enabled:
 .I $G(ORKLOG)="E" D
 ..S ORKLI=$G(ORKLI)+1
 ..S ^XTMP("ORKLOG",$$NOW^XLFDT,ORKDFN,+$G(ORKOI),ORKMODE,DUZ,ORKLI)=ORKY(ORKI)
 ..S $P(^XTMP("ORKLOG",0),U,3)=$P($G(^XTMP("ORKLOG",0)),U,3)+1
 .;
 .;send moderate and high danger order checks for delayed orders as notifications:
 .I ORKMODE="NOTIF" S DNGR=$P(ORKY(ORKI),U,3) I $G(DNGR)<3 D
 ..S ORKADUZ="",ORNUM=$P(ORKY(ORKI),U)
 ..S:+$G(ORKNDUZ)>0 ORKADUZ(ORKNDUZ)=""
 ..S ORKNMSG="Order check: "_$P(ORKY(ORKI),U,4)
 ..D EN^ORB3(54,ORKDFN,$G(ORNUM),.ORKADUZ,ORKNMSG,"")
 .S ORKI=ORKI+1
 K ^TMP("ORKA",$J),^TMP("ORR",$J)
 I $G(ORKLOG)="E" D
 .S ORKLI=$G(ORKLI)+1
 .S ^XTMP("ORKLOG",$$NOW^XLFDT,ORKDFN,+$G(ORKOI),ORKMODE,DUZ,ORKLI)="LEAVING ORDER CHECKING"
 .S $P(^XTMP("ORKLOG",0),U,3)=$P($G(^XTMP("ORKLOG",0)),U,3)+1
 D CHKRMT```




 Generated on January 14th 2017, 7:26:35 am