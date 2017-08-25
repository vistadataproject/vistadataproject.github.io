---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV PATIENT INSURANCE CHECK<br/>
# DSIV PATIENT INSURANCE CHECK

Checks insurance for a single patient.

## Properties

Property | Value
--- | ---
Label | CKINS
MUMPS Implementation | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Patient Internal Entry Number.
DAYS | LITERAL | 10 | true | Number of days prior to today for last verified check (default&#x3D;182).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}