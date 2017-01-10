---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV ACTIVE USER PROVIDER 

 property | value 
--- | --- 
 label | DENTV ACTIVE USER PROVIDER
 tag | LIST
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a list of active users matching the lookup value.  If a matching user is not active, but has the XUORES security key, then they are valid providers and will also be returned by this call.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VAL | LITERAL | 50 | true | The lookup value entered by the user to find matches against the NEW USER file. | 