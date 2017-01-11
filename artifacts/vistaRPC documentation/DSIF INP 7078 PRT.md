---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP 7078 PRT 

 property | value 
--- | --- 
 label | DSIF INP 7078 PRT
 tag | PRT7078
 routine | [DSIFENA6](http://code.osehra.org/dox/Routine_DSIFENA6_source.html)
 return value type | SINGLE VALUE
 description | Print 7078

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FB7078 | LITERAL | 15 | true | IEN of 7078. | 
| DEVICE | LITERAL | 20 | true | VistA Print device | 
| OFFICIAL | LITERAL | 55 | true |  | 
| TITLE | LITERAL | 55 | true |  | 
| COPIES | LITERAL | 1 | true |  | 




Generated on January 11th 2017, 6:34:23 am