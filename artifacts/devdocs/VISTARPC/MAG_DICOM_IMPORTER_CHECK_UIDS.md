---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM IMPORTER CHECK UIDS
# MAG DICOM IMPORTER CHECK UIDS

This RPC is used to lookup DICOM UIDs before importing images.

Property | Value
--- | ---
Label | CHECKUID
Routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
UIDLIST | LIST | 30 | true | This is a list of UIDs to be evaluated.
LEVEL | LITERAL |  | true | The value is either STUDY or SOP instance UID.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}