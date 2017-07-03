---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC DPT INP INFO
# DSIC DPT INP INFO

This with return information about an admission event.  This RPC is a wrapper around the IN5^VADPT API.  If you pass in a date, then the data related to that date and admission will be returned,  If no date is passed, then get inpatient status as of NOW. For more detailed description, see IN^DSICDPT routine.

Property | Value
--- | ---
Label | IN
Routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 15 | true | This is the pointer value to the PATIENT file (i.e., DFN)
DATE | LITERAL | 13 | true | This is the Fileman format, date only, for which you wish to retrieve inpatient movement information.  If it is not passed, then the program will use NOW as the date.
LODGE | LITERAL | 1 | true | This is a Boolean flag (1 or 0 or &lt;null&gt;).  If LODGE&#x3D;1 then allow for lodger type admissions.  If not, exclude lodger type admissions from the search.  The default value is &lt;null&gt;, exclude lodger admisssions.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}