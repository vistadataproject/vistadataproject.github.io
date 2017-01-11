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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 30 | true |  | 
| AUTHIEN | LITERAL | 30 | true |  | 
| DEVICE | LITERAL | 80 | true | Pass in the VistA device name used to print the 7079. | 




Generated on January 11th 2017, 6:34:23 am