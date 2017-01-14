---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM GET BASIC IMAGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM GET BASIC IMAGE{:/}
 tag | {::nomarkdown}IMAGE{:/}
 routine | [MAGDRPC2](http://code.osehra.org/dox/Routine_MAGDRPC2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC returns information about an image.The information that is returned consists of any ofthe fields listed below. Fields that do not havea value (or that have an \empty\ value) are notreturned.     OBJECT NAME    FILEREF    DISK & VOLUME, MAGNETIC    DISK & VOLUME, ABSTRACT    DISK & VOLUME, WORM    OBJECT TYPE    PATIENT    PROCEDURE    LAST ACCESS DATE    IQ    GROUP PARENT    ACQUISITION SITE    DESCRIPTIVE CATEGORY    CLINIC    ACQUISITION DEVICE    TRACKING ID    DOCUMENT DATE    DATE/TIME IMAGE SAVED    IMAGE SAVE BY    SUMMARY OBJECT    SHORT DESCRIPTION    PROCEDURE/EXAM DATE/TIME    PARENT DATA FILE#    PARENT GLOBAL ROOT D0    PARENT DATA FILE IMAGE POINTER    EXPORT REQUEST STATUS    PARENT GLOBAL ROOT D1    Full FileName    Full Path+FileName    Big FileName    Big Path+FileName    Abstract FileName    Abstract Path+FileName{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}D0{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^MAG(2005).This pointer identifies the image for which informationis being requested.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}