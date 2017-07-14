---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV PRIMARY PROVIDER<br/>
# DENTV PRIMARY PROVIDER

This rpc gets or sets the primary and secondary providers for adental patient. It also sends back the User duz if the user is a dental provider for the Encounter Provider.

## Properties

Property | Value
--- | ---
Label | GS
Routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 15 | true | The first parameter is the patient ien (DFN) which is the ien tothe DENTAL PATIENT (#220) file.
PSPROV | LITERAL | 40 | true | The second, optional, parameter is the primary and secondary provideriens, in the format p1^p2^p3.  P3 is the Encounter Provider.
OMIT | LITERAL | 1 | true | A flag which determines whether omissions are allowed or required.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}