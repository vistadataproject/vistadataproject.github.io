---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN FORWARD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN FORWARD{:/}
 tag | {::nomarkdown}FR{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Forwards a consult to a subservice of the forwarding service, as definedin file 123.5{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Forward consult/request to another service
 Input Parameters | {::nomarkdown}GMRCO<br/>GMRCSS<br/>GMRCORNP<br/>GMRCATTN<br/>GMRCURGI<br/>ORDATE<br/>ORCOM{:/}
 Lines | {::nomarkdown} S:+$G(GMRCATTN)=0 GMRCATTN=""<br/> S Y=$$FR^GMRCGUIA(GMRCO,GMRCSS,GMRCORNP,GMRCATTN,GMRCURGI,.ORCOM,ORDATE){:/}
 Leading comment lines | {::nomarkdown}GMRCO - IEN of consult from File 123<br/>GMRCSS - Service to which consult is being forwarded<br/>GMRCATTN - Provider whose attention consult is sent to. Can be "" or pointer to File 200<br/>GMRCURGI - Urgency of the request<br/>GMRCORNP - Person who is responsible for forwarding the consult<br/>ORCOM is the comments array explaining the forwarding action<br/>passed in as ORCOM(1)="Xxxx Xxxxx...",ORCOM(2)="Xxxx Xx Xxx...", ORCOM(3)="Xxxxx Xxx Xx...", etc.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult IEN from file 123{:/} | 
| {::nomarkdown}TO SERVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Service to which the consult is to be forwarded.  Pointer to file 123.5{:/} | 
| {::nomarkdown}FORWARDER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Person performing the forwarding action.  If null, defaults to user DUZ.Points to NEW PERSON file, #200.{:/} | 
| {::nomarkdown}ATTENTION OF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Person to whose attention the consult is being forwarded in thedestination service.  Pointer to NEW PERSON file, #200.{:/} | 
| {::nomarkdown}URGENCY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Urgency of the request, as defined in PROTOCOL file.{:/} | 
| {::nomarkdown}COMMENTS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Comments related to the forwarding action.{:/} | 




 Generated on January 13th 2017, 7:15:27 am