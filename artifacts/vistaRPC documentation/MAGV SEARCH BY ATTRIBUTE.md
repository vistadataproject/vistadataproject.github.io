---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV SEARCH BY ATTRIBUTE 

 property | value 
--- | --- 
 label | MAGV SEARCH BY ATTRIBUTE
 tag | FINDBYAT
 routine | [MAGVRS42](http://code.osehra.org/dox/Routine_MAGVRS42_source.html)
 return value type | ARRAY
 description | This remote procedure accepts an array of one or more name-value pairsof FileMan field names and exact match values, and returns a list ofinternal entry numbers of matching entries.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SEND | LIST | 200 | true | This is a list of name-value pairs of field names and exact match values. | 
| FILE | LITERAL | 15 | true | This is the number of the FileMan file to be searched (e.g., 2005.61 forIMAGING PROCEDURE REFERENCE). | 