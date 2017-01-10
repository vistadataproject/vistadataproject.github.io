---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VAFCTFU CONVERT ICN TO DFN 

 property | value 
--- | --- 
 label | VAFCTFU CONVERT ICN TO DFN
 tag | GETDFN
 routine | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
 return value type | SINGLE VALUE
 description | Given a patient Integration Control Number (ICN), this will returnthe patient Internal Entry Number (IEN) from the PATIENT file (#2).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ICN | LITERAL | 255 | true | Patient Integration Control Number (ICN). | 