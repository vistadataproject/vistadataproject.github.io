---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC UNSIGNED BY ID<br/>
# ORRC UNSIGNED BY ID

This call returns the details of a list of orders and/or documents.

## Properties

Property | Value
--- | ---
Label | DETAIL
Routine | [ORRCSIG](http://code.osehra.org/dox/Routine_ORRCSIG_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ITEMS | LIST |  | true | This is the list of ID&#x27;s of each item to return details for, in the formXXX:### where XXX indicates the type of item and ### is the pointer tothe corresponding M file containing the data:    ORU &#x3D; Orders file #100    DOC &#x3D; TIU Documents file #8925



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}