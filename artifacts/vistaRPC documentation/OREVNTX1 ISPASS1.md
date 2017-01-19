---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 ISPASS1 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 ISPASS1{:/}
 tag | {::nomarkdown}ISPASS1{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ISPASS1^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return 1 if it's a pass event
 Input parameters | {::nomarkdown}EVTID<br>EVTTYPE{:/}
 Code | {::nomarkdown}  S ORY=$P($G(^ORD(100.5,+EVTID,0)),U,7)<br> I EVTTYPE="T",ORY,ORY<4 S ORY=1<br> E  S ORY=0{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}