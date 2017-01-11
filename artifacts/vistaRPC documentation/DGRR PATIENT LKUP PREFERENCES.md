---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DGRR PATIENT LKUP PREFERENCES 

 property | value 
--- | --- 
 label | DGRR PATIENT LKUP PREFERENCES
 tag | START
 routine | [DGRRLU4](http://code.osehra.org/dox/Routine_DGRRLU4_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call returns an xml document containing the divisionor package preferences.  

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAM | LIST |  | true | PARAM(\stationNumber\) = station number for institution.  If not defined, RPC will return the package default values. | 




 ###### Generated on January 11th 2017, 6:39:43 am