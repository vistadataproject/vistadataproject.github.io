---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPP LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPP LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQPP](http://code.osehra.org/dox/Routine_ORQQPP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active Patient Postings for a patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID (DFN) from Patient File [#2].{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LIST^[ORQQPP](http://code.osehra.org/dox/Routine_ORQQPP_source.html)
 Method comment | return pt's patient posting list
 Input parameters | {::nomarkdown}ORPT{:/}
 Code | {::nomarkdown}  Q:'$L($G(ORPT))<br> K ^TMP("TIUPPCV",$J)<br> D ENCOVER^TIUPP3(ORPT)<br> I MSG'=0 S ORY(1)="^No patient postings found."<br> N I,J,X,FMDT,MSG S I=0,J=1,X=""<br> F  S I=$O(^TMP("TIUPPCV",$J,I)) Q:I<1  D<br> .S X=^(I),ORY(J)=$P(X,U)_U_$P(X,U,3)_U_$P(X,U,5),J=J+1<br> K ^TMP("TIUPPCV",$J){:/}


### CPRS

[rCover.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}