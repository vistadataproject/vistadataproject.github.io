---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIROIR PRL PAT REQUEST LIST
# DSIROIR PRL PAT REQUEST LIST

This RPC returns a list of all internal entry numbers from file 19620 for a specified patient.

Property | Value
--- | ---
Label | PRL
Routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STDT | LITERAL | 7 | true | This is the FileMan date the report should stop counting.  If null the report will count all records from the start date thru the current date.
ENDT | LITERAL | 7 | true | The last date to searc for a request IEN for the selected patient.
PAT | LITERAL | 99 | true | DFN of the selected patient.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}