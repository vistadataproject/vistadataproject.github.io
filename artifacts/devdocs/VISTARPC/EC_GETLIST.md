---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC GETLIST<br/>
# EC GETLIST

This call is used to perform a search on a file based on a search string.

## Properties

Property | Value
--- | ---
Label | SRCLST
MUMPS Implementation | [ECUMRPC1](http://code.osehra.org/dox/Routine_ECUMRPC1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | The input string ECARY contains six pieces separated by &quot;^&quot;     ECFIL  - File to search     ECSTR  - Search string     ECDIR  - Search order     ECNUM  - (Optional) Number of records to return [DEFAULT: 44]     ECADT  - (Optional) date to determine clinic status (active/inactive)     ECLOC  - (Optional) location (IEN) to filter associated clinic list



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}