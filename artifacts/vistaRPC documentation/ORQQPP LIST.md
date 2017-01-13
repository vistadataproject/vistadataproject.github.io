---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPP LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPP LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQPP](http://code.osehra.org/dox/Routine_ORQQPP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active Patient Postings for a patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return pt's patient posting list
 Input Parameters | {::nomarkdown}ORPT{:/}
 Lines | ```
 Q:'$L($G(ORPT))
 K ^TMP("TIUPPCV",$J)
 D ENCOVER^TIUPP3(ORPT)
 I MSG'=0 S ORY(1)="^No patient postings found."
 N I,J,X,FMDT,MSG S I=0,J=1,X=""
 F  S I=$O(^TMP("TIUPPCV",$J,I)) Q:I<1  D
 .S X=^(I),ORY(J)=$P(X,U)_U_$P(X,U,3)_U_$P(X,U,5),J=J+1
 K ^TMP("TIUPPCV",$J)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID (DFN) from Patient File [#2].{:/} | 




 Generated on January 13th 2017, 6:55:28 am