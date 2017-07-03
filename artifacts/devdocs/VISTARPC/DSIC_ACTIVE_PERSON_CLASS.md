---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC ACTIVE PERSON CLASS
# DSIC ACTIVE PERSON CLASS

This will return a user's active person class for a given date.

Property | Value
--- | ---
Label | PER
Routine | [DSICDUZ](http://code.osehra.org/dox/Routine_DSICDUZ_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL | 15 | true | This is the user&#x27;s DUZ value whose active person class is desired.
DATE | LITERAL | 14 | true | This is a Fileman date.time for the date to check for an active person class membership.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}