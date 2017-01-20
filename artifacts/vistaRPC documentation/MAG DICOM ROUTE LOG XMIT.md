---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM ROUTE LOG XMIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM ROUTE LOG XMIT{:/}
 tag | {::nomarkdown}LOGXIMG{:/}
 routine | [MAGDRPC7](http://code.osehra.org/dox/Routine_MAGDRPC7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ When a file has been routed, information needs to be kept aboutthe fact that a copy has been made. In order to log thisinformation, the routing transmitter will call this RPC. This RPC will take care of all logging of statistics that isneeded after a file has been transmitted. There are six inputparameters: the internal entry number of the queue entry (D0),the internal entry number of the destination to which it wastransmitted (DEST) and the internal entry number of the locationfrom which it was transmitted (LOCATION). The input parameter(STATUS) is equal to either \SENT\ or \FAILED\, depending on theoutcome of the transmission. The value of the input-parameter TOis the name of the file at its destination (later to be used forpurging the file). The value of the parameter XMIT is thetimestamp of the start of the transmission.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}QUEUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^MAGQUEUE(2006.035).This pointer identifies the queue-entry that caused the transmission.The value of this pointer will be used to retrieve the time-stampwhen the entry was made into the queue and the internal entry numberof the image involved.{:/} | 
| {::nomarkdown}DEST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to either ^MAG(2005.2)or ^MAGDICOM(2006.585).This pointer identifies the destination to which the imageswere to be transmitted.{:/} | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.{:/} | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string that identifies thenew status of the current entry in the Transmission Queue.Possible values are \SENDING\, \SENT\ and \FAILED\.{:/} | 
| {::nomarkdown}FILNAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string.This string value represents the name of the image file at its(remote) location.{:/} | 
| {::nomarkdown}XMIT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a (FileMan-formatted) date/time value.This value represents the time-stamp for the moment when the transmissionof the image file started.{:/} | 
| {::nomarkdown}MECH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is an integer value (1 or 2).This number defines the mechanism that will be used to transmitthe images:   1 = standard copy   2 = DICOM copy{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}