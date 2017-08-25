---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM MHDLL<br/>
# ORQQPXRM MHDLL



## Properties

Property | Value
--- | ---
Label | MHDLL
MUMPS Implementation | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | 
INPUTS | LITERAL |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [MHDLL^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | DFN, INPUTS
Code | {::nomarkdown}<pre><code> N CNT,CNT1,ORRESULT,ORSCORES,TEXT<br/> F TEXT="RESULTS","SCORES" D<br/> .S CNT=0,CNT1=0<br/> .F  S CNT=$O(INPUTS(TEXT,CNT)) Q:CNT=""  D<br/> ..S CNT1=CNT1+1<br/> ..I TEXT="RESULTS" S ORRESULT(CNT1)=$G(INPUTS(TEXT,CNT))<br/> ..I TEXT="SCORES" S ORSCORES(CNT1)=$G(INPUTS(TEXT,CNT))<br/> D MHDLL^PXRMDRSG(.ORY,.ORRESULT,.ORSCORES,DFN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}