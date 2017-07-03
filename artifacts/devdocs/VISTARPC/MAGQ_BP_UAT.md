---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGQ BP UAT
# MAGQ BP UAT

This procedure validates the BP Server task assignments and rebuilds the content of the dummy BP Server, "Unassigned Tasks" with the tasks that are not currently assigned to a BP server.

Property | Value
--- | ---
Label | UAT
Routine | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PLACE | LITERAL | 4 | true | This is the reference to the Site Parameter file to which the BP Servers are assigned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}