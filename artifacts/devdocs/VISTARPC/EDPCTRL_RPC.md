---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EDPCTRL RPC<br/>
# EDPCTRL RPC

This RPC acts as the "front controller" for the EDIS Tracking Application.It accepts requests that are initially passed into a web server.  The RPCuses the parameters that are passed in to determine which command to execute.  The returned data is formatted as XML.  The XML structure variesbased a what data were requested.

## Properties

Property | Value
--- | ---
Label | RPC
Routine | [EDPCTRL](http://code.osehra.org/dox/Routine_EDPCTRL_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMS | LIST |  | true | This is a list of parameters that were passed to the Java middle tier via an HTTP Post message.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}