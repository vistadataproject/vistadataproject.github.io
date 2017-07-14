---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRA REPORT TEXT<br/>
# ORWRA REPORT TEXT

This remote procedure call returns an array containinga formattied imaging report. This array matches exactlythe report format on the roll 'n scroll version of CPRS.

## Properties

Property | Value
--- | ---
Label | RPT
Routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT].
EXAMID | LITERAL | 20 | true | Imaging exam ID. Format: Inverse FM date/time of Exam_-_Case IENExample: 7049175.8893-1



## MUMPS Method Description

Property | Value
--- | ---
Method | [RPT^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Method Comment | return imaging report
Input Parameters | DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE
First Comment | {::nomarkdown}<pre><code>  RPC: ORWRA REPORT TEXT<br/>  See RPC definition for details on input and output parameters<br/> -- init locals and globals</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ID,LCNT,ORVP,EXAMDATE,CASENMBR<br/> S RADATA=$NA(^TMP($J,"RAE3"))<br/> S ROOT=$NA(^TMP("ORXPND",$J))<br/> K @RADATA,@ROOT<br/> S ID=$TR(ORID,"-",U)<br/> S LCNT=0,ORVP=DFN_";DPT("<br/> D XRAYS^ORCXPND1<br/> K @RADATA</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}