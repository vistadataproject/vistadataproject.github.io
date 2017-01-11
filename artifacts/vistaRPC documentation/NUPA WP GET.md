---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA WP GET 

 property | value 
--- | --- 
 label | NUPA WP GET
 tag | WPGET
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | GLOBAL ARRAY
 description | Returns data from a Word Processing field.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL |  | true | File to get the data from, in ^FILE(subscript, format. | 
| IEN | LITERAL |  | true | Line number for the data to be put into, in number_\,\ formatsuch as \1,\. | 
| NODE | LITERAL |  | true | Node in the global to pull the data from, such as node 2. | 