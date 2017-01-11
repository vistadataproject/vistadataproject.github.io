---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VAFCTFU LOCAL ICN 

 property | value 
--- | --- 
 label | VAFCTFU LOCAL ICN
 tag | IFLOCAL
 routine | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
 return value type | SINGLE VALUE
 description | Given a patient DFN, it will determine if the Integration Control Number (ICN) assigned to the patient is a local ICN or a national ICN.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Patient DFN. | LITERAL | 255 | true | Patient DFN from PATIENT file (#2). | 