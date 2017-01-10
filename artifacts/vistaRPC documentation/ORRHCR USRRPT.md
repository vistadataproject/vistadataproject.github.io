---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCR USRRPT 

 property | value 
--- | --- 
 label | ORRHCR USRRPT
 tag | USRRPT
 routine | [ORRHCR](http://code.osehra.org/dox/Routine_ORRHCR_source.html)
 return value type | SINGLE VALUE
 description | Returns the IEN of an entry in CPRS QUERY DEFINITION given the displaytext of the entry.  The entry must be a user-owned report.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DTX | LITERAL |  | true | Display text of the report entry. | 