---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS GET PRINTERS<br/>
# VPS GET PRINTERS

This RPC returns up to 20 entries from the device file based on Input Criteria.

## Properties

Property | Value
--- | ---
Label | DEVICE
Routine | [VPSPRINT](http://code.osehra.org/dox/Routine_VPSPRINT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM | LITERAL | 50 | true | This input parameter is used to filter the output by returning result start with or start from (up to 20 printers). Example: Input Parameter &quot;B&quot; will return all printers (up to 20) start *with* &quot;B&quot;Example: Input Parameter &quot;B*&quot; will return all printers (up to 20) start *from* &quot;B&quot;
DIR | LITERAL | 2 | true | This input parameter causes output result to be sorted in printer name ascending or descending order.Input Parameter: 1 (return printer names in ascending order)Input Parameter: -1 (return printer names in descending order)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}