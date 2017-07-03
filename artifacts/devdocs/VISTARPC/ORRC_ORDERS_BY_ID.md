---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRC ORDERS BY ID
# ORRC ORDERS BY ID

This call returns the Detailed Display report for the given order IDs.

Property | Value
--- | ---
Label | DETAIL
Routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORDERS | LIST |  | true | This is the list of order IDs in the form ORx:##, where x denotes the viewthat this order belongs to int he dashboard and ## is the pointer to theOrders file #100.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}