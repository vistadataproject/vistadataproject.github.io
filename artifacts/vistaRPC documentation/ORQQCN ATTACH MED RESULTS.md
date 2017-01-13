---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN ATTACH MED RESULTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ATTACH MED RESULTS{:/}
 tag | {::nomarkdown}MEDCOMP{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows a med result to be attached to a procedure request.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Attach a medicine result to a consult
 Input Parameters | {::nomarkdown}GMRCO<br/>GMRCRSLT<br/>GMRCAD<br/>GMRCORNP<br/>ORALTO{:/}
 Lines | ```
 Q:+$G(GMRCO)=0
 N ORDUZ,X,I
 I $G(ORALTO)'="" D
 .F I=1:1  S X=$P(ORALTO,";",I) Q:X=""  S ORDUZ(X)=""
 D MEDCOMP^GMRCMED(GMRCO,GMRCRSLT,GMRCAD,GMRCORNP,.ORDUZ)```
 Leading comment lines | {::nomarkdown}GMRCO - Internal file number of consult from File 123<br/>GMRCRSLT - pointer to medicine result<br/>GMRCAD - Date/Time Consult was resulted.<br/>GMRCORNP - Provider who attached the result to the consult<br/>ORALTO - array of alert recipient IENs{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult (procedure) IEN in file 123.{:/} | 
| {::nomarkdown}Result pointer{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Variable pointer to medicine result.{:/} | 
| {::nomarkdown}Date{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date the result was attached.{:/} | 
| {::nomarkdown}date{:/} |  |  |  |  | 
| {::nomarkdown}Resp Person{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Pointer to file 200, for the person attaching the result.{:/} | 
| {::nomarkdown}Alerts to{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}254{:/} |  | {::nomarkdown}Semicolon-delimited list of user DUZs to send alerts to for this action.{:/} | 




 Generated on January 13th 2017, 6:55:29 am