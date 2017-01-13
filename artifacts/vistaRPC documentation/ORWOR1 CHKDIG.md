---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR1 CHKDIG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 CHKDIG{:/}
 tag | {::nomarkdown}CHKDIG{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if an order requires a digital signature.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Check if Digital Signature is required
 Input Parameters | {::nomarkdown}ORDER{:/}
 Lines | ```
 N IFN,ACTION
 S REQ=0,IFN=+ORDER,ACTION=$P(ORDER,";",2)
 I +$P($G(^OR(100,+IFN,8,+ACTION,2)),U,5) S REQ=1```




 Generated on January 13th 2017, 6:55:29 am