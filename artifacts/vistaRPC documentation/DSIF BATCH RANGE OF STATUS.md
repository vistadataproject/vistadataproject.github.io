---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH RANGE OF STATUS 

 property | value 
--- | --- 
 label | DSIF BATCH RANGE OF STATUS
 tag | RANGEBAT
 routine | [DSIFBAT2](http://code.osehra.org/dox/Routine_DSIFBAT2_source.html)
 return value type | GLOBAL ARRAY
 description | Used to display a list of batches based on a batch IEN. on error returns -1^error message

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RANGE | LITERAL | 99 | true | Input range of batch numbers in the format of n-nnn (or a single batch)  | 