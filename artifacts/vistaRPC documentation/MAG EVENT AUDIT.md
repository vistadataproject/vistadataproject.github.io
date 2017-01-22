---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG EVENT AUDIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG EVENT AUDIT{:/}
 tag | {::nomarkdown}EVENT{:/}
 routine | [MAGUAUD](http://code.osehra.org/dox/Routine_MAGUAUD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC audits background events such as DICOM Queries.  When auditing events executed by other APIs, it may be invoked as a MUMPS API without making another call to the RPC Broker.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}EVENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the event being audited.  It must be a valid entry on the IMAGING EVENT ACTION File (#2006.931).{:/} | 
| {::nomarkdown}HOSTNAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} |  | {::nomarkdown}This is the host name of the host machine whose event is being audited.{:/} | 
| {::nomarkdown}APPNAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} |  | {::nomarkdown}This is the application name of the application whose event is being audited.{:/} | 
| {::nomarkdown}MESSAGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} |  | {::nomarkdown}This is the message associated with the audit event.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}129{:/} |  | {::nomarkdown}This is a list of data attribute names and associated values to be includedin the audit event log.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}