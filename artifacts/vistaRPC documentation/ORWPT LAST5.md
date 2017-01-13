---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT LAST5 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT LAST5{:/}
 tag | {::nomarkdown}LAST5{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patients matching the string of Last Name Initial_Last 4SSN (Initial/Last 4 look-up to PATIENT file).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a list of patients matching A9999 identifiers
 Input Parameters | {::nomarkdown}ID{:/}
 Lines | {::nomarkdown} N I,IEN,XREF<br/> S (I,IEN)=0,XREF=$S($L(ID)=5:"BS5",1:"BS")<br/> F  S IEN=$O(^DPT(XREF,ID,IEN)) Q:'IEN  D<br/> . S I=I+1,LST(I)=IEN_U_$P(^DPT(IEN,0),U)_U_$$DOB^DPTLK1(IEN,2)_U_$$SSN^DPTLK1(IEN)  ; DG249{:/}




 Generated on January 13th 2017, 7:15:27 am