---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR GET USER INFO 

 property | value 
--- | --- 
 label | ROR GET USER INFO
 tag | USERINFO
 routine | [RORRP024](http://code.osehra.org/dox/Routine_RORRP024_source.html)
 return value type | ARRAY
 description | The ROR GET USER INFO remote procedure returns basic information about theuser.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | USER | LITERAL |  |  | User IEN in the NEW PERSON file. By default (if $G(USER)'>0), the DUZ isused). | 