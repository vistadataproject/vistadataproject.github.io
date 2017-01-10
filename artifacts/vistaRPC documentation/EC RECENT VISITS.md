---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC RECENT VISITS 

 property | value 
--- | --- 
 label | EC RECENT VISITS
 tag | RCNTVST
 routine | [ECUTL1](http://code.osehra.org/dox/Routine_ECUTL1_source.html)
 return value type | ARRAY
 description | Returns the 20 most recent visits/appointments for a selected patientfor the selected location.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  |  | ECARY will be sent with two delimited pieces of information.     DFN    - patient's IEN    LOC    - (optional) IEN of the location to filter visits/appts | 