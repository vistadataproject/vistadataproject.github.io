---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETDSSUNIT 

 property | value 
--- | --- 
 label | EC GETDSSUNIT
 tag | DSSUNT
 routine | [ECUMRPC1](http://code.osehra.org/dox/Routine_ECUMRPC1_source.html)
 return value type | GLOBAL ARRAY
 description | Returns array with active and/or inactive DSS units from file 724.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  |  | Optional input variable ECARY containing a status of:   STAT   - Active or inactive DSS Units (optional)            A-ctive (default), I-nactive, B-oth | 