---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 SETDFLT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 SETDFLT{:/}
 tag | {::nomarkdown}SETDFLT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SETDFLT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Set personal default event
 Input parameters | {::nomarkdown}EVT{:/}
 Code | ```  N ERR,VAL S ERR=""
 Q:'$D(^ORD(100.5,EVT,0))
 S VAL=$P(^ORD(100.5,EVT,0),U)
 D EN^XPAR(DUZ_";VA(200,","OREVNT DEFAULT",1,VAL,ERR)
 S ORY=ERR```




 Generated on January 14th 2017, 7:26:35 am