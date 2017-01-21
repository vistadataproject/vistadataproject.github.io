---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA DEF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDRA](http://code.osehra.org/dox/Routine_ORWDRA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads dialog data (lists & defaults) for a radiology order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEF^[ORWDRA](http://code.osehra.org/dox/Routine_ORWDRA_source.html)
 Method comment | Get dialog data for radiology
 Input parameters | {::nomarkdown}PATID{:/}
 Code | {::nomarkdown}  N ILST,I,X S ILST=0<br> S LST($$NXT)="~Common Procedures" D COMMPRO<br> S LST($$NXT)="~Modifiers" D MODIFYR<br> S LST($$NXT)="~Urgencies" D URGENCY<br> S LST($$NXT)="~Transport" D TRNSPRT<br> S LST($$NXT)="~Category" D CATEGRY<br> S LST($$NXT)="~Submit to" D SUBMIT<br> S LST($$NXT)="~Ask Submit="_$$GET^XPAR("ALL","RA SUBMIT PROMPT",1,"Q")<br> S LST($$NXT)="~Last 7 Days" D LAST7{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}