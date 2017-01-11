---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC ORDERS BY ID 

 property | value 
--- | --- 
 label | ORRC ORDERS BY ID
 tag | DETAIL
 routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns the Detailed Display report for the given order IDs.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORDERS | LIST |  | true | This is the list of order IDs in the form ORx:##, where x denotes the viewthat this order belongs to int he dashboard and ## is the pointer to theOrders file #100. | 




 Generated on January 11th 2017, 7:15:04 am