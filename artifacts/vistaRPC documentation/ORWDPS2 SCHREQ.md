---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 SCHREQ 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 SCHREQ{:/}
 tag | {::nomarkdown}SCHREQ{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return 1 if schedule is required
 Input Parameters | {::nomarkdown}OI<br/>RTE<br/>DRG{:/}
 Lines | {::nomarkdown} S VAL=1<br/> Q:'$G(OI)  Q:'$G(RTE)<br/> S VAL=$$SCHREQ^PSJORPOE(RTE,OI,+$G(DRG)){:/}
 Leading comment lines | {::nomarkdown}OI=orderable item, RTE=ptr route, DRG=ptr dispense drug{:/}




 Generated on January 13th 2017, 7:15:28 am