---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS EMPLOYEE DATA
# OOPS EMPLOYEE DATA

This call returns a listing of individuals in the PAID file #450 that matchthe Name or partial name entered.  It returns PAID fields 6, 10, 13, 16, 31,32, 38, 186.1, 186.3, 186, 186.4, 458, 604.

Property | Value
--- | ---
Label | PAID
Routine | [OOPSGUI4](http://code.osehra.org/dox/Routine_OOPSGUI4_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAME | LITERAL | 256 |  | This parameter contains the name or partial name of the employee being lookedup.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}