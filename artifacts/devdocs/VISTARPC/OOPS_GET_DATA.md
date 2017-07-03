---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS GET DATA
# OOPS GET DATA

This broker call returns the data in the ASISTS Accident Reporting File (#2260)for fields that are 1) Set of Codes, 2) Set of Codes Multiple, 3) Pointer toa file, and 4) Pointer to a file multiple.

Property | Value
--- | ---
Label | GETDATA
Routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This parameter contains the File #, the Field #, and the IEN of the data to beextracted.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}