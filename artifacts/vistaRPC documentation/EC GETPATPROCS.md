---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETPATPROCS 

 property | value 
--- | --- 
 label | EC GETPATPROCS
 tag | PATPROC
 routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns an array of patient entries from EVENT CAPTURE PATIENT FILE #721 that matches a location, DSS unit, patient DFN, start date and end date.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrows:-  1.  ECLOC  - Location ien  2.  ECPAT  - Patient DFN ien  3.  ECUNT  - DSS unit ien  4.  ECSD   - Start Date  5.  ECED   - End Date | 