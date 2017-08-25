---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL PROVIDER LIST<br/>
# ORQQPL PROVIDER LIST

RETURNS ARRAY OF PROVIDERS MATCHING INPUT

## Properties

Property | Value
--- | ---
Label | PROVSRCH
MUMPS Implementation | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PROVSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Method Comment | Get candidate Rroviders from person file
Input Parameters | FLAG, N, FROM, PART
Code | {::nomarkdown}<pre><code> N LV,NS,RV,IEN<br/> S RV=$NAME(LV("DILIST","ID"))<br/> IF +$G(N)=0 S N=50<br/> S FLAG=$G(FLAG),N=$G(N),FROM=$G(FROM),PART=$G(PART)<br/> D LIST^DIC(200,"",".01;1",FLAG,N,FROM,PART,"","","","LV")<br/> S NS=""<br/> F  S NS=$O(LV("DILIST",1,NS)) Q:NS=""  D<br/> . S IEN=""<br/> . S IEN=$O(^VA(200,"B",@RV@(NS,.01),IEN)) ; compliments of PROV^ORQPTQ<br/> . S LST(NS)=IEN_U_@RV@(NS,.01)  ; initials_U_@RV@(NS,1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}