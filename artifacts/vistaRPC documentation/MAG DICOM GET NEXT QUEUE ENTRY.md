---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM GET NEXT QUEUE ENTRY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM GET NEXT QUEUE ENTRY{:/}
 tag | {::nomarkdown}NEXTIMG{:/}
 routine | [MAGDRPC4](http://code.osehra.org/dox/Routine_MAGDRPC4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC will check if there are any new images to be transmitted,and will return information about the first or next one (if any)in the DICOM transmission queue.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired,i.e., from where they are being transmitted.{:/} | 
| {::nomarkdown}D0{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this optional parameter is a pointer into theDICOM IMAGE OUTPUT file (#2006.574). If this paramater is omitted,this RPC will find the first (if any) study in this file to betransmitted. If this parameter is specified, its value is intendedto be the \D0\ value for the most recent image transmitted, and thisRPC will find the next (if any) image to be transmitted.{:/} | 
| {::nomarkdown}D1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this optional parameter is a pointer into theIMAGE multiple of the DICOM IMAGE OUTPUT file (#2006.574). If this paramater is omitted,this RPC will find the first (if any) image in this file for thecurrent study to betransmitted. If this parameter is specified, its value is intendedto be the \D1\ value for the most recent image transmitted, and thisRPC will find the next (if any) image to be transmitted.{:/} | 
| {::nomarkdown}SENT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}10000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is an array. Each element of this arraycontains internal entry numbers that identify an entryin the send-queue that has been transmitted successfully.The RPC will use the contents of this array to removeentries from the queue that have been transmitted.{:/} | 
| {::nomarkdown}CHECK{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a boolean value.When the value of this parameter is non-zero (true),the RPC will not mark the queue entry as being \in transmission\.This feature is used when the RPC is being called for thesole purpose of deternining whether or not there areany entries in the queue.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}