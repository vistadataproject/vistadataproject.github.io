---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 CHGEVT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CHGEVT{:/}
 tag | {::nomarkdown}CHGEVT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CHGEVT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Change order's event
 Input parameters | {::nomarkdown}NEWEVT<br>ORIDS{:/}
 Code | {::nomarkdown}  N ORI<br> S ORI=0<br> F  S ORI=$O(ORIDS(ORI)) Q:'+ORI  D<br> . D CHGEVT^OREVNTX(+$G(ORIDS(ORI)),NEWEVT){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}