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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Patient internal entry number. | 
| FMDT | LITERAL | 14 | true | Date insured (default is today). | 
| FILTER | LITERAL | 8 | true | Status codes specifying results to be included or excluded. | 
| FIELDS | LITERAL | 80 | true | List of fields to be returned (default is all). | 




 Generated on January 11th 2017, 7:15:04 am