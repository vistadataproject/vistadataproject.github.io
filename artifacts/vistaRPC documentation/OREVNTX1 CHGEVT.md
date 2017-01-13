---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 CHGEVT 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CHGEVT{:/}
 tag | {::nomarkdown}CHGEVT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Change order's event
 Input Parameters | {::nomarkdown}NEWEVT<br/>ORIDS{:/}
 Lines | ```{::nomarkdown} N ORI<br/> S ORI=0<br/> F  S ORI=$O(ORIDS(ORI)) Q:'+ORI  D<br/> . D CHGEVT^OREVNTX(+$G(ORIDS(ORI)),NEWEVT)```{:/}




 Generated on January 13th 2017, 7:11:27 am