---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN ASSIGNABLE MED RESULTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ASSIGNABLE MED RESULTS{:/}
 tag | {::nomarkdown}GETMED{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of medicine results that can be attached to a procedure.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult (procedure) IEN in file 123.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETMED^[ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 Method comment | Return available med results for proc request
 Input parameters | {::nomarkdown}GMRCO{:/}
 Code | {::nomarkdown}  Q:+$G(GMRCO)=0<br> D GETMED^GMRCGUIU(GMRCO,.ORY){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Consults/rConsults.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}