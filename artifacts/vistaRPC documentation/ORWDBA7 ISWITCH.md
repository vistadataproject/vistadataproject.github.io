---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA7 ISWITCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA7 ISWITCH{:/}
 tag | {::nomarkdown}ISWITCH{:/}
 routine | [ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}CIDC RPCRETURNS 1 IF PATIENT HAS BILLABLE INSURANCERETURNS 0 IF PATIENT DOES NOT HAVE BILLABLE INSURANCE{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PATIENT'S IEN{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISWITCH^[ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
 Method comment | Return 0 if don't ask (no ins) or 1 to ask CIDC quest (yes ins)
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  S Y=$$CIDC^IBBAPI(DFN){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}