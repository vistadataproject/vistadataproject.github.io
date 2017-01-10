---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA PRINT 

 property | value 
--- | --- 
 label | NUPA PRINT
 tag | P
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | SINGLE VALUE
 description | Prints an array to a printer

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ZTIO | LITERAL |  | true | Printer to print to. | 
| vs:Input_Parameter-8994_02 | ARRAY | LIST |  | true | Array of data to print, in format  ARRAY(1), ARRAY(2), etc. | 