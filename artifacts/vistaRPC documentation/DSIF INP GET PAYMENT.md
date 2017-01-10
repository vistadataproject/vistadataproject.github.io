---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP GET PAYMENT 

 property | value 
--- | --- 
 label | DSIF INP GET PAYMENT
 tag | EN
 routine | [DSIFEP1](http://code.osehra.org/dox/Routine_DSIFEP1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC retrieves data from file 162.5 for display in the edit process.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 99 | true | Internal Entry Number to file 162.5 | 