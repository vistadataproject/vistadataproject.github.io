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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VPSPID | LITERAL | 25 | true | Patient ID such as the patient SSN OR DFN OR ICN OR VIC/CACfor whom the Clinical Questionnaire information is beingrequested. | 
| VPSQIEN | LITERAL | 9 |  | Questionnaire IEN for filtering the results. | 
| VPSQNM | LITERAL | 60 |  | Questionnaire Name for filtering the results. | 
| VPSFDT | LITERAL | 14 |  | Date From for filtering the results | 
| VPSTDT | LITERAL | 14 |  | Date To for filtering the results | 
| VPSNUM | LITERAL | 4 |  | Maxumum number of occurrences to return. | 
| VPSTYP | LITERAL | 7 | true | Patient ID TYPE such as SSN or DFN OR ICN OR VIC/CAC. | 




 Generated on January 11th 2017, 7:15:04 am