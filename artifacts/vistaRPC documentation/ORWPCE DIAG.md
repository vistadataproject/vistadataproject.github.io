---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE DIAG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE DIAG{:/}
 tag | {::nomarkdown}DIAG{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of diagnosis codes for a clinic location.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get list of diagnoses for clinic
 Input Parameters | {::nomarkdown}CLINIC<br/>ORDATE{:/}
 Lines | ```{::nomarkdown} N ORI S ORI=0<br/> S:'+$G(ORDATE) ORDATE=DT<br/> D GETLST^IBDF18A(CLINIC,"DG SELECT ICD DIAGNOSIS CODES","LST",,,,ORDATE)<br/> F  S ORI=$O(LST(ORI)) Q:+ORI'>0  D<br/> . I $P(LST(ORI),U)]"" S $P(LST(ORI),U,10)=$$VLTD^ICDEX($$CODEBA^ICDEX($P(LST(ORI),U),80),DT)```{:/}




 Generated on January 13th 2017, 7:11:26 am