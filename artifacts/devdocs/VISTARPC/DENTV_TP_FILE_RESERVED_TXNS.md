---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP FILE RESERVED TXNS<br/>
# DENTV TP FILE RESERVED TXNS

Saves transaction information for a particular Dental provider and patient.  Reserved transactions are not filed to Dental History, DAS or PCE.

## Properties

Property | Value
--- | ---
Label | SAVE
Routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 500 | true | Contains filing information:DATA(1) &#x3D; FLAG^Provider IEN^DFN            where FLAG&#x3D;A for add, U for update, D for deleteDATA(n) &#x3D; txn data



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}