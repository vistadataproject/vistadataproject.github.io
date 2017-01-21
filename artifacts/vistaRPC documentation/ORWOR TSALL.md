---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR TSALL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR TSALL{:/}
 tag | {::nomarkdown}TSALL{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of valid treating specialities.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TSALL^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | Return list of treating specialties
 Code | {::nomarkdown}  N Y S Y=0<br> F  S Y=$O(^DIC(45.7,Y)) Q:'Y  I $$ACTIVE^DGACT(45.7,Y) S LST(Y)=Y_U_$P(^DIC(45.7,Y,0),U){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}