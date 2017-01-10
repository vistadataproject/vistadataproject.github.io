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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | HOSTNAME | LITERAL | 30 | true | The value of this parameter is a string.This value must be the \hostname\ of a computer that is beingused to operate the DICOM Gateway for which the informationis being stored. | 
| vs:Input_Parameter-8994_02 | LOCATION | LITERAL | 10 | true | The value of this parameter is a pointer to the Institution file (#4).The location being pointed to is the one for which the DICOM Gatewayoperates. | 
| vs:Input_Parameter-8994_02 | FILES | LIST | 32000 | true | This parameter is an array.The entries in this array contain information about fileson the DICOM Gateway.For each file, a timestamp (most recent modification) andthe full path+file name is included. | 
| vs:Input_Parameter-8994_02 | VERSION | LIST | 32000 | true | This parameter is an array.The entries in this array contain information about theversion stamps of the various executables in the DICOMGateway application.For each component, a timestamp (most recent modification)and the full path+file name is included. | 