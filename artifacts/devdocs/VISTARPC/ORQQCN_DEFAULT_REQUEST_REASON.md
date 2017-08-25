---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN DEFAULT REQUEST REASON<br/>
# ORQQCN DEFAULT REQUEST REASON



## Properties

Property | Value
--- | ---
Label | DEFRFREQ
MUMPS Implementation | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SERVICE | LITERAL | 16 |  | 
PATIENT DFN | LITERAL | 32 |  | 
RESOLVE | LITERAL | 2 |  | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [DEFRFREQ^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Return default reason for request for service
Input Parameters | ORSVC, ORDFN, RESOLVE
First Comment | {::nomarkdown}<pre><code> ORSVC=pointer to file 123.5<br/> ORDFN=patient, if RESOLVE=1<br/> RESOLVE=1 to resolve boilerplate, 0 to not resolve</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:+$G(ORSVC)=0<br/> I +RESOLVE,(+$G(ORDFN)=0) Q<br/> S ORY=$NA(^TMP("ORREQ",$J))<br/> S:$G(RESOLVE)="" RESOLVE=0<br/> D GETDEF^GMRCDRFR(.ORY,ORSVC,ORDFN,RESOLVE)<br/> K @ORY@(0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}