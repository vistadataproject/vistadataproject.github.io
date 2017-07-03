---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP LIST BATCH INVOICES
# DSIF INP LIST BATCH INVOICES

This RPC will return the IEN's to the FEE BASIS INVOICE File #162.5.  These a derived from the "AC" index for a given Batch IEN.

Property | Value
--- | ---
Label | LSTINV
Routine | [DSIFEP](http://code.osehra.org/dox/Routine_DSIFEP_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number of FEE BASIS BATCH File #161.7



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}