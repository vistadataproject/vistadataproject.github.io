---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH CLOSE 

 property | value 
--- | --- 
 label | DSIF BATCH CLOSE
 tag | CLOSEBAT
 routine | [DSIFBAT1](http://code.osehra.org/dox/Routine_DSIFBAT1_source.html)
 return value type | GLOBAL ARRAY
 description | Used to close an open batch for Fee Basis

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | BATCH NUMBER | LITERAL | 99 | true | Pass in IEN of batch number | 