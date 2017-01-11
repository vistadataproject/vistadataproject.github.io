---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM STORE GATEWAY INFO 

 property | value 
--- | --- 
 label | MAG DICOM STORE GATEWAY INFO
 tag | GWINFO
 routine | [MAGDQR05](http://code.osehra.org/dox/Routine_MAGDQR05_source.html)
 return value type | SINGLE VALUE
 description | This Remote Procedure stores information about a DICOM Gatewayin the VistA system.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HOSTNAME | LITERAL | 30 | true | The value of this parameter is a string.This value must be the \hostname\ of a computer that is beingused to operate the DICOM Gateway for which the informationis being stored. | 
| LOCATION | LITERAL | 10 | true | The value of this parameter is a pointer to the Institution file (#4).The location being pointed to is the one for which the DICOM Gatewayoperates. | 
| FILES | LIST | 32000 | true | This parameter is an array.The entries in this array contain information about fileson the DICOM Gateway.For each file, a timestamp (most recent modification) andthe full path+file name is included. | 
| VERSION | LIST | 32000 | true | This parameter is an array.The entries in this array contain information about theversion stamps of the various executables in the DICOMGateway application.For each component, a timestamp (most recent modification)and the full path+file name is included. | 




 ###### Generated on January 11th 2017, 6:39:43 am