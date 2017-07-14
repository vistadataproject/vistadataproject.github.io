---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORAM1 LOG<br/>
# ORAM1 LOG

Updates Anticoagulation Flowsheet file (#103) and adds log entry.

## Properties

Property | Value
--- | ---
Label | LOGIT
Routine | [ORAM1](http://code.osehra.org/dox/Routine_ORAM1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FSARRAY | LIST |  |  | 
COMP | LITERAL |  |  | COMP&#x3D;0 Will remove this entry&#x27;s complication indication code (instead of1&#x3D; Major Bleed, 2&#x3D;Clot, 3&#x3D;Minor Bleed), the original complicatons will stay in the file, but they will no longer be visible or considered in reports based on the COMPLICATION code (104).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}