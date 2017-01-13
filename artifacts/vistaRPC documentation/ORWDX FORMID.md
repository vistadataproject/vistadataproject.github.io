---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX FORMID 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX FORMID{:/}
 tag | {::nomarkdown}FORMID{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the base dialog FormID for an order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Base dlg FormID for an order
 Input Parameters | {::nomarkdown}ORIFN{:/}
 Lines | ```
 N DLG
 S VAL=0,DLG=$P(^OR(100,+ORIFN,0),U,5)
 Q:$P(DLG,";",2)'="ORD(101.41,"
 D FORMID^ORWDXM(.VAL,+DLG)```




 Generated on January 13th 2017, 6:55:29 am