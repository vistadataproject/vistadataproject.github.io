---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ANRV PTINFO CORE<br/>
# ANRV PTINFO CORE

Returns patient information for verification.  Must be changed eventuallyto include current Sensitive Patient Check.(TO DO).

## Properties

Property | Value
--- | ---
Label | PINF
Routine | [ANRVOA](http://code.osehra.org/dox/Routine_ANRVOA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PTDFN | LITERAL | 40 | true | Patients Internal entry number.
RESULTS | LITERAL |  | true | Bolus of patient information.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}