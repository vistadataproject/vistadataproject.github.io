---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ANRV PTINFO CORE 

 property | value 
--- | --- 
 label | ANRV PTINFO CORE
 tag | PINF
 routine | [ANRVOA](http://code.osehra.org/dox/Routine_ANRVOA_source.html)
 return value type | SINGLE VALUE
 description | Returns patient information for verification.  Must be changed eventuallyto include current Sensitive Patient Check.(TO DO).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PTDFN | LITERAL | 40 | true | Patients Internal entry number. | 
| vs:Input_Parameter-8994_02 | RESULTS | LITERAL |  | true | Bolus of patient information. | 