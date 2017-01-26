---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE IMM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE IMM{:/}
 tag | {::nomarkdown}IMM{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of immunizations for a clinic.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | IMM^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of immunizations for clinic
 Input parameters | {::nomarkdown}CLINIC{:/}
 Code | {::nomarkdown}  D GETLST^IBDF18A(CLINIC,"PX SELECT IMMUNIZATIONS","LST"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}