---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 QTY2DAY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 QTY2DAY{:/}
 tag | {::nomarkdown}QTY2DAY{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | QTY2DAY^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return days supply given quantity
 Input parameters | {::nomarkdown}QTY, UPD, SCH, DUR, PAT, DRG{:/}
 First comment | {::nomarkdown}<pre> VAL: days supply</pre>{:/}
 Code | {::nomarkdown}  N ORWX,I,X,ADUR<br> S ORWX("QTY")=QTY<br> S ORWX("PATIENT")=PAT<br> I DRG S ORWX("DRUG")=DRG<br> F I=1:1:$L(UPD,U)-1 D<br> . S ORWX("DOSE ORDERED",I)=$P(UPD,U,I)<br> . S ORWX("SCHEDULE",I)=$P(SCH,U,I)<br> . S ADUR=$P(DUR,U,I),X=+ADUR_$E($P(ADUR," ",2))<br> . I $L(X) S ORWX("DURATION",I)=X<br> . S X=$E($P(ADUR,"~",2))<br> . I $L(X) S ORWX("CONJUNCTION",I)=X<br> D QTYX^PSOSIG(.ORWX)<br> S VAL=$G(ORWX("DAYS SUPPLY")){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}