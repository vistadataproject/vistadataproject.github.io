---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC ORDERS BY ID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC ORDERS BY ID{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns the Detailed Display report for the given order IDs.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDERS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of order IDs in the form ORx:##, where x denotes the viewthat this order belongs to int he dashboard and ## is the pointer to theOrders file #100.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}