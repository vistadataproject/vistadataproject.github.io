---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB MOB DRUG LIST<br/>
# PSB MOB DRUG LIST

Used by the BCMA/CPRS Med Order Button to return an array of drug.

## Properties

Property | Value
--- | ---
Label | OILST
Routine | [PSBRPCMO](http://code.osehra.org/dox/Routine_PSBRPCMO_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBSCAN | LITERAL | 40 | true | PSBSCAN is the value that has been scanned or entered by the user.
PSBOTYP | LITERAL | 30 | true | Type of list:     Dispensed Drugs   &#x3D; &quot;UD&quot;     IV Medications    &#x3D; &quot;IV&quot;     Orderable Item    &#x3D; &quot;OIT&quot;     Drug Class        &#x3D; &quot;VAC&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}