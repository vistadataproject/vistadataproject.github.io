---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS GET LAST MRAR<br/>
# VPS GET LAST MRAR

Given Patient ID (in ID/Type pair), this RPC return the last Medication and Allergy Review data for the patient.

## Properties

Property | Value
--- | ---
Label | GET
MUMPS Implementation | [VPSMRAR9](http://code.osehra.org/dox/Routine_VPSMRAR9_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSNUM | LITERAL | 30 | true | This is the Patient ID based on Patient ID Type. The value could be the SSN, ICN or VIC/CAC number. ICN, DFN, or VIC/CAC
VPSTYP | LITERAL | 7 | true | This is the Patient ID Type. Valid type is DFN, SSN, ICN, or VIC/CAC.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}