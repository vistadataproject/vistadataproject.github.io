---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 CHGEVT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CHGEVT{:/}
 tag | {::nomarkdown}CHGEVT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CHGEVT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Change order's event
 Input parameters | {::nomarkdown}NEWEVT<br/>ORIDS{:/}
 Code | ```  N ORI
 S ORI=0
 F  S ORI=$O(ORIDS(ORI)) Q:'+ORI  D
 . D CHGEVT^OREVNTX(+$G(ORIDS(ORI)),NEWEVT)```




 Generated on January 14th 2017, 7:26:35 am