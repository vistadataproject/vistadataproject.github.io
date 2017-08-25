---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG CPRS RAD EXAM<br/>
# MAGG CPRS RAD EXAM

Returns a list of Images for the Radiology Exam selected in CPRS.

## Properties

Property | Value
--- | ---
Label | IMAGEC
MUMPS Implementation | [MAGGTRAI](http://code.osehra.org/dox/Routine_MAGGTRAI_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 245 | true | This is the Data that CPRS sends Imaging, in the windows messaging format.i.e. VISTA Messaging between applications.example : &#x27;RPT^CPRS^29027^RA^i79029185.9998-1&#x27;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}