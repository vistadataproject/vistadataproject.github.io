---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SDOE LIST ENCOUNTERS FOR VISIT 

 property | value 
--- | --- 
 label | SDOE LIST ENCOUNTERS FOR VISIT
 tag | LISTVST
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | GLOBAL ARRAY
 description | This Remote Procedure Call (RPC) returns a list of OutpatientEncounters for a specified visit.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VISIT IEN | LITERAL |  | true | This is the internal entry number of an entry in theVISIT [#9000010 - ^AUPNVSIT] file. | 




 ###### Generated on January 11th 2017, 6:39:42 am