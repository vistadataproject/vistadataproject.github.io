---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS2 MAXREF 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 MAXREF{:/}
 tag | {::nomarkdown}MAXREF{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | MAXREF^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return the maximum number of refills
 First comment | {::nomarkdown}PAT=Patient DFN, DRG=ptr50, SUP=days supply, OI=orderable item<br/>VAL: maximum refills allowed{:/}
 Input parameters | {::nomarkdown}PAT<br/>DRG<br/>SUP<br/>OI<br/>OUT{:/}
 Code | ```  N ORWX
 S ORWX("PATIENT")=PAT
 I $G(DRG) S ORWX("DRUG")=+DRG
 I $G(SUP) S ORWX("DAYS SUPPLY")=SUP
 I $G(OI)  S ORWX("ITEM")=+$P(^ORD(101.43,+OI,0),U,2)
 I $G(OUT) S ORWX("DISCHARGE")=1
 D MAX^PSOSIGDS(.ORWX)
 S VAL=$G(ORWX("MAX"))```




 Generated on January 14th 2017, 7:26:35 am