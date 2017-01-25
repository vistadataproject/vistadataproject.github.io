---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU16 DEVICE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU16 DEVICE{:/}
 tag | {::nomarkdown}DEVICE{:/}
 routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEVICE^[ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 Method comment | Return a list of devices
 Code | {::nomarkdown}  S I=0,DEV=""<br> F  S DEV=$O(^%ZIS(1,"B",DEV)) Q:DEV=""  S IEN=$O(^(DEV,0)) D<br> . I $E($G(^%ZIS(2,+$G(^%ZIS(1,IEN,"SUBTYPE")),0)))'="P" Q<br> . I $P($G(^%ZIS(1,IEN,0)),U,12)=2 Q<br> . S I=I+1,Y(I)=IEN_";"_$P(^%ZIS(1,IEN,0),U)_U_DEV_U_$P($G(^(1)),U)_U_$P($G(^(90)),U)_U_$P(^(91),U)_U_$P(^(91),U,3){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}