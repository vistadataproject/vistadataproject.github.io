---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF AUTH DISPLAY 

 property | value 
--- | --- 
 label | DSIF AUTH DISPLAY
 tag | AUTH
 routine | [DSIFENA6](http://code.osehra.org/dox/Routine_DSIFENA6_source.html)
 return value type | GLOBAL ARRAY
 description | Pass in a DFN and an Auth IEN to see all data for that Auth

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 25 | true |  | 
| vs:Input_Parameter-8994_02 | AUTH | LITERAL | 25 | true |  | 