---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 TYPEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 TYPEXT{:/}
 tag | {::nomarkdown}TYPEXT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | does EVT has delayed orders?
 Input Parameters | {::nomarkdown}DFN<br/>EVT{:/}
 Lines | ```{::nomarkdown} Q:'+EVT<br/> S ORY=$$EXISTS^OREVNTX(DFN,EVT)```{:/}
 Leading comment lines | {::nomarkdown}1 if Patient DFN has delayed orders for EVT<br/>2 if Parent/Sibling event has delayed orders<br/>0 if No delayed orders for EVT{:/}




 Generated on January 13th 2017, 7:11:27 am