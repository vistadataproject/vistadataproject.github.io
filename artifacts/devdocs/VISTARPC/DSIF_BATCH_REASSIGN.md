---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF BATCH REASSIGN<br/>
# DSIF BATCH REASSIGN

Used to reassign an open batch from one user to a second user, must have the FBAASUPERVISOR key to use.

## Properties

Property | Value
--- | ---
Label | REASSIGN
MUMPS Implementation | [DSIFBAT4](http://code.osehra.org/dox/Routine_DSIFBAT4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OLD USER | LITERAL | 30 | true | DUZ of Existing user that batch is assigned to currently.
New User | LITERAL | 30 | true | DUZ of user to reassign batch to.
Batch | LITERAL | 30 | true | Batch IEn to reassign



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}