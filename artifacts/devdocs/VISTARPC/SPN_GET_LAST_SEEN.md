---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN GET LAST SEEN<br/>
# SPN GET LAST SEEN

This RPC returns list of patients with the date that they were last seen at a clinic.

## Properties

Property | Value
--- | ---
Label | COL
MUMPS Implementation | [SPNJRPC1](http://code.osehra.org/dox/Routine_SPNJRPC1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLST | LIST |  |  | An array list of Integration Control Numbers of patients in the PATIENT file (#2).  Format: ICNLST(1)&#x3D;1001000001, ICNLST(2)&#x3D;1001000002, etc.
DAYS | LITERAL |  |  | The number of days back from current date to begin search from.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}