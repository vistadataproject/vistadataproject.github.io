---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XWB IS RPC AVAILABLE<br/>
# XWB IS RPC AVAILABLE

If RPC is installed, available in relevant context, and of proper versionreturns 1.  Otherwise, returns 0.

## Properties

Property | Value
--- | ---
Label | CKRPC
Routine | [XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RPC | LITERAL | 30 | true | Name of the RPC to be tested.
RUN CONTEXT | LITERAL | 1 | true | Specific context in which RPC will run.  Possible values are:     L  &#x3D;  run Locally (on the server the user is logged on to)     R  &#x3D;  run Remotely (on a server the user is not logged on to)If this parameter is not sent, RPC is checked for both local andremote. The check is done against the value in the INACTIVE field in the Remote Procedure file.  See that field&#x27;s description for more details.
VERSION NUMBER | LITERAL | 11 | true | Minimum version number of the RPC. This parameter is only used if the RUN CONTEXT parameter &#x3D; &quot;R&quot;.  If anumeric value is in this parameter, the value must be less than or equalto the value in the VERSION field of the Remote Procedure file for theRPC is be marked available.  Note: if the VERSION field is null, thecheck will fail for any numeric value in this parameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}