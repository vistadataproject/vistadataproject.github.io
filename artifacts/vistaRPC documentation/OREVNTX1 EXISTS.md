---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 EXISTS 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 EXISTS{:/}
 tag | {::nomarkdown}EXISTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns PtEvtID ptr #100.2 if patient already has delayed orders
 Input Parameters | {::nomarkdown}DFN<br/>EVT{:/}
 Lines | ```{::nomarkdown} I '+EVT S ORY=0 Q<br/> N PTEVT S (PTEVT,ORY)=0<br/> S PTEVT=$O(^ORE(100.2,"AE",+DFN,+EVT,PTEVT))<br/> I PTEVT>0 S ORY=PTEVT```{:/}




 Generated on January 13th 2017, 7:11:27 am