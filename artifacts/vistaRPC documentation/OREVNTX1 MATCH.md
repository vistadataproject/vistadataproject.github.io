---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 MATCH 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 MATCH{:/}
 tag | {::nomarkdown}MATCH{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | MATCH^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | If Pt's current data match selected event
 First comment | {::nomarkdown}DFN: patient DFN<br/>EVT: ptr to #100.5{:/}
 Input parameters | {::nomarkdown}DFN<br/>EVT{:/}
 Code | ```  S ORY=0
 Q:('+DFN)!('+EVT)
 S ORY=$$MATCH^OREVNT(DFN,EVT)
 N TS,TSNM
 S TS=$S($G(ORTS):+ORTS,1:+$G(^DPT(DFN,.103)))
 S TSNM=$P($G(^DIC(45.7,TS,0)),U)
 S:ORY ORY=ORY_U_TSNM```




 Generated on January 14th 2017, 7:26:35 am