---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB CHECK IV<br/>
# PSB CHECK IV

RPC PSB CHECK IV - When given a patient's data file number(DFN), this process will return infusing IV information pertaining to the given DFN.  The information will be returned at the location presented bythe "RESULTS" parameter.

## Properties

Property | Value
--- | ---
Label | RPC
MUMPS Implementation | [PSBCHKIV](http://code.osehra.org/dox/Routine_PSBCHKIV_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Patient IENentry number (IEN) and a pointer to the PATIENT FILE (File#2 - ^DPT).
ORDIV | LIST |  | true | LIST OF ORDER NUMBERSto contain the output from PSB CHECK IV processing.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}