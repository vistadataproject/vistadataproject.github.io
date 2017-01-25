---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA1 BASTATUS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 BASTATUS{:/}
 tag | {::nomarkdown}BASTATUS{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Billing Awareness RPC.Returns 0 if BA functionality is off or 1 if BA functionality is on.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | BASTATUS^[ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 Method comment | RPC to retrieve the status of the Billing Awareness software
 First comment | {::nomarkdown}<pre>   Y  =  Returned Value (1=BA usable, 0=BA not-usable)<br/> Check for installation of CIDC ancillary build</pre>{:/}
 Code | {::nomarkdown}  S Y=$D(^XPD(9.7,"B","PX CLINICAL INDICATOR DATA CAPTURE 1.0"))<br> Q:'Y<br> S Y=$$CHKPS1^ORWDBA5{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}