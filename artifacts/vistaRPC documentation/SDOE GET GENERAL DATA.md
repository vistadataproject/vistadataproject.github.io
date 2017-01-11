---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SDOE GET GENERAL DATA 

 property | value 
--- | --- 
 label | SDOE GET GENERAL DATA
 tag | GETGEN
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | ARRAY
 description | This Remote Procedure Call (RPC) returns the Oth and other nodes ofan Outpatient Encounter entry.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file. | 