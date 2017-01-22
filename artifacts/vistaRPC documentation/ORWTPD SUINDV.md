---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD SUINDV 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD SUINDV{:/}
 tag | {::nomarkdown}SUINDV{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}set user level individual report's time/occ setting{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SUINDV^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Set user individual time/occ setting
 Input parameters | {::nomarkdown}RPTS, VALUE{:/}
 First comment | {::nomarkdown}<pre> RPTS format: RPTIen^RPTIen^RPTIen such as 1^2^3</pre>{:/}
 Code | {::nomarkdown}  I $L(RPTS)=0 Q<br> N ORERR,RPTID,P1,P7 S ORERR=0<br> S (P1,P7)=""<br> F I=1:1:$L(RPTS,"^") S RPTID=$P(RPTS,U,I) D<br> . S P1=$P($G(^ORD(101.24,RPTID,0)),U),P7=$P($G(^(0)),U,7)<br> . I "02345"[P7,(P1'="ORRP IMAGING") D DEL^XPAR("USR.`"_DUZ,"ORWRP TIME/OCC LIMITS INDV",RPTID,.ORERR) Q<br> . D EN^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS INDV",RPTID,VALUE,.ORERR){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}