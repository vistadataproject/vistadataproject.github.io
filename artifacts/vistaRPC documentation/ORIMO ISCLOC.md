---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORIMO ISCLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORIMO ISCLOC{:/}
 tag | {::nomarkdown}ISCLOC{:/}
 routine | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISCLOC^[ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 Method comment | Is it a clinical location
 Input parameters | {::nomarkdown}ALOC{:/}
 Code | {::nomarkdown}  S ORY=0<br> Q:'$D(^SC(+ALOC,0))<br> I $P(^SC(+ALOC,0),U,3)="C" S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [fPrintLocation.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fPrintLocation.pas)
 [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}