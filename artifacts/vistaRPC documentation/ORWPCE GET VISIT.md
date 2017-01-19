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

 property | value 
 --- | --- 
 Method | GETVISIT^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Get the visit IEN
 Input parameters | {::nomarkdown}IEN<br>DFN<br>VSITSTR{:/}
 Code | {::nomarkdown}  I +$G(IEN)<1 D  I 1<br> .S VISIT=$$GETENC^PXAPI(DFN,$P(VSITSTR,";",2),$P(VSITSTR,";"))<br> E  S VISIT=$P(^TIU(8925,IEN,0),U,3){:/}


### CPRS

[Encounter/rPCE.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}