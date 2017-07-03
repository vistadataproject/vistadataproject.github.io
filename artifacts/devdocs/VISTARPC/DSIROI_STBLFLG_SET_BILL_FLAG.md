---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIROI STBLFLG SET BILL FLAG
# DSIROI STBLFLG SET BILL FLAG

This routine checks the requestor attached to a request to see if there are any outstanding bills other than the current request. 

Property | Value
--- | ---
Label | STBLFLG
Routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | This is the IEN of the request whose reqyestor is being checked for an outstanding balance.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}