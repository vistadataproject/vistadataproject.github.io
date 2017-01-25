---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA4 GETBAUSR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA4 GETBAUSR{:/}
 tag | {::nomarkdown}GETBAUSR{:/}
 routine | [ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Gets the value of the Enable Billing Awareness By User parameter. The value returned will be 1 for Yes, Billing Awareness Enabled, and 0 for No, Billing Awareness Disabled.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the interanl ID number of the clinicial who is being checked for the value of the Enable Billing Awareness Parameter.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETBAUSR^[ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
 Method comment | GUI RPC CALL
 Input parameters | {::nomarkdown}ORCIEN{:/}
 First comment | {::nomarkdown}<pre>Get Billing Awareness By User parameter value<br/>Gets and returns the value of the Enabled Billing Awareness By User<br/>parameter assigned to a provider.<br/>Input Variable:<br/>  ORCIEN    Ordering Clinician's Internal Entry Number<br/>Output Variable:<br/>  Y         Parameter value, 1 if enabled, 0 if disabled</pre>{:/}
 Code | {::nomarkdown}  S Y=$$GET^XPAR(ORCIEN_";VA(200,","OR BILLING AWARENESS BY USER",1,"Q")<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}