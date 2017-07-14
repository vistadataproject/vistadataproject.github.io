---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV GET EIV PATIENT REPORT<br/>
# DSIV GET EIV PATIENT REPORT

Returns one to many patient eIV reports from the Insurance Type multiple in the patient file.

## Properties

Property | Value
--- | ---
Label | PIIV
Routine | [DSIVIC3](http://code.osehra.org/dox/Routine_DSIVIC3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | Patient DFN (ien).
DSIVPATP | LITERAL | 10 | true | Contains the pointer to the patient policy IEN from the Insurance Type multiple of the PATIENT file.  If sent, then the single eIV report for that policy will be returned, if not sent then all policy entries will be returned with any eIV report they might contain.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}