---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL PROB COMMENTS<br/>
# ORQQPL PROB COMMENTS

Returns a list of comments associated with a problem IEN.

## Properties

Property | Value
--- | ---
Label | GETCOMM
MUMPS Implementation | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Problem IEN | LITERAL | 16 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETCOMM^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Method Comment | Return comments for a problem - MULTI-DIVISIONAL
Input Parameters | PIFN
Code | {::nomarkdown}<pre><code> N FAC,NIFN,NOTE,NOTECNT<br/> S NOTECNT=0,FAC=0<br/> F  S FAC=$O(^AUPNPROB(PIFN,11,FAC)) Q:+FAC'>0  D<br/> . S NIFN=0<br/> . F  S NIFN=$O(^AUPNPROB(PIFN,11,FAC,11,NIFN)) Q:NIFN'>0  D<br/> . . Q:$P($G(^AUPNPROB(PIFN,11,FAC,11,NIFN,0)),U,4)'="A"<br/> . . S NOTE=$P($G(^AUPNPROB(PIFN,11,FAC,11,NIFN,0)),U,3)<br/> . . S NOTECNT=NOTECNT+1,ORY(NOTECNT)=NOTE</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}