---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV FILE ADMIN TIME<br/>
# DENTV FILE ADMIN TIME

This will file non-clinical admin time into file 226

## Properties

Property | Value
--- | ---
Label | NON
MUMPS Implementation | [DENTVRP4](http://code.osehra.org/dox/Routine_DENTVRP4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 25 | true | DATA &#x3D; p1^p2^p3^p4 where  p1 :&#x3D;&#x3D; duz - pointer to file 200 (also must be in file 220.5)  p2 :&#x3D;&#x3D; single character code (A)dmin  (f)ee basis  (R)esearch         (E)ducation/training  p3 :&#x3D;&#x3D; non-clinical admin time hr.min (0.25 - 49.75)         [in 15 minute increments]  p4 :&#x3D;&#x3D; station.division name (from file 225)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}