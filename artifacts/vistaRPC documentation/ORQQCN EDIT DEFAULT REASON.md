---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN EDIT DEFAULT REASON 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN EDIT DEFAULT REASON{:/}
 tag | {::nomarkdown}EDITDRFR{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return value (see details there) determines if and when the consults'reason for request' can be edited.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SERVICE ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of consults service from file 123.5{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | EDITDRFR^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Allow editing of reason for request?
 Input parameters | {::nomarkdown}ORSVC{:/}
 Code | {::nomarkdown}  S ORY=$$REAF^GMRCDRFR(ORSVC){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}