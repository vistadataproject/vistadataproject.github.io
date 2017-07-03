---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS LIST CAS
# OOPS LIST CAS

This broker call returns a listing of all the valid CA's (either 1 or 2) thatcan be selected by this user to create a new Request for Compensation (CA-7)claim.

Property | Value
--- | ---
Label | LISTCA
Routine | [OOPSGUIC](http://code.osehra.org/dox/Routine_OOPSGUIC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 60 | true | This parameter passes in 3 pieces of information:  the name or SSN to be usedin building the selection list, the file number to be used for looking up, andthe calling menu.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}