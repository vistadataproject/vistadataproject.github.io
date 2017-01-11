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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFCIEN | LITERAL |  | true | This is the Consult IEN that needs to be forwarded. | 
| DSIFSVC | LITERAL |  | true | This is the Service to which the consult is being forwarded. | 
| DSIFPROV | LITERAL |  | true | This is the provider responsible for forwarding the consult. | 
| DSIFATTN | LITERAL |  |  | This is the provider whose attention the consult is sent to. Not required. | 
| DSIFURG | LITERAL |  | true | This is the urgency of the request. | 
| DSIFDT | LITERAL |  | true | This is the actual date and time of activity. | 
| DSIFCOM | LIST |  | true | This is the comments associated with the forward consult request. | 




 Generated on January 11th 2017, 7:15:04 am