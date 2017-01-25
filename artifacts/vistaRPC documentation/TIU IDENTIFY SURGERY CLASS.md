---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU IDENTIFY SURGERY CLASS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU IDENTIFY SURGERY CLASS{:/}
 tag | {::nomarkdown}SURGCLAS{:/}
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the record number of the class identified by the CLNAMEparameter in the TIU DOCUMENT DEFINITION file (#8925.1).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLNAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the name (ASCII LITERAL) of the Class for which the callingapplication needs an IEN.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SURGCLAS^[TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 Method comment | RPC to identify class 
 Input parameters | {::nomarkdown}CLNAME{:/}
 First comment | {::nomarkdown}<pre> CLNAME = "SURGICAL REPORTS" or "PROCEDURE REPORTS (NON-O.R.)"</pre>{:/}
 Code | {::nomarkdown}  S CLNAME=$G(CLNAME,"SURGICAL REPORTS")<br> S Y=$$CLASS^TIUSROI(CLNAME){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}