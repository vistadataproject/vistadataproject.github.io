---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN ATTACH MED RESULTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ATTACH MED RESULTS{:/}
 tag | {::nomarkdown}MEDCOMP{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows a med result to be attached to a procedure request.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult (procedure) IEN in file 123.{:/} | 
| {::nomarkdown}Result pointer{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Variable pointer to medicine result.{:/} | 
| {::nomarkdown}Date{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date the result was attached.{:/} | 
| {::nomarkdown}date{:/} |  |  |  |  | 
| {::nomarkdown}Resp Person{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Pointer to file 200, for the person attaching the result.{:/} | 
| {::nomarkdown}Alerts to{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}254{:/} |  | {::nomarkdown}Semicolon-delimited list of user DUZs to send alerts to for this action.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | MEDCOMP^[ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 Method comment | Attach a medicine result to a consult
 First comment | {::nomarkdown}<pre>GMRCO - Internal file number of consult from File 123<br/>GMRCRSLT - pointer to medicine result<br/>GMRCAD - Date/Time Consult was resulted.<br/>GMRCORNP - Provider who attached the result to the consult<br/>ORALTO - array of alert recipient IENs</pre>{:/}
 Input parameters | {::nomarkdown}GMRCO<br>GMRCRSLT<br>GMRCAD<br>GMRCORNP<br>ORALTO{:/}
 Code | {::nomarkdown}  Q:+$G(GMRCO)=0<br> N ORDUZ,X,I<br> I $G(ORALTO)'="" D<br> .F I=1:1  S X=$P(ORALTO,";",I) Q:X=""  S ORDUZ(X)=""<br> D MEDCOMP^GMRCMED(GMRCO,GMRCRSLT,GMRCAD,GMRCORNP,.ORDUZ){:/}


### CPRS

[Consults/rConsults.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}