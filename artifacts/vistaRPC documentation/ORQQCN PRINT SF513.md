---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN PRINT SF513 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN PRINT SF513{:/}
 tag | {::nomarkdown}PRT513{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PRT513^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Print SF513 to VistA device from GUI
 Input parameters | {::nomarkdown}GMRCO, GMRCCHT, GMRCDEV{:/}
 Code | {::nomarkdown}  N ORSTATUS<br> D EN^GMRCP5(GMRCO,GMRCCHT,GMRCDEV,.ORSTATUS)<br> S Y=ORSTATUS{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}