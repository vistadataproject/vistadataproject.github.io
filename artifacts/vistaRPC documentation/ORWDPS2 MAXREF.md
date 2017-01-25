---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 MAXREF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 MAXREF{:/}
 tag | {::nomarkdown}MAXREF{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | MAXREF^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return the maximum number of refills
 Input parameters | {::nomarkdown}PAT, DRG, SUP, OI, OUT{:/}
 First comment | {::nomarkdown}<pre> PAT=Patient DFN, DRG=ptr50, SUP=days supply, OI=orderable item<br/> VAL: maximum refills allowed</pre>{:/}
 Code | {::nomarkdown}  N ORWX<br> S ORWX("PATIENT")=PAT<br> I $G(DRG) S ORWX("DRUG")=+DRG<br> I $G(SUP) S ORWX("DAYS SUPPLY")=SUP<br> I $G(OI)  S ORWX("ITEM")=+$P(^ORD(101.43,+OI,0),U,2)<br> I $G(OUT) S ORWX("DISCHARGE")=1<br> D MAX^PSOSIGDS(.ORWX)<br> S VAL=$G(ORWX("MAX")){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}