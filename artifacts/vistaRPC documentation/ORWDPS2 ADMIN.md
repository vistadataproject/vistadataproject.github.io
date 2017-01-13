---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 ADMIN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 ADMIN{:/}
 tag | {::nomarkdown}ADMIN{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return administration time info
 Input Parameters | {::nomarkdown}DFN<br/>SCH<br/>OI<br/>LOC<br/>ADMIN{:/}
 Lines | {::nomarkdown} S OI=+$P($G(^ORD(101.43,+OI,0)),U,2)<br/> S LOC=+$G(^SC(LOC,42)),REC=""<br/> I $L($G(^DPT(DFN,.1))) S REC=$$FIRST^ORCDPS3(DFN,LOC,OI,SCH,"",$G(ADMIN)){:/}
 Leading comment lines | {::nomarkdown}REC: StartText^StartTime^Duration^FirstAdmin{:/}




 Generated on January 13th 2017, 7:15:28 am