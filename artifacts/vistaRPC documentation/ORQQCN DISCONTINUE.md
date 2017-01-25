---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN DISCONTINUE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN DISCONTINUE{:/}
 tag | {::nomarkdown}DC{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Discontinue a consult or deny a consult request.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal file number of the consult/request.{:/} | 
| {::nomarkdown}PROVIDER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal file number of the person discontinuing/denying the consult.Points to NEW PERSON file (#200){:/} | 
| {::nomarkdown}DATE OF ACTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date of the discontinuance/denial of the consult.{:/} | 
| {::nomarkdown}ACTION TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}'DC' for discontinue, 'DY' for deny{:/} | 
| {::nomarkdown}COMMENTS{:/} | {::nomarkdown}WORD PROCESSING{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Array of comments related to the discontinuance/denial of the consult.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DC^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Discontinue or Deny a consult
 Input parameters | {::nomarkdown}GMRCO, GMRCORNP, GMRCAD, GMRCACTM, ORCOM{:/}
 First comment | {::nomarkdown}<pre>GMRCO - Internal file number of consult from File 123<br/>GMRCORNP - Provider who Discontinued or Denied consult<br/>GMRCAD - Date/Time Consult was discontinued or denied.<br/>GMRCACTM - If consult is 'DENIED' passed in as 'DY'; if consult is Discontinued passed in as 'DC'.<br/>ORCOM - Array containing explanation of why consult was denied. Passed as the following form :<br/> ARRAY(1)="xxx xxx xxx",ARRAY(2)="XXX XXX",ARRAY(3)="XXX XXX xx", etc.<br/> Comment is a required field when consult is denied or discontinued.</pre>{:/}
 Code | {::nomarkdown}  S Y=$$DC^GMRCGUIA(GMRCO,GMRCORNP,GMRCAD,GMRCACTM,.ORCOM){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}