---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN REMOVE MED RESULTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN REMOVE MED RESULTS{:/}
 tag | {::nomarkdown}REMOVE{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows removal of medicine results from a  procedure.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult (procedure) IEN in file 123.{:/} | 
| {::nomarkdown}Med Result{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Variable pointer to medicine result.{:/} | 
| {::nomarkdown}Date{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Date the result was removed.{:/} | 
| {::nomarkdown}Resp Person{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Pointer to file 200 for the person removing the result.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REMOVE^[ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 Method comment | Remove a medicine result from a consult
 Input parameters | {::nomarkdown}GMRCO, GMRCRSLT, GMRCAD, GMRCORNP{:/}
 First comment | {::nomarkdown}<pre>GMRCO - Internal file number of consult from File 123<br/>GMRCRSLT - pointer to medicine result<br/>GMRCAD - Date/Time medicine result was removed<br/>GMRCORNP - Provider who removed the result from the consult</pre>{:/}
 Code | {::nomarkdown}  Q:+$G(GMRCO)=0<br> D REMOVE^GMRCDIS(GMRCO,GMRCRSLT,GMRCAD,GMRCORNP){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}