---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC ORDERS VERIFY<br/>
# ORRC ORDERS VERIFY

This call accepts a list of order IDs to be marked as verified.

## Properties

Property | Value
--- | ---
Label | VERIFY
Routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
ORDERS | LIST |  | true | This is a list of order identifiers in the form ORV:order#;action#, whereorder# is the pointer to the Orders file #100 and action# is the IEN inthe Order Actions sub-file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}