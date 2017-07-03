---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF CNSLTS SET ACT MENU
# DSIF CNSLTS SET ACT MENU

This RPC returns the permissions a user has for the Consult selected, and what actions they are allowed to take. Cloned from ORQQCN SET ACT MENU

Property | Value
--- | ---
Label | SETACTM
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCNS | LITERAL |  | true | This is the Consult IEN you wish to check the user&#x27;s access for.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}