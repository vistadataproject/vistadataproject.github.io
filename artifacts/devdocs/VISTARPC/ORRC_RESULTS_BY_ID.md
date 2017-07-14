---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC RESULTS BY ID<br/>
# ORRC RESULTS BY ID

This call returns the results for a list of orders.

## Properties

Property | Value
--- | ---
Label | RESULT
Routine | [ORRCACK](http://code.osehra.org/dox/Routine_ORRCACK_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORDERS | LIST |  | true | This is the list of order ID&#x27;s for which to return results, in the form&quot;ORR:###&quot; where ### is the order number from file #100.the corresponding M file containing the data:    ORD &#x3D; Orders file #100    DOC &#x3D; TIU Documents file #8925    TSK &#x3D; Patient Task file #102.3



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}