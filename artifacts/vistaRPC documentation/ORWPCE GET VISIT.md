---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET VISIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET VISIT{:/}
 tag | {::nomarkdown}GETVISIT{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the visit IEN.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETVISIT^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Get the visit IEN
 Input parameters | {::nomarkdown}IEN, DFN, VSITSTR{:/}
 Code | {::nomarkdown}  I +$G(IEN)<1 D  I 1<br> .S VISIT=$$GETENC^PXAPI(DFN,$P(VSITSTR,";",2),$P(VSITSTR,";"))<br> E  S VISIT=$P(^TIU(8925,IEN,0),U,3){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}