---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XUS KAAJEE GET USER INFO
# XUS KAAJEE GET USER INFO

Returns a variety of information needed for the KAAJEE logon.

Property | Value
--- | ---
Label | USERINFO
Routine | [XUSKAAJ](http://code.osehra.org/dox/Routine_XUSKAAJ_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLIENT-IP | LITERAL |  | true | IP address of the client workstation, used for logging (signon log)and IP blocking (failed access attempts).
SERVER-NM | LITERAL |  | true | Identifying name for the calling application or server,used for logging (signon log).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}