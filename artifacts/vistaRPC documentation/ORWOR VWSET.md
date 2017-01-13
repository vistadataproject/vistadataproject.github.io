---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR VWSET 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR VWSET{:/}
 tag | {::nomarkdown}VWSET{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets the default view on the orders tab for the user.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Set the preferred view for orders
 Input Parameters | {::nomarkdown}VIEW{:/}
 Lines | ```{::nomarkdown} N FMT<br/> S $P(VIEW,";",4)=$P($G(^ORD(100.98,+$P(VIEW,";",4),0)),U,3)<br/> S FMT=$P($$GET^XPAR("ALL","ORCH CONTEXT ORDERS",1,"I"),";",5)<br/> S:'$L(FMT) FMT="L" S $P(VIEW,";",5)=FMT<br/> D EN^XPAR(DUZ_";VA(200,","ORCH CONTEXT ORDERS",1,VIEW,.ORERR)```{:/}
 Leading comment lines | {::nomarkdown}VIEW:  semi-colon delimited record<br/>1 - Relative From Date/Time or ""<br/>2 - Relative Thru Date/Time or ""<br/>3 - Filter<br/>4 - Display Group Pointer<br/>5 - Format (preserve for list manager)<br/>6 - chronological display (R or F)<br/>7 - sort by display group{:/}




 Generated on January 13th 2017, 7:11:27 am