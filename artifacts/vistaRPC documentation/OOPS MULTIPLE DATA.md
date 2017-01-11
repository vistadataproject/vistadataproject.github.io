---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS MULTIPLE DATA 

 property | value 
--- | --- 
 label | OOPS MULTIPLE DATA
 tag | MULTIPLE
 routine | [OOPSGUIC](http://code.osehra.org/dox/Routine_OOPSGUIC_source.html)
 return value type | ARRAY
 description | This broker call will be used to both get and set data stored in a sub-recordor multiple.  When saving (setting) data, the entire subrecord is deleted thenre-filed.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 50 | true | This parameter contains three pieces of data, the top level file number to befiled into, the field number, and the IEN in the format:  FILE^FIELD^IEN. | 
| DATA | LIST | 250 | true | This parameter is an array that contains the data to be filed into the multiple.  If this parameter is null, then a GET will be preformed rather than a set. | 