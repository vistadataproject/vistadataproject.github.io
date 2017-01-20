---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 DFLTSPLY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 DFLTSPLY{:/}
 tag | {::nomarkdown}DFLTSPLY{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DFLTSPLY^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | return days supply given quantity
 Input parameters | {::nomarkdown}UPD, SCH, PAT, DRG, OI{:/}
 First comment | {::nomarkdown}<pre> VAL: default days supply</pre>{:/}
 Code | {::nomarkdown}  N ORWX,I,PSOI,TPKG<br> S ORWX("PATIENT")=PAT<br> I DRG S ORWX("DRUG")=DRG<br> I $D(OI) D<br> . S TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2) Q:TPKG'["PS"<br> . S PSOI=+TPKG Q:PSOI'>0<br> . S ORWX("OI")=PSOI<br> F I=1:1:$L(UPD,U)-1 D<br> . S ORWX("DOSE ORDERED",I)=$P(UPD,U,I)<br> . S ORWX("SCHEDULE",I)=$P(SCH,U,I)<br> D DSUP^PSOSIGDS(.ORWX)<br> S VAL=$G(ORWX("DAYS SUPPLY")){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}