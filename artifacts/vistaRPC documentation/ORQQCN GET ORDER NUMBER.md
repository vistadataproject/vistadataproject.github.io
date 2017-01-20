---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN GET ORDER NUMBER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET ORDER NUMBER{:/}
 tag | {::nomarkdown}GETORDER{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETORDER^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Return OERR order number for consult/procedure
 Input parameters | {::nomarkdown}GMRCO{:/}
 Code | {::nomarkdown}  I +$G(GMRCO)=0 S Y="-1" Q<br> S Y=$$ORIFN^GMRCUTL1(GMRCO){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Consults/rConsults.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas)
 [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}