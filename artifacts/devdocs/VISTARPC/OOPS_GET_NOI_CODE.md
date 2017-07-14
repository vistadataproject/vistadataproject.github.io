---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS GET NOI CODE<br/>
# OOPS GET NOI CODE

This broker call returns the listing of NOI codes.  If the claim is a CA1 thenonly codes begining with T are returned, if the claim is a CA2 only codes thatdo not begin with a T are returned.

## Properties

Property | Value
--- | ---
Label | GETNOI
Routine | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPT | LITERAL | 5 | true | This parameter will be either CA1 or CA2 to indicate which type of claim isrequesting the NOI codes.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}