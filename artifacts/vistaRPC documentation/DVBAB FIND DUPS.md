---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB FIND DUPS 

 property | value 
--- | --- 
 label | DVBAB FIND DUPS
 tag | DUP
 routine | [DVBAB84](http://code.osehra.org/dox/Routine_DVBAB84_source.html)
 return value type | GLOBAL ARRAY
 description | Find potential duplicates within the PATIENT File (#2) At least one of NAM, DOB, or SSN must be passedPossible matches are \better\ when more than one of these is passed

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NAM | LITERAL |  |  | Name of possible patient | 
| DOB | LITERAL | 7 |  | Date of Birth of possible patient | 
| SSN | LITERAL | 10 |  | Social Security Number of possible patient | 