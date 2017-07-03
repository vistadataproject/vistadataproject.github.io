---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG CPRS RAD EXAM
# MAGG CPRS RAD EXAM

Returns a list of Images for the Radiology Exam selected in CPRS.

Property | Value
--- | ---
Label | IMAGEC
Routine | [MAGGTRAI](http://code.osehra.org/dox/Routine_MAGGTRAI_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 245 | true | This is the Data that CPRS sends Imaging, in the windows messaging format.i.e. VISTA Messaging between applications.example : &#x27;RPT^CPRS^29027^RA^i79029185.9998-1&#x27;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}