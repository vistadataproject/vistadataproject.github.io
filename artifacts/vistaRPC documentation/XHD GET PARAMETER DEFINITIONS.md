---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XHD GET PARAMETER DEFINITIONS 

 property | value 
--- | --- 
 label | XHD GET PARAMETER DEFINITIONS
 tag | LIST
 routine | [XHDPDEF](http://code.osehra.org/dox/Routine_XHDPDEF_source.html)
 return value type | ARRAY
 description | Gets parameter definitions as a list with IEN^NAME^DISPLAY NAME^ENTITYLISTin each node of the return array. This call returns a local array of SIZE elements in DIR direction from the initial Definition FROM.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FROM | LITERAL |  | true | This is the definition from which the list should begin (i.e., inclusive bound). | 
| DIR | LITERAL |  | true | OPTIONAL parameter. This is the DIRECTION from the origin in which the definitions will be retrieved. Pass \+1\ to indicate ascending order, or \-1\ to indicate descending order).  DEFAULT: \+1\ or ascending order. | 
| SIZE | LITERAL |  | true | This is the number of definitions that should be returned with each invocation of the call. DEFAULT: 44. | 