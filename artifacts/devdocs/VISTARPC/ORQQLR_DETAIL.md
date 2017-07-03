---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQLR DETAIL
# ORQQLR DETAIL

Returns the details of a lab order.

Property | Value
--- | ---
Label | DETAIL
Routine | [ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 16 | true | Patient identifier (DFN) from Patient File [#2]
ORDER NUMBER | LITERAL | 16 | true | OE/RR order number from the Orders file [#100].



### MUMPS Method Description

Property | Value
--- | ---
Method | [DETAIL^ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
Method Comment | return lab results for an order
Input Parameters | DFN, ORDER
Code | {::nomarkdown}<pre><code> N LRORD,SUB,IDT,I,DATE,FLAG,REF,ILST<br/> S LST(1)="No detailed information found.",ILST=0<br/> S LRORD=$G(^OR(100,+ORDER,4))<br/> Q:'$L(LRORD)<br/> K ^TMP("LRRR",$J)<br/> D RR^LR7OR1(DFN,LRORD,"","","","","")<br/> S SUB="" F  S SUB=$O(^TMP("LRRR",$J,DFN,SUB)) Q:SUB=""  D<br/> . S IDT=0 F  S IDT=$O(^TMP("LRRR",$J,DFN,SUB,IDT)) Q:'IDT  D<br/> . . S I=0 F  S I=$O(^TMP("LRRR",$J,DFN,SUB,IDT,I)) Q:'I  S X=^(I) D<br/> . . . S DATE=$$FMTE^XLFDT(9999999-IDT),FLAG=$P(X,U,3)<br/> . . . S REF=$P(X,U,5)<br/> . . . S:$L(REF) REF="("_$P(X,U,5)_")"<br/> . . . S X=$P(X,U,15)_U_$P(X,U,2)_U_$P(X,U,4)_U_FLAG_U_DATE_U_REF<br/> . . . S X=$$TABPIECE(X,"1,2,3,4,5,6","9,18,24,27,50")<br/> . . . S ILST=ILST+1,LST(ILST)=X<br/> K ^TMP("LRRR",$J)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}