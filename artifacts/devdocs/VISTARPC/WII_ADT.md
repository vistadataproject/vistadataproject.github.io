---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; WII ADT<br/>
# WII ADT

This remote procedure is run ONLY at the central collection point.It generates a list of all admissions and discharges that have beentransferred to the main collection point.  The RPC allows the user toselect all entries that have not been sent to DEFAS or regenerate the listby a date.  Data is extracted from the WII ADT ALL SITES FILE (#987.7).

## Properties

Property | Value
--- | ---
Label | EN
MUMPS Implementation | [WIIADT1](http://code.osehra.org/dox/Routine_WIIADT1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATE | WORD PROCESSING | 15 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}