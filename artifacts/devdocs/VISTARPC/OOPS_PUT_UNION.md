---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS PUT UNION
# OOPS PUT UNION

This call will either file a new Union record if there is no internal recordnumber passed back or it will edit an existing union record if the internal record number is present and passed back.

Property | Value
--- | ---
Label | UNIEDT
Routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This parameter contains the IEN, the Union Name, Union Acronym, and the Unionrepresentative in the format:   IEN^UNION NAME^UNION ACRONYM^UNION REPThe data in the Union Representative field is in external format.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}