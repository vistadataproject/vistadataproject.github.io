---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG CFIND QUERY 

 property | value 
--- | --- 
 label | MAG CFIND QUERY
 tag | FIND
 routine | [MAGDQR01](http://code.osehra.org/dox/Routine_MAGDQR01_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC performs a DICOM C-FIND request. A request is executed through a TaskMan process,which stores the results in temporary storage (^MAGDQR(2006.5732)). Subsequent calls to this same RPC will retrieve theresults from the result-set to the client. A final call to this RPC will clean up the temporary storage.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TAGS | LIST | 32000 | true | This parameter is an array. Each element in this arrayhas a value that looks like: tag | VR | flag | value Each 'tag' is a DICOM tag (two groups of 4 hexadecimaldigits, separated by a comma). When the value is non-empty, it will be used as a searchcriterion in the actual C-Find processing. | 
| RESULT | LITERAL | 20 | true | The value of this parameter is an integer number thatidentifies a Result-Set. The value of this parameter is either 0 (when a newresult-set is to be created) or equal to the internalentry number of an existing result-set. | 
| OFFSET | LITERAL | 20 | true | The value of this parameter is an integer number.When the value of this number is equal to 0,the RPC will either create a new result-set,(when the value of RESULT is also equal to 0),or else check whether TaskMan has finished buildingthe result-set, and if so, return the first batch ofresults. When the value of this number is greater than 0,the RPC will return the next batch of results, startingfrom the one indicated by the value of this parameter. When the value of this number is less than 0,the RPC will clean up the result-set. | 
| MAX | LITERAL | 10 | true | The value of this parameter is an integer number.This value indicates the number of results to be returnedin each call to this RPC. | 
| AENAME | LITERAL | 127 | true | This is the name of the DICOM Application Entity performing the query. It may be mapped to an entry on the DICOM AE SECURITY MATRIX file (#2006.9192). | 




 Generated on January 11th 2017, 7:15:04 am