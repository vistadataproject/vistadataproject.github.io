---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL PROV FILTER LIST<br/>
# ORQQPL PROV FILTER LIST

RETURNS A LIST OF PROVIDERS CORRESPONDING TO INPUT ARRAY OF IEN

## Properties

Property | Value
--- | ---
Label | GETRPRV
Routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INP | LIST |  |  | ARRAY OF PROVIDER IEN



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETRPRV^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Method Comment | GET LIST OF RESPONSIBLE PROVIDERS FROM PRBLM LIST
Input Parameters | INP
First Comment | {::nomarkdown}<pre><code> RETURN - aa list of responsible providers from which to select for filtering<br/> INP - array of problem list providers to select from<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N S<br/> S S=""<br/> F I=1:1 S S=$O(INP(S)) Q:S=""  D<br/> . I INP(S)'="",$G(^VA(200,INP(S),0))'="" D  Q  ; get next<br/> .. S RETURN(I)=INP(S)_U_$P(^VA(200,INP(S),0),U)<br/> S RETURN(0)="-1"_U_"<None recorded>" ; return empty provider</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}