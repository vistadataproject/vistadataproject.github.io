---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV UPDATE PCE<br/>
# DENTV UPDATE PCE

Deletes procedures, diagnosis and providers from PCE when users delete transactions from DRM Plus.

## Properties

Property | Value
--- | ---
Label | UPD
Routine | [DENTVTPE](http://code.osehra.org/dox/Routine_DENTVTPE_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 256 | true | Contains a list of transaction ids deleted from DRM Plus in the format:DATA(txnid).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}