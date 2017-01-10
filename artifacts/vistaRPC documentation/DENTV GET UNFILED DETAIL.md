---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV GET UNFILED DETAIL 

 property | value 
--- | --- 
 label | DENTV GET UNFILED DETAIL
 tag | GETUN
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | GLOBAL ARRAY
 description | This procedure will take in a single IEN to return all data for the IEN in ^TMP(\DENT\,$J,N)=value.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | This input should be a number coinciding with an IEN for the record you wish to retreive. | 