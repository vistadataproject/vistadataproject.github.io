---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC RESULTS BY DATE<br/>
# ORRC RESULTS BY DATE

This call returns a list of orders for a patient with new results withina given time frame, that have not been acknowledged by the user.

## Properties

Property | Value
--- | ---
Label | LISTD
Routine | [ORRCACK](http://code.osehra.org/dox/Routine_ORRCACK_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2.
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
START | LITERAL |  | true | This is the date to start searching for orders, in the form YYYYMMDDHHMMSS.
STOP | LITERAL |  | true | This is the date to stop searching for orders, in the form YYYYMMDDHHMMSS.
RESULTS | LITERAL |  | true | This flag indicates whether to return the results with each order (true)or just the list of order ID&#x27;s (false).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}