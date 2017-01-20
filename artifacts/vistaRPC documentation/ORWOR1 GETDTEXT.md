---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR1 GETDTEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 GETDTEXT{:/}
 tag | {::nomarkdown}GETDTEXT{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the external text of an existing order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETDTEXT^[ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 Method comment | Get External Text
 Input parameters | {::nomarkdown}ORDER{:/}
 Code | {::nomarkdown}  N IFN,ACTION<br> S IFN=+ORDER,ACTION=$P(ORDER,";",2),I=0<br> F  S I=$O(^OR(100,+IFN,8,+ACTION,.2,I)) Q:'I  S TEXT(I)=^(I,0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}