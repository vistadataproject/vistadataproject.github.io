---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU ID ATTACH ENTRY<br/>
# TIU ID ATTACH ENTRY

This RPC will attach a a document as an Interdisciplinary (ID) entry to anID Parent document.

## Properties

Property | Value
--- | ---
Label | IDATTCH
MUMPS Implementation | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the IEN of the Entry which is to be attached as the ID Child.
TIUDAD | LITERAL |  | true | This is the internal entry number of the TIU Document which is to be theID Parent to which the ID Entry is attached.



## MUMPS Method Description

Property | Value
--- | ---
Method | [IDATTCH^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Method Comment | Attach TIUDA as ID Child entry to TIUDAD
Input Parameters | TIUDA, TIUDAD
Code | {::nomarkdown}<pre><code> N TIUX<br/> S TIUX(2101)=TIUDAD<br/> D FILE^TIUSRVP(.TIUY,TIUDA,.TIUX,1)<br/> D AUDLINK^TIUGR1(TIUDA,"a",TIUDAD)<br/> D SENDID^TIUALRT1(TIUDA)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}