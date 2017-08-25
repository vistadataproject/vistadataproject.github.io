---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV DICOM SET INSTRUMENT LIST<br/>
# MAGV DICOM SET INSTRUMENT LIST

Update DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911)

## Properties

Property | Value
--- | ---
Label | SETINSTR
MUMPS Implementation | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HOSTNAME | LITERAL |  | true | DICOM Gateway host name
LOCATION | LITERAL |  | true | Identifies the institution where this DICOM Gateway computer resides
MAGDATA | LIST |  | true | Data in DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}