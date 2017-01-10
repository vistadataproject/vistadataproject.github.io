---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 DICOM CAPTURE SOP CLASS 

 property | value 
--- | --- 
 label | MAG3 DICOM CAPTURE SOP CLASS
 tag | GSOPCLAS
 routine | [MAGNDCMC](http://code.osehra.org/dox/Routine_MAGNDCMC_source.html)
 return value type | SINGLE VALUE
 description | Returns SOP CLASS UID per SOP type  (e.g. \TELEDERM\)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGSOP | LITERAL |  | true | MAGSOP = SOP type (e.g. \TELEDERM\) | 