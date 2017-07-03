---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV TP FILE RESERVED TXNS
# DENTV TP FILE RESERVED TXNS

Saves transaction information for a particular Dental provider and patient.  Reserved transactions are not filed to Dental History, DAS or PCE.

Property | Value
--- | ---
Label | SAVE
Routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 500 | true | Contains filing information:DATA(1) &#x3D; FLAG^Provider IEN^DFN            where FLAG&#x3D;A for add, U for update, D for deleteDATA(n) &#x3D; txn data



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}