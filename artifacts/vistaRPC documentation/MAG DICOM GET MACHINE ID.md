---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM GET MACHINE ID 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM GET MACHINE ID{:/}
 tag | {::nomarkdown}GETID{:/}
 routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This Remote Procedure returns the internal entry number ofthe entry for the specified computer in the table of registeredDICOM Gateways.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HOSTNAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string. This string is the\host name\ of a computer. Many sites follow the standardto use names like VHAxxxabcde, where xxx is a three-letterabbreviation for the name of the site, and abcde is theactual name of the computer.{:/} | 




 Generated on January 13th 2017, 6:44:48 am