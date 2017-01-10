---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR ADD NONCOMP PAT 

 property | value 
--- | --- 
 label | DSIR ADD NONCOMP PAT
 tag | ADDNCPR
 routine | [DSIROI0](http://code.osehra.org/dox/Routine_DSIROI0_source.html)
 return value type | ARRAY
 description | Routine for adding or updating an non-computerized patient for ROI.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | NAME | LITERAL | 30 | true | This is the patient name. | 
| vs:Input_Parameter-8994_02 | SSN | LITERAL | 11 | true | This is the patient Social Security Number | 
| vs:Input_Parameter-8994_02 | DOB | LITERAL | 7 | true | This is the date of birth used for unique identification.patient file and the dsir noncomputerized record patient file. | 
| vs:Input_Parameter-8994_02 | OVRD | LITERAL | 1 | true | This is a flag (0 or 1) to override/bypass the lookups into xrefs.  If true the RPC will laygo into file 19620.96 without checking for duplicates. | 
| vs:Input_Parameter-8994_02 | NCPIEN | LITERAL | 99 | true | This is the desired IEN. If this exists then it is an update not an add. | 