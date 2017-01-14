---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT TEAM PATIENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT TEAM PATIENTS{:/}
 tag | {::nomarkdown}TEAMPTS{:/}
 routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns an array of patients on a team.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TEAM ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number from the OE/RR Team File (#100.21).{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TEAMPTS^[ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 Method comment | RETURN LIST OF PATIENTS IN A TEAM
 First comment | {::nomarkdown}Also called under DBIA # 2692.<br/>If TMPFLAG passed and = TRUE, code expects a "^TMP(xxx"<br/>global root string passed in ORY, and builds the returned <br/>list in that global instead of to a memory array.{:/}
 Input parameters | {::nomarkdown}TEAM<br>TMPFLAG{:/}
 Code | {::nomarkdown}  N DOTMP,NEWTMP<br> S DOTMP=0<br> I $G(TMPFLAG) D             ; Was value passed?<br> .I TMPFLAG S DOTMP=1        ; Is value TRUE?<br> I +$G(TEAM)<1 D<br> .I DOTMP S NEWTMP=ORY_1_")",@NEWTMP="^No team identified" Q<br> .I 'DOTMP S ORY(1)="^No team identified" Q<br> N ORI,ORPT,I<br> S I=0<br> S ORI=0 F  S ORI=$O(^OR(100.21,+TEAM,10,ORI)) Q:ORI<1  D<br> .S ORPT=^OR(100.21,+TEAM,10,ORI,0)<br> .I DOTMP D<br> ..S I=I+1,NEWTMP=ORY_+I_")"<br> ..S @NEWTMP=+ORPT_U_$P(^DPT(+ORPT,0),U)<br> .I 'DOTMP S I=I+1,ORY(I)=+ORPT_U_$P(^DPT(+ORPT,0),U)<br> I DOTMP S:I<1 NEWTMP=ORY_1_")",@NEWTMP="^No patients found."<br> I 'DOTMP S:I<1 ORY(1)="^No patients found."{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}