---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU TEMPLATE GET DESCRIPTION<br/>
# TIU TEMPLATE GET DESCRIPTION

Returns a Template's Description

## Properties

Property | Value
--- | ---
Label | GETDESC
MUMPS Implementation | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  |  | Template IEN



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETDESC^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Method Comment | Returns Template Description
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> I (TIUDA>0),$D(^TIU(8927,TIUDA,5)) D<br/> .N IDX,CNT S (IDX,CNT)=0<br/> .F  S IDX=$O(^TIU(8927,TIUDA,5,IDX)) Q:IDX'>0  D<br/> ..S CNT=CNT+1,TIUY(CNT)=^TIU(8927,TIUDA,5,IDX,0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}