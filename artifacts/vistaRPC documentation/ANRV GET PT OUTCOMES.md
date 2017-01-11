---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ANRV GET PT OUTCOMES 

 property | value 
--- | --- 
 label | ANRV GET PT OUTCOMES
 tag | GETREC
 routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
 return value type | ARRAY
 description | Returns top level IEN and sub record IEN plus statuses.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RESULTS | LITERAL |  | true | Results of inquiry, includes top record and sub record status and IEN. | 
| PTDFN | LITERAL | 50 | true | Patients internal entry number. | 