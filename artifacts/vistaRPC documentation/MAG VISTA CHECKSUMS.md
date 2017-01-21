---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG VISTA CHECKSUMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG VISTA CHECKSUMS{:/}
 tag | {::nomarkdown}GATEWAY{:/}
 routine | [MAGVCHK](http://code.osehra.org/dox/Routine_MAGVCHK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC queues up a TaskMan task that calculates the checksumsof all Imaging routines and that e-mails the result to thecentral database in Silver Spring.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDBB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this paramater is a string. This string is thee-mail address for the mailgroup in MailMan to which themessage with the checksums is to be sent.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}