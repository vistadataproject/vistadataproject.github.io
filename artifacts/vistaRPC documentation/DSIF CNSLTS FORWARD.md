---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS FORWARD 

 property | value 
--- | --- 
 label | DSIF CNSLTS FORWARD
 tag | FWRD
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | SINGLE VALUE
 description | This RPC allows for a Consult to be forwarded to a different Service. Cloned from ORQQCN FORWARD

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFCIEN | LITERAL |  | true | This is the Consult IEN that needs to be forwarded. | 
| vs:Input_Parameter-8994_02 | DSIFSVC | LITERAL |  | true | This is the Service to which the consult is being forwarded. | 
| vs:Input_Parameter-8994_02 | DSIFPROV | LITERAL |  | true | This is the provider responsible for forwarding the consult. | 
| vs:Input_Parameter-8994_02 | DSIFATTN | LITERAL |  |  | This is the provider whose attention the consult is sent to. Not required. | 
| vs:Input_Parameter-8994_02 | DSIFURG | LITERAL |  | true | This is the urgency of the request. | 
| vs:Input_Parameter-8994_02 | DSIFDT | LITERAL |  | true | This is the actual date and time of activity. | 
| vs:Input_Parameter-8994_02 | DSIFCOM | LIST |  | true | This is the comments associated with the forward consult request. | 