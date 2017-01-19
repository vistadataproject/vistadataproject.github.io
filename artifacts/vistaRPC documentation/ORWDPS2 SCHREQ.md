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

 property | value 
 --- | --- 
 Method | SCHREQ^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return 1 if schedule is required
 First comment | {::nomarkdown}<pre> OI=orderable item, RTE=ptr route, DRG=ptr dispense drug</pre>{:/}
 Input parameters | {::nomarkdown}OI<br>RTE<br>DRG{:/}
 Code | {::nomarkdown}  S VAL=1<br> Q:'$G(OI)  Q:'$G(RTE)<br> S VAL=$$SCHREQ^PSJORPOE(RTE,OI,+$G(DRG)){:/}


### CPRS

[Orders/rODMeds.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}