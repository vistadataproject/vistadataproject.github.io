---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT LAST5 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT LAST5{:/}
 tag | {::nomarkdown}LAST5{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patients matching the string of Last Name Initial_Last 4SSN (Initial/Last 4 look-up to PATIENT file).{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LAST5^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Return a list of patients matching A9999 identifiers
 Input parameters | {::nomarkdown}ID{:/}
 Code | {::nomarkdown}  N I,IEN,XREF<br> S (I,IEN)=0,XREF=$S($L(ID)=5:"BS5",1:"BS")<br> F  S IEN=$O(^DPT(XREF,ID,IEN)) Q:'IEN  D<br> . S I=I+1,LST(I)=IEN_U_$P(^DPT(IEN,0),U)_U_$$DOB^DPTLK1(IEN,2)_U_$$SSN^DPTLK1(IEN)  ; DG249{:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}