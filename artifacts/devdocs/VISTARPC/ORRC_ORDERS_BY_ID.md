---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC ORDERS BY ID<br/>
# ORRC ORDERS BY ID

This call returns the Detailed Display report for the given order IDs.

## Properties

Property | Value
--- | ---
Label | DETAIL
MUMPS Implementation | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORDERS | LIST |  | true | This is the list of order IDs in the form ORx:##, where x denotes the viewthat this order belongs to int he dashboard and ## is the pointer to theOrders file #100.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}