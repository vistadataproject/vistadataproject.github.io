---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDAL32 CLINUSER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 CLINUSER{:/}
 tag | {::nomarkdown}CLINUSER{:/}
 routine | [ORWDAL33](http://code.osehra.org/dox/Routine_ORWDAL33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Determine if user can perform cover sheet allergy actions.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CLINUSER^[ORWDAL33](http://code.osehra.org/dox/Routine_ORWDAL33_source.html)
 Method comment | can user mark allergy as entered in error
 Code | {::nomarkdown}  N DIC,X,PRM,Y,ORLST,ORX,PLIST,VALUE<br> S DIC=8989.51,DIC(0)="MX",X="OR ALLERGY ENTERED IN ERROR" D ^DIC<br> I Y=-1 S ORY=0 Q  ;Parameter not found so quit<br> S PRM=+Y<br> S ORY=$$GET^XPAR("USR",PRM) I ORY'="" Q<br> D ENVAL^XPAR(.ORLST,PRM)<br> I ORLST>0 D<br> . S ORX="" F  S ORX=$O(ORLST(ORX)) Q:ORX=""  D<br> . . Q:ORX'["USR(8930"<br> . . I $$ISA^USRLM(DUZ,+ORX) S VALUE(+ORX)=ORLST(ORX,1)<br> . S ORX=0 F  S ORX=$O(VALUE(ORX)) Q:'+ORX  D REMOVE(ORX)<br> . S ORX=0 F  S ORX=$O(VALUE(ORX)) Q:'+ORX  S VALUE=$G(VALUE)!(VALUE(ORX))<br> S ORY=$G(VALUE)<br> I ORY'="" Q<br> S ORY=$$GET^XPAR("DIV^SYS",PRM) I ORY'="" Q<br> S ORY=0 Q{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}