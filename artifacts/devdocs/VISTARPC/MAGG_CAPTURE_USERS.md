---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG CAPTURE USERS<br/>
# MAGG CAPTURE USERS

This call will find users that have captured images in a date range.The list of users can be filtered by the FLAGS parameterThe Flags Parameter can contain'C' for images captured on the Capture Workstation  and/or'I' for images captured throught the Import API.

## Properties

Property | Value
--- | ---
Label | USERS
Routine | [MAGGA03U](http://code.osehra.org/dox/Routine_MAGGA03U_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FLAGS | LITERAL | 20 | true | The Flags Parameter can contain&#x27;C&#x27; for images captured on the Capture Workstationand/or&#x27;I&#x27; for images captured throught the Import API.  If the parameter is null it defaults to &#x27;CI&#x27;.
FROMDATE | LITERAL | 20 | true | The earliest Date to search for users.
TODATE | LITERAL | 20 | true | The latest Date to search for users.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}