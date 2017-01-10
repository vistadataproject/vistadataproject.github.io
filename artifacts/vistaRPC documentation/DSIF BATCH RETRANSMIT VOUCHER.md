---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH RETRANSMIT VOUCHER 

 property | value 
--- | --- 
 label | DSIF BATCH RETRANSMIT VOUCHER
 tag | VOUCH
 routine | [DSIFBAT9](http://code.osehra.org/dox/Routine_DSIFBAT9_source.html)
 return value type | SINGLE VALUE
 description |  ; Input : FBN: batch IEN ; Output: FBOUT: returns 1 and success message if successful, -1 and error message if failed

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FBN | LITERAL | 9 | true | Batch IEN | 