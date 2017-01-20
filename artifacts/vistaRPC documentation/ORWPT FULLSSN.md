---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT FULLSSN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT FULLSSN{:/}
 tag | {::nomarkdown}FULLSSN{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Given an SSN in the format 999999999(P), return a list of matchingpatients.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SSN in the format '999999999(P)'.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FULLSSN^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Return a list of patients matching full SSN entered
 Input parameters | {::nomarkdown}ID{:/}
 Code | {::nomarkdown}  N I,IEN<br> S (I,IEN)=0<br> F  S IEN=$O(^DPT("SSN",ID,IEN)) Q:'IEN  D<br> . S I=I+1,LST(I)=IEN_U_$P(^DPT(IEN,0),U)_U_$$DOB^DPTLK1(IEN,2)_U_$$SSN^DPTLK1(IEN)  ; DG249{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}