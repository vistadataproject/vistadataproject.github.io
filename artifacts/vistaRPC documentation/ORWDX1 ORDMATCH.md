---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX1 ORDMATCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX1 ORDMATCH{:/}
 tag | {::nomarkdown}ORDMATCH{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will accept a list of orders and each order status, if one of the order does not have a status it will return a false value.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ORYARR{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ORDMATCH^[ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 Input parameters | {::nomarkdown}DFN, ORYARR{:/}
 Code | {::nomarkdown}  N ACTION,CNT,IEN,MATCH,ORDERID,STATUS<br> S CNT=0,MATCH=1<br> F  S CNT=$O(ORYARR(CNT)) Q:CNT'>0!(MATCH=0)  D<br> . S ORDERID=$P(ORYARR(CNT),U),STATUS=$P(ORYARR(CNT),U,2)<br> . ;*341 Set up Action before validation.<br> . S IEN=$P(ORDERID,";"),ACTION=$P(ORDERID,";",2)<br> . I ORDERID=0,$G(ACTION)="" Q<br> . I STATUS=$P($G(^OR(100,IEN,3)),U,3) Q<br> . I $P($G(^ORD(100.01,STATUS,0)),U)="DISCONTINUED/EDIT" Q<br> . ;S MATCH=0<br> . I $P($G(^OR(100,IEN,8,ACTION,0)),U,15)'=STATUS S MATCH=0<br> S ORY=MATCH{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}