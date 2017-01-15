---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD RPT INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM GET RAD RPT INFO{:/}
 tag | {::nomarkdown}RARPTO{:/}
 routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC returns information from the Radiology Report Table.The type of information returned depends on the values of theinput parameters.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string that indicatesthe type of information that is requested:  \O1\:   Next or Previous report pointer at highest level  \O2\:   Next pointer at deeper level  \G1\:   Data record at highest level  \G2\:   Data record at deeper level{:/} | 
| {::nomarkdown}D0{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a numeric value that identifiesthe current record in the Radiology Report table.{:/} | 
| {::nomarkdown}F{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If the value of the first input parameter is equal to \O1\,the value of this parameter is either -1 or +1, indicatingthe traversal direction through the table.For the other values of the first input parameter, the valueis the fixed subscript between the highest level entry numberand the next level internal entry number.{:/} | 
| {::nomarkdown}D1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is the second-level FileMan internalentry number into the Radiology Report table.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}