---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM CORRECT VALIDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM CORRECT VALIDATE{:/}
 tag | {::nomarkdown}VALIDATE{:/}
 routine | [MAGDLBV](http://code.osehra.org/dox/Routine_MAGDLBV_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This Remote Procedure validates the structure of the tablethat contains information about images that are \to be corrected\. Any inconsistencies are corrected, any pointers to obsoleteinformation are removed, all cross-references are rebuilt.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MENU{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a numeric value. This value indicateswhether or not the procedure is called from the VistA menu.When called from the menu (the value of this parameter is TRUE),status information is displayed interactively as the procedureis active.When called as a Remote Procedure (the value of this parameteris FALSE), only a status code is returned to the client and nointeractive output is generated.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}