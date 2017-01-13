---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR TSALL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR TSALL{:/}
 tag | {::nomarkdown}TSALL{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of valid treating specialities.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return list of treating specialties
 Lines | ```{::nomarkdown} N Y S Y=0<br/> F  S Y=$O(^DIC(45.7,Y)) Q:'Y  I $$ACTIVE^DGACT(45.7,Y) S LST(Y)=Y_U_$P(^DIC(45.7,Y,0),U)```{:/}




 Generated on January 13th 2017, 7:11:27 am