---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN RECEIVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN RECEIVE{:/}
 tag | {::nomarkdown}RC{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Test version of RECEIVE CONSULT for use with GUI.  (REV - 8/22/97){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult IEN from Consults file (123).{:/} | 
| {::nomarkdown}CONSULT RECEIVER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Person receiving the consult, not necessarily the enterer of the action.Pointer to NEW PERSON file (200).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RC^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Receive the consult into the service
 Input parameters | {::nomarkdown}GMRCO, GMRCORNP, GMRCAD, ORCOM{:/}
 First comment | {::nomarkdown}<pre>GMRCO - The internal file number of the consult from File 123<br/>GMRCORNP - internal file number of the person receiving the request into the service<br/>GMRCAD - date/time consult received into the service<br/>ORCOM - Array containing comments related to receipt of the consult.<br/>Passed as the following form :<br/> ARRAY(1)="xxx xxx xxx",ARRAY(2)="XXX XXX",ARRAY(3)="XXX XXX xx", etc.<br/> Comment is optional when consult is received.</pre>{:/}
 Code | {::nomarkdown}  S Y=$$RC^GMRCGUIA(GMRCO,GMRCORNP,GMRCAD,.ORCOM){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}