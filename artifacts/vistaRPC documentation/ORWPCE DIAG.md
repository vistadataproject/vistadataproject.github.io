---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE DIAG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE DIAG{:/}
 tag | {::nomarkdown}DIAG{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of diagnosis codes for a clinic location.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DIAG^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of diagnoses for clinic
 Input parameters | {::nomarkdown}CLINIC<br/>ORDATE{:/}
 Code | ```  N ORI S ORI=0
 S:'+$G(ORDATE) ORDATE=DT
 D GETLST^IBDF18A(CLINIC,"DG SELECT ICD DIAGNOSIS CODES","LST",,,,ORDATE)
 F  S ORI=$O(LST(ORI)) Q:+ORI'>0  D
 . I $P(LST(ORI),U)]"" S $P(LST(ORI),U,10)=$$VLTD^ICDEX($$CODEBA^ICDEX($P(LST(ORI),U),80),DT)```




 Generated on January 14th 2017, 7:26:35 am