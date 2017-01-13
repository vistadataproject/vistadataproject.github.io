---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT FULLSSN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT FULLSSN{:/}
 tag | {::nomarkdown}FULLSSN{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Given an SSN in the format 999999999(P), return a list of matchingpatients.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a list of patients matching full SSN entered
 Input Parameters | {::nomarkdown}ID{:/}
 Lines | ```{::nomarkdown} N I,IEN<br/> S (I,IEN)=0<br/> F  S IEN=$O(^DPT("SSN",ID,IEN)) Q:'IEN  D<br/> . S I=I+1,LST(I)=IEN_U_$P(^DPT(IEN,0),U)_U_$$DOB^DPTLK1(IEN,2)_U_$$SSN^DPTLK1(IEN)  ; DG249```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SSN in the format '999999999(P)'.{:/} | 




 Generated on January 13th 2017, 7:11:27 am