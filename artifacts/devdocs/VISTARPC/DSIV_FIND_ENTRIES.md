---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV FIND ENTRIES<br/>
# DSIV FIND ENTRIES

Returns unprocessed INSURANCE BUFFER file entries for a given patient.

## Properties

Property | Value
--- | ---
Label | FIND
MUMPS Implementation | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 16 | true | Patient internal entry number (in FILE #2).
FLDS | LITERAL | 80 | true | Contains the requested buffer entry fields that can be retrieved using Fileman (i.e. not an API call).  For example: &quot;@;.01I;.02;.03;.04I;20.01;40.02;40.03;40.09;60.04&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}