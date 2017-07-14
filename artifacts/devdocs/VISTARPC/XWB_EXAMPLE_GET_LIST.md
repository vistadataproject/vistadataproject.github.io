---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XWB EXAMPLE GET LIST<br/>
# XWB EXAMPLE GET LIST

This RPC brings back a list of elements to the client.  The user can requesteither a number of lines or a number of Kilobytes of data to be returned.This RPC exists support of RPC Broker Example program.

## Properties

Property | Value
--- | ---
Label | GETLIST
Routine | [XWBEXMPL](http://code.osehra.org/dox/Routine_XWBEXMPL_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ITEMS | LITERAL |  | true | This parameter can be only one of two values:  LINES     - RPC will return a number of lines  KILOBYTES - RPC will return a number of kilobytes of data
QUANTITY | LITERAL |  |  | Either a number of lines or a number of kilobytes to send back.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}