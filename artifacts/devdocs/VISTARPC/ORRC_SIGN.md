---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC SIGN<br/>
# ORRC SIGN

This call will apply the user's electronic signature to the orders and documents in the ITEM array. It will return a boolean result for each item (indicating success or failure), with explanatory text in the event the call fails.

## Properties

Property | Value
--- | ---
Label | SIGN
Routine | [ORRCSIG](http://code.osehra.org/dox/Routine_ORRCSIG_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
LOC | LITERAL |  | true | The hospital location. Essential in the OE/RR 3 for printing of orders,if available. Not essential for notes.
ESCODE | LITERAL |  | true | The network encrypted signature code of the person identified in ORNP. 
ITEM | LIST |  | true | The array of items to which the electronic signature is being applied. Should have the format:  ITEM(#)&#x3D;DOC:### for notes, or  ITEM(#)&#x3D;ORU:###^DFN^Release Flag^Signature Status^Nature of Order  ITEM(#)&#x3D;ORD:###^DFN^Release Flag^Signature Status^Nature of Order



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}