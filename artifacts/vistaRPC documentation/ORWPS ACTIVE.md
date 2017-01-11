---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPS ACTIVE 

 property | value 
--- | --- 
 label | ORWPS ACTIVE
 tag | ACTIVE
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | ARRAY
 description | Returns listing of a patient's active inpatient and outpatientmedications.


### Method description

 property | value 
--- | --- 
 Method comment | retrieve active inpatient & outpatient meds

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true |  | 
| USER | LITERAL |  | true |  | 
| VIEW | LITERAL |  | true |  | 
| UPDATE | LITERAL |  | true | This parameter is use to determine if the parameter that stored the user view preference is updated. This should be set to 1 if called from CPRS and set to 0 if called from another application. | 