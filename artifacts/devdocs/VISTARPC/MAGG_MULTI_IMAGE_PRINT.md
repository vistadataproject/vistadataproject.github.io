---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG MULTI IMAGE PRINT<br/>
# MAGG MULTI IMAGE PRINT

Log multiple images printed for a patient in the MULTI IMAGE PRINT file ^MAG(2006.961

## Properties

Property | Value
--- | ---
Label | LOGPRNT
MUMPS Implementation | [MAGGROI](http://code.osehra.org/dox/Routine_MAGGROI_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 245 | true | &quot;^&quot; delimited string containing data insertedinto the MULTI IMAGE PRINT file #2006.961.  ^01: PATIENT DFN ^02: REASON FOR PRINTe.g.: 123456^Authorized release of medical records or health information (ROI)
IMGARR | LIST |  | true | An array of &quot;^&quot; delimited string of values for each image printed  ^01: IEN for the image (Note: This may be a url for a remote image) ^02: Local/remote indicator (0&#x3D;local, 1&#x3D;remote) ^03: IMAGE PRINT STATUS          (Note: The image information displayed to the user          in the client application.)  e.g.: IMGARR(0)&#x3D;^1^SLC-DIABETIC TELERETINAL IMAGING CONSULT REPORT                       -NOTE-04/13/2009 11:31: Image type not printable       IMGARR(1)&#x3D;123456^0^SLC-AU 01 2-LAB-08/21/2001: Image printed



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}