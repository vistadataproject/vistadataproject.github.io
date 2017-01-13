---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX DLGID 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX DLGID{:/}
 tag | {::nomarkdown}DLGID{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the dialog IEN for an order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return dlg IEN for order
 Input Parameters | {::nomarkdown}ORIFN{:/}
 Lines | ```{::nomarkdown} S VAL=$P(^OR(100,+ORIFN,0),U,5)<br/> S VAL=$S($P(VAL,";",2)="ORD(101.41,":+VAL,1:0)```{:/}




 Generated on January 13th 2017, 7:11:26 am