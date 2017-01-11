---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 DICOM CAPTURE GE LIST 

 property | value 
--- | --- 
 label | MAG3 DICOM CAPTURE GE LIST
 tag | GGELIST
 routine | [MAGNDCMC](http://code.osehra.org/dox/Routine_MAGNDCMC_source.html)
 return value type | ARRAY
 description | Return all records in IMAGING DICOM FIELDS file (#2005.71)per SOP type  (e.g \TELEDERM\)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGSOP | LITERAL |  | true | SOP type (e.g \TELEDERM\) | 