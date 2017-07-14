---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORAM APPTMTCH<br/>
# ORAM APPTMTCH

This RPC supports revision of the appointment match when the user selects a new Clinic in Anticoagulator.

## Properties

Property | Value
--- | ---
Label | APPTMTCH
Routine | [ORAM](http://code.osehra.org/dox/Routine_ORAM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORAMDFN | LITERAL |  | true | Patient ID.
ORAMCL | LITERAL |  | true | This is the internal entry number of the Clinic in the Hospital Location File (#44).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}