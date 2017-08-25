---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV NO INSURANCE<br/>
# DSIV NO INSURANCE

Allows ICB to set the NO COVERAGE VERIFICATION DATE in the Billing Patient (#354) file.

## Properties

Property | Value
--- | ---
Label | NOI
MUMPS Implementation | [DSIVIC2](http://code.osehra.org/dox/Routine_DSIVIC2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | Contains the patient ien.
DATA | LIST | 80 | true | Contains the field and value to update for ICB file 354.  The format is DATA(field)&#x3D;value.  Example is DATA(60)&#x3D;3060328.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}