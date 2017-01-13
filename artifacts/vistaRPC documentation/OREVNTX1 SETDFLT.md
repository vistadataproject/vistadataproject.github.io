---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 SETDFLT 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 SETDFLT{:/}
 tag | {::nomarkdown}SETDFLT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Set personal default event
 Input Parameters | {::nomarkdown}EVT{:/}
 Lines | ```
 N ERR,VAL S ERR=""
 Q:'$D(^ORD(100.5,EVT,0))
 S VAL=$P(^ORD(100.5,EVT,0),U)
 D EN^XPAR(DUZ_";VA(200,","OREVNT DEFAULT",1,VAL,ERR)
 S ORY=ERR```




 Generated on January 13th 2017, 6:55:29 am