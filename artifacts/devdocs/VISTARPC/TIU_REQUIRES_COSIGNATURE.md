---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU REQUIRES COSIGNATURE<br/>
# TIU REQUIRES COSIGNATURE

This Boolean RPC simply evaluates whether the current user requirescosignature for TIU DOCUMENTS, and returns a 1 if true, or a 0 if false.

## Properties

Property | Value
--- | ---
Label | REQCOS
Routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUTYP | LITERAL |  | true | Pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1).
TIUDA | LITERAL |  | true | Pointer to the TIU DOCUMENT FILE (#8925).  References the document to beedited/signed.
USER | LITERAL |  | true | Optional parameter.  Pointer to the NEW PERSON FILE (#200).  Pass this in if author is NOT the current user (e.g., User is a transcriptionist.



## MUMPS Method Description

Property | Value
--- | ---
Method | [REQCOS^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Evaluate cosignature requirement
Input Parameters | TIUTYP, TIUDA, TIUSER, TIUDT
First Comment | {::nomarkdown}<pre><code> Initialize return value</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUDPRM<br/> S TIUY=0<br/> I +$G(TIUTYP)'>0,'+$G(TIUDA) Q<br/> I +$G(TIUDA) S TIUTYP=+$G(^TIU(8925,+$G(TIUDA),0))<br/> S:'+$G(TIUSER) TIUSER=+$G(DUZ)<br/> S TIUY=+$$REQCOSIG^TIULP(TIUTYP,+$G(TIUDA),+$G(TIUSER),$P(+$G(TIUDT),"."))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}