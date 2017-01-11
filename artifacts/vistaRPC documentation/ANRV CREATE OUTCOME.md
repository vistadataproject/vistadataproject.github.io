---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ANRV CREATE OUTCOME 

 property | value 
--- | --- 
 label | ANRV CREATE OUTCOME
 tag | MKREC
 routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
 return value type | ARRAY
 description | Creates new Outcome Record.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RESULTS | LITERAL |  | true | Results passed back to calling application | 
| PTDFN | LITERAL | 50 | true | Patients internal entry number. | 
| STATUS | LITERAL | 50 | true | Whether Inpatient or Outpatient. | 




 Generated on January 11th 2017, 7:15:04 am