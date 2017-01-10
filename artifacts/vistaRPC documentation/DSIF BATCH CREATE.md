---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH CREATE 

 property | value 
--- | --- 
 label | DSIF BATCH CREATE
 tag | NEWBAT
 routine | [DSIFBAT1](http://code.osehra.org/dox/Routine_DSIFBAT1_source.html)
 return value type | SINGLE VALUE
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | OBLIGATION | LITERAL | 30 | true |  | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL | 5 | true |  | 
| vs:Input_Parameter-8994_02 | CONTROL POINT | LITERAL | 4 | true | Control point, may be entered as \038\ or the actual IEN \38\ | 
| vs:Input_Parameter-8994_02 | BATCH EMEMPT | LITERAL | 2 | true | Optional (not used) for B3 batches,Required for B9 batches, must be \Y\ or \N\ | 