---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQLR DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQLR DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the details of a lab order.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from Patient File [#2]{:/} | 
| {::nomarkdown}ORDER NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}OE/RR order number from the Orders file [#100].{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DETAIL^[ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
 Method comment | return lab results for an order
 Input parameters | {::nomarkdown}DFN<br>ORDER{:/}
 Code | {::nomarkdown}  N LRORD,SUB,IDT,I,DATE,FLAG,REF,ILST<br> S LST(1)="No detailed information found.",ILST=0<br> S LRORD=$G(^OR(100,+ORDER,4))<br> Q:'$L(LRORD)<br> K ^TMP("LRRR",$J)<br> D RR^LR7OR1(DFN,LRORD,"","","","","")<br> S SUB="" F  S SUB=$O(^TMP("LRRR",$J,DFN,SUB)) Q:SUB=""  D<br> . S IDT=0 F  S IDT=$O(^TMP("LRRR",$J,DFN,SUB,IDT)) Q:'IDT  D<br> . . S I=0 F  S I=$O(^TMP("LRRR",$J,DFN,SUB,IDT,I)) Q:'I  S X=^(I) D<br> . . . S DATE=$$FMTE^XLFDT(9999999-IDT),FLAG=$P(X,U,3)<br> . . . S REF=$P(X,U,5)<br> . . . S:$L(REF) REF="("_$P(X,U,5)_")"<br> . . . S X=$P(X,U,15)_U_$P(X,U,2)_U_$P(X,U,4)_U_FLAG_U_DATE_U_REF<br> . . . S X=$$TABPIECE(X,"1,2,3,4,5,6","9,18,24,27,50")<br> . . . S ILST=ILST+1,LST(ILST)=X<br> K ^TMP("LRRR",$J){:/}


### CPRS

[NOT OSEHRA CPRS]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}