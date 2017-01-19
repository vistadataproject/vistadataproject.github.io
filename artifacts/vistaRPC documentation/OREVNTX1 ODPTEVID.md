---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 ODPTEVID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 ODPTEVID{:/}
 tag | {::nomarkdown}ODPTEVID{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ODPTEVID^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return PtEvtID based on the ORID
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  Q:'$D(^OR(100,+ORID,0))<br> S ORY=$P($G(^OR(100,+ORID,0)),U,17){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}