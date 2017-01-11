---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP GET EXAM TRANSACTIONS 

 property | value 
--- | --- 
 label | DENTV TP GET EXAM TRANSACTIONS
 tag | GETFEX
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | ARRAY
 description | This will return a complete list of exam transactions for a specified patient. The array is organized by node, not by date. For example all of the \OHA\ Oral Health Assessment data is returned together. See GETFEX^DENTVTP7 comments for details.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DPAT | LITERAL |  | true | This value should be the Patient IEN. | 




 Generated on January 11th 2017, 7:15:04 am