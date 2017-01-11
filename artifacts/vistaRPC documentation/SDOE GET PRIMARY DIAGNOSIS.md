---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SDOE GET PRIMARY DIAGNOSIS 

 property | value 
--- | --- 
 label | SDOE GET PRIMARY DIAGNOSIS
 tag | GETPDX
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | SINGLE VALUE
 description | This Remote Procedure Call (RPC) returns the internal entry numberof the primary diagnosis code (ICD) for an encounter. Note: For encounters before 10/1/96, this RPC will always return 0.This primary diagnosis was not retrieved nor stored by the systemfor these 'old' encounters.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file. | 




 ###### Generated on January 11th 2017, 6:39:42 am