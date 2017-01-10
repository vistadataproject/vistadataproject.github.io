---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR SET ADDRESS INACTIVE 

 property | value 
--- | --- 
 label | DSIR SET ADDRESS INACTIVE
 tag | TOGLINAC
 routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
 return value type | SINGLE VALUE
 description | This RPC sets or resets the Address Inactive flag in the ROI Address file.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ADRPTR | LITERAL |  | true | ADRPTR - IEN of ADDRESS (NUMERIC) | 
| vs:Input_Parameter-8994_02 | FLAGVAL | LITERAL | 1 | true | FLAGVAL - SET OF VALUES FOR THE INACTIVE FLAG.  ZERO(0) = ACTIVE AND ONE (1) = INACTIVE. (NUMERIC 0 OR 1) | 