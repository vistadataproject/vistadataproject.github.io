---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS GET STATION INFORMATION
# OOPS GET STATION INFORMATION

This broker call returns the Address, City, State and Zip code for a stationstored in DIC(4 Institution file.

Property | Value
--- | ---
Label | STATINFO
Routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STATIEN | LITERAL |  | true | This is a required parm and it has to be a valid IEN for a station stored in DIC(4  Institution file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}