---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR DELIVERY TYPE SUMMARY RPT
# DSIR DELIVERY TYPE SUMMARY RPT

This RPC returns an array for the Delivery Type Summary Report. The optional date parameters work off of the date closed only.

Property | Value
--- | ---
Label | DELIVRY
Routine | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SDATE | LITERAL | 7 | true | SDATE - Optional - Report start date in Fileman format.
EDATE | LITERAL | 7 | true | EDATE - Optional - Report end date in Fileman format.
DIVL | LITERAL | 150 | true | DIVL  - Optional - List of selected divisions - NULL means all divisions.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}