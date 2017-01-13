---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLEX GETI10DX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWLEX GETI10DX{:/}
 tag | {::nomarkdown}GETI10DX{:/}
 routine | [ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call wraps the Lexicon API $$DIAGSRCH^LEX10CS to satisfy the requirements of the ICD-10-CM diagnosis search.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC ORWLEX GET10DX
 Input Parameters | {::nomarkdown}ORX<br/>ORDT{:/}
 Lines | ```
 N FILTER,PSFIL S (FILTER,PSFIL)=""
 S:+$G(ORDT)'>0 ORDT=DT
 S ORX=$$UP^XLFSTR(ORX)
 I ORX[" NOT " D
 . N I,XNOT,XCT,X1,X2,FIL
 . S XCT=$L(ORX," NOT ")
 . F I=2:1:XCT S XNOT=$P(ORX," NOT ",I) Q:$L(XNOT)=0  D
 .. S FILTER=FILTER_"I $$UP^XLFSTR(^LEX(757.01,+Y,0))'["""_XNOT_""" "
 .. S PSFIL=PSFIL_"I $$UP^XLFSTR(ORTXT)'["""_XNOT_""" "
 . I $E(FILTER,$L(FILTER))=" " S FILTER=$E(FILTER,1,$L(FILTER)-1)
 . I $E(PSFIL,$L(PSFIL))=" " S PSFIL=$E(PSFIL,1,$L(PSFIL)-1)
 . S XCT=$L(ORX," ")
 . F I=1:1:XCT S X1=$P(ORX," ",I) D
 .. I X1'="NOT" S X2=$G(X2)_X1_" " Q
 .. I X1="NOT" S I=I+1
 . S ORX=X2
 . S FIL=$G(^TMP("LEXSCH",$J,"FIL",0)) I FIL'="" S FILTER=FIL_" "_FILTER
 . S ^TMP("LEXSCH",$J,"FIL",0)=FILTER
 I ORX[" OR " D  Q
 . N XCT,XCT1,XN,XN1
 . S ^TMP($J,"ORWLEX","STEXT")=ORX
 . S XCT1=$L(ORX," OR ")
 . F XN=1:1:XCT1 S ORX=$P(^TMP($J,"ORWLEX","STEXT")," OR ") Q:$L(ORX)=0  S ^("STEXT")=$P(^TMP($J,"ORWLEX","STEXT")," OR ",2,XCT1) D
 .. D SEARCH(.ORY,ORX,ORDT,FILTER,PSFIL)
 .. M ^TMP($J,"ORWLEX","STEXT",XN)=ORY
 .. K ORY
 . S (XN,XCT)=0
 . F  S XN=$O(^TMP($J,"ORWLEX","STEXT",XN)) Q:+XN'>0  D
 .. S XN1=0
 .. F  S XN1=$O(^TMP($J,"ORWLEX","STEXT",XN,XN1)) Q:+XN1'>0  S XCT=XCT+1,ORY(XCT)=^(XN1)
 . K ^TMP($J,"ORWLEX","STEXT")
 D SEARCH(.ORY,ORX,ORDT,FILTER,PSFIL)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the search term.{:/} | 
| {::nomarkdown}ORDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional date (usually corresponding to the encounter date). Defaults to TODAY.{:/} | 




 Generated on January 13th 2017, 6:55:29 am