---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN FORWARD 

 property | value 
--- | --- 
 label | ORQQCN FORWARD
 tag | FR
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | SINGLE VALUE
 description | Forwards a consult to a subservice of the forwarding service, as definedin file 123.5

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CONSULT ID | LITERAL | 16 | true | Consult IEN from file 123 | 
| vs:Input_Parameter-8994_02 | TO SERVICE | LITERAL | 16 | true | Service to which the consult is to be forwarded.  Pointer to file 123.5 | 
| vs:Input_Parameter-8994_02 | FORWARDER | LITERAL | 16 | true | Person performing the forwarding action.  If null, defaults to user DUZ.Points to NEW PERSON file, #200. | 
| vs:Input_Parameter-8994_02 | ATTENTION OF | LITERAL | 16 |  | Person to whose attention the consult is being forwarded in thedestination service.  Pointer to NEW PERSON file, #200. | 
| vs:Input_Parameter-8994_02 | URGENCY | LITERAL | 16 |  | Urgency of the request, as defined in PROTOCOL file. | 
| vs:Input_Parameter-8994_02 | COMMENTS | LIST |  |  | Comments related to the forwarding action. | 