---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XUS GET VISITOR
# XUS GET VISITOR

This controlled-subscription RPC is used by the Broker Security Enhancement to check a user's credentials based on a BSE TOKEN that waspassed to identify and authenticate a visiting user. The remote VistAsystem calls this RPC on the authenticating VistA system to validate ifthe visiting user is permitted to visit, and if so, obtain theauthenticated user's demographics.

Property | Value
--- | ---
Label | GETVISIT
Routine | [XUSBSE1](http://code.osehra.org/dox/Routine_XUSBSE1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TOKEN | LITERAL |  | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}