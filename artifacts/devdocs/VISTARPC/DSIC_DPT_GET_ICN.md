---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DPT GET ICN<br/>
# DSIC DPT GET ICN

This will return the patient's Integration Control Number (ICN) and a flag indicating whether or not it is a local ICN.

## Properties

Property | Value
--- | ---
Label | ICN
MUMPS Implementation | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PAT | LITERAL | 15 | true | This is the patient lookup value which can be the DFN or name or SSN.
ISSSN | LITERAL | 1 | true | This Boolean (0, 1) flag indicates whether or not PAT (the patient lookupvalue) is a SSN value.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}