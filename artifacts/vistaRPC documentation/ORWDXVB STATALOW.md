---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB STATALOW 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB STATALOW{:/}
 tag | {::nomarkdown}STATALOW{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check to see if user is allowed to order STAT orders through VBECS.Checks users with parameter: OR VBECS STAT USER{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | STATALOW^[ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 Method comment | Allow stat for ORES ORELSE users
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  S OROOT=$D(^XUSEC("ORES",DUZ))!($D(^XUSEC("ORELSE",DUZ))){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}