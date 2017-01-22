---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT CWAD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT CWAD{:/}
 tag | {::nomarkdown}CWAD{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the CWAD flag(s) for a patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CWAD^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | returns CWAD flags for a patient
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  S Y=$$CWAD^ORQPT2(DFN){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}