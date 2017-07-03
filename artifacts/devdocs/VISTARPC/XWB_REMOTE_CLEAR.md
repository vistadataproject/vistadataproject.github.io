---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XWB REMOTE CLEAR
# XWB REMOTE CLEAR

This RPC is used to CLEAR the data under a HANDLE in the ^XTMP global.

Property | Value
--- | ---
Label | CLEAR
Routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HANDLE | LITERAL | 30 | true | This is the HANDLE from the XWB REMOTE RPC.



### MUMPS Method Description

Property | Value
--- | ---
Method | [CLEAR^XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
Method Comment | Clear the data under a handle
Input Parameters | HDL
Code | {::nomarkdown}<pre><code> K ^XTMP(HDL),^TMP("XWBHDL",$J,HDL)<br/> S RET(0)=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}