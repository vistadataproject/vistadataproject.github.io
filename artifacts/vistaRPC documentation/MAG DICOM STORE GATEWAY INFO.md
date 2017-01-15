---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM STORE GATEWAY INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM STORE GATEWAY INFO{:/}
 tag | {::nomarkdown}GWINFO{:/}
 routine | [MAGDQR05](http://code.osehra.org/dox/Routine_MAGDQR05_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure stores information about a DICOM Gatewayin the VistA system.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HOSTNAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string.This value must be the \hostname\ of a computer that is beingused to operate the DICOM Gateway for which the informationis being stored.{:/} | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to the Institution file (#4).The location being pointed to is the one for which the DICOM Gatewayoperates.{:/} | 
| {::nomarkdown}FILES{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}32000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is an array.The entries in this array contain information about fileson the DICOM Gateway.For each file, a timestamp (most recent modification) andthe full path+file name is included.{:/} | 
| {::nomarkdown}VERSION{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}32000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is an array.The entries in this array contain information about theversion stamps of the various executables in the DICOMGateway application.For each component, a timestamp (most recent modification)and the full path+file name is included.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}