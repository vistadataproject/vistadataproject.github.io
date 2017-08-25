---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PXRM REMINDER CATEGORIES<br/>
# PXRM REMINDER CATEGORIES

Returns list of all CPRS lookup categories and associated reminders

## Properties

Property | Value
--- | ---
Label | CATEGORY
MUMPS Implementation | [PXRMRPCA](http://code.osehra.org/dox/Routine_PXRMRPCA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient Identifier from Patient file [#2]
HOSPITAL LOCATION | LITERAL | 16 | true | Patient&#x27;s HOSPITAL LOCATION [#44]. May be null.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}