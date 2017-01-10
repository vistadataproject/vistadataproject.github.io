---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR BILL HISTORY 

 property | value 
--- | --- 
 label | DSIR BILL HISTORY
 tag | BILLHIST
 routine | [DSIRBIL0](http://code.osehra.org/dox/Routine_DSIRBIL0_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns all bill edit history for a given bill number.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | BILL IEN | LITERAL | 999 | true | This is the internal entry number into file 19620.2. | 