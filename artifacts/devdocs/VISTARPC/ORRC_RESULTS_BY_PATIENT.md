---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC RESULTS BY PATIENT<br/>
# ORRC RESULTS BY PATIENT

This call returns a list of orders for a patient placed by the user, thathave new unacknowledged results.

## Properties

Property | Value
--- | ---
Label | LIST
MUMPS Implementation | [ORRCACK](http://code.osehra.org/dox/Routine_ORRCACK_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2.
RESULTS | LITERAL |  | true | This flag indicates whether to return the results with each order (true)or just the list of order ID&#x27;s (false).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}