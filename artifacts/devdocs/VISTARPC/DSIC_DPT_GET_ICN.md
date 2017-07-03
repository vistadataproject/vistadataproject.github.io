---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC DPT GET ICN
# DSIC DPT GET ICN

This will return the patient's Integration Control Number (ICN) and a flag indicating whether or not it is a local ICN.

Property | Value
--- | ---
Label | ICN
Routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PAT | LITERAL | 15 | true | This is the patient lookup value which can be the DFN or name or SSN.
ISSSN | LITERAL | 1 | true | This Boolean (0, 1) flag indicates whether or not PAT (the patient lookupvalue) is a SSN value.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}