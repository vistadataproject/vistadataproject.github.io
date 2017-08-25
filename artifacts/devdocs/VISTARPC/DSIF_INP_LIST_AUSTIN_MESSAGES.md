---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP LIST AUSTIN MESSAGES<br/>
# DSIF INP LIST AUSTIN MESSAGES

Retrieve a list of Austin messages for Pricer adjustments.

## Properties

Property | Value
--- | ---
Label | LISTMESS
MUMPS Implementation | [DSIFPAY6](http://code.osehra.org/dox/Routine_DSIFPAY6_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM DATE | LITERAL | 7 | true | Date to start from in FM format.
STOP DATE | LITERAL | 7 | true | Date to stop listing messages in FM format (today - defaultif not entered).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}