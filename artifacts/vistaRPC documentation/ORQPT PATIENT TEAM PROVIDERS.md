---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT PATIENT TEAM PROVIDERS 

 property | value 
--- | --- 
 label | ORQPT PATIENT TEAM PROVIDERS
 tag | TPTPR
 routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 return value type | ARRAY
 description | Function returns a list of providers linked to a patient via teams.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT | LITERAL | 16 | true | Patient identifier from patient file [#2]. | 