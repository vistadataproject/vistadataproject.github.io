---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV CHECK DEVICE 

 property | value 
--- | --- 
 label | GMV CHECK DEVICE
 tag | CHKDEV
 routine | [GMVUTL2](http://code.osehra.org/dox/Routine_GMVUTL2_source.html)
 return value type | ARRAY
 description | This RPC calls a KERNEL utility to return a list of printers the user may select to print output. Returns a maximum of twenty entries.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMVIEN | LITERAL |  | true | The value to begin the search in the Device file (#3.5). Can be null. | 
| vs:Input_Parameter-8994_02 | GMVDIR | LITERAL | 1 | true | Direction of the search (1 = forward, -1 = backwards).If DIR is null, then set to 1. | 
| vs:Input_Parameter-8994_02 | GMVRMAR | LITERAL |  | true | Right margin as a single number or range (e.g, 80, 132 or \80-132\). | 