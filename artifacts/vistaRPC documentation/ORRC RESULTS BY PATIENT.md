---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC RESULTS BY PATIENT 

 property | value 
--- | --- 
 label | ORRC RESULTS BY PATIENT
 tag | LIST
 routine | [ORRCACK](http://code.osehra.org/dox/Routine_ORRCACK_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns a list of orders for a patient placed by the user, thathave new unacknowledged results.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200. | 
| PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2. | 
| RESULTS | LITERAL |  | true | This flag indicates whether to return the results with each order (true)or just the list of order ID's (false). | 




 Generated on January 11th 2017, 7:15:04 am