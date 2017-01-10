---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VAFCTFU CONVERT DFN TO ICN 

 property | value 
--- | --- 
 label | VAFCTFU CONVERT DFN TO ICN
 tag | GETICN
 routine | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
 return value type | SINGLE VALUE
 description | This will return the Integration Control Number (ICN) from theMaser Patient Index (MPI) for a patient.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT IEN | LITERAL | 255 | true | The patient Internal Entry Number (IEN). | 