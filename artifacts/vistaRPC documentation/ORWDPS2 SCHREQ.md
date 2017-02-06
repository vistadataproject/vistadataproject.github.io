---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 SCHREQ 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 SCHREQ{:/}
 tag | {::nomarkdown}SCHREQ{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SCHREQ^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return 1 if schedule is required
 Input parameters | {::nomarkdown}OI, RTE, DRG{:/}
 First comment | {::nomarkdown}<pre> OI=orderable item, RTE=ptr route, DRG=ptr dispense drug</pre>{:/}
 Code | {::nomarkdown}  S VAL=1<br> Q:'$G(OI)  Q:'$G(RTE)<br> S VAL=$$SCHREQ^PSJORPOE(RTE,OI,+$G(DRG)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}