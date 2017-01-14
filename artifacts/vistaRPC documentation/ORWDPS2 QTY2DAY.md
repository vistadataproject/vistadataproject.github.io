---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS2 QTY2DAY 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 QTY2DAY{:/}
 tag | {::nomarkdown}QTY2DAY{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | QTY2DAY^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return days supply given quantity
 First comment | {::nomarkdown}VAL: days supply{:/}
 Input parameters | {::nomarkdown}QTY<br/>UPD<br/>SCH<br/>DUR<br/>PAT<br/>DRG{:/}
 Code | ```  N ORWX,I,X,ADUR
 S ORWX("QTY")=QTY
 S ORWX("PATIENT")=PAT
 I DRG S ORWX("DRUG")=DRG
 F I=1:1:$L(UPD,U)-1 D
 . S ORWX("DOSE ORDERED",I)=$P(UPD,U,I)
 . S ORWX("SCHEDULE",I)=$P(SCH,U,I)
 . S ADUR=$P(DUR,U,I),X=+ADUR_$E($P(ADUR," ",2))
 . I $L(X) S ORWX("DURATION",I)=X
 . S X=$E($P(ADUR,"~",2))
 . I $L(X) S ORWX("CONJUNCTION",I)=X
 D QTYX^PSOSIG(.ORWX)
 S VAL=$G(ORWX("DAYS SUPPLY"))```




 Generated on January 14th 2017, 7:26:35 am