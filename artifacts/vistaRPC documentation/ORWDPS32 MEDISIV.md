---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 MEDISIV 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 MEDISIV{:/}
 tag | {::nomarkdown}MEDISIV{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return 1 if orderable item is an IV medication, otherwise return 0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return true if orderable item is IV medication
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | {::nomarkdown} S VAL=0<br/> I $P($G(^ORD(101.43,IEN,"PS")),U)=2 S VAL=1{:/}




 Generated on January 13th 2017, 7:15:27 am