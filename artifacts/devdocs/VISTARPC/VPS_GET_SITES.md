---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS GET SITES<br/>
# VPS GET SITES

Called by the Vetlink Kiosk system.  Patient SSN is the input value.  Return value is a list of treating facilities associated with the patient given the SSN.

## Properties

Property | Value
--- | ---
Label | GETSITES
MUMPS Implementation | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSSN | LITERAL | 12 | true | Patient SSN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}