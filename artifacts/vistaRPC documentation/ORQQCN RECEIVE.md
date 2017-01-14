---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN RECEIVE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN RECEIVE{:/}
 tag | {::nomarkdown}RC{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Test version of RECEIVE CONSULT for use with GUI.  (REV - 8/22/97){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult IEN from Consults file (123).{:/} | 
| {::nomarkdown}CONSULT RECEIVER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Person receiving the consult, not necessarily the enterer of the action.Pointer to NEW PERSON file (200).{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RC^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Receive the consult into the service
 First comment | {::nomarkdown}GMRCO - The internal file number of the consult from File 123<br/>GMRCORNP - internal file number of the person receiving the request into the service<br/>GMRCAD - date/time consult received into the service<br/>ORCOM - Array containing comments related to receipt of the consult.<br/>Passed as the following form :<br/>ARRAY(1)="xxx xxx xxx",ARRAY(2)="XXX XXX",ARRAY(3)="XXX XXX xx", etc.<br/>Comment is optional when consult is received.{:/}
 Input parameters | {::nomarkdown}GMRCO<br/>GMRCORNP<br/>GMRCAD<br/>ORCOM{:/}
 Code | ```  S Y=$$RC^GMRCGUIA(GMRCO,GMRCORNP,GMRCAD,.ORCOM)```




 Generated on January 14th 2017, 7:26:35 am