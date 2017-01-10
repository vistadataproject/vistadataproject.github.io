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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FB7078 | LITERAL | 15 | true | IEN of 7078. | 
| vs:Input_Parameter-8994_02 | DEVICE | LITERAL | 20 | true | VistA Print device | 
| vs:Input_Parameter-8994_02 | OFFICIAL | LITERAL | 55 | true |  | 
| vs:Input_Parameter-8994_02 | TITLE | LITERAL | 55 | true |  | 
| vs:Input_Parameter-8994_02 | COPIES | LITERAL | 1 | true |  | 