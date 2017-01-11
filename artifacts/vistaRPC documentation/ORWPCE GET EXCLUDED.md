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


### Method description

 property | value 
--- | --- 
 Method comment | Returns list of excluded PCE data elements

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LOC | LITERAL |  |  | Location | 
| TYPE | LITERAL |  |  | Excluded PCE data items are stored in one of five parameters.Type dictates the parameter this call will retrieve. Type  Parameter  1    ORWPCE EXCLUDE IMMUNIZATIONS  2    ORWPCE EXCLUDE SKIN TESTS  3    ORWPCE EXCLUDE PATIENT ED  4    ORWPCE EXCLUDE HEALTH FACTORS  5    ORWPCE EXCLUDE EXAMS | 




 ###### Generated on January 11th 2017, 6:39:42 am