---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP NEW 7078 OBLIGATION 

 property | value 
--- | --- 
 label | DSIF INP NEW 7078 OBLIGATION
 tag | NEWOBL
 routine | [DSIFNOT4](http://code.osehra.org/dox/Routine_DSIFNOT4_source.html)
 return value type | SINGLE VALUE
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FB VENDOR IEN | LITERAL | 25 | true |  | 
| vs:Input_Parameter-8994_02 | FM ADMIT DATE | LITERAL | 12 | true |  | 
| vs:Input_Parameter-8994_02 | PATIENT IEN | LITERAL | 25 | true |  | 
| vs:Input_Parameter-8994_02 | FUND CONTROL POINT | LITERAL | 6 | true |  | 
| vs:Input_Parameter-8994_02 | OBLIGATION NUMBER | LITERAL | 8 | true |  | 
| vs:Input_Parameter-8994_02 | NOTIFICATION IEN | LITERAL | 15 | true | IEN to file 162.2 (Notification) | 
| vs:Input_Parameter-8994_02 | EST AMOUNT | LITERAL | 15 | true | Estimated amount of 7078 Obligation. | 