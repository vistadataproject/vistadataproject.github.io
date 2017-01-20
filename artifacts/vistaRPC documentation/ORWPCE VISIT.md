---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE VISIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE VISIT{:/}
 tag | {::nomarkdown}VISIT{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of visit types for a clinic.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VISIT^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of visit types for clinic
 Input parameters | {::nomarkdown}CLINIC<br>ORDATE{:/}
 Code | {::nomarkdown}  S:'+$G(ORDATE) ORDATE=DT<br> D GETLST^IBDF18A(CLINIC,"DG SELECT VISIT TYPE CPT PROCEDURES","LST",,,,ORDATE){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Encounter/rPCE.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}