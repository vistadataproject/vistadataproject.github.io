---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDX DLGID 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX DLGID{:/}
 tag | {::nomarkdown}DLGID{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the dialog IEN for an order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DLGID^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | return dlg IEN for order
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | ```  S VAL=$P(^OR(100,+ORIFN,0),U,5)<br/> S VAL=$S($P(VAL,";",2)="ORD(101.41,":+VAL,1:0)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}