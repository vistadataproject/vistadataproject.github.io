---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM IMAGE PROCESSING
# MAG DICOM IMAGE PROCESSING

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This Remote Procedure is used by a DICOM Gateway to interchange informationwith the VistA Server. As images are acquired by the DICOM Gateway, information isextracted from the image-file-headers, and attempts are madeto associate the image with a study for a patient. This procedure will take care of storing any information inthe VistA system, and will report any issues and problemsback to the DICOM Gateway. Information is exchanged about images that could not be processed,and when such images have been corrected, this procedure willnotify the DICOM Gateway to make another attempt to processthe (now corrected) image.

Property | Value
--- | ---
Label | ENTRY
Routine | [MAGDIR8](http://code.osehra.org/dox/Routine_MAGDIR8_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REQUEST | LIST | 32000 | true | ???



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}