---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL PROBLEM LIST<br/>
# ORQQPL PROBLEM LIST

Problem list for CPRS GUI client

## Properties

Property | Value
--- | ---
Label | PROBL
MUMPS Implementation | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  |  | DFN



## MUMPS Method Description

Property | Value
--- | ---
Method | [PROBL^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Method Comment | GET LIST OF PATIENT PROBLEMS
Input Parameters | DFN, CONTEXT, ORIDT
Code | {::nomarkdown}<pre><code> N DIWL,DIWR,DIWF<br/> N ST,ORI,ORX<br/> S ORIDT=$G(ORIDT,DT)<br/> S (LCNT,NUM)=0<br/> S DIWL=1,DIWR=48,DIWF="C48"<br/> S CONTEXT=";;"_$G(CONTEXT)<br/> I CONTEXT=";;" S CONTEXT=";;A"<br/> S ST=$P(CONTEXT,";",3)<br/> I ST="R" D DELLIST(.ROOT,+DFN,ORIDT) ; show deleted only<br/> I ST'="R"  D LIST(.ROOT,+DFN,ST,ORIDT) ; show others - don't trust ELSE here<br/> I ROOT(0)<1 D<br/> . S LCNT=1<br/> . S ROOT(1)="     "_$$PAD^ORCHTAB("No data available.",49)_"/"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}