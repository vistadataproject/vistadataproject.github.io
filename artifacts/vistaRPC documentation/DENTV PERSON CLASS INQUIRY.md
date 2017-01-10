---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV PERSON CLASS INQUIRY 

 property | value 
--- | --- 
 label | DENTV PERSON CLASS INQUIRY
 tag | PROVINQ
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | SINGLE VALUE
 description | This is an RPC wrapper for the Kernal call $$GET^XUA4A72 to determine the active providers class information.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PROV | LITERAL |  | true | The provider DUZ that is to be checked. | 
| vs:Input_Parameter-8994_02 | DENTDAT | LITERAL |  |  | This is the date used to determine the providers class (in case a historical lookup is required). | 