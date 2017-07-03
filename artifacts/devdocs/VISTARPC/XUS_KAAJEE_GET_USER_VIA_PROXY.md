---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XUS KAAJEE GET USER VIA PROXY
# XUS KAAJEE GET USER VIA PROXY

Returns a variety of information needed for KAAJEE logon based on the ccow token

Property | Value
--- | ---
Label | USERINFO
Routine | [XUSKAAJ1](http://code.osehra.org/dox/Routine_XUSKAAJ1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLIENT-IP | LITERAL |  | true | IP address of the client workstation used for logging (signon log) and IP blocking (failed access attempts).  Also, this IP address is used to validate ccow token submitted.
SERVER-NM | LITERAL |  | true | Identifying name for the calling application or server used for logging (signon log)
CCOWTOK | LITERAL |  | true | Value of ccow token passed.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}