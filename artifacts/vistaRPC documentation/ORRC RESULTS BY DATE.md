---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC RESULTS BY DATE 

 property | value 
--- | --- 
 label | ORRC RESULTS BY DATE
 tag | LISTD
 routine | [ORRCACK](http://code.osehra.org/dox/Routine_ORRCACK_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns a list of orders for a patient with new results withina given time frame, that have not been acknowledged by the user.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2. | 
| vs:Input_Parameter-8994_02 | USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200. | 
| vs:Input_Parameter-8994_02 | START | LITERAL |  | true | This is the date to start searching for orders, in the form YYYYMMDDHHMMSS. | 
| vs:Input_Parameter-8994_02 | STOP | LITERAL |  | true | This is the date to stop searching for orders, in the form YYYYMMDDHHMMSS. | 
| vs:Input_Parameter-8994_02 | RESULTS | LITERAL |  | true | This flag indicates whether to return the results with each order (true)or just the list of order ID's (false). | 