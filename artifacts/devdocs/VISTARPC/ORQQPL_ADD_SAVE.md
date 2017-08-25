---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL ADD SAVE<br/>
# ORQQPL ADD SAVE

Add new problem record

## Properties

Property | Value
--- | ---
Label | ADDSAVE
MUMPS Implementation | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMPDFN | LITERAL |  |  | 
GMPROV |  |  |  | 
GMPVAMC | LITERAL |  |  | 
ADDARRAY | LIST |  |  | ARRAY OF GMPFLD()&#x3D;VALUE STRINGS FOR INDIRECT SET



## MUMPS Method Description

Property | Value
--- | ---
Method | [ADDSAVE^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Method Comment | SAVE NEW RECORD
Input Parameters | GMPDFN, GMPROV, GMPVAMC, ADDARRAY, GMPSRCH
First Comment | {::nomarkdown}<pre><code> RETURN - Problem IFN if success, 0 otherwise<br/> ADDARRAY - array used for indirect sets of  GMPFLDS()<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DA,GMPFLD,GMPORIG,S<br/> S GMPSRCH=$G(GMPSRCH)<br/> S RETURN=0 ;<br/> L +^AUPNPROB(0):10<br/> Q:'$T  ; bail out if no lock<br/> S S=""<br/> F  S S=$O(ADDARRAY(S)) Q:S=""  D<br/> . S @ADDARRAY(S)<br/> D NEW^GMPLSAVE<br/> S RETURN=DA<br/> L -^AUPNPROB(0)<br/> S RETURN=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/fBALocalDiagnoses.pas">BA/fBALocalDiagnoses.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}