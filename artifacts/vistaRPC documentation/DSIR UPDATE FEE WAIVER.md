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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | IEN FROM 19620 (ROI INSTANCE FILE) | 
| vs:Input_Parameter-8994_02 | FWCLERK | LITERAL |  | true | ID FROM FILE 200 (NEW PERSON FILE) | 
| vs:Input_Parameter-8994_02 | FWRQST | LITERAL |  | true | FEE WAIVER REQUESTED 0=TRUE, 1=FALSE | 
| vs:Input_Parameter-8994_02 | FWRQSTDT | LITERAL |  | true | FEE WAIVER REQUESTED DATE | 
| vs:Input_Parameter-8994_02 | FWADJ | LITERAL |  | true | FEE WAIVER ADJUDICATED 0=TRUE, 1=FALSE | 
| vs:Input_Parameter-8994_02 | FWGRANT | LITERAL |  | true | FEE WAIVER GRANTED 0=TRUE, 1=FALSE | 
| vs:Input_Parameter-8994_02 | FWADJDT | LITERAL |  | true | FEE WAIVER ADJUDICATED DATE | 