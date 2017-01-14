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
 Lines | {::nomarkdown} N ERR,VAL S ERR=""<br/> Q:'$D(^ORD(100.5,EVT,0))<br/> S VAL=$P(^ORD(100.5,EVT,0),U)<br/> D EN^XPAR(DUZ_";VA(200,","OREVNT DEFAULT",1,VAL,ERR)<br/> S ORY=ERR{:/}




 Generated on January 13th 2017, 7:15:28 am