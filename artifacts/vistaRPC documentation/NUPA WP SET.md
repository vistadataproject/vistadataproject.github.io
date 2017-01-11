---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA WP SET 

 property | value 
--- | --- 
 label | NUPA WP SET
 tag | WPSET
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | SINGLE VALUE
 description | Sets data into a word processing field.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL |  | true | File to insert the data into, in ^FILE(subscript, format. | 
| LINE | LITERAL |  | true | Line number for the data to be put into, such as 1, 2, or 3. | 
| DATA | LITERAL |  | true | Data (text) to insert into the global. | 