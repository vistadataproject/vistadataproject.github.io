---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL INACTIVATE<br/>
# ORQQPL INACTIVATE



## Properties

Property | Value
--- | ---
Label | INACT
Routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Problem IFN | LITERAL | 16 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [INACT^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Method Comment | inactivate a problem
Input Parameters | GMPIFN
First Comment | {::nomarkdown}<pre><code> RETURN:  ;(consistent with UPDATE function)<br/>   SUCCESS:<br/>     RETURN>0, RETURN(0)=""<br/>   FAILURE:<br/>      RETURN<0, RETURN(0)=verbose error message</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N NOW,CHNGE<br/> S NOW=$$HTFM^XLFDT($H)<br/> I $P(^AUPNPROB(GMPIFN,0),U,12)'="A" D  Q  ; BAIL OUT - ALREADY INACTIVE<br/> . S RETURN=-1<br/> . S RETURN(0)="Problem Already Inactive"<br/> L +^AUPNPROB(GMPIFN,0):10<br/> I '$T D  Q  ; BAIL OUT - NO LOCK<br/> . S RETURN=-1<br/> . S RETURN(0)="Record in use. Try again in a few moments"<br/> S $P(^AUPNPROB(GMPIFN,0),U,12)="I"<br/> S CHNGE=GMPIFN_"^.12^"_NOW_U_DUZ_"^A^I^Inactivated^"_DUZ<br/> D AUDIT^GMPLX(CHNGE,"")<br/> D DTMOD^GMPLX(GMPIFN)<br/> L -^AUPNPROB(GMPIFN,0)<br/> S RETURN=1<br/> S RETURN(0)=""</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}