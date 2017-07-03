---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV TP RESERVED INACT CHECK
# DENTV TP RESERVED INACT CHECK

This RPC will perform a check on the IEN inputted and return whether or not the transaction found has been inactivated (for view only) or left alone. The check will inactivate a reserved transaction if it is more than 8 days old.

Property | Value
--- | ---
Label | CHKINA
Routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DENTIEN | LITERAL |  | true | This input value must be the IEN for the record contained in the DENTAL TP RESERVE (#228.7) file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}