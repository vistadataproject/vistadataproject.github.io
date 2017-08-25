---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE LEX<br/>
# ORWPCE LEX

Returns list based on lexicon look-up.

## Properties

Property | Value
--- | ---
Label | LEX
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LEX^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | return list after lexicon lookup
Input Parameters | X, APP, ORDATE
Code | {::nomarkdown}<pre><code> N LEX,ILST,I,IEN,ORIMPDT<br/> S ORIMPDT=$$IMPDATE^LEXU("10D")<br/> S:APP="CPT" APP="CHP" ; LEX PATCH 10<br/> S:'+$G(ORDATE) ORDATE=DT<br/> I APP="ICD",(ORDATE'<ORIMPDT) S APP="10D"<br/> D CONFIG^LEXSET(APP,APP,ORDATE)  ;DBIA 1609<br/> I APP="CHP" D<br/> . ; Set the filter for CPT only using CS APIs - format is the same as for DIC("S")<br/> . S ^TMP("LEXSCH",$J,"FIL",0)="I $L($$CPTONE^LEXU(+Y,$G(ORDATE)))!($L($$CPCONE^LEXU(+Y,$G(ORDATE))))"  ;DBIA 1609<br/> . ; Set Applications Default Flag (Lexicon can not overwrite filter)<br/> . S ^TMP("LEXSCH",$J,"ADF",0)=1<br/> D LOOK^LEXA(X,APP,1,"",ORDATE)<br/> I '$D(LEX("LIST",1)) D  G LEXX<br/> . S LST(1)="-1^No matches found.^"_APP<br/> S LST(1)=LEX("LIST",1),ILST=1<br/> S (I,IEN)=""<br/> F  S I=$O(^TMP("LEXFND",$J,I)) Q:I=""  D  ;DBIA 2950<br/> .F  S IEN=$O(^TMP("LEXFND",$J,I,IEN)) Q:IEN=""  D<br/> ..S ILST=ILST+1,LST(ILST)=IEN_U_^TMP("LEXFND",$J,I,IEN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}