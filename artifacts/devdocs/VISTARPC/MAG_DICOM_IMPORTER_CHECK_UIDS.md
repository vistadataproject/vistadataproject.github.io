---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM IMPORTER CHECK UIDS<br/>
# MAG DICOM IMPORTER CHECK UIDS

This RPC is used to lookup DICOM UIDs before importing images.

## Properties

Property | Value
--- | ---
Label | CHECKUID
MUMPS Implementation | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
UIDLIST | LIST | 30 | true | This is a list of UIDs to be evaluated.
LEVEL | LITERAL |  | true | The value is either STUDY or SOP instance UID.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}