---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBARXM QUERY SUPPRESS USER 

 property | value 
--- | --- 
 label | IBARXM QUERY SUPPRESS USER
 tag | RQUERY
 routine | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
 return value type | ARRAY
 description | This RPC is used to query only the information for pharmacy co-paymentbilling that has happened for the given month/year.The RPC should be used only for queries, which will not allow the user to see information, because the user data will not be transmitted to remote system.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IBM | LITERAL | 7 | true | This is in fileman format the month/year for which the request is being made. | 
| IBICN | LITERAL | 40 | true | This is the patient's ICN for reference to any VistA database. | 




 Generated on January 11th 2017, 7:15:04 am