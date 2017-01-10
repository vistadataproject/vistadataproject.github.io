---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV DEL CANNED COMMENT 

 property | value 
--- | --- 
 label | DENTV DEL CANNED COMMENT
 tag | DEL
 routine | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
 return value type | SINGLE VALUE
 description | Will delete a canned comment from the system. This will automatically resort the remaining records by filling in the gap (if any) left by removing the record.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CIEN | LITERAL |  | true | This is the IEN of the record. | 