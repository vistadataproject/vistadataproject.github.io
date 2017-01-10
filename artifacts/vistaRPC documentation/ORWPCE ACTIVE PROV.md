---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE ACTIVE PROV 

 property | value 
--- | --- 
 label | ORWPCE ACTIVE PROV
 tag | ACTIVPRV
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | SINGLE VALUE
 description | This calls the PCE API $$ACTIVPRV^PXAPI(provider ien, encounter d/t) tosee if the provider can be stored by PCE.   Returns a 1 if provider is good and 0 if the provider is not active or does not have an active person class.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PROVIDER IEN | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | ENCOUNTER DATE/TIME | LITERAL |  | true |  | 