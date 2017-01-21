---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE DIAG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE DIAG{:/}
 tag | {::nomarkdown}DIAG{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of diagnosis codes for a clinic location.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DIAG^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of diagnoses for clinic
 Input parameters | {::nomarkdown}CLINIC, ORDATE{:/}
 Code | {::nomarkdown}  N ORI S ORI=0<br> S:'+$G(ORDATE) ORDATE=DT<br> D GETLST^IBDF18A(CLINIC,"DG SELECT ICD DIAGNOSIS CODES","LST",,,,ORDATE)<br> F  S ORI=$O(LST(ORI)) Q:+ORI'>0  D<br> . I $P(LST(ORI),U)]"" S $P(LST(ORI),U,10)=$$VLTD^ICDEX($$CODEBA^ICDEX($P(LST(ORI),U),80),DT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/fBALocalDiagnoses.pas">BA/fBALocalDiagnoses.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/fBAOptionsDiagnoses.pas">BA/fBAOptionsDiagnoses.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}