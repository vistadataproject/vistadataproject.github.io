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

 property | value 
 --- | --- 
 Method | ADMIN^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return administration time info
 First comment | {::nomarkdown}REC: StartText^StartTime^Duration^FirstAdmin{:/}
 Input parameters | {::nomarkdown}DFN<br>SCH<br>OI<br>LOC<br>ADMIN{:/}
 Code | {::nomarkdown}  S OI=+$P($G(^ORD(101.43,+OI,0)),U,2)<br> S LOC=+$G(^SC(LOC,42)),REC=""<br> I $L($G(^DPT(DFN,.1))) S REC=$$FIRST^ORCDPS3(DFN,LOC,OI,SCH,"",$G(ADMIN)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}