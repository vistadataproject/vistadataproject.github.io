---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XUS KAAJEE GET CCOW TOKEN
# XUS KAAJEE GET CCOW TOKEN

This RPC gets a token to save in the CCOW context to aid in sign-on

Property | Value
--- | ---
Label | CCOWIP
Routine | [XUSKAAJ1](http://code.osehra.org/dox/Routine_XUSKAAJ1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IP-ADDRESS | LITERAL | 30 | true | This value represents the IP address of the workstation.  Useful for J2EEapplications that connect to VistA via the application server. If present,this value will be used when associating a CCOW token to the IPaddress of the client workstation



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}