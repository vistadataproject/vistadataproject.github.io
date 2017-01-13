---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 MAXREF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 MAXREF{:/}
 tag | {::nomarkdown}MAXREF{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return the maximum number of refills
 Input Parameters | {::nomarkdown}PAT<br/>DRG<br/>SUP<br/>OI<br/>OUT{:/}
 Lines | ```
 N ORWX
 S ORWX("PATIENT")=PAT
 I $G(DRG) S ORWX("DRUG")=+DRG
 I $G(SUP) S ORWX("DAYS SUPPLY")=SUP
 I $G(OI)  S ORWX("ITEM")=+$P(^ORD(101.43,+OI,0),U,2)
 I $G(OUT) S ORWX("DISCHARGE")=1
 D MAX^PSOSIGDS(.ORWX)
 S VAL=$G(ORWX("MAX"))```
 Leading comment lines | {::nomarkdown}PAT=Patient DFN, DRG=ptr50, SUP=days supply, OI=orderable item<br/>VAL: maximum refills allowed{:/}




 Generated on January 13th 2017, 6:55:29 am