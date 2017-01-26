---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 DAY2QTY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 DAY2QTY{:/}
 tag | {::nomarkdown}DAY2QTY{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DAY2QTY^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return qty for days supply
 Input parameters | {::nomarkdown}DAY, UPD, SCH, DUR, PAT, DRG{:/}
 First comment | {::nomarkdown}<pre> VAL: quantity</pre>{:/}
 Code | {::nomarkdown}  N ORWX,I,X,ADUR,ADURNM<br> S ORWX("DAYS SUPPLY")=DAY<br> S ORWX("PATIENT")=PAT<br> I DRG S ORWX("DRUG")=DRG<br> F I=1:1:$L(UPD,U)-1 D<br> . S ORWX("DOSE ORDERED",I)=$P(UPD,U,I)<br> . S ORWX("SCHEDULE",I)=$P(SCH,U,I)<br> . S ADUR=$P(DUR,U,I),ADURNM=$P($P(ADUR," ",2),"~")<br> . S:ADURNM="MONTHS" X=+ADUR_"L"<br> . S:ADURNM'="MONTHS" X=+ADUR_$E($P(ADUR," ",2))<br> . I $L(X) S ORWX("DURATION",I)=X<br> . S X=$E($P(ADUR,"~",2))<br> . I $L(X) S ORWX("CONJUNCTION",I)=X<br> D QTYX^PSOSIG(.ORWX)<br> S VAL=$G(ORWX("QTY")){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}