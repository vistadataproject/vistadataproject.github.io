---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR GUI ACCESS 

 property | value 
--- | --- 
 label | ROR GUI ACCESS
 tag | ACREGLST
 routine | [RORRP013](http://code.osehra.org/dox/Routine_RORRP013_source.html)
 return value type | ARRAY
 description | The ROR ACCESS remote procedure returns a list of registries that the user has access to (the user has appropriate security keys).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL |  |  | User IEN in the NEW PERSON file. By default (if $G(USER)'>0), the DUZ isused). | 