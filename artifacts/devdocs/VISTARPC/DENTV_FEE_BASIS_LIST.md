---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV FEE BASIS LIST<br/>
# DENTV FEE BASIS LIST

This RPC gets a list of DENTAL FEE BASIS EXTRACT (#228.5) records fora specified patient.  The input is a single value, patient id (DFN).

## Properties

Property | Value
--- | ---
Label | LIST
MUMPS Implementation | [DENTVFB](http://code.osehra.org/dox/Routine_DENTVFB_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 30 | true | The input value is a single patient id (DFN).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}