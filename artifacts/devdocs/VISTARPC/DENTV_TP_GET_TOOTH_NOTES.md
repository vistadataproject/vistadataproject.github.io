---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP GET TOOTH NOTES<br/>
# DENTV TP GET TOOTH NOTES

This returns all the tooth notes for all dates for a patient.  The data will be sorted by tooth number and then by reverse date.

## Properties

Property | Value
--- | ---
Label | GET
MUMPS Implementation | [DENTVTP6](http://code.osehra.org/dox/Routine_DENTVTP6_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is a pointer to the PATIENT file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}