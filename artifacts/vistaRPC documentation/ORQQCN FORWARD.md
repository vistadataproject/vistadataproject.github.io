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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CONSULT ID | LITERAL | 16 | true | Consult IEN from file 123 | 
| TO SERVICE | LITERAL | 16 | true | Service to which the consult is to be forwarded.  Pointer to file 123.5 | 
| FORWARDER | LITERAL | 16 | true | Person performing the forwarding action.  If null, defaults to user DUZ.Points to NEW PERSON file, #200. | 
| ATTENTION OF | LITERAL | 16 |  | Person to whose attention the consult is being forwarded in thedestination service.  Pointer to NEW PERSON file, #200. | 
| URGENCY | LITERAL | 16 |  | Urgency of the request, as defined in PROTOCOL file. | 
| COMMENTS | LIST |  |  | Comments related to the forwarding action. | 