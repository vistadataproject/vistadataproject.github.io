---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF DEL AUTH 

 property | value 
--- | --- 
 label | DSIF DEL AUTH
 tag | DEL
 routine | [DSIFENA3](http://code.osehra.org/dox/Routine_DSIFENA3_source.html)
 return value type | SINGLE VALUE
 description | Used to delete an existing authorization in Fee Basis.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 35 | true | Pass in Patient File IEN (file #2)  | 
| vs:Input_Parameter-8994_02 | AUTHIEN | LITERAL | 25 | true | Authorization IEN to be deleted | 