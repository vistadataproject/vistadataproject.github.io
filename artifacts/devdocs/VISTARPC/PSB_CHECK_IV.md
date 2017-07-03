---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PSB CHECK IV
# PSB CHECK IV

RPC PSB CHECK IV - When given a patient's data file number(DFN), this process will return infusing IV information pertaining to the given DFN.  The information will be returned at the location presented bythe "RESULTS" parameter.

Property | Value
--- | ---
Label | RPC
Routine | [PSBCHKIV](http://code.osehra.org/dox/Routine_PSBCHKIV_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Patient IENentry number (IEN) and a pointer to the PATIENT FILE (File#2 - ^DPT).
ORDIV | LIST |  | true | LIST OF ORDER NUMBERSto contain the output from PSB CHECK IV processing.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}