---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA PNDHLD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA PNDHLD{:/}
 tag | {::nomarkdown}PNDHLD{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return 1 if the order is pending a HOLD, 0 otherwise
 Input Parameters | {::nomarkdown}ORID{:/}
 Lines | {::nomarkdown} S ORY=0<br/> N ORLSTACT S ORLSTACT=$O(^OR(100,+ORID,8,"A"),-1)<br/> I $P(^OR(100,+ORID,8,ORLSTACT,0),U,2)="HD" S ORY=1{:/}




 Generated on January 13th 2017, 7:15:28 am