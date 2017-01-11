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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NAME | LITERAL | 30 | true | This is the patient name. | 
| SSN | LITERAL | 11 | true | This is the patient Social Security Number | 
| DOB | LITERAL | 7 | true | This is the date of birth used for unique identification.patient file and the dsir noncomputerized record patient file. | 
| OVRD | LITERAL | 1 | true | This is a flag (0 or 1) to override/bypass the lookups into xrefs.  If true the RPC will laygo into file 19620.96 without checking for duplicates. | 
| NCPIEN | LITERAL | 99 | true | This is the desired IEN. If this exists then it is an update not an add. | 




 Generated on January 11th 2017, 7:15:04 am