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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILE | LITERAL |  | true | File to get the data from, in ^FILE(subscript, format. | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | Line number for the data to be put into, in number_\,\ formatsuch as \1,\. | 
| vs:Input_Parameter-8994_02 | NODE | LITERAL |  | true | Node in the global to pull the data from, such as node 2. | 