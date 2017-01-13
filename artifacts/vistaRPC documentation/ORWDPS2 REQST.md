---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 REQST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 REQST{:/}
 tag | {::nomarkdown}REQST{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return requested start time
 Input Parameters | {::nomarkdown}DFN<br/>SCH<br/>OI<br/>LOC<br/>TXT{:/}
 Lines | {::nomarkdown} S VAL=""<br/> Q:'$L($G(SCH))  Q:'$G(OI)<br/> S OI=+$P($G(^ORD(101.43,+OI,0)),U,2)<br/> S LOC=+$G(^SC(LOC,42))<br/> S VAL=$P($$RESOLVE^PSJORPOE(DFN,SCH,OI,TXT,LOC),U,2){:/}
 Leading comment lines | {::nomarkdown}VAL: FirstAdmin time{:/}




 Generated on January 13th 2017, 7:15:28 am