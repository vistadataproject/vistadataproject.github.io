---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN LIST PROGRESS NOTE TITLES
# SPN LIST PROGRESS NOTE TITLES

This RPC lists Progress Note Titles eligible for writing Progress Notes under Document Class "SCI OUTCOMES". Parameter values:         Document Class = Name of entry in TIU DOCUMENT DEFINITION file (#8925.1).  This name must be an entry of type "DOCUMENT CLASS".  IMPORTANT: typically, this parameter should be "SCI OUTCOMES" (without the quotes) for the re-hosted SCI & D Outcomes project. Tested at the Bay Pines FO account using Document Class = ADDICTION SEVERITY INDEX  (again, typically this would be SCI OUTCOMES).

Property | Value
--- | ---
Label | LIST
Routine | [SPNRPC7](http://code.osehra.org/dox/Routine_SPNRPC7_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLASSNAM | LITERAL |  |  | Is the Document class name in file TIU DOCUMENT DEFINITION.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}