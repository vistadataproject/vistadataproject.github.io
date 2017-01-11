---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN RECEIVE 

 property | value 
--- | --- 
 label | ORQQCN RECEIVE
 tag | RC
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | SINGLE VALUE
 description | Test version of RECEIVE CONSULT for use with GUI.  (REV - 8/22/97)


### Method description

 property | value 
--- | --- 
 Method comment | Receive the consult into the service
 Leading comment lines | GMRCO - The internal file number of the consult from File 123,GMRCORNP - internal file number of the person receiving the request into the service,GMRCAD - date/time consult received into the service,ORCOM - Array containing comments related to receipt of the consult.,Passed as the following form :,ARRAY(1)="xxx xxx xxx",ARRAY(2)="XXX XXX",ARRAY(3)="XXX XXX xx", etc.,Comment is optional when consult is received.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CONSULT ID | LITERAL | 16 | true | Consult IEN from Consults file (123). | 
| CONSULT RECEIVER | LITERAL | 16 | true | Person receiving the consult, not necessarily the enterer of the action.Pointer to NEW PERSON file (200). | 




 ###### Generated on January 11th 2017, 6:39:42 am