---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD RPT INFO 

 property | value 
--- | --- 
 label | MAG DICOM GET RAD RPT INFO
 tag | RARPTO
 routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC returns information from the Radiology Report Table.The type of information returned depends on the values of theinput parameters.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL | 30 | true | The value of this parameter is a string that indicatesthe type of information that is requested:  \O1\:   Next or Previous report pointer at highest level  \O2\:   Next pointer at deeper level  \G1\:   Data record at highest level  \G2\:   Data record at deeper level | 
| vs:Input_Parameter-8994_02 | D0 | LITERAL | 30 | true | The value of this parameter is a numeric value that identifiesthe current record in the Radiology Report table. | 
| vs:Input_Parameter-8994_02 | F | LITERAL | 30 | true | If the value of the first input parameter is equal to \O1\,the value of this parameter is either -1 or +1, indicatingthe traversal direction through the table.For the other values of the first input parameter, the valueis the fixed subscript between the highest level entry numberand the next level internal entry number. | 
| vs:Input_Parameter-8994_02 | D1 | LITERAL | 30 | true | The value of this parameter is the second-level FileMan internalentry number into the Radiology Report table. | 