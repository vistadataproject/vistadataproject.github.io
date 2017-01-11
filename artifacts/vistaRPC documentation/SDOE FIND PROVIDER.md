---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SDOE FIND PROVIDER 

 property | value 
--- | --- 
 label | SDOE FIND PROVIDER
 tag | FINDPRV
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | SINGLE VALUE
 description | This Remote Procedure Call (RPC) returns a boolean indicatoron whether a specific provider is associated with an encounter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file. | 
| PRACTITIONER ID | LITERAL |  | true | This is the internal entry number of an entry in the NEW PERSON[#200 - ^VA(200)] file for a practitioner. | 




 Generated on January 11th 2017, 7:15:03 am