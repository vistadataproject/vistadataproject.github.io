---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIROI STBLFLG SET BILL FLAG<br/>
# DSIROI STBLFLG SET BILL FLAG

This routine checks the requestor attached to a request to see if there are any outstanding bills other than the current request. 

## Properties

Property | Value
--- | ---
Label | STBLFLG
MUMPS Implementation | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | This is the IEN of the request whose reqyestor is being checked for an outstanding balance.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}