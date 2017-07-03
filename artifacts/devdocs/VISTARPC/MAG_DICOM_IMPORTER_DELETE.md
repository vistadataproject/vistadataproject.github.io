---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM IMPORTER DELETE
# MAG DICOM IMPORTER DELETE

This RPC is used by the DICOM Gateway to delete an entry in file IMPORTABLEDICOM OBJECTS (#2006.5752).  The entry to be deleted must match the Hostname,OLDPATH (Gateway), and the image UID.

Property | Value
--- | ---
Label | DELETE
Routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MACHID | LITERAL | 30 | true | This is the hostname of the DICOM Imaging Gateway running the Importer application.
FILEPATH | LITERAL | 30 | true | This is the path of the DICOM image file being deleted.
IMAGEUID | LITERAL | 30 | true | This is the image&#x27;s SOP Instance UID.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}