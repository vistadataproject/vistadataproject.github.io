---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV UPDATE WORK ITEM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV UPDATE WORK ITEM{:/}
 tag | {::nomarkdown}UPDITEM{:/}
 routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC updates a work item in the MAG WORK ITEM file (#2006.941). {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ITEMID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the item ID that uniquely identifies the work list item.{:/} | 
| {::nomarkdown}EXPSTAT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the expected status of the work item.  If the expected statusdoes not match the status of the work item then the item will notbe updated.{:/} | 
| {::nomarkdown}NEWSTAT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the new status to be filed in the work item.{:/} | 
| {::nomarkdown}MESSAGE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the message that is associated with the work item.{:/} | 
| {::nomarkdown}UPDUSR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the user that has updated the work item.{:/} | 
| {::nomarkdown}UPDAPP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the application/service that has updated the work item.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}