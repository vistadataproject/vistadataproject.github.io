---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS GET CLINICAL REMINDERS<br/>
# VPS GET CLINICAL REMINDERS

Called by the Vetlink Kiosk system. The RPC returns the DUE NOW Clinical Reminders for the patient.

## Properties

Property | Value
--- | ---
Label | REMIND
MUMPS Implementation | [VPSPTCR](http://code.osehra.org/dox/Routine_VPSPTCR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 12 | true | Patient IEN.
DIVISION | LITERAL | 12 | true | Division IEN.
SERVICE | LITERAL | 12 | true | Service IEN.
LOCATION | LITERAL | 12 | true | Location IEN.
USERCLASS | LITERAL | 50 | true | User Class IENs separated by &quot;^&quot;.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}