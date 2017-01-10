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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | NAM | LITERAL |  |  | Name of possible patient | 
| vs:Input_Parameter-8994_02 | DOB | LITERAL | 7 |  | Date of Birth of possible patient | 
| vs:Input_Parameter-8994_02 | SSN | LITERAL | 10 |  | Social Security Number of possible patient | 