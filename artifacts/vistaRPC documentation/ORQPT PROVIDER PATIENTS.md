---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT PROVIDER PATIENTS 

 property | value 
--- | --- 
 label | ORQPT PROVIDER PATIENTS
 tag | PROVPTS
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | ARRAY
 description | Function returns an array of patients linked to a provider/user.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | USER ID | LITERAL | 16 | true | The record number of the user/provider from the New Person File (#200) | 