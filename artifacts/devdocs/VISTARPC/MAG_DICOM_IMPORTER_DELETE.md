---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM IMPORTER DELETE<br/>
# MAG DICOM IMPORTER DELETE

This RPC is used by the DICOM Gateway to delete an entry in file IMPORTABLEDICOM OBJECTS (#2006.5752).  The entry to be deleted must match the Hostname,OLDPATH (Gateway), and the image UID.

## Properties

Property | Value
--- | ---
Label | DELETE
Routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MACHID | LITERAL | 30 | true | This is the hostname of the DICOM Imaging Gateway running the Importer application.
FILEPATH | LITERAL | 30 | true | This is the path of the DICOM image file being deleted.
IMAGEUID | LITERAL | 30 | true | This is the image&#x27;s SOP Instance UID.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}