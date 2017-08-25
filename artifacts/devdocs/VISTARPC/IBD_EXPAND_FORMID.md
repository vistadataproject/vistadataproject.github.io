---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; IBD EXPAND FORMID<br/>
# IBD EXPAND FORMID

This call will convert a form id (printed at the top of an encounter form)and return information about the patient, the appointment, and the form.See routine IBDRPC3 for output descritpion.

## Properties

Property | Value
--- | ---
Label | IDPAT
MUMPS Implementation | [IBDFRPC3](http://code.osehra.org/dox/Routine_IBDFRPC3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FORMID | LITERAL | 40 | true | This is the form id printed at the top of the encounter form, and shouldmatch and internal entry number from the FORM TRACKING file (357.96).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}