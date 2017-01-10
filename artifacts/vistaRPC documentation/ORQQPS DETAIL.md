---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPS DETAIL 

 property | value 
--- | --- 
 label | ORQQPS DETAIL
 tag | DETAIL
 routine | [ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html)
 return value type | ARRAY
 description | Returns the details of a medication order.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ID | LITERAL | 16 | true | Patient identifier from Patient file [#2]. | 
| vs:Input_Parameter-8994_02 | MEDICATION ID | LITERAL | 20 | true | Medication identifier as drawn from the medication consdensed list (ORQQPSLIST).  The first piece of the condensed list.  E.g. 31945R;O, 231156U;I,944382P;O | 