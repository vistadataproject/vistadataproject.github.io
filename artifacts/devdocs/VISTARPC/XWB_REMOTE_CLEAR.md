---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XWB REMOTE CLEAR<br/>
# XWB REMOTE CLEAR

This RPC is used to CLEAR the data under a HANDLE in the ^XTMP global.

## Properties

Property | Value
--- | ---
Label | CLEAR
Routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HANDLE | LITERAL | 30 | true | This is the HANDLE from the XWB REMOTE RPC.



## MUMPS Method Description

Property | Value
--- | ---
Method | [CLEAR^XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
Method Comment | Clear the data under a handle
Input Parameters | HDL
Code | {::nomarkdown}<pre><code> K ^XTMP(HDL),^TMP("XWBHDL",$J,HDL)<br/> S RET(0)=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}