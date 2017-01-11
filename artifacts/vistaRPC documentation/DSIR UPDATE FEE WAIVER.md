---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR UPDATE FEE WAIVER 

 property | value 
--- | --- 
 label | DSIR UPDATE FEE WAIVER
 tag | UPDATEFW
 routine | [DSIRBIL0](http://code.osehra.org/dox/Routine_DSIRBIL0_source.html)
 return value type | SINGLE VALUE
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL |  | true | IEN FROM 19620 (ROI INSTANCE FILE) | 
| FWCLERK | LITERAL |  | true | ID FROM FILE 200 (NEW PERSON FILE) | 
| FWRQST | LITERAL |  | true | FEE WAIVER REQUESTED 0=TRUE, 1=FALSE | 
| FWRQSTDT | LITERAL |  | true | FEE WAIVER REQUESTED DATE | 
| FWADJ | LITERAL |  | true | FEE WAIVER ADJUDICATED 0=TRUE, 1=FALSE | 
| FWGRANT | LITERAL |  | true | FEE WAIVER GRANTED 0=TRUE, 1=FALSE | 
| FWADJDT | LITERAL |  | true | FEE WAIVER ADJUDICATED DATE | 