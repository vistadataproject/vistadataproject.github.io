---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR VWSET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR VWSET{:/}
 tag | {::nomarkdown}VWSET{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets the default view on the orders tab for the user.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VWSET^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | Set the preferred view for orders
 Input parameters | {::nomarkdown}VIEW{:/}
 First comment | {::nomarkdown}<pre> VIEW:  semi-colon delimited record<br/>        1 - Relative From Date/Time or ""<br/>        2 - Relative Thru Date/Time or ""<br/>        3 - Filter<br/>        4 - Display Group Pointer<br/>        5 - Format (preserve for list manager)<br/>        6 - chronological display (R or F)<br/>        7 - sort by display group</pre>{:/}
 Code | {::nomarkdown}  N FMT<br> S $P(VIEW,";",4)=$P($G(^ORD(100.98,+$P(VIEW,";",4),0)),U,3)<br> S FMT=$P($$GET^XPAR("ALL","ORCH CONTEXT ORDERS",1,"I"),";",5)<br> S:'$L(FMT) FMT="L" S $P(VIEW,";",5)=FMT<br> D EN^XPAR(DUZ_";VA(200,","ORCH CONTEXT ORDERS",1,VIEW,.ORERR){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}