---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT ATTENDING_PRIMARY 

 property | value 
--- | --- 
 label | ORQPT ATTENDING_PRIMARY
 tag | ATTPRIM
 routine | [ORQPTQ3](http://code.osehra.org/dox/Routine_ORQPTQ3_source.html)
 return value type | SINGLE VALUE
 description | Returns a patient's attending physician and primary provider.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT | LITERAL | 16 | true | Patient identifier from the PATIENT FILE [#2]. | 