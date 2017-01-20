---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA7 GETIEN9 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA7 GETIEN9{:/}
 tag | {::nomarkdown}GETIEN9{:/}
 routine | [ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Receive external ICD9 number and return IEN{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICD9{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}External ICD9 number{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETIEN9^[ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
 Method comment | Return IEN for an ICD9 code (RPC: ORWDBA7 GETIEN9)
 Input parameters | {::nomarkdown}ICD9{:/}
 Code | {::nomarkdown}  S Y=+$$ICDDATA^ICDXCODE("DIAGNOSIS",ICD9,DT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBAGlobals.pas">BA/UBAGlobals.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}