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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PTDFN | LITERAL | 40 | true | Patients Internal entry number. | 
| RESULTS | LITERAL |  | true | Bolus of patient information. | 




Generated on January 11th 2017, 6:34:23 am