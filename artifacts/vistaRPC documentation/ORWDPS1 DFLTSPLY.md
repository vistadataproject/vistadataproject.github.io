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
 Code | ```  N ORWX,I,PSOI,TPKG<br/> S ORWX("PATIENT")=PAT<br/> I DRG S ORWX("DRUG")=DRG<br/> I $D(OI) D<br/> . S TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2) Q:TPKG'["PS"<br/> . S PSOI=+TPKG Q:PSOI'>0<br/> . S ORWX("OI")=PSOI<br/> F I=1:1:$L(UPD,U)-1 D<br/> . S ORWX("DOSE ORDERED",I)=$P(UPD,U,I)<br/> . S ORWX("SCHEDULE",I)=$P(SCH,U,I)<br/> D DSUP^PSOSIGDS(.ORWX)<br/> S VAL=$G(ORWX("DAYS SUPPLY"))```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}