---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 TYPEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 TYPEXT{:/}
 tag | {::nomarkdown}TYPEXT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TYPEXT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | does EVT has delayed orders?
 First comment | {::nomarkdown}<pre> 1 if Patient DFN has delayed orders for EVT<br/> 2 if Parent/Sibling event has delayed orders<br/> 0 if No delayed orders for EVT</pre>{:/}
 Input parameters | {::nomarkdown}DFN<br>EVT{:/}
 Code | {::nomarkdown}  Q:'+EVT<br> S ORY=$$EXISTS^OREVNTX(DFN,EVT){:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}