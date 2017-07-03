---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWLEX GETI10DX
# ORWLEX GETI10DX

This call wraps the Lexicon API $$DIAGSRCH^LEX10CS to satisfy the requirements of the ICD-10-CM diagnosis search.

Property | Value
--- | ---
Label | GETI10DX
Routine | [ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORX | LITERAL |  | true | This is the search term.
ORDT | LITERAL |  | true | Optional date (usually corresponding to the encounter date). Defaults to TODAY.



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETI10DX^ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
Method Comment | RPC ORWLEX GET10DX
Input Parameters | ORX, ORDT
Code | {::nomarkdown}<pre><code> N FILTER,PSFIL S (FILTER,PSFIL)=""<br/> S:+$G(ORDT)'>0 ORDT=DT<br/> S ORX=$$UP^XLFSTR(ORX)<br/> I ORX[" NOT " D<br/> . N I,XNOT,XCT,X1,X2,FIL<br/> . S XCT=$L(ORX," NOT ")<br/> . F I=2:1:XCT S XNOT=$P(ORX," NOT ",I) Q:$L(XNOT)=0  D<br/> .. S FILTER=FILTER_"I $$UP^XLFSTR(^LEX(757.01,+Y,0))'["""_XNOT_""" "<br/> .. S PSFIL=PSFIL_"I $$UP^XLFSTR(ORTXT)'["""_XNOT_""" "<br/> . I $E(FILTER,$L(FILTER))=" " S FILTER=$E(FILTER,1,$L(FILTER)-1)<br/> . I $E(PSFIL,$L(PSFIL))=" " S PSFIL=$E(PSFIL,1,$L(PSFIL)-1)<br/> . S XCT=$L(ORX," ")<br/> . F I=1:1:XCT S X1=$P(ORX," ",I) D<br/> .. I X1'="NOT" S X2=$G(X2)_X1_" " Q<br/> .. I X1="NOT" S I=I+1<br/> . S ORX=X2<br/> . S FIL=$G(^TMP("LEXSCH",$J,"FIL",0)) I FIL'="" S FILTER=FIL_" "_FILTER<br/> . S ^TMP("LEXSCH",$J,"FIL",0)=FILTER<br/> I ORX[" OR " D  Q<br/> . N XCT,XCT1,XN,XN1<br/> . S ^TMP($J,"ORWLEX","STEXT")=ORX<br/> . S XCT1=$L(ORX," OR ")<br/> . F XN=1:1:XCT1 S ORX=$P(^TMP($J,"ORWLEX","STEXT")," OR ") Q:$L(ORX)=0  S ^("STEXT")=$P(^TMP($J,"ORWLEX","STEXT")," OR ",2,XCT1) D<br/> .. D SEARCH(.ORY,ORX,ORDT,FILTER,PSFIL)<br/> .. M ^TMP($J,"ORWLEX","STEXT",XN)=ORY<br/> .. K ORY<br/> . S (XN,XCT)=0<br/> . F  S XN=$O(^TMP($J,"ORWLEX","STEXT",XN)) Q:+XN'>0  D<br/> .. S XN1=0<br/> .. F  S XN1=$O(^TMP($J,"ORWLEX","STEXT",XN,XN1)) Q:+XN1'>0  S XCT=XCT+1,ORY(XCT)=^(XN1)<br/> . K ^TMP($J,"ORWLEX","STEXT")<br/> D SEARCH(.ORY,ORX,ORDT,FILTER,PSFIL)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}