---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU JUSTIFY DELETE? 

 property | value 
--- | --- 
 label | TIU JUSTIFY DELETE?
 tag | NEEDJUST
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | SINGLE VALUE
 description | BOOLEAN RPC that evaluates wheter a justification is required for deletion (e.g., deletion is authorized, but the document has been signed, etc.).


### Method description

 property | value 
--- | --- 
 Method comment | Is justification required for deletion?

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  |  | This is the record number (IEN) of the document in file 8925. | 