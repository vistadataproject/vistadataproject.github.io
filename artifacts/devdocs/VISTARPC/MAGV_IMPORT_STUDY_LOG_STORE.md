---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV IMPORT STUDY LOG STORE
# MAGV IMPORT STUDY LOG STORE

Collects study-level data for objects imported by Imaging Importer II application (MAG*3.0*118).

Property | Value
--- | ---
Label | IMPLOGIN
Routine | [MAGVIM03](http://code.osehra.org/dox/Routine_MAGVIM03_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL | 7 |  | DUZ of Importer II user who reconciled artifacts to this study.
USER LOCATION | LITERAL | 6 |  | Logon site, location, or division of the user who reconciled artifacts to this study.
PATIENT DFN | LITERAL | 9 |  | DFN of the Patient to whose study the imported artifacts were reconciled.
ACCESSION NUMBER | LITERAL | 24 |  | Accession Number of the study to which the imported artifacts were reconciled.
STUDY INSTANCE UID | LITERAL | 64 |  | STUDY INSTANCE UID of the study to which the imported artifacts were reconciled.DICOM STANDARD IDENTIFIER: (0020,000D)
STUDY ORIGINATING LOCATION | LITERAL | 30 |  | Location where the imported study was performed.
ASSOCIATED STUDY TYPE | LITERAL | 12 |  | RADiology, CONsult, LABoratory, etc. of the study to which the imported artifacts were reconciled.
STUDY SERIES COUNT | LITERAL | 7 |  | Number of series comprising this study.
STUDY MODALITY COUNTS | LIST | 16 |  | List of Name-Value pairs representing each modality and its count for the imported objects.
MEDIA LOG IEN | LITERAL | 10 | true | Unique identifier of an Importer II media import event. Used to cross-reference fields inthis file with specific source media in the MAGV IMPORT MEDIA LOG file (#2006.9422).
OBJFAIL | LITERAL | 6 |  | Count of requested objects which failed to be imported for this study.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}