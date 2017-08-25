---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL EDIT SAVE<br/>
# ORQQPL EDIT SAVE

sAVES EDITED PROBLEM RECORD

## Properties

Property | Value
--- | ---
Label | EDSAVE
MUMPS Implementation | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IFN | LITERAL |  |  | RECORD IFN
PROV | LITERAL |  |  | PROBLEM RESP PROVIDER
VAMC | LITERAL |  |  | FACILITY ID



## MUMPS Method Description

Property | Value
--- | ---
Method | [EDSAVE^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Method Comment | SAVE EDITED RES
Input Parameters | GMPIFN, GMPROV, GMPVAMC, UT, EDARRAY, GMPSRCH
First Comment | {::nomarkdown}<pre><code> RETURN - boolean, 1 success, 0 failure<br/> EDARRAY - array used for indirect sets of GMPORIG() and GMPFLDS()<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N GMPFLD,GMPORIG,S,GMPLUSER<br/> S GMPSRCH=$G(GMPSRCH)<br/> S RETURN=1 ; initialize for success<br/> I UT S GMPLUSER=1<br/> S S=""<br/> F  S S=$O(EDARRAY(S)) Q:S=""  D<br/> . S @EDARRAY(S)<br/> I $D(GMPFLD(10,"NEW"))>9 D  I 'RETURN Q  ; Bail Out if no lock<br/> . L +^AUPNPROB(GMPIFN,11):10  ; given bogus nature of this lock, should be able to get<br/> . I '$T S RETURN=0<br/> D EN^GMPLSAVE  ; save the data<br/> K GMPFLD,GMPORIG<br/> L -^AUPNPROB(GMPIFN,11)  ; free this instance of lock (in case it was set)<br/> S RETURN=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}