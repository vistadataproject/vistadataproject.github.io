---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORK TRIGGER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORK TRIGGER{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [ORKCHK](http://code.osehra.org/dox/Routine_ORKCHK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This function returns a list of order check messages.  {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number from the Patient File [#2].{:/} | 
| {::nomarkdown}ORDER INFO{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of order information in the format: orderable item #filler appnat't id^nat'l text^nat'l coding system^local id^local text^local codingsystemorder effective date/timeorder number.{:/} | 
| {::nomarkdown}ORDER MODE/EVENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Indicates the mode or event which trigger the need for order checking.Set of codes including: DISPLAY, SELECT, ACCEPT, SESSION, NOTIF, ALL.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | EN^[ORKCHK](http://code.osehra.org/dox/Routine_ORKCHK_source.html)
 Method comment | initiate order checking
 First comment | {::nomarkdown}<pre>ORKY: array of returned msgs in format: ornum^orderchk ien^clin danger^msg<br/>ORKDFN: patient dfn<br/>ORKA: array of order information in the format:<br/> orderable item ien|<br/> display group-filler app|<br/> nat'l id^nat'l text^nat'l code sys^local id^local text^local code sys|<br/> effective d/t|<br/> order number|<br/> filler data (LR: specimen ien, PS: meds prev ordered during this session in format med1^med2^...)<br/>ORKMODE: mode/event trigger (DISPLAY,SELECT,ACCEPT,SESSION,ALL,NOTIF)<br/> PS: meds previously ordered during this session med1^med2^...<br/>OROIL: array containing the order info passed in (oly for ACCEPT mode)<br/>ORDODSG: flag that denotes if dosage checks should be performed<br/>         1 for perform dosage checks<br/>         0 for do not perform dosage checks</pre>{:/}
 Input parameters | {::nomarkdown}ORKDFN<br>ORKA<br>ORKMODE<br>OROIL<br>ORDODSG{:/}
 Code | {::nomarkdown}  N ORKQ,ORKN S ORKQ=0,ORKN=1<br> S:+$G(ORKDFN)<1 ORKY(ORKN)="^^^Order Checking Unavailable - invalid patient id",ORKQ=1,ORKN=ORKN+1<br> S:'$L($G(ORKMODE)) ORKY(ORKN)="^^^Order Checking Unavailable - invalid mode/event",ORKQ=1,ORKN=ORKN+1<br> Q:$G(ORKQ)=1<br> Q:+$G(ORKA)<1<br> N ORKX,ORKS,DNGR,ORENT,ORKENT,ORKNENT,ORNUM,ORKOFF,ORKTMODE<br> N ORKADUZ,ORKNDUZ,ORKI,ORKPRIM,ORKNMSG,ORKMSG,ORKLOG,ORKLD,ORKLI,ORKOI<br> N ORKDG,ORKLPS,ORKPSA,ORKCNT,ORKDGI,ORIVORDR<br> M ^TMP("ORKA",$J)=ORKA<br> N DFN,ORKLOC<br> S DFN=ORKDFN,VA200="" D OERR^VADPT<br> S ORKLOC=+$G(^DIC(42,+VAIN(4),44))<br> K VA200,VAIN<br> N ORKSRV<br> S ORKSRV=$$GET1^DIQ(200,DUZ,29,"I") I +ORKSRV>0 S ORKSRV=$P(ORKSRV,U)<br> S ORKLOG=$$GET^XPAR("DIV^SYS^PKG","ORK DEBUG ENABLE/DISABLE",1,"I")<br> I $G(ORKLOG)="D" K ^XTMP("ORKLOG") S ^XTMP("ORKLOG",0)=""<br> I +$P($G(^XTMP("ORKLOG",0)),U,3)>5000 K ^XTMP("ORKLOG")<br> I ORKMODE="SESSION" D<br> .S ORKDG=$P(ORKA(1),"|",2)<br> .I $E($G(ORKDG),1,2)="PS" D<br> ..S ORKDGI=0,ORKDGI=$O(^ORD(100.98,"B","PHARMACY",ORKDGI))<br> ..K ^TMP("ORR",$J)<br> ..D EN^ORQ1(DFN_";DPT(",ORKDGI,11,"","","",0,0)<br> ..;store unsigned med orders in ^TMP("ORR",$J for processing in ORKPS<br> S (ORKX,ORIVORDR)="" F  S ORKX=$O(ORKA(ORKX)) Q:ORKX=""  D<br> .S ORKOI=$P(ORKA(ORKX),"|")<br> .;<br> .;log debug msgs if parameter is enabled:<br> .I $G(ORKLOG)="E" D<br> ..S ORKLD=$$NOW^XLFDT<br> ..S ORKLI=0<br> ..I +$P($G(^XTMP("ORKLOG",0)),U,3)<1 S $P(^XTMP("ORKLOG",0),U,3)=0<br> ..S ORKCNT=$P(^XTMP("ORKLOG",0),U,3)+1<br> ..S ^XTMP("ORKLOG",0)=$$FMADD^XLFDT(ORKLD,3,"","","")_U_ORKLD_U_ORKCNT<br> ..S ^XTMP("ORKLOG",ORKLD,ORKDFN,+$G(ORKOI),ORKMODE,DUZ,ORKLI)=ORKA(ORKX)<br> .;<br> .S ORKDG=$P(ORKA(ORKX),"|",2),ORKTMODE=""<br> .S ORKENT="USR^LOC.`"_+$G(ORKLOC)_"^SRV.`"_+$G(ORKSRV)_"^DIV^SYS^PKG"<br> .Q:'$L($G(ORKDG))<br> .;<br> .;if pharmacy order and multiple pharmacy orders in session add data node:<br> .I $E(ORKDG,1,2)="PS",($L($G(ORKPSA))) D<br> ..S $P(ORKA(ORKX),"|",6)=ORKPSA<br> .;<br> .S ORNUM=$P(ORKA(ORKX),"|",5)<br> .; get correct DUZ for notification processing if in NOTIF mode:<br> .I ORKMODE="NOTIF" D<br> ..S:+$G(ORNUM)>0 ORKNDUZ=$$ORDERER^ORQOR2(ORNUM) ;ordering provider<br> ..S:+$G(ORNUM)<1 ORKNDUZ=$P($$PRIM^ORQPTQ4(ORKDFN),U) ;prim provider<br> ..I +$G(ORKNDUZ)>0 D<br> ...S ORKSRV=$$GET1^DIQ(200,ORKNDUZ,29,"I") I +ORKSRV>0 S ORKSRV=$P(ORKSRV,U)<br> ...S ORKNENT="USR.`"_+ORKNDUZ_"^LOC.`"_+$G(ORKLOC)_"^SRV.`"_+$G(ORKSRV)_"^DIV^SYS^PKG"<br> ..S:+$G(ORKNDUZ)<1 ORKNENT="LOC.`"_+$G(ORKLOC)_"^DIV^SYS^PKG"<br> .S ORENT=$S(ORKMODE="NOTIF":ORKNENT,1:ORKENT)<br> .;<br> .;If the order is a delayed release order (NOTIF) process all nodes.<br> .;If it is a renewal, edit or delayed signature order (ALL) process all<br> .;modes except SESSION which gets processed just before signature:<br> .I ORKMODE="NOTIF"!(ORKMODE="ALL") S ORKTMODE=ORKMODE D<br> ..D EN^ORKCHK3(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE)  ;DISPLAY<br> ..D EN^ORKCHK4(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE,.OROIL,.ORIVORDR,.ORDODSG)  ;SELECT<br> ..D EN^ORKCHK5(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE,.OROIL,.ORDODSG)  ;ACCEPT<br> ..I ORKMODE="NOTIF" D EN^ORKCHK6(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE)  ;SESSION<br> ..S ORKMODE=ORKTMODE<br> .;<br> .;Process regular orders/modes:<br> .I '$L($G(ORKTMODE)) D<br> ..I ORKMODE="DISPLAY" D EN^ORKCHK3(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE)<br> ..I ORKMODE="SELECT" D EN^ORKCHK4(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE,.OROIL,.ORIVORDR,.ORDODSG)<br> ..I ORKMODE="ACCEPT" D EN^ORKCHK5(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE,.OROIL,.ORDODSG)<br> ..I ORKMODE="SESSION" D EN^ORKCHK6(.ORKS,ORKDFN,ORKA(ORKX),ORENT,ORKTMODE)<br> S ORKX="",ORKI=1<br> F  S ORKX=$O(ORKS("ORK",ORKX)) Q:ORKX=""  D<br> .S ORKY(ORKI)=ORKS("ORK",ORKX)<br> .;S ORKY(ORKI)=$E(ORKS("ORK",ORKX),1,500)<br> .;<br> .;log debug msgs if parameter is enabled:<br> .I $G(ORKLOG)="E" D<br> ..S ORKLI=$G(ORKLI)+1<br> ..S ^XTMP("ORKLOG",$$NOW^XLFDT,ORKDFN,+$G(ORKOI),ORKMODE,DUZ,ORKLI)=ORKY(ORKI)<br> ..S $P(^XTMP("ORKLOG",0),U,3)=$P($G(^XTMP("ORKLOG",0)),U,3)+1<br> .;<br> .;send moderate and high danger order checks for delayed orders as notifications:<br> .I ORKMODE="NOTIF" S DNGR=$P(ORKY(ORKI),U,3) I $G(DNGR)<3 D<br> ..S ORKADUZ="",ORNUM=$P(ORKY(ORKI),U)<br> ..S:+$G(ORKNDUZ)>0 ORKADUZ(ORKNDUZ)=""<br> ..S ORKNMSG="Order check: "_$P(ORKY(ORKI),U,4)<br> ..D EN^ORB3(54,ORKDFN,$G(ORNUM),.ORKADUZ,ORKNMSG,"")<br> .S ORKI=ORKI+1<br> K ^TMP("ORKA",$J),^TMP("ORR",$J)<br> I $G(ORKLOG)="E" D<br> .S ORKLI=$G(ORKLI)+1<br> .S ^XTMP("ORKLOG",$$NOW^XLFDT,ORKDFN,+$G(ORKOI),ORKMODE,DUZ,ORKLI)="LEAVING ORDER CHECKING"<br> .S $P(^XTMP("ORKLOG",0),U,3)=$P($G(^XTMP("ORKLOG",0)),U,3)+1<br> D CHKRMT{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [NOT OSEHRA CPRS]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}