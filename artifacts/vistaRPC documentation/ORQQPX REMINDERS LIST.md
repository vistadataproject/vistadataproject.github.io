---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPX REMINDERS LIST 

 property | value 
--- | --- 
 label | ORQQPX REMINDERS LIST
 tag | REMIND
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | ARRAY
 description | Returns a list of clinical reminders.


### Method description

 property | value 
--- | --- 
 Method comment | return pt's currently due PCE clinical reminders
 Leading comment lines | in the format file 811.9 ien^reminder print name^date due^last occur.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient identifier (DFN) from patient file [#2]. | 




 Generated on January 11th 2017, 7:15:03 am