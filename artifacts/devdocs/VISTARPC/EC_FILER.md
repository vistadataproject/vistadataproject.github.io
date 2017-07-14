---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC FILER<br/>
# EC FILER

A general purpose Event Capture filer used when filing data into ECS files.

## Properties

Property | Value
--- | ---
Label | FILE
Routine | [ECFLRPC](http://code.osehra.org/dox/Routine_ECFLRPC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LIST |  | true | The input array ECARY defines all the fields and values needed for a particular file.  The variable ECARY(&quot;ECFILE&quot;) must always be set to the file number wheredata will be saved.  The following are the options and file available       ECFILE       Option       ------       ------       721          Event Capture Patient File       724          DSS Unit       720.3        EC Event Code Screens       720.4        Event Code Reasons       725          EC Local Procedure       726          Event Capture Category       4            Event Capture Locations       200          Allocate/Deallocate users to Unit       200A         Allocate/Deallocate Units to user       8989.5       Update HFS directory



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}