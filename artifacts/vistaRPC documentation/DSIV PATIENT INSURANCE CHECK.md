---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV PATIENT INSURANCE CHECK 

 property | value 
--- | --- 
 label | DSIV PATIENT INSURANCE CHECK
 tag | CKINS
 routine | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
 return value type | SINGLE VALUE
 description | Checks insurance for a single patient.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Patient Internal Entry Number. | 
| vs:Input_Parameter-8994_02 | DAYS | LITERAL | 10 | true | Number of days prior to today for last verified check (default=182). | 