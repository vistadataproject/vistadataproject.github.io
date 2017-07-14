---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGGLAB START<br/>
# MAGGLAB START

;The line tag START is used for selection of the specimen that the image relates to. This line tag will require a lab section (Autopsy/ Gross, Autopsy/Microscopic, EM, Surgical Path, or Cytology),the Accession year, and either an Accession # or Autopsy #.  Based onthis information it will return an array of specimens for selection.

## Properties

Property | Value
--- | ---
Label | START
Routine | [MAGGTLB](http://code.osehra.org/dox/Routine_MAGGTLB_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SECT | LITERAL | 60 | true | Lab section, i.e. SP, CY, etc.
YEAR | LITERAL | 30 | true | Lab specimen year.
ACNUM | LITERAL | 60 | true | Lab accession number.
DFN | LITERAL |  |  | PATIENT&#x27;S DFN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}