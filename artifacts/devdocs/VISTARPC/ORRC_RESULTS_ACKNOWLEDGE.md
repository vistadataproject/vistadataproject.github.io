---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC RESULTS ACKNOWLEDGE<br/>
# ORRC RESULTS ACKNOWLEDGE

This call will mark new results as being acknowledged by the user; itwill return a true or false value for each order ID if successfully saved.

## Properties

Property | Value
--- | ---
Label | ACK
Routine | [ORRCACK](http://code.osehra.org/dox/Routine_ORRCACK_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
ORDERS | LIST |  | true | This is the list of order ID&#x27;s whose results may be acknowledged, in theform &quot;ORR:###^1&quot; where ### is the order number from file #100 and thesecond ^-piece is either 1 or 0 if the order was acknowledged.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}