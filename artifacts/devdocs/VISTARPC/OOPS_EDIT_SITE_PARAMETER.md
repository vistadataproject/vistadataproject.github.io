---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS EDIT SITE PARAMETER
# OOPS EDIT SITE PARAMETER

This broker call files changes to the Site Parameter File (#2262) name and District Office, if made.

Property | Value
--- | ---
Label | PARMEDT
Routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This input parameter contains the IEN of the Site Parameter File (#2262), theSite Parameter Name, and the District Office.  The format is:IEN^SITE NAME^DISTRICT OFFICE NAME.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}