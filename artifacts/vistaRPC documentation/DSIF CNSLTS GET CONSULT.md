---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS GET CONSULT 

 property | value 
--- | --- 
 label | DSIF CNSLTS GET CONSULT
 tag | GET
 routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
 return value type | SINGLE VALUE
 description | This RPC will return details for a single Consult that uses the same format as DSIF CNSLTS FEE CONSULTS.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFIEN | LITERAL |  | true | This is the Consult IEN that the details are requested of. | 