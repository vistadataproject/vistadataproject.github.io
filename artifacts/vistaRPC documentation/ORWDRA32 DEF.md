---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 DEF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads dialog data (lists & defaults) for a radiology order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEF^[ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 Method comment | Get dialog data for radiology
 Input parameters | {::nomarkdown}PATID, EVTDIV, IMGTYP{:/}
 Code | {::nomarkdown}  N ILST,I,ORX S ILST=0<br> S LST($$NXT)="~ShortList"  D SHORT<br> S IMGTYP=$$IMTYPE(IMGTYP)<br> S LST($$NXT)="~Common Procedures" D COMMPRO<br> S LST($$NXT)="~Modifiers" D MODIFYR<br> S LST($$NXT)="~Urgencies" D URGENCY<br> S LST($$NXT)="~Transport" D TRNSPRT<br> S LST($$NXT)="~Category" D CATEGRY<br> S LST($$NXT)="~Submit to" D SUBMIT<br> S LST($$NXT)="~Last 7 Days" D LAST7{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODRad.pas">Orders/rODRad.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}