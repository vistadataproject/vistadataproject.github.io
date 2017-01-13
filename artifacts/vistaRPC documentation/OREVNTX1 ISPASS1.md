---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 ISPASS1 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 ISPASS1{:/}
 tag | {::nomarkdown}ISPASS1{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return 1 if it's a pass event
 Input Parameters | {::nomarkdown}EVTID<br/>EVTTYPE{:/}
 Lines | ```{::nomarkdown} S ORY=$P($G(^ORD(100.5,+EVTID,0)),U,7)<br/> I EVTTYPE="T",ORY,ORY<4 S ORY=1<br/> E  S ORY=0```{:/}




 Generated on January 13th 2017, 7:11:27 am