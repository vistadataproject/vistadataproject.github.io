---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP COLUMN HEADERS<br/>
# ORWRP COLUMN HEADERS

Get list of Column headers for a ListView type report from file 101.24.

## Properties

Property | Value
--- | ---
Label | GETCOL
MUMPS Implementation | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IFN | LITERAL |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETCOL^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Method Comment | get Column headers for ListView
Input Parameters | IFN
Code | {::nomarkdown}<pre><code> N I,J,X,VAL<br/> Q:'$G(IFN)<br/> S I=0,ROOT=$NA(ROOT)<br/> F  S I=$O(^ORD(101.24,IFN,3,"C",I)) Q:'I  D<br/> . S VAL=$$GET^XPAR(DUZ_";VA(200,","ORWCH COLUMNS REPORTS",IFN,"I"),J=0<br/> . F  S J=$O(^ORD(101.24,IFN,3,"C",I,J)) Q:'J  I $D(^ORD(101.24,IFN,3,J)) S X=^(J,0) D<br/> .. I $L(VAL),$P(VAL,",",I) S $P(X,"^",10)=$P(VAL,",",I)<br/> .. D SETITEM(.ROOT,X)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}