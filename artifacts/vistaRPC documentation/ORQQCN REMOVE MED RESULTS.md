---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN REMOVE MED RESULTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN REMOVE MED RESULTS{:/}
 tag | {::nomarkdown}REMOVE{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows removal of medicine results from a  procedure.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult (procedure) IEN in file 123.{:/} | 
| {::nomarkdown}Med Result{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Variable pointer to medicine result.{:/} | 
| {::nomarkdown}Date{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Date the result was removed.{:/} | 
| {::nomarkdown}Resp Person{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Pointer to file 200 for the person removing the result.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | REMOVE^[ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 Method comment | Remove a medicine result from a consult
 First comment | {::nomarkdown}GMRCO - Internal file number of consult from File 123<br/>GMRCRSLT - pointer to medicine result<br/>GMRCAD - Date/Time medicine result was removed<br/>GMRCORNP - Provider who removed the result from the consult{:/}
 Input parameters | {::nomarkdown}GMRCO<br/>GMRCRSLT<br/>GMRCAD<br/>GMRCORNP{:/}
 Code | ```  Q:+$G(GMRCO)=0
 D REMOVE^GMRCDIS(GMRCO,GMRCRSLT,GMRCAD,GMRCORNP)```




 Generated on January 14th 2017, 7:26:35 am