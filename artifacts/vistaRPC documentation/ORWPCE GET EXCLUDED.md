---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE GET EXCLUDED 

 property | value 
--- | --- 
 label | ORWPCE GET EXCLUDED
 tag | EXCLUDED
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | ARRAY
 description | Returns a list of excluded PCE entries

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | LOC | LITERAL |  |  | Location | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL |  |  | Excluded PCE data items are stored in one of five parameters.Type dictates the parameter this call will retrieve. Type  Parameter  1    ORWPCE EXCLUDE IMMUNIZATIONS  2    ORWPCE EXCLUDE SKIN TESTS  3    ORWPCE EXCLUDE PATIENT ED  4    ORWPCE EXCLUDE HEALTH FACTORS  5    ORWPCE EXCLUDE EXAMS | 