---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XWB REMOTE GETDATA
# XWB REMOTE GETDATA

This RPC will return an ARRAY with what ever data has been sent back fromthe remote site.

Property | Value
--- | ---
Label | RTNDATA
Routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HANDLE | LITERAL | 30 | true | The HANDLE from the XWB REMOTE RPC call. It is used to link the call tothe data.



### MUMPS Method Description

Property | Value
--- | ---
Method | [RTNDATA^XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
Method Comment | Return the data under a handle
Input Parameters | HDL
Code | {::nomarkdown}<pre><code> N I,N,RD,WRAP S RET="" K ^TMP($J,"XWB")<br/> I $G(HDL)="" S RET(0)="-1^Bad Handle" Q<br/> S N=$$CHKHDL^XWBDRPC(HDL) I N<1 S RET(0)=N Q<br/> I N'["Done" S RET(0)="-1^Not DONE" Q<br/> S N=(^XTMP(HDL,"CNT")>100)<br/> S I=0,RD=$S(N:$NA(^TMP($J,"XWB")),1:"RET")<br/> I N S RET=$NA(^TMP($J,"XWB")),I=$$RTRNFMT^XWBLIB(4) ;Make return a global<br/> I N M ^TMP($J,"XWB")=^XTMP(HDL,"D")<br/> I 'N F  S RET(I)=$G(^XTMP(HDL,"D",I)),I=$O(^XTMP(HDL,"D",I)) Q:I'>0</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}