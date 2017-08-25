---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV STUDY UID CHECK<br/>
# MAGV STUDY UID CHECK

Performs check for duplicate Study UIDs

## Properties

Property | Value
--- | ---
Label | STUDY
MUMPS Implementation | [MAGVUID](http://code.osehra.org/dox/Routine_MAGVUID_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 10 | true | IEN of the patient&#x27;s record in the NEW PERSON File (#200).
ACNUMB | LITERAL | 20 | true | ACCESSION NUMBER (LONG FORM) DATE-SITE LOCATION The date is in VA format, and the site location code is the site number. The two components are concatenated with a hyphen (-). This component comes from image&#x27;s DICOM header by way of the Modality Worklist entry for the associated study.
SITE | LITERAL | 5 | true | SITE CODE (660)
INSTR | LITERAL | 30 | true | INSTRUMENT NAME
STUDYUID | LITERAL | 64 | true | STUDY UID



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}