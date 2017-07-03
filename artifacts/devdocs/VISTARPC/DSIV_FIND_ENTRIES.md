---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV FIND ENTRIES
# DSIV FIND ENTRIES

Returns unprocessed INSURANCE BUFFER file entries for a given patient.

Property | Value
--- | ---
Label | FIND
Routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 16 | true | Patient internal entry number (in FILE #2).
FLDS | LITERAL | 80 | true | Contains the requested buffer entry fields that can be retrieved using Fileman (i.e. not an API call).  For example: &quot;@;.01I;.02;.03;.04I;20.01;40.02;40.03;40.09;60.04&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}