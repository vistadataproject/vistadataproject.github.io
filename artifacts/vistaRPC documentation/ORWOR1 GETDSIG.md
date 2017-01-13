---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR1 GETDSIG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 GETDSIG{:/}
 tag | {::nomarkdown}GETDSIG{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the digital signature of an existing order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get Digital Signature
 Input Parameters | {::nomarkdown}ORDER{:/}
 Lines | {::nomarkdown} N IFN,ACTION<br/> S SIG=0,IFN=+ORDER,ACTION=$P(ORDER,";",2)<br/> I +$P($G(^OR(100,+IFN,8,+ACTION,2)),U,3) S SIG=$P(^(2),"^",3){:/}




 Generated on January 13th 2017, 7:15:28 am