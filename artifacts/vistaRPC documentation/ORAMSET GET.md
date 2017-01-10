---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAMSET GET 

 property | value 
--- | --- 
 label | ORAMSET GET
 tag | GET
 routine | [ORAMSET](http://code.osehra.org/dox/Routine_ORAMSET_source.html)
 return value type | ARRAY
 description | Returns the Anticoagulation Manager parameters for the division which theuser is logged into.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CLINICLOC | LITERAL |  | true | This is the entry of the clinic in the HOSPITAL LOCATION FILE (#44), expressed in variable pointer format (e.g., \32;SC(\). | 
| vs:Input_Parameter-8994_02 | VISITDT | LITERAL |  | true | This is the date/time of the visit in Intenal VA FileMan format (e.g., 3140929.1400). | 