---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 HS SUBITEMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS SUBITEMS{:/}
 tag | {::nomarkdown}SUBITEM{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC expands a Laboratory Test panel to all it's sub-components forselection in the ADHOC Health Summary.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TEST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the pointer value to the Laboratory Test (#60) file of the panelto be expanded.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SUBITEM^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get Subitems for a Test Panel
 First comment | {::nomarkdown}<pre>RPC => ORWRP2 HS SUBITEMS</pre>{:/}
 Input parameters | {::nomarkdown}ORTEST{:/}
 Code | {::nomarkdown}  D SUBITEM^GMTSADH5(.ORY,ORTEST){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rReports.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}