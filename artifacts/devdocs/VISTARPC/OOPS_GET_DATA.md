---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS GET DATA<br/>
# OOPS GET DATA

This broker call returns the data in the ASISTS Accident Reporting File (#2260)for fields that are 1) Set of Codes, 2) Set of Codes Multiple, 3) Pointer toa file, and 4) Pointer to a file multiple.

## Properties

Property | Value
--- | ---
Label | GETDATA
MUMPS Implementation | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This parameter contains the File #, the Field #, and the IEN of the data to beextracted.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}