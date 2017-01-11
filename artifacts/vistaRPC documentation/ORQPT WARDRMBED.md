---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT WARDRMBED 

 property | value 
--- | --- 
 label | ORQPT WARDRMBED
 tag | WRB
 routine | [ORQPTQ3](http://code.osehra.org/dox/Routine_ORQPTQ3_source.html)
 return value type | SINGLE VALUE
 description | Returns the ward, room-bed for a patient.


### Method description

 property | value 
--- | --- 
 Method comment | return patient's ward, room-bed: ward ien^ward name room-bed

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient identifier (DFN) from file #2 | 