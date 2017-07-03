---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SC PATIENT LOOKUP
# SC PATIENT LOOKUP

Patient lookup.  This is intended as a temporary RPC until a VA orFileMan component is available.  Does a Multiple index lookup onthe PATIENT file (#2).  This does not invoke DPTLK.  Given lookupvalue, this returns a list of the form DFN^patient name^DOB^PID. Only the first 500 records that match the value are returned.

Property | Value
--- | ---
Label | FINDP
Routine | [SCUTBK11](http://code.osehra.org/dox/Routine_SCUTBK11_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LIST ATTRIBUTES | LIST | 512 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}