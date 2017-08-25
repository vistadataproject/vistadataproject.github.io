---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS KAAJEE LOGOUT<br/>
# XUS KAAJEE LOGOUT

This RPC calls the LOUT^XUSCLEAN tag to mark a KAAJEE-signed-on user'sentry in the sign-on log as signed off.

## Properties

Property | Value
--- | ---
Label | SIGNOFF
MUMPS Implementation | [XUSKAAJ](http://code.osehra.org/dox/Routine_XUSKAAJ_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SIGNON-LOG-DA | LITERAL | 1 | true | The DA (IEN) of the user&#x27;s signon log entry.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}