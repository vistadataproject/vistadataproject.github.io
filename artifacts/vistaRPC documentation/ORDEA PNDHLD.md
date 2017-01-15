---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA PNDHLD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA PNDHLD{:/}
 tag | {::nomarkdown}PNDHLD{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PNDHLD^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | return 1 if the order is pending a HOLD, 0 otherwise
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  S ORY=0<br> N ORLSTACT S ORLSTACT=$O(^OR(100,+ORID,8,"A"),-1)<br> I $P(^OR(100,+ORID,8,ORLSTACT,0),U,2)="HD" S ORY=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}