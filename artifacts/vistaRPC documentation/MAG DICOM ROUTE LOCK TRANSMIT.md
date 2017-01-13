---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM ROUTE LOCK TRANSMIT 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM ROUTE LOCK TRANSMIT{:/}
 tag | {::nomarkdown}LOCK{:/}
 routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ The various routing transmitters avoid that multiple transmittersattempt to do the same task at the same time by LOCKing somenames of global variables. They will acquire and release theseLOCKs by calling this RPC. This RPC will either attempt to LOCK a name, or release itscurrent LOCK on the name, depending on the value of inputparameter PLUSMIN. The other input parameters identify adestination to which files are to be sent (D0) and the locationfrom which the files are being sent (LOCATION).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}D0{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to either ^MAG(2005.2)or ^MAGDICOM(2006.585).This pointer identifies the destination to which the imagesare to be transmitted.{:/} | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.{:/} | 
| {::nomarkdown}PLUSMIN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a number. When the value of thisnumber is zero, this RPC will perform one (decremental) unLOCK;when the value of this number is nonzero, this RPC will attemptto perform one (incremental) LOCK with a time-out of zero seconds.{:/} | 




 Generated on January 13th 2017, 7:11:27 am