---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC VITALS BY ID 

 property | value 
--- | --- 
 label | ORRC VITALS BY ID
 tag | DETAIL
 routine | [ORRCVIT](http://code.osehra.org/dox/Routine_ORRCVIT_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns the details of the measurement sets requested in thelist of ID's passed in.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VITALS | LIST |  | true | This is the list of measurement set identifiers, as VIT:ID where ID isPatient#_\;\_Date.Time as returned by the patient list RPCs. | 




Generated on January 11th 2017, 6:34:23 am