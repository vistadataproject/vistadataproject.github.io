---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS1 DFLTSPLY 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 DFLTSPLY{:/}
 tag | {::nomarkdown}DFLTSPLY{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DFLTSPLY^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | return days supply given quantity
 First comment | {::nomarkdown}VAL: default days supply{:/}
 Input parameters | {::nomarkdown}UPD<br/>SCH<br/>PAT<br/>DRG<br/>OI{:/}
 Code | ```  N ORWX,I,PSOI,TPKG
 S ORWX("PATIENT")=PAT
 I DRG S ORWX("DRUG")=DRG
 I $D(OI) D
 . S TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2) Q:TPKG'["PS"
 . S PSOI=+TPKG Q:PSOI'>0
 . S ORWX("OI")=PSOI
 F I=1:1:$L(UPD,U)-1 D
 . S ORWX("DOSE ORDERED",I)=$P(UPD,U,I)
 . S ORWX("SCHEDULE",I)=$P(SCH,U,I)
 D DSUP^PSOSIGDS(.ORWX)
 S VAL=$G(ORWX("DAYS SUPPLY"))```




 Generated on January 14th 2017, 7:26:35 am