---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD CPT MOD 

 property | value 
--- | --- 
 label | MAG DICOM GET RAD CPT MOD
 tag | CPTMOD
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | ARRAY
 description | This RPC is used to return a valid entry in the CPT MODIFIER file (#81.3).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CPTMOD | LITERAL | 30 | true | This is the name of the CPT modifier. | 
| vs:Input_Parameter-8994_02 | MAGDT | LITERAL | 30 | true | This is the date used during the lookup process for screening'active' CPT modifiers. | 