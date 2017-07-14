---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL CHECK DUP<br/>
# ORQQPL CHECK DUP



## Properties

Property | Value
--- | ---
Label | DUP
Routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 32 | true | 
TERM | LITERAL | 32 | true | 
TEXT | LITERAL | 64 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [DUP^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Method Comment | Check for duplicate problem
Input Parameters | DFN, TERM, TEXT
Code | {::nomarkdown}<pre><code> S Y=$$DUPL^GMPLX(DFN,TERM,TEXT) Q:+Y=0<br/> I $P(^AUPNPROB(Y,1),U,2)="H" S Y=0 Q<br/> S Y=Y_U_$P(^AUPNPROB(Y,0),U,12)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}