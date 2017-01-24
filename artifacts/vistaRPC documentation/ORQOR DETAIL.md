---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQOR DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQOR DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns detailed information regarding an order.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Order identifier/number from file #100.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DETAIL^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | Return details of ORID (shell to kill VIDEO subs)
 Input parameters | {::nomarkdown}ORID, DFN{:/}
 Code | {::nomarkdown}  Q:'+ORID<br> I $G(DFN) N ORVP S ORVP=DFN_";DPT("<br> S LST="^TMP(""ORTXT"",$J)"<br> D DETAIL^ORQ2(.LST,ORID)<br> K @LST@("VIDEO")<br> S LST=$NA(^TMP("ORTXT",$J)),@LST=""{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}