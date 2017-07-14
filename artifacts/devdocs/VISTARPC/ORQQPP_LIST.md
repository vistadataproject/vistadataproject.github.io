---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPP LIST<br/>
# ORQQPP LIST

Returns a list of active Patient Postings for a patient.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [ORQQPP](http://code.osehra.org/dox/Routine_ORQQPP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient ID (DFN) from Patient File [#2].



## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORQQPP](http://code.osehra.org/dox/Routine_ORQQPP_source.html)
Method Comment | return pt&#x27;s patient posting list
Input Parameters | ORPT
Code | {::nomarkdown}<pre><code> Q:'$L($G(ORPT))<br/> K ^TMP("TIUPPCV",$J)<br/> D ENCOVER^TIUPP3(ORPT)<br/> I MSG'=0 S ORY(1)="^No patient postings found."<br/> N I,J,X,FMDT,MSG S I=0,J=1,X=""<br/> F  S I=$O(^TMP("TIUPPCV",$J,I)) Q:I<1  D<br/> .S X=^(I),ORY(J)=$P(X,U)_U_$P(X,U,3)_U_$P(X,U,5),J=J+1<br/> K ^TMP("TIUPPCV",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}