---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; IBARXM QUERY SUPPRESS USER<br/>
# IBARXM QUERY SUPPRESS USER

This RPC is used to query only the information for pharmacy co-paymentbilling that has happened for the given month/year.The RPC should be used only for queries, which will not allow the user to see information, because the user data will not be transmitted to remote system.

## Properties

Property | Value
--- | ---
Label | RQUERY
MUMPS Implementation | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IBM | LITERAL | 7 | true | This is in fileman format the month/year for which the request is being made.
IBICN | LITERAL | 40 | true | This is the patient&#x27;s ICN for reference to any VistA database.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}