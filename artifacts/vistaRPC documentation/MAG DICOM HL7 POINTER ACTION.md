---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM HL7 POINTER ACTION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM HL7 POINTER ACTION{:/}
 tag | {::nomarkdown}HL7PTR{:/}
 routine | [MAGDRPC8](http://code.osehra.org/dox/Routine_MAGDRPC8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC retrieves information about HL7 messages.Depending on the values of the parameters, different types ofinformation can be returned.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ACTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string that specifies the actionto be taken by the remote procedure.Currently, valid actions are \GetDate\ and \DatePtr\.{:/} | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string. The meaning of thisstring depends on the value of parameter ACTION.When ACTION=\GetDate\, the value of this parameter is interpretedas a pointer to the HL7 message for which the date is to beretrieved.When ACTION=\DatePtr\, the value of this parameter is interpretedas the date for which a pointer to the first HL7 message thatoccurred on or past that date is to be retrieved.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}