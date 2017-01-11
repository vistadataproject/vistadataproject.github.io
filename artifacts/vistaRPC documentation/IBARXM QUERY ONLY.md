---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBARXM QUERY ONLY 

 property | value 
--- | --- 
 label | IBARXM QUERY ONLY
 tag | RQUERY
 routine | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
 return value type | ARRAY
 description | This RPC is used to query only the information for pharmacy co-paymentbilling that has happened for the given month/year.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IBICN | LITERAL | 40 | true | This is the patient's ICN for reference to any VistA database | 
| IBM | LITERAL | 7 | true | This is in fileman format the month/year for which the request is being made. | 




Generated on January 11th 2017, 6:34:23 am