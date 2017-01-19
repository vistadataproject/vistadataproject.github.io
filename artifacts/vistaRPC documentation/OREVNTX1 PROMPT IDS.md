---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 PROMPT IDS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 PROMPT IDS{:/}
 tag | {::nomarkdown}PRTIDS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PRTIDS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return some prompt ids from #101.41
 First comment | {::nomarkdown}<pre> treating specialty Id^attending provider id</pre>{:/}
 Input parameters | {::nomarkdown}IDS{:/}
 Code | {::nomarkdown}  N IDX,ORTS,ORATT<br> S (ORY,ORTS,ORATT)=""<br> S IDX=$O(^ORD(101.41,"B","OR GTX TREATING SPECIALTY",0))<br> S:$D(^ORD(101.41,IDX,1)) ORTS=$P($G(^ORD(101.41,IDX,1)),U,2,3)<br> S IDX=$O(^ORD(101.41,"B","OR GTX PROVIDER",0))<br> S:$D(^ORD(101.41,IDX,1)) ORATT=$P($G(^ORD(101.41,IDX,1)),U,2,3)<br> S ORY=ORTS_"~"_ORATT{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}