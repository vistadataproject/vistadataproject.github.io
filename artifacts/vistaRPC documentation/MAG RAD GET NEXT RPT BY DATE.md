---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG RAD GET NEXT RPT BY DATE 

 property | value 
--- | --- 
 label | MAG RAD GET NEXT RPT BY DATE
 tag | NEXT
 routine | [MAGDRPC9](http://code.osehra.org/dox/Routine_MAGDRPC9_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC looks for the next radiology report,while traversing the \AR\ cross-reference onthe Radiology Patient file. This RPC looks for the next radiology report,while traversing the \AR\ cross-reference onthe Radiology Patient file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SEED | LITERAL | 60 | true | The value of this parameter is a string that consists of threepieces, separated by a caret. The first piece represents the EXAM DATE, the secondpiece represents the Patient Number (DFN) and  the thirdpiece represents the final internal entry number in theRadiology Patient file (D2). The RPC will start looking through the \AR\ cross-reference,based on the specified \seed\ value, and will return thefirst pointer to a Radiology report that it encounters. | 
| DIR | LITERAL | 20 | true | The value of this parameter is a string that indicates the directionin which the RPC will traverse the \AR\ cross-reference.A value that starts with the letter \A\ will cause an\ascending\ traversal.A value that starts with the letter \D\ will cause a\descending\ traversal. When this parameter is not specified, \ascending\ traversal will take place. | 




 ###### Generated on January 11th 2017, 6:39:43 am