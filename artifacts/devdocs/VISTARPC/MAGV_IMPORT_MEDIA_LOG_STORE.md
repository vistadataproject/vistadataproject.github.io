---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV IMPORT MEDIA LOG STORE<br/>
# MAGV IMPORT MEDIA LOG STORE

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Files data from an Importer II media import event to the MAGV IMPORT MEDIA LOG file (#2006.9422)

## Properties

Property | Value
--- | ---
Label | IMPMEDIA
Routine | [MAGVIM03](http://code.osehra.org/dox/Routine_MAGVIM03_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGVDUZ | LITERAL | 16 | true | DUZ of the user importing the media.
MAGVWKST | LITERAL | 30 | true | Computer name of the workstation used for the media import event.
MEDTYPE | LITERAL | 16 | true | Media Type used to transport the objects:  Direct Import,  Network Import, Staged Media, DICOM Correct.
MEDVALID | LITERAL | 16 | true | Validation status of the media import event:    0 &#x3D; VALID MEDIA -1 &#x3D; DICOMDIR MISSING -2 &#x3D; DICOMDIR INVALID
MEDVMSG | LITERAL | 220 | true | Description of the validation status of the media import event.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}