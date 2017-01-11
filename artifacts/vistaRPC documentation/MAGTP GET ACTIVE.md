---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGTP GET ACTIVE 

 property | value 
--- | --- 
 label | MAGTP GET ACTIVE
 tag | GETAC
 routine | [MAGTP004](http://code.osehra.org/dox/Routine_MAGTP004_source.html)
 return value type | ARRAY
 description | Get list of all unreleased (FLAG=0) or released (FLAG=1) reports,filter by back days for unreleased reports.Filter by Station Number if consultations are present for a case.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FLAG | LITERAL | 1 | true | FLAG = 0: Unreleased / 1: Released | 
| DAYS | LITERAL | 7 | true | Show verified reports up to DAYS (# of days) ago | 
| STAT | LITERAL | 5 | true | If non null, display the case if it has aconsultation for an interpreting station equal to the input. | 




Generated on January 11th 2017, 6:34:23 am