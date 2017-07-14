---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 CP UPDATE CONSULT<br/>
# MAG4 CP UPDATE CONSULT

The Imaging capture station can mark a transaction as complete by making  this call after a successful capture.  This call puts the procedure in  a status of 'pr' (ready for interpretation.

## Properties

Property | Value
--- | ---
Label | UPDCONS
Routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGCMP | LITERAL | 10 | true | This is the Complete Flag that Clinical Procedures doesn&#x27;t deal with.  It is always &#x27;2&#x27; which indicates a &#x27;Complete&#x27; transaction.Request listing.  (CPLIST^GMRCCP)
MAGTIU | LITERAL | 30 | true | The TIUDA of the Note associated with the Consult.  This TIUDA is produced by a call to ITIU^MDAPI
MAGCMP | LITERAL | 10 | true | This is the Complete Flag that Clinical Procedures doesn&#x27;t deal with.It is always &#x27;2&#x27; which indicates a &#x27;Complete&#x27; transaction.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}