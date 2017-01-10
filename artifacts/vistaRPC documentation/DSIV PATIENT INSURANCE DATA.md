---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV PATIENT INSURANCE DATA 

 property | value 
--- | --- 
 label | DSIV PATIENT INSURANCE DATA
 tag | INSUR
 routine | [DSIVIC3](http://code.osehra.org/dox/Routine_DSIVIC3_source.html)
 return value type | ARRAY
 description | Wraps $$INSUR^IBBAPI to return insurance data for patient.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Patient internal entry number. | 
| vs:Input_Parameter-8994_02 | FMDT | LITERAL | 14 | true | Date insured (default is today). | 
| vs:Input_Parameter-8994_02 | FILTER | LITERAL | 8 | true | Status codes specifying results to be included or excluded. | 
| vs:Input_Parameter-8994_02 | FIELDS | LITERAL | 80 | true | List of fields to be returned (default is all). | 