---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG MULTI IMAGE PRINT 

 property | value 
--- | --- 
 label | MAGG MULTI IMAGE PRINT
 tag | LOGPRNT
 routine | [MAGGROI](http://code.osehra.org/dox/Routine_MAGGROI_source.html)
 return value type | SINGLE VALUE
 description | Log multiple images printed for a patient in the MULTI IMAGE PRINT file ^MAG(2006.961

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 245 | true | \^\ delimited string containing data insertedinto the MULTI IMAGE PRINT file #2006.961.  ^01: PATIENT DFN ^02: REASON FOR PRINTe.g.: 123456^Authorized release of medical records or health information (ROI) | 
| IMGARR | LIST |  | true | An array of \^\ delimited string of values for each image printed  ^01: IEN for the image (Note: This may be a url for a remote image) ^02: Local/remote indicator (0=local, 1=remote) ^03: IMAGE PRINT STATUS          (Note: The image information displayed to the user          in the client application.)  e.g.: IMGARR(0)=^1^SLC-DIABETIC TELERETINAL IMAGING CONSULT REPORT                       -NOTE-04/13/2009 11:31: Image type not printable       IMGARR(1)=123456^0^SLC-AU 01 2-LAB-08/21/2001: Image printed | 




Generated on January 11th 2017, 6:34:23 am