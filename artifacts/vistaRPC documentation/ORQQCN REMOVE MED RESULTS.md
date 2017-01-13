---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN REMOVE MED RESULTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN REMOVE MED RESULTS{:/}
 tag | {::nomarkdown}REMOVE{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows removal of medicine results from a  procedure.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Remove a medicine result from a consult
 Leading comment lines | GMRCO - Internal file number of consult from File 123
GMRCRSLT - pointer to medicine result
GMRCAD - Date/Time medicine result was removed
GMRCORNP - Provider who removed the result from the consult

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult (procedure) IEN in file 123.{:/} | 
| {::nomarkdown}Med Result{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Variable pointer to medicine result.{:/} | 
| {::nomarkdown}Date{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Date the result was removed.{:/} | 
| {::nomarkdown}Resp Person{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Pointer to file 200 for the person removing the result.{:/} | 




 Generated on January 13th 2017, 5:52:13 am