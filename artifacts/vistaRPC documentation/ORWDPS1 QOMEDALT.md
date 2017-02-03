---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 QOMEDALT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 QOMEDALT{:/}
 tag | {::nomarkdown}QOMEDALT{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ODIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | QOMEDALT^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Input parameters | {::nomarkdown}ODIEN{:/}
 Code | {::nomarkdown}  N ARRAY,IDIEN,ORDERID,PKG,PSTYPE,VALUE<br> S ORY=0,PKG=+$P(^ORD(101.41,ODIEN,0),U,7)<br> S PSTYPE=$S($$GET1^DIQ(9.4,PKG_",",1)="PSO":"O",1:"I")<br> S ORDERID=$O(^ORD(101.41,"B","OR GTX ORDERABLE ITEM","")) Q:ORDERID'>0<br> S IDIEN=$O(^ORD(101.41,ODIEN,6,"D",ORDERID,"")) Q:IDIEN'>0<br> S VALUE=$G(^ORD(101.41,ODIEN,6,IDIEN,1)) Q:VALUE'>0<br> I $P($G(^ORD(101.43,VALUE,"PS")),U,6)=1 S ORY=VALUE{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}