---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE LEX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE LEX{:/}
 tag | {::nomarkdown}LEX{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list based on lexicon look-up.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return list after lexicon lookup
 Input Parameters | {::nomarkdown}X<br/>APP<br/>ORDATE{:/}
 Lines | ```
 N LEX,ILST,I,IEN,ORIMPDT
 S ORIMPDT=$$IMPDATE^LEXU("10D")
 S:APP="CPT" APP="CHP" ; LEX PATCH 10
 S:'+$G(ORDATE) ORDATE=DT
 I APP="ICD",(ORDATE'<ORIMPDT) S APP="10D"
 D CONFIG^LEXSET(APP,APP,ORDATE)  ;DBIA 1609
 I APP="CHP" D
 . ; Set the filter for CPT only using CS APIs - format is the same as for DIC("S")
 . S ^TMP("LEXSCH",$J,"FIL",0)="I $L($$CPTONE^LEXU(+Y,$G(ORDATE)))!($L($$CPCONE^LEXU(+Y,$G(ORDATE))))"  ;DBIA 1609
 . ; Set Applications Default Flag (Lexicon can not overwrite filter)
 . S ^TMP("LEXSCH",$J,"ADF",0)=1
 D LOOK^LEXA(X,APP,1,"",ORDATE)
 I '$D(LEX("LIST",1)) D  G LEXX
 . S LST(1)="-1^No matches found.^"_APP
 S LST(1)=LEX("LIST",1),ILST=1
 S (I,IEN)=""
 F  S I=$O(^TMP("LEXFND",$J,I)) Q:I=""  D  ;DBIA 2950
 .F  S IEN=$O(^TMP("LEXFND",$J,I,IEN)) Q:IEN=""  D
 ..S ILST=ILST+1,LST(ILST)=IEN_U_^TMP("LEXFND",$J,I,IEN)```




 Generated on January 13th 2017, 6:55:29 am