---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 TYPEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 TYPEXT{:/}
 tag | {::nomarkdown}TYPEXT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TYPEXT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | does EVT has delayed orders?
 First comment | {::nomarkdown}1 if Patient DFN has delayed orders for EVT<br/>2 if Parent/Sibling event has delayed orders<br/>0 if No delayed orders for EVT{:/}
 Input parameters | {::nomarkdown}DFN<br>EVT{:/}
 Code | {::nomarkdown}  Q:'+EVT<br> S ORY=$$EXISTS^OREVNTX(DFN,EVT){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}