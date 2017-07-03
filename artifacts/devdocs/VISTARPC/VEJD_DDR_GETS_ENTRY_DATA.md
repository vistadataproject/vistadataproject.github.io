---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VEJD DDR GETS ENTRY DATA
# VEJD DDR GETS ENTRY DATA



Property | Value
--- | ---
Label | GET
Routine | [VEJDDDR0](http://code.osehra.org/dox/Routine_VEJDDDR0_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VEJDFILE | LITERAL |  | true | This is the number of the file in which you wish to search.
VEJDIENS | LITERAL |  | true | This is the IENS for the search.  See the instructions on constructing anIENS in the FileMan Programmer&#x27;s Manual
VEJDFELD | LITERAL |  | true | This is an ^ (or &quot;;&quot;) delimited list of field numbers to return from theentry identified in VEJDIENS
VEJDFLAG | LITERAL |  | true | This is a string containing up to 3 characters that will modify howFileMan presents the results of this operation:        E: Return data in external format       I: Return data in internal format               Mutually exclusive.        N: Do NOT return null values (do NOT use this, Jay.  It will screwup how I put the entries in the return array for you).       R: Resolves field numbers to field names.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}