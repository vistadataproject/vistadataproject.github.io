---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM HL7 POINTER ACTION 

 property | value 
--- | --- 
 label | MAG DICOM HL7 POINTER ACTION
 tag | HL7PTR
 routine | [MAGDRPC8](http://code.osehra.org/dox/Routine_MAGDRPC8_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC retrieves information about HL7 messages.Depending on the values of the parameters, different types ofinformation can be returned.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ACTION | LITERAL | 30 | true | The value of this parameter is a string that specifies the actionto be taken by the remote procedure.Currently, valid actions are \GetDate\ and \DatePtr\. | 
| VALUE | LITERAL | 30 | true | The value of this parameter is a string. The meaning of thisstring depends on the value of parameter ACTION.When ACTION=\GetDate\, the value of this parameter is interpretedas a pointer to the HL7 message for which the date is to beretrieved.When ACTION=\DatePtr\, the value of this parameter is interpretedas the date for which a pointer to the first HL7 message thatoccurred on or past that date is to be retrieved. | 




 ###### Generated on January 11th 2017, 6:39:43 am