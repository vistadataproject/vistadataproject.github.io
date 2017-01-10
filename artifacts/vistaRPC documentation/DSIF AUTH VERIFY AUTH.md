---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF AUTH VERIFY AUTH 

 property | value 
--- | --- 
 label | DSIF AUTH VERIFY AUTH
 tag | VERIFY
 routine | [DSIFENA3](http://code.osehra.org/dox/Routine_DSIFENA3_source.html)
 return value type | SINGLE VALUE
 description | Look to see if a patient has a valid authorization and if it has payments against it.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 25 | true | Patient IEN | 
| vs:Input_Parameter-8994_02 | AUTH IEN | LITERAL | 25 | true | Internal Number of the Authorization | 