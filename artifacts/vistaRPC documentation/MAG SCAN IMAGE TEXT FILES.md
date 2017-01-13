---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG SCAN IMAGE TEXT FILES 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG SCAN IMAGE TEXT FILES{:/}
 tag | {::nomarkdown}SCANIMG{:/}
 routine | [MAGDOD01](http://code.osehra.org/dox/Routine_MAGDOD01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This Remote Procedure assists the client software in traversingthe IMAGE file (#2005)The following sub-actions are supported:  Init    - return information to the client about the            current scan-status  Restart - reset internal counters so that the next scan            will re-scan the whole database  Scan    - return the file-name for the next (or previous) image{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ACTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string. This string specifiesthe action to be taken by the Remote Procedure. Possible values are: Init, Restart and Scan.{:/} | 
| {::nomarkdown}IMAGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to the IMAGE file (#2005).(In order to start a scan, the special values 9 (zero) and \ \ (space)are also permitted.) The value of this parameter indicates the image-number from whichthe Remote Procedure is to start its search for the next (or previous)image. If image=0 and DIR=1, the first image in the database will be found.If image=\ \ and DIR=-1, the last image in the database will be found.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a number. If the value of this numberis less than zero, the value -1 will be used. Otherwise, the value1 will be used. The value of this parameter is used in references to $ORDER to traversethe IMAGE file (#2005){:/} | 




 Generated on January 13th 2017, 6:15:57 am