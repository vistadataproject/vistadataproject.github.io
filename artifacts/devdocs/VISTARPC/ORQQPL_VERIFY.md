---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL VERIFY<br/>
# ORQQPL VERIFY

VERIFY A TRANSCRIBED PROBLEM

## Properties

Property | Value
--- | ---
Label | VERIFY
Routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMPIFN | LITERAL |  |  | PROBLEM IFN



## MUMPS Method Description

Property | Value
--- | ---
Method | [VERIFY^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Method Comment | verify a transcribed problem
Input Parameters | GMPIFN
First Comment | {::nomarkdown}<pre><code> RETURN:  ;(consistent with UPDATE function)<br/>   SUCCESS:<br/>     RETURN>0, RETURN(0)=""<br/>   FAILURE:<br/>      RETURN<0, RETURN(0)=verbose error message</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N NOW,CHNGE<br/> S NOW=$$HTFM^XLFDT($H)<br/> I $P(^AUPNPROB(GMPIFN,1),U,2)'="T" D  Q  ; BAIL OUT - ALREADY VERIFIED<br/> . S RETURN=-1<br/> . S RETURN(0)="Problem Already Verified"<br/> L +^AUPNPROB(GMPIFN,0):10<br/> I '$T D  Q  ; BAIL OUT - NO LOCK<br/> . S RETURN=-1<br/> . S RETURN(0)="Record in use. Try again in a few moments"<br/> S $P(^AUPNPROB(GMPIFN,1),U,2)="P"<br/> S CHNGE=GMPIFN_"^1.02^"_NOW_U_DUZ_"^T^P^Verified^"_DUZ<br/> D AUDIT^GMPLX(CHNGE,"")<br/> D DTMOD^GMPLX(GMPIFN)<br/> L -^AUPNPROB(GMPIFN,0)<br/> S RETURN=1<br/> S RETURN(0)=""</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}