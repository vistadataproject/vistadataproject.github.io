---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PRINT 7079 

 property | value 
--- | --- 
 label | DSIF PRINT 7079
 tag | PRINT
 routine | [DSIFENA4](http://code.osehra.org/dox/Routine_DSIFENA4_source.html)
 return value type | SINGLE VALUE
 description | Used to print an existing 7079 from Fee Basis.on error returns-1^error message

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true |  | 
| vs:Input_Parameter-8994_02 | AUTHIEN | LITERAL | 30 | true |  | 
| vs:Input_Parameter-8994_02 | DEVICE | LITERAL | 80 | true | Pass in the VistA device name used to print the 7079. | 