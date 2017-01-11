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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FB VENDOR IEN | LITERAL | 25 | true |  | 
| FM ADMIT DATE | LITERAL | 12 | true |  | 
| PATIENT IEN | LITERAL | 25 | true |  | 
| FUND CONTROL POINT | LITERAL | 6 | true |  | 
| OBLIGATION NUMBER | LITERAL | 8 | true |  | 
| NOTIFICATION IEN | LITERAL | 15 | true | IEN to file 162.2 (Notification) | 
| EST AMOUNT | LITERAL | 15 | true | Estimated amount of 7078 Obligation. | 




 ###### Generated on January 11th 2017, 6:39:43 am