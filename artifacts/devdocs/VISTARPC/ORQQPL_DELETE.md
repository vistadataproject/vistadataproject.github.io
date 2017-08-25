---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL DELETE<br/>
# ORQQPL DELETE

DELETES A PROBLEM

## Properties

Property | Value
--- | ---
Label | DELETE
MUMPS Implementation | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IFN | LITERAL |  |  | 
PROVIDERID |  |  |  | 
VAMC |  |  |  | 
REASON | LITERAL |  |  | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [DELETE^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Method Comment | DELETE A PROBLEM
Input Parameters | GMPIFN, GMPROV, GMPVAMC, REASON
First Comment | {::nomarkdown}<pre><code> From GMPL1 - silent version</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N CHNGE<br/> I REASON'="" D<br/> . S GMPFLD(10,"NEW",1)=REASON<br/> . D NEWNOTE^GMPLSAVE<br/> S CHNGE=GMPIFN_"^1.02^"_$$HTFM^XLFDT($H)<br/> S CHNGE=CHNGE_U_DUZ_"^P^H^Deleted^"_+$G(GMPROV)<br/> S $P(^AUPNPROB(GMPIFN,1),U,2)="H"<br/> S RESULT=1<br/> D AUDIT^GMPLX(CHNGE,"")<br/> D DTMOD^GMPLX(GMPIFN)<br/> K GMPFLD</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}