---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA AUDITC NOTE TEXT 

 property | value 
--- | --- 
 label | NUPA AUDITC NOTE TEXT
 tag | ACNOTE
 routine | [NUPABCL2](http://code.osehra.org/dox/Routine_NUPABCL2_source.html)
 return value type | ARRAY
 description | Saves an Audit-C note for the patient.  Uses the last administration from file 601.84.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | DFN of the patient. | 
| vs:Input_Parameter-8994_02 | STRING | LITERAL |  | true | Score, questions, and answers from the Audit-C. | 