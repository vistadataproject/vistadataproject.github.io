---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM ROUTE NEXT FILE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM ROUTE NEXT FILE{:/}
 tag | {::nomarkdown}XMIT{:/}
 routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ The Routing Transmitter will continuously ask the VistA systemfor the next file to transmit. This RPC will be called to obtainthe name of the next file to be transmitted. This RPC returns information about the next image file to betransmitted by a certain Routing Transmitter. The next file to be transmitted is either the next file forthe current destination, or the next file with the highestpriority in any of the queues for the destinations that arebeing served by the current transmitter. If neither of the parameters DEST and PRIOR have a non-emptyvalue, information about the first file (if any) to be transmittedwill be returned.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.{:/} | 
| {::nomarkdown}DEST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to either ^MAG(2005.2)or ^MAGDICOM(2006.585).This pointer identifies the destination to which the imagesare to be transmitted.{:/} | 
| {::nomarkdown}PRIOR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is an integer number (> 0).This number establishes the priority of the new entry in its queue.{:/} | 
| {::nomarkdown}MECH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is an integer value (1 or 2).This number defines the mechanism that will be used to transmitthe images:   1 = standard copy   2 = DICOM copy{:/} | 
| {::nomarkdown}DESTS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is an array containing the list of destinationsthat is being served by the current transmitter.The values in this array each are string with two pieces of data,separated by a caret (\^\). The first piece describes the transmission mechanism:  1 = regular copy  2 = DICOM copy The second piece is a pointer. When the first piece is equalto 1, this pointer points to table # 2005.2 (Network Location);when the first piece is equal to 2, this pointer points totable # 2006.585 (User Application).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}