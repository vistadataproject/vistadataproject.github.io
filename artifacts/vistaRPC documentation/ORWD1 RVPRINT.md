---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 RVPRINT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 RVPRINT{:/}
 tag | {::nomarkdown}RVPRINT{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC used by CPRS GUI to print orders to a designated print device afterthe review or sign actions were used.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | print orders from review/sign actions
 Input Parameters | {::nomarkdown}HLOC<br/>ORWDEV<br/>PRTLST{:/}
 Lines | {::nomarkdown} D PRINTS(.PRTLST,HLOC,ORWDEV) S OK=1{:/}




 Generated on January 13th 2017, 7:15:27 am