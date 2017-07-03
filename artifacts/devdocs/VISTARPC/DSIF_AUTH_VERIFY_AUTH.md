---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF AUTH VERIFY AUTH
# DSIF AUTH VERIFY AUTH

Look to see if a patient has a valid authorization and if it has payments against it.

Property | Value
--- | ---
Label | VERIFY
Routine | [DSIFENA3](http://code.osehra.org/dox/Routine_DSIFENA3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 25 | true | Patient IEN
AUTH IEN | LITERAL | 25 | true | Internal Number of the Authorization



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}