---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XWB REMOTE STATUS CHECK<br/>
# XWB REMOTE STATUS CHECK

This RPC will return the status of a remote RPC.

## Properties

Property | Value
--- | ---
Label | RPCCHK
MUMPS Implementation | [XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HANDLE | LITERAL | 30 | true | This is the handle used to check the status of the remote RPC.



## MUMPS Method Description

Property | Value
--- | ---
Method | [RPCCHK^XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
Method Comment | RPC call to check a handle status
Input Parameters | HDL
Code | {::nomarkdown}<pre><code> N S,M,Z<br/> I $G(HDL)="" S RET(0)="-1^Bad Handle" Q<br/> S RET(0)=$$CHKHDL^XWBDRPC(HDL),S=$$GETNODE(HDL,"MSGID")<br/> I RET(0)'["Done",$L(S) D  S $P(RET(1),"^",3)=Z<br/> . S RET(1)=$$MSGSTAT^HLUTIL(S),M=+RET(1),Z=""<br/> . I M=1 S Z=$S($P(RET(1),"^",5)>1:"NOT first in queue",1:"First in queue")<br/> . I M=1.5 S Z="Opening connection"_$S($P(RET(1),"^",6):", open failed "_$P(RET(1),"^",6)_" times.",1:"")<br/> . I M=1.7 S Z="Sent, awaiting responce"<br/> . I M=2 S Z="Awaiting application ACK"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}