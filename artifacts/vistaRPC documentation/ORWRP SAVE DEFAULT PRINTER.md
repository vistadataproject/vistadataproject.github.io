---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP SAVE DEFAULT PRINTER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP SAVE DEFAULT PRINTER{:/}
 tag | {::nomarkdown}SAVDFPRT{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves printer as user's default printer.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SAVDFPRT^[ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 Method comment | Save new default printer for user
 Input parameters | {::nomarkdown}ORDEV{:/}
 Code | {::nomarkdown}  N ORPAR,ORERR,ORWINDEF<br> Q:$L(ORDEV)=0<br> S ORPAR="ORWDP WINPRINT DEFAULT"<br> I ORDEV="WIN" S ORWINDEF="Y"<br> E  S ORWINDEF="N"<br> I $$GET^XPAR(DUZ_";VA(200,",ORPAR,1)'="" D CHG^XPAR(DUZ_";VA(200,",ORPAR,1,ORWINDEF,.ORERR)<br> E  D ADD^XPAR(DUZ_";VA(200,",ORPAR,1,ORWINDEF,.ORERR)<br> Q:ORDEV="WIN"<br> S ORPAR="ORWDP DEFAULT PRINTER",ORDEV="`"_ORDEV<br> I $$GET^XPAR(DUZ_";VA(200,",ORPAR,1)'="" D CHG^XPAR(DUZ_";VA(200,",ORPAR,1,ORDEV,.ORERR)<br> E  D ADD^XPAR(DUZ_";VA(200,",ORPAR,1,ORDEV,.ORERR)<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}