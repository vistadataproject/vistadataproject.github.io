---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 ISPASS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 ISPASS{:/}
 tag | {::nomarkdown}ISPASS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ISPASS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return 1 if it's a pass event
 Input parameters | {::nomarkdown}PTEVTID<br>EVTTYPE{:/}
 Code | {::nomarkdown}  S ORY=$$EVT^OREVNTX(PTEVTID)<br> S ORY=$P($G(^ORD(100.5,+ORY,0)),U,7)<br> I EVTTYPE="T",ORY,ORY<4 S ORY=1<br> E  S ORY=0{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}