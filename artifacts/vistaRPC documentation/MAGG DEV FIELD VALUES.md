---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG DEV FIELD VALUES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG DEV FIELD VALUES{:/}
 tag | {::nomarkdown}GETS{:/}
 routine | [MAGGTSYS](http://code.osehra.org/dox/Routine_MAGGTSYS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN in the Image File.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Flags parameter used in the call to GETS^DIQ.  If this is null, then the default of \IERN\ is used.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}