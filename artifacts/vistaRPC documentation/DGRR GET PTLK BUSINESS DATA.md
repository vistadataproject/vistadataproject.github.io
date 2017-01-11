---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DGRR GET PTLK BUSINESS DATA 

 property | value 
--- | --- 
 label | DGRR GET PTLK BUSINESS DATA
 tag | BUS
 routine | [DGRRLU1](http://code.osehra.org/dox/Routine_DGRRLU1_source.html)
 return value type | GLOBAL ARRAY
 description | Returns XML document containing data needed to perform business logicchecks on patient lookup.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAM | LIST |  |  | PARAM(\PatientId_Type\) = DFN (default) or ICNPARAM(\PatientId\) = value for dfn or ICNPARAM(\UserId\) = DUZPARAM(\UserInstitution\) = division usage default to DUZ(2) | 