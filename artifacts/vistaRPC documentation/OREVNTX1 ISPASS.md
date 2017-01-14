---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 ISPASS 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 ISPASS{:/}
 tag | {::nomarkdown}ISPASS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return 1 if it's a pass event
 Input Parameters | {::nomarkdown}PTEVTID<br/>EVTTYPE{:/}
 Lines | {::nomarkdown} S ORY=$$EVT^OREVNTX(PTEVTID)<br/> S ORY=$P($G(^ORD(100.5,+ORY,0)),U,7)<br/> I EVTTYPE="T",ORY,ORY<4 S ORY=1<br/> E  S ORY=0{:/}




 Generated on January 13th 2017, 7:15:28 am