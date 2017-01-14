---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWOR TSALL 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR TSALL{:/}
 tag | {::nomarkdown}TSALL{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of valid treating specialities.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | TSALL^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | Return list of treating specialties
 Code | ```  N Y S Y=0<br/> F  S Y=$O(^DIC(45.7,Y)) Q:'Y  I $$ACTIVE^DGACT(45.7,Y) S LST(Y)=Y_U_$P(^DIC(45.7,Y,0),U)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}