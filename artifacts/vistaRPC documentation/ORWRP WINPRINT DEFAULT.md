---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP WINPRINT DEFAULT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP WINPRINT DEFAULT{:/}
 tag | {::nomarkdown}WINDFLT{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns whether the Windows printer is set as the default for the user. {:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | WINDFLT^[ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 Method comment | Windows printer as default?
 Code | {::nomarkdown}  S ORY=+$$GET^XPAR("ALL","ORWDP WINPRINT DEFAULT"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}