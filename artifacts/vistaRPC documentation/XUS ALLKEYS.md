---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS ALLKEYS 

 property | value 
--- | --- 
 label | XUS ALLKEYS
 tag | ALLKEYS
 routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will return all the KEYS that a user holds.If the FLAG is set to some value the list of KEYS will be screened to only be those for J2EE use.This may need refinement as we get some experience.For FATKAAT and KAAJEE.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 10 | true | This is the IEN or DUZ of the user in question.If not passed in the RPC will user the current DUZ. | 
| vs:Input_Parameter-8994_02 | FLAG | LITERAL | 3 | true | Not in use at this time. | 