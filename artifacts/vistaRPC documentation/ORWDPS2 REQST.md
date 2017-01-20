---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 REQST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 REQST{:/}
 tag | {::nomarkdown}REQST{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REQST^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return requested start time
 Input parameters | {::nomarkdown}DFN, SCH, OI, LOC, TXT{:/}
 First comment | {::nomarkdown}<pre> VAL: FirstAdmin time</pre>{:/}
 Code | {::nomarkdown}  S VAL=""<br> Q:'$L($G(SCH))  Q:'$G(OI)<br> S OI=+$P($G(^ORD(101.43,+OI,0)),U,2)<br> S LOC=+$G(^SC(LOC,42))<br> S VAL=$P($$RESOLVE^PSJORPOE(DFN,SCH,OI,TXT,LOC),U,2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}