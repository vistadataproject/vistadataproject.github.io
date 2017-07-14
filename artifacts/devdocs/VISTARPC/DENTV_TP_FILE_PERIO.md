---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP FILE PERIO<br/>
# DENTV TP FILE PERIO

This RPC adds (or updates) a reocrd to the Treatment Plan Transaction/Exam file (#228.2).  The only record type supported by this RPC is the Perio type, where the TYPE field (.29) = 2.

## Properties

Property | Value
--- | ---
Label | PER
Routine | [DENTVTP4](http://code.osehra.org/dox/Routine_DENTVTP4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LIST | 30 | true | This is the input array for adding or updating a Perio transaction type to the Treatment Plan Transaction/Exam file (#228.2).  The input array will contain the following data:  data(&quot;ENC&quot;)&#x3D;pointer to the DENTAL HISTORY file (#228.1)              required for Adding new records, optional for update records  data(&quot;PER&quot;)&#x3D;p1^p2^p3^p4^p5 where      p1&#x3D;transaction id (-1 for add, valid txn id for update)      p2&#x3D;exam number (integer value, 0-99999)      p3&#x3D;exam date in external format (MM/DD/YY@HH:MM)      p4&#x3D;provider id      p5&#x3D;status flag (A&#x3D;add, U&#x3D;update)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}