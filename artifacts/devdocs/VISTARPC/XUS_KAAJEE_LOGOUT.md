---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XUS KAAJEE LOGOUT
# XUS KAAJEE LOGOUT

This RPC calls the LOUT^XUSCLEAN tag to mark a KAAJEE-signed-on user'sentry in the sign-on log as signed off.

Property | Value
--- | ---
Label | SIGNOFF
Routine | [XUSKAAJ](http://code.osehra.org/dox/Routine_XUSKAAJ_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SIGNON-LOG-DA | LITERAL | 1 | true | The DA (IEN) of the user&#x27;s signon log entry.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}