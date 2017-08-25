---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS GET VISITOR<br/>
# XUS GET VISITOR

This controlled-subscription RPC is used by the Broker Security Enhancement to check a user's credentials based on a BSE TOKEN that waspassed to identify and authenticate a visiting user. The remote VistAsystem calls this RPC on the authenticating VistA system to validate ifthe visiting user is permitted to visit, and if so, obtain theauthenticated user's demographics.

## Properties

Property | Value
--- | ---
Label | GETVISIT
MUMPS Implementation | [XUSBSE1](http://code.osehra.org/dox/Routine_XUSBSE1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TOKEN | LITERAL |  | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}