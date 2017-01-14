---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 PROMPT IDS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 PROMPT IDS{:/}
 tag | {::nomarkdown}PRTIDS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PRTIDS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return some prompt ids from #101.41
 First comment | {::nomarkdown}treating specialty Id^attending provider id{:/}
 Input parameters | {::nomarkdown}IDS{:/}
 Code | ```  N IDX,ORTS,ORATT
 S (ORY,ORTS,ORATT)=""
 S IDX=$O(^ORD(101.41,"B","OR GTX TREATING SPECIALTY",0))
 S:$D(^ORD(101.41,IDX,1)) ORTS=$P($G(^ORD(101.41,IDX,1)),U,2,3)
 S IDX=$O(^ORD(101.41,"B","OR GTX PROVIDER",0))
 S:$D(^ORD(101.41,IDX,1)) ORATT=$P($G(^ORD(101.41,IDX,1)),U,2,3)
 S ORY=ORTS_"~"_ORATT```




 Generated on January 14th 2017, 7:26:35 am