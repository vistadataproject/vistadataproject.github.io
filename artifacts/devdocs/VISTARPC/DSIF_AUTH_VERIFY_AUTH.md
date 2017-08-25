---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF AUTH VERIFY AUTH<br/>
# DSIF AUTH VERIFY AUTH

Look to see if a patient has a valid authorization and if it has payments against it.

## Properties

Property | Value
--- | ---
Label | VERIFY
MUMPS Implementation | [DSIFENA3](http://code.osehra.org/dox/Routine_DSIFENA3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 25 | true | Patient IEN
AUTH IEN | LITERAL | 25 | true | Internal Number of the Authorization



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}