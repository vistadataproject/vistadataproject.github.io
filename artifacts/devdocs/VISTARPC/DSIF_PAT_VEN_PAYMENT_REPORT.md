---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF PAT VEN PAYMENT REPORT
# DSIF PAT VEN PAYMENT REPORT

This is an RPC version of the FBPAY routines.

Property | Value
--- | ---
Label | EN
Routine | [DSIFRPT3](http://code.osehra.org/dox/Routine_DSIFRPT3_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FBSORT | LITERAL | 1 | true | Sort Indicator (1 &#x3D; Patient, 0 &#x3D; Vendor - Default &#x3D; 0)
FBIEN | LITERAL | 99 | true | Patient/Vendor Internal Entry Number (File 161/161.2 respectively)
FBBDATE | LITERAL | 7 | true | Begining Date for report (FileMan Format)
FBEDATE | LITERAL | 7 | true | Ending Date for report (FileMan Format)
FB1725R | LITERAL | 1 | true | Mill-Bill indicator only used if PROGS passes in Fee Programs with internal numbers 2, 3 or 6. M - include only 38 U.S.C. 1725 claimsN - exclude 38 U.S.C. 1725 claimsA - All
PROGS | LIST | 99 | true | List of Fee Programs to include on report (Multi-piece IEN ^ Name) (IEN is pointer to file 161.8 FEE PROGRAMS, the user should only be allowed to select active programs.)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}