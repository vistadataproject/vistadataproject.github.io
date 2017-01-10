---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN SECONDARY ICDS 

 property | value 
--- | --- 
 label | SPN SECONDARY ICDS
 tag | COL
 routine | [SPNRPC8](http://code.osehra.org/dox/Routine_SPNRPC8_source.html)
 return value type | GLOBAL ARRAY
 description | The \Secondary Conditions\ scroll box display on the Impairments Tab will be populated with ICD-9 diagnostic, from the patient's beginning date tothe current date.  But it excludes the 806, 952, 344, & 907 ICD-9 series.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICN | LITERAL |  |  |  | 