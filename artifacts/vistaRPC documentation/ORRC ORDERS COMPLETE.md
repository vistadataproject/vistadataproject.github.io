---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC ORDERS COMPLETE 

 property | value 
--- | --- 
 label | ORRC ORDERS COMPLETE
 tag | COMP
 routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
 return value type | ARRAY
 description | This call accepts a list of order IDs to be marked as completed.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200. | 
| ORDERS | LIST |  | true | This is a list of order identifiers in the form ORN:order#;action# whereorder# is the pointer to the Orders file #100 and action# is the IEN inthe Order Actions sub-file. | 




Generated on January 11th 2017, 6:34:23 am