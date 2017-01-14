---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS2 SCHREQ 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 SCHREQ{:/}
 tag | {::nomarkdown}SCHREQ{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SCHREQ^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return 1 if schedule is required
 First comment | {::nomarkdown}OI=orderable item, RTE=ptr route, DRG=ptr dispense drug{:/}
 Input parameters | {::nomarkdown}OI<br/>RTE<br/>DRG{:/}
 Code | ```  S VAL=1
 Q:'$G(OI)  Q:'$G(RTE)
 S VAL=$$SCHREQ^PSJORPOE(RTE,OI,+$G(DRG))```




 Generated on January 14th 2017, 7:26:35 am