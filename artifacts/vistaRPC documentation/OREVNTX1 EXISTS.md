---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 EXISTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 EXISTS{:/}
 tag | {::nomarkdown}EXISTS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | EXISTS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Returns PtEvtID ptr #100.2 if patient already has delayed orders
 Input parameters | {::nomarkdown}DFN<br/>EVT{:/}
 Code | ```  I '+EVT S ORY=0 Q
 N PTEVT S (PTEVT,ORY)=0
 S PTEVT=$O(^ORE(100.2,"AE",+DFN,+EVT,PTEVT))
 I PTEVT>0 S ORY=PTEVT```




 Generated on January 14th 2017, 7:26:35 am