---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN FORWARD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN FORWARD{:/}
 tag | {::nomarkdown}FR{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Forwards a consult to a subservice of the forwarding service, as definedin file 123.5{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult IEN from file 123{:/} | 
| {::nomarkdown}TO SERVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Service to which the consult is to be forwarded.  Pointer to file 123.5{:/} | 
| {::nomarkdown}FORWARDER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Person performing the forwarding action.  If null, defaults to user DUZ.Points to NEW PERSON file, #200.{:/} | 
| {::nomarkdown}ATTENTION OF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Person to whose attention the consult is being forwarded in thedestination service.  Pointer to NEW PERSON file, #200.{:/} | 
| {::nomarkdown}URGENCY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Urgency of the request, as defined in PROTOCOL file.{:/} | 
| {::nomarkdown}COMMENTS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Comments related to the forwarding action.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FR^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Forward consult/request to another service
 Input parameters | {::nomarkdown}GMRCO, GMRCSS, GMRCORNP, GMRCATTN, GMRCURGI, ORDATE, ORCOM{:/}
 First comment | {::nomarkdown}<pre>GMRCO - IEN of consult from File 123<br/>GMRCSS - Service to which consult is being forwarded<br/>GMRCATTN - Provider whose attention consult is sent to. Can be "" or pointer to File 200<br/>GMRCURGI - Urgency of the request<br/>GMRCORNP - Person who is responsible for forwarding the consult<br/>ORCOM is the comments array explaining the forwarding action<br/>     passed in as ORCOM(1)="Xxxx Xxxxx...",ORCOM(2)="Xxxx Xx Xxx...", ORCOM(3)="Xxxxx Xxx Xx...", etc.</pre>{:/}
 Code | {::nomarkdown}  S:+$G(GMRCATTN)=0 GMRCATTN=""<br> S Y=$$FR^GMRCGUIA(GMRCO,GMRCSS,GMRCORNP,GMRCATTN,GMRCURGI,.ORCOM,ORDATE){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}