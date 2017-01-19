---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE LEX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE LEX{:/}
 tag | {::nomarkdown}LEX{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list based on lexicon look-up.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LEX^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | return list after lexicon lookup
 Input parameters | {::nomarkdown}X<br>APP<br>ORDATE{:/}
 Code | {::nomarkdown}  N LEX,ILST,I,IEN,ORIMPDT<br> S ORIMPDT=$$IMPDATE^LEXU("10D")<br> S:APP="CPT" APP="CHP" ; LEX PATCH 10<br> S:'+$G(ORDATE) ORDATE=DT<br> I APP="ICD",(ORDATE'<ORIMPDT) S APP="10D"<br> D CONFIG^LEXSET(APP,APP,ORDATE)  ;DBIA 1609<br> I APP="CHP" D<br> . ; Set the filter for CPT only using CS APIs - format is the same as for DIC("S")<br> . S ^TMP("LEXSCH",$J,"FIL",0)="I $L($$CPTONE^LEXU(+Y,$G(ORDATE)))!($L($$CPCONE^LEXU(+Y,$G(ORDATE))))"  ;DBIA 1609<br> . ; Set Applications Default Flag (Lexicon can not overwrite filter)<br> . S ^TMP("LEXSCH",$J,"ADF",0)=1<br> D LOOK^LEXA(X,APP,1,"",ORDATE)<br> I '$D(LEX("LIST",1)) D  G LEXX<br> . S LST(1)="-1^No matches found.^"_APP<br> S LST(1)=LEX("LIST",1),ILST=1<br> S (I,IEN)=""<br> F  S I=$O(^TMP("LEXFND",$J,I)) Q:I=""  D  ;DBIA 2950<br> .F  S IEN=$O(^TMP("LEXFND",$J,I,IEN)) Q:IEN=""  D<br> ..S ILST=ILST+1,LST(ILST)=IEN_U_^TMP("LEXFND",$J,I,IEN){:/}


### CPRS

[NOT OSEHRA CPRS]()

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}