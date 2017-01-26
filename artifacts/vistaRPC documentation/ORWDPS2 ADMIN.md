---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 ADMIN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 ADMIN{:/}
 tag | {::nomarkdown}ADMIN{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ADMIN^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return administration time info
 Input parameters | {::nomarkdown}DFN, SCH, OI, LOC, ADMIN{:/}
 First comment | {::nomarkdown}<pre> REC: StartText^StartTime^Duration^FirstAdmin</pre>{:/}
 Code | {::nomarkdown}  S OI=+$P($G(^ORD(101.43,+OI,0)),U,2)<br> S LOC=+$G(^SC(LOC,42)),REC=""<br> I $L($G(^DPT(DFN,.1))) S REC=$$FIRST^ORCDPS3(DFN,LOC,OI,SCH,"",$G(ADMIN)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}