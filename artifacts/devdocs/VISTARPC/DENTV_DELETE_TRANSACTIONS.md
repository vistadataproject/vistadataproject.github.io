---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV DELETE TRANSACTIONS<br/>
# DENTV DELETE TRANSACTIONS

This RPC deletes the dental encounter from the DENTAL HISTORY file (#228.1) and dental transactions from the DENTAL TREATMENT PLAN/EXAM file(#228.2) for types=PSR, PerioExam and Head&Neck if the Transaction(s) fortype=Transaction fails to file.

## Properties

Property | Value
--- | ---
Label | DELT
Routine | [DENTVRHD](http://code.osehra.org/dox/Routine_DENTVRHD_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 10 | true | This is the internal entry in file 228.1 to be deleted.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}