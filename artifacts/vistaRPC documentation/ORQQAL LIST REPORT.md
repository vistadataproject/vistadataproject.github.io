---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQAL LIST REPORT 

 property | value 
--- | --- 
 label | ORQQAL LIST REPORT
 tag | LRPT
 routine | [ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 return value type | ARRAY
 description | Returns a list of allergens, severity and signs/symptoms in a reportformat which can be used in a \detailed\ display.  This RPC was set upto support the listing of allergies when selected from the Patient Postingslist.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | The record number of the patient from the Patient File [#2]. | 