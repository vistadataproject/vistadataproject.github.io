---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR SET DOC DATES
# DSIR SET DOC DATES

SAVES DATES FOR USE IN SCREENING CLINICAL DOCUMENTS FOR AN ROI REQUEST

Property | Value
--- | ---
Label | SAVEDATE
Routine | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VEJDIFN | LITERAL | 16 | true | IFN OF CURRENT ROI REQUEST
VEJDDATS | LIST |  | true | ARRAY OF:   ITEMS IN FILEMAN INTERNAL DATE/TIME FORMAT1) Medications From^Medications To2) Vitals From^Vitals To3) Radiology From^Radiology To4) Immunology From^Immunology To5) Consults From^Consults To6) Postings From^Postings To7) Discharge Summaries From^Discharge Summaries To8) Progress Notes From^Progress Notes To



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}