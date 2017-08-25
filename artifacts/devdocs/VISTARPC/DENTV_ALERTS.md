---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV ALERTS<br/>
# DENTV ALERTS

This RPC gets Dental Alerts from file 220.  It also sets them into 220.

## Properties

Property | Value
--- | ---
Label | GAL
MUMPS Implementation | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | The patient ien to look up Dental Alerts in file 220.
ALERTS | LIST | 30 | true | List of Alert text entries to be added to the dental patient, e.g.:Sedation PremedTravel Issue



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}