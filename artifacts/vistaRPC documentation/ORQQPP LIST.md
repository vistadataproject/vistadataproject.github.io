---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPP LIST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPP LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQPP](http://code.osehra.org/dox/Routine_ORQQPP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active Patient Postings for a patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID (DFN) from Patient File [#2].{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LIST^[ORQQPP](http://code.osehra.org/dox/Routine_ORQQPP_source.html)
 Method comment | return pt's patient posting list
 Input parameters | {::nomarkdown}ORPT{:/}
 Code | ```  Q:'$L($G(ORPT))
 K ^TMP("TIUPPCV",$J)
 D ENCOVER^TIUPP3(ORPT)
 I MSG'=0 S ORY(1)="^No patient postings found."
 N I,J,X,FMDT,MSG S I=0,J=1,X=""
 F  S I=$O(^TMP("TIUPPCV",$J,I)) Q:I<1  D
 .S X=^(I),ORY(J)=$P(X,U)_U_$P(X,U,3)_U_$P(X,U,5),J=J+1
 K ^TMP("TIUPPCV",$J)```




 Generated on January 14th 2017, 7:26:35 am