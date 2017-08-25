---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VAFCTFU LOCAL ICN<br/>
# VAFCTFU LOCAL ICN

Given a patient DFN, it will determine if the Integration Control Number (ICN) assigned to the patient is a local ICN or a national ICN.

## Properties

Property | Value
--- | ---
Label | IFLOCAL
MUMPS Implementation | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Patient DFN. | LITERAL | 255 | true | Patient DFN from PATIENT file (#2).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}