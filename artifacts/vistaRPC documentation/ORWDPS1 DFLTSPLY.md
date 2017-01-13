---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 DFLTSPLY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 DFLTSPLY{:/}
 tag | {::nomarkdown}DFLTSPLY{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return days supply given quantity
 Input Parameters | {::nomarkdown}UPD<br/>SCH<br/>PAT<br/>DRG<br/>OI{:/}
 Lines | ```{::nomarkdown} N ORWX,I,PSOI,TPKG<br/> S ORWX("PATIENT")=PAT<br/> I DRG S ORWX("DRUG")=DRG<br/> I $D(OI) D<br/> . S TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2) Q:TPKG'["PS"<br/> . S PSOI=+TPKG Q:PSOI'>0<br/> . S ORWX("OI")=PSOI<br/> F I=1:1:$L(UPD,U)-1 D<br/> . S ORWX("DOSE ORDERED",I)=$P(UPD,U,I)<br/> . S ORWX("SCHEDULE",I)=$P(SCH,U,I)<br/> D DSUP^PSOSIGDS(.ORWX)<br/> S VAL=$G(ORWX("DAYS SUPPLY"))```{:/}
 Leading comment lines | {::nomarkdown}VAL: default days supply{:/}




 Generated on January 13th 2017, 7:11:27 am