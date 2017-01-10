---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET DOC COUNT BY VISIT 

 property | value 
--- | --- 
 label | TIU GET DOC COUNT BY VISIT
 tag | DOCCNT
 routine | [TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure returns the number of documents that are linked to a particular visit.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VSIT | LITERAL |  | true | This is the record number (IEN) of the VISIT in the VISIT FILE. | 