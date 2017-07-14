---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL CLIN FILTER LIST<br/>
# ORQQPL CLIN FILTER LIST

rETURNS ARRAY OF IEN^NAME FOR AN ARRAY OF IEN PASSED IN

## Properties

Property | Value
--- | ---
Label | GETCLIN
Routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETCLIN^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Method Comment | Get FILTERED LIST OF CLINICS
Input Parameters | INP
First Comment | {::nomarkdown}<pre><code> RETURN NAMES FOR LIST OF CLINICS PASSED IN</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,S<br/> S S=""<br/> F I=1:1 S S=$O(INP(S)) Q:S=""  D<br/> . I INP(S)'="",$G(^SC(INP(S),0))'="" D  Q  ; get next<br/> .. S RETURN(I)=INP(S)_U_$P(^SC(INP(S),0),U,1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}