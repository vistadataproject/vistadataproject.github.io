---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS KAAJEE GET USER VIA PROXY<br/>
# XUS KAAJEE GET USER VIA PROXY

Returns a variety of information needed for KAAJEE logon based on the ccow token

## Properties

Property | Value
--- | ---
Label | USERINFO
MUMPS Implementation | [XUSKAAJ1](http://code.osehra.org/dox/Routine_XUSKAAJ1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLIENT-IP | LITERAL |  | true | IP address of the client workstation used for logging (signon log) and IP blocking (failed access attempts).  Also, this IP address is used to validate ccow token submitted.
SERVER-NM | LITERAL |  | true | Identifying name for the calling application or server used for logging (signon log)
CCOWTOK | LITERAL |  | true | Value of ccow token passed.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}