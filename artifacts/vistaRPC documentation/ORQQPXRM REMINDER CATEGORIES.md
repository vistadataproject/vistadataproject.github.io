---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDER CATEGORIES 

 property | value 
--- | --- 
 label | ORQQPXRM REMINDER CATEGORIES
 tag | CATEGORY
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | ARRAY
 description | Returns list of all CPRS lookup categories and associated reminders

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient Identifier from Patient file [#2] | 
| HOSPITAL LOCATION | LITERAL | 16 | true | Patient's HOSPITAL LOCATION [#44]. May be null. | 