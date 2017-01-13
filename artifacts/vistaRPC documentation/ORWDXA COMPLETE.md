---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDXA COMPLETE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA COMPLETE{:/}
 tag | {::nomarkdown}COMPLETE{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Complete an order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Complete order (generic)

 Leading comment lines | {::nomarkdown}N X S X=+$E($$NOW^XLFDT,1,12)
D DATES^ORCSAVE2(+ORID,,X)
D STATUS^ORCSAVE2(+ORID,2)
validate ESCode{:/}




 Generated on January 13th 2017, 6:15:57 am