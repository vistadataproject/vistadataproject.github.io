---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH REPROCESS 

 property | value 
--- | --- 
 label | DSIF BATCH REPROCESS
 tag | PROCESS
 routine | [DSIFBAT9](http://code.osehra.org/dox/Routine_DSIFBAT9_source.html)
 return value type | SINGLE VALUE
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FBN | LITERAL | 10 | true | Batch IEN that needs to be reprocessed | 
| vs:Input_Parameter-8994_02 | FBACT | LITERAL | 1 | true | \R\ - Retransmit, \F\ - Reject | 