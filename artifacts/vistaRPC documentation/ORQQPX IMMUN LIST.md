---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPX IMMUN LIST 

 property | value 
--- | --- 
 label | ORQQPX IMMUN LIST
 tag | IMMLIST
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | ARRAY
 description | Returns a list of patient immunizations.


### Method description

 property | value 
--- | --- 
 Method comment | return pt's immunization list:
 Leading comment lines | id^name^date/time^reaction^inverse d/t

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient identifier (DFN) from patient file [#2]. | 




 Generated on January 11th 2017, 7:15:03 am