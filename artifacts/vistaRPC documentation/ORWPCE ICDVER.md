---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE ICDVER 

 property | value 
--- | --- 
 label | ORWPCE ICDVER
 tag | ICDVER
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | SINGLE VALUE
 description | Returns the ICD coding system version to be used for diagnosis look-up, asof a particular date of interest.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ORDT | LITERAL |  | true | This is the date of interest (e.g., encounter date - time optional) against which the implementation date for ICD-10-CM will be compared. | 