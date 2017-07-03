---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP LIST AUSTIN MESSAGES
# DSIF INP LIST AUSTIN MESSAGES

Retrieve a list of Austin messages for Pricer adjustments.

Property | Value
--- | ---
Label | LISTMESS
Routine | [DSIFPAY6](http://code.osehra.org/dox/Routine_DSIFPAY6_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM DATE | LITERAL | 7 | true | Date to start from in FM format.
STOP DATE | LITERAL | 7 | true | Date to stop listing messages in FM format (today - defaultif not entered).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}