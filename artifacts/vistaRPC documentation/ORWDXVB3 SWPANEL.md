---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB3 SWPANEL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB3 SWPANEL{:/}
 tag | {::nomarkdown}SWPANEL{:/}
 routine | [ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC checks the value of the parameter OR VBECS DIAGNOSTIC PANEL 1STto determine the location of the Diagnostic and Component panels on theVBECS order dialog.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SWPANEL^[ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
 Method comment | Switch the location of the Diagnostic and Component panels on VBECS Order Dialog
 Code | {::nomarkdown}  S OROOT=+$$GET^XPAR("ALL","OR VBECS DIAGNOSTIC PANEL 1ST",1,"I")<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}