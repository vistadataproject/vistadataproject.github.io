---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SCRP FILE ENTRY GETSELECTION
# SCRP FILE ENTRY GETSELECTION

This RPC returns information assoicated with an entryon the entity selection form of the Query Template Utility.The RPC gets invoked as a result of the user clicking theright mouse button and selecting 'Details'.

Property | Value
--- | ---
Label | GETSEL
Routine | [SCRPBK11](http://code.osehra.org/dox/Routine_SCRPBK11_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENTITY TYPE | LITERAL | 20 | true | This parameter indicates the entity type of the slecetion.The following types are possible:       DIVISION       TEAM       PRACTITIONER       ROLE       CLINIC       USER CLASS
INTERNAL ENTRY NUMBER | LITERAL | 20 | true | This parameter contains the internal entry number forthe entity.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}