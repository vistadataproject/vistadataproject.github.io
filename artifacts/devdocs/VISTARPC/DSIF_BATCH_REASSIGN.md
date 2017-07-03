---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF BATCH REASSIGN
# DSIF BATCH REASSIGN

Used to reassign an open batch from one user to a second user, must have the FBAASUPERVISOR key to use.

Property | Value
--- | ---
Label | REASSIGN
Routine | [DSIFBAT4](http://code.osehra.org/dox/Routine_DSIFBAT4_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OLD USER | LITERAL | 30 | true | DUZ of Existing user that batch is assigned to currently.
New User | LITERAL | 30 | true | DUZ of user to reassign batch to.
Batch | LITERAL | 30 | true | Batch IEn to reassign



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}