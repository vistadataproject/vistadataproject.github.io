---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAM1 ACDATA 

 property | value 
--- | --- 
 label | ORAM1 ACDATA
 tag | ACDATA
 routine | [ORAM1](http://code.osehra.org/dox/Routine_ORAM1_source.html)
 return value type | ARRAY
 description | Retrieves record header information (e.g., indication for treatment,permissions, risks, goals, etc.) for the current patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  |  |  | 
| VISITDATE | LITERAL |  |  | This is the Date of Service (i.e., visit date) when the provider saw the patient. | 