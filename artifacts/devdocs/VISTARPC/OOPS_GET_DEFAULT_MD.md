---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS GET DEFAULT MD
# OOPS GET DEFAULT MD

This call will return the Default Medical Doctor information based on an IENin the ASISTS 2260 file being passed in. The information returned is from thefile 2262.  

Property | Value
--- | ---
Label | DEFMD
Routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | This input value must be a valid IEN from the ASISTS 2260 file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}