---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR CHANGE PRIMARY ADDRESS
# DSIR CHANGE PRIMARY ADDRESS

This RPC updates the pointer to the primary address for a givenrequestor.  The addresS is stored in the 5 node of 19620.12.

Property | Value
--- | ---
Label | CHPRIADD
Routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RQSTR | LITERAL |  | true | RQSTR - Pointer to the requestor file (19620.12)
ADDRPTR | LITERAL |  | true | ADDRPTR - Pointer to the address file (19620.92)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}