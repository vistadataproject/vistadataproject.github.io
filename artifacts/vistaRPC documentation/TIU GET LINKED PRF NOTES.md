---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET LINKED PRF NOTES 

 property | value 
--- | --- 
 label | TIU GET LINKED PRF NOTES
 tag | GETNOTES
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | ARRAY
 description | Returns list of SIGNED, LINKED PRF notes for given patient, for givenPRF Title

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PTDFN | LITERAL |  | true | Patient IEN in Patient file | 
| vs:Input_Parameter-8994_02 | TIUTTL | LITERAL |  | true | PRF Title IEN in file 8925.1 | 
| vs:Input_Parameter-8994_02 | REVORDER | LITERAL | 1 | true | Optional.  Boolean flag, with 1 indicating to subscript the list of notesin reverse chronological order.  Default is chronological order. | 