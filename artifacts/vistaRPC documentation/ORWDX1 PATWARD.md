---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX1 PATWARD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX1 PATWARD{:/}
 tag | {::nomarkdown}PATWARD{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PATWARD^[ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N TEMP<br> S ORY=""<br> I $G(^DPT(DFN,.1))="" Q<br> S TEMP=^DPT(DFN,.1)<br> S ORY=TEMP_U_+$G(^DIC(42,+$O(^DIC(42,"B",TEMP,0)),44)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fClinicWardMeds.pas">fClinicWardMeds.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fPrintLocation.pas">fPrintLocation.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}