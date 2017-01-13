---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQLR DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQLR DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the details of a lab order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return lab results for an order
 Input Parameters | {::nomarkdown}DFN<br/>ORDER{:/}
 Lines | ```
 N LRORD,SUB,IDT,I,DATE,FLAG,REF,ILST
 S LST(1)="No detailed information found.",ILST=0
 S LRORD=$G(^OR(100,+ORDER,4))
 Q:'$L(LRORD)
 K ^TMP("LRRR",$J)
 D RR^LR7OR1(DFN,LRORD,"","","","","")
 S SUB="" F  S SUB=$O(^TMP("LRRR",$J,DFN,SUB)) Q:SUB=""  D
 . S IDT=0 F  S IDT=$O(^TMP("LRRR",$J,DFN,SUB,IDT)) Q:'IDT  D
 . . S I=0 F  S I=$O(^TMP("LRRR",$J,DFN,SUB,IDT,I)) Q:'I  S X=^(I) D
 . . . S DATE=$$FMTE^XLFDT(9999999-IDT),FLAG=$P(X,U,3)
 . . . S REF=$P(X,U,5)
 . . . S:$L(REF) REF="("_$P(X,U,5)_")"
 . . . S X=$P(X,U,15)_U_$P(X,U,2)_U_$P(X,U,4)_U_FLAG_U_DATE_U_REF
 . . . S X=$$TABPIECE(X,"1,2,3,4,5,6","9,18,24,27,50")
 . . . S ILST=ILST+1,LST(ILST)=X
 K ^TMP("LRRR",$J)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from Patient File [#2]{:/} | 
| {::nomarkdown}ORDER NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}OE/RR order number from the Orders file [#100].{:/} | 




 Generated on January 13th 2017, 6:55:28 am