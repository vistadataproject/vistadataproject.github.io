---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RMIM GET PATIENT DME<br/>
# RMIM GET PATIENT DME

This remote procedure will return a list of durable medical equipmentwhich has been issued to a patient within a date range.Required input consists of a single parameter representing theinternal entry number of a patient from file #2, and two datesin FileMan format. The three pieces will be delimited by the ^.The first element of the results array will indicate the number ofitems returned.  If and error occurs, the number will be negative andwill be followed by a ^ and a string of text describing the error.The other elements of the array will be constructed as follows:SHORT ITEM DESCRIPTION ^ TOTAL COST

## Properties

Property | Value
--- | ---
Label | DME
MUMPS Implementation | [RMIMRP](http://code.osehra.org/dox/Routine_RMIMRP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM1 | LITERAL |  | true | Patient internal entry number followed by date range for results.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}