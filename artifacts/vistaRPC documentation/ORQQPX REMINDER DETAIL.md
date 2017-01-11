---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPX REMINDER DETAIL 

 property | value 
--- | --- 
 label | ORQQPX REMINDER DETAIL
 tag | REMDET
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | ARRAY
 description | Returns the details of a clinical reminder.


### Method description

 property | value 
--- | --- 
 Method comment | return detail for a pt's clinical reminder
 Leading comment lines | ORY - return array,ORPT - patient DFN,ORIEN - clinical reminder (811.9 ien)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient identifier from Patient file [#2]. | 
| CLINICAL REMINDER ID | LITERAL | 16 | true | Clinical reminder identifier (ien) from PCE REMINDER/MAINTENANCE ITEM file[#811.9]. | 




 ###### Generated on January 11th 2017, 6:39:42 am