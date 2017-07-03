---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRC ORDERS BY PATIENT
# ORRC ORDERS BY PATIENT

This call returns a list of orders for a patient by various views.

Property | Value
--- | ---
Label | LIST
Routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2.
TYPE | LITERAL |  | true | This is a 3-letter string identifying the type of orders to be returned:  ORN &#x3D; Active Nursing (text) orders  ORV &#x3D; Orders unverified by nursing  ORU &#x3D; Unsigned orders by USER
USER | LITERAL |  |  | This is the pointer to the user in the New Person file #200; it is requiredfor Unsigned Orders.
DETAILS | LITERAL |  |  | This flag indicates whether to return the details with each order (true),or just the list of order ID&#x27;s (false).
START | LITERAL |  | true | This is the date to start searching for orders, in the form YYYMMDDHHMMSS.
STOP | LITERAL |  | true | This is the date to stop searching for orders, in the form YYYMMDDHHMMSS.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}