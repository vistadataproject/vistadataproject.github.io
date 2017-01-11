---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC ORDERS BY PATIENT 

 property | value 
--- | --- 
 label | ORRC ORDERS BY PATIENT
 tag | LIST
 routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns a list of orders for a patient by various views.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2. | 
| TYPE | LITERAL |  | true | This is a 3-letter string identifying the type of orders to be returned:  ORN = Active Nursing (text) orders  ORV = Orders unverified by nursing  ORU = Unsigned orders by USER | 
| USER | LITERAL |  |  | This is the pointer to the user in the New Person file #200; it is requiredfor Unsigned Orders. | 
| DETAILS | LITERAL |  |  | This flag indicates whether to return the details with each order (true),or just the list of order ID's (false). | 
| START | LITERAL |  | true | This is the date to start searching for orders, in the form YYYMMDDHHMMSS. | 
| STOP | LITERAL |  | true | This is the date to stop searching for orders, in the form YYYMMDDHHMMSS. | 




Generated on January 11th 2017, 6:34:23 am