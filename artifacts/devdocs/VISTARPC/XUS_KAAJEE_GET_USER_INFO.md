---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS KAAJEE GET USER INFO<br/>
# XUS KAAJEE GET USER INFO

Returns a variety of information needed for the KAAJEE logon.

## Properties

Property | Value
--- | ---
Label | USERINFO
Routine | [XUSKAAJ](http://code.osehra.org/dox/Routine_XUSKAAJ_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLIENT-IP | LITERAL |  | true | IP address of the client workstation, used for logging (signon log)and IP blocking (failed access attempts).
SERVER-NM | LITERAL |  | true | Identifying name for the calling application or server,used for logging (signon log).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}