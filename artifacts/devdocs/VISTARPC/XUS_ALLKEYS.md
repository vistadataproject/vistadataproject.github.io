---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS ALLKEYS<br/>
# XUS ALLKEYS

This RPC will return all the KEYS that a user holds.If the FLAG is set to some value the list of KEYS will be screened to only be those for J2EE use.This may need refinement as we get some experience.For FATKAAT and KAAJEE.

## Properties

Property | Value
--- | ---
Label | ALLKEYS
Routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 10 | true | This is the IEN or DUZ of the user in question.If not passed in the RPC will user the current DUZ.
FLAG | LITERAL | 3 | true | Not in use at this time.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}