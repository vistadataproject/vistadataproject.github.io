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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RESULTS | LITERAL |  | true | Results passed back to calling application | 
| vs:Input_Parameter-8994_02 | PTDFN | LITERAL | 50 | true | Patients internal entry number. | 
| vs:Input_Parameter-8994_02 | STATUS | LITERAL | 50 | true | Whether Inpatient or Outpatient. | 