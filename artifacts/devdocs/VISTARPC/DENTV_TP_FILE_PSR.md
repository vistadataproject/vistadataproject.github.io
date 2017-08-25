---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP FILE PSR<br/>
# DENTV TP FILE PSR

This RPC adds (or updates) a record to the Treatment Plan Transaction/Examfile (#228.2).  The only record type supported by this RPC is the PSR type, where the TYPE field (.29) = 3.

## Properties

Property | Value
--- | ---
Label | PSR
MUMPS Implementation | [DENTVTP4](http://code.osehra.org/dox/Routine_DENTVTP4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LIST | 30 | true | This is the input array for adding or updating a PSR transaction type to the Treatment Plan Transaction/Exam file (#228.2).  The input array will contain the following data:  data(&quot;ENC&quot;)&#x3D;pointer to the DENTAL HISTORY file (#228.1)              required for Adding new records, optional for update records  data(&quot;PSR&quot;)&#x3D;p1^p2^p3^p4^p5 where      p1&#x3D;transaction id (-1 for add, valid txn id for update)      p2&#x3D;exam date in external format (MM/DD/YY@HH:MM)      p3&#x3D;provider id      p4&#x3D;PSR score string (1-6 chars)      p5&#x3D;status flag (A for add, U for update)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}