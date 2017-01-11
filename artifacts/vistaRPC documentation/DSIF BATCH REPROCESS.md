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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FBN | LITERAL | 10 | true | Batch IEN that needs to be reprocessed | 
| FBACT | LITERAL | 1 | true | \R\ - Retransmit, \F\ - Reject | 