---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM STORE GATEWAY INFO<br/>
# MAG DICOM STORE GATEWAY INFO

This Remote Procedure stores information about a DICOM Gatewayin the VistA system.

## Properties

Property | Value
--- | ---
Label | GWINFO
MUMPS Implementation | [MAGDQR05](http://code.osehra.org/dox/Routine_MAGDQR05_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HOSTNAME | LITERAL | 30 | true | The value of this parameter is a string.This value must be the &quot;hostname&quot; of a computer that is beingused to operate the DICOM Gateway for which the informationis being stored.
LOCATION | LITERAL | 10 | true | The value of this parameter is a pointer to the Institution file (#4).The location being pointed to is the one for which the DICOM Gatewayoperates.
FILES | LIST | 32000 | true | This parameter is an array.The entries in this array contain information about fileson the DICOM Gateway.For each file, a timestamp (most recent modification) andthe full path+file name is included.
VERSION | LIST | 32000 | true | This parameter is an array.The entries in this array contain information about theversion stamps of the various executables in the DICOMGateway application.For each component, a timestamp (most recent modification)and the full path+file name is included.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}