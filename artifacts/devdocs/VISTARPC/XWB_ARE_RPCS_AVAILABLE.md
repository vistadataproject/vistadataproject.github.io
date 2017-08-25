---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XWB ARE RPCS AVAILABLE<br/>
# XWB ARE RPCS AVAILABLE

If RPC in the passed array is installed, available in relevant context,and of proper version returns 1 for that RPC. Otherwise, returns 0.

## Properties

Property | Value
--- | ---
Label | CKRPCS
MUMPS Implementation | [XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RPC | LIST | 40 | true | This 0-based array contains list of RPCs to be checked along with(optionally) a minimum acceptable version of the RPC.  The format is:                 RPCName^RPCVersionNumber Th RPCVersionNumber is only used if the RUN CONTEXT parameter &#x3D; &quot;R&quot;.  If anumeric value is in the second ^-piece and the RUN CONTEXT &#x3D;&quot;R&quot;, the valuemust be less than or equal to the value in the VERSION field of the RemoteProcedure file for the RPC to be marked available.  Note: if the VERSIONfield is null, the check will fail for any numeric value.
RUN CONTEXT | LITERAL | 1 | true | Specific context in which RPCs will run.  Possible values are:      L  &#x3D;  run Locally (on the server the user is logged on to)      R  &#x3D;  run Remotely (on a server the user is not logged on to)If this parameter is not sent, RPC is checked for both local andremote. The check is done against the value in the INACTIVE field in the Remote Procedure file.  See that field&#x27;s description for more details.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}