---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM IMAGE PROCESSING 

 property | value 
--- | --- 
 label | MAG DICOM IMAGE PROCESSING
 tag | ENTRY
 routine | [MAGDIR8](http://code.osehra.org/dox/Routine_MAGDIR8_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This Remote Procedure is used by a DICOM Gateway to interchange informationwith the VistA Server. As images are acquired by the DICOM Gateway, information isextracted from the image-file-headers, and attempts are madeto associate the image with a study for a patient. This procedure will take care of storing any information inthe VistA system, and will report any issues and problemsback to the DICOM Gateway. Information is exchanged about images that could not be processed,and when such images have been corrected, this procedure willnotify the DICOM Gateway to make another attempt to processthe (now corrected) image.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REQUEST | LIST | 32000 | true | ??? | 




 Generated on January 11th 2017, 7:15:04 am