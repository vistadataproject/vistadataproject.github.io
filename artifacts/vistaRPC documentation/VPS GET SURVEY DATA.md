---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET SURVEY DATA 

 property | value 
--- | --- 
 label | VPS GET SURVEY DATA
 tag | GETRPC
 routine | [VPSSRVY2](http://code.osehra.org/dox/Routine_VPSSRVY2_source.html)
 return value type | GLOBAL ARRAY
 description | Retrieves an array containing the patient's Clinical Survey information.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VPSPID | LITERAL | 25 | true | Patient ID such as the patient SSN OR DFN OR ICN OR VIC/CACfor whom the Clinical Questionnaire information is beingrequested. | 
| vs:Input_Parameter-8994_02 | VPSQIEN | LITERAL | 9 |  | Questionnaire IEN for filtering the results. | 
| vs:Input_Parameter-8994_02 | VPSQNM | LITERAL | 60 |  | Questionnaire Name for filtering the results. | 
| vs:Input_Parameter-8994_02 | VPSFDT | LITERAL | 14 |  | Date From for filtering the results | 
| vs:Input_Parameter-8994_02 | VPSTDT | LITERAL | 14 |  | Date To for filtering the results | 
| vs:Input_Parameter-8994_02 | VPSNUM | LITERAL | 4 |  | Maxumum number of occurrences to return. | 
| vs:Input_Parameter-8994_02 | VPSTYP | LITERAL | 7 | true | Patient ID TYPE such as SSN or DFN OR ICN OR VIC/CAC. | 