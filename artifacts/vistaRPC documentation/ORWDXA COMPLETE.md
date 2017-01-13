---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA COMPLETE 

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
 Input Parameters | {::nomarkdown}ORID<br/>ESCODE{:/}
 Lines | ```
 D COMP^ORCSAVE2(ORID)
 D COMP^ORMBLDOR(ORID)
 D GETBYIFN^ORWORR(.REC,ORID)```
 Leading comment lines | {::nomarkdown}N X S X=+$E($$NOW^XLFDT,1,12)<br/>D DATES^ORCSAVE2(+ORID,,X)<br/>D STATUS^ORCSAVE2(+ORID,2)<br/>validate ESCode{:/}




 Generated on January 13th 2017, 6:55:29 am