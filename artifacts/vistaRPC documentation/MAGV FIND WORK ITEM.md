---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV FIND WORK ITEM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV FIND WORK ITEM{:/}
 tag | {::nomarkdown}FIND{:/}
 routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC returns an array of work items with values that match theparameters provided.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the type of work item.  Work item types are stored in theWORKLIST file (#2006.9412).{:/} | 
| {::nomarkdown}SUBTYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the subtype of the work item.{:/} | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the current status of the work item.{:/} | 
| {::nomarkdown}PLACEID{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is a place ID of a work item.  The place ID is an entry in theINSTITUTION file (#4).{:/} | 
| {::nomarkdown}PRIORITY{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the numeric priority given to a work item.{:/} | 
| {::nomarkdown}TAGS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}This is an array of tag names and values.{:/} | 
| {::nomarkdown}STOPTAG{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If this parameter is set then the tag list may be truncated. If a tagvalue matching the parameter value is returned then no more tags willbe returned.{:/} | 
| {::nomarkdown}MAXROWS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter determines the number of work items to return.  If thisparameter is not set all matching work items will be sent.  If this parameteris defined it will determine the maximum number of work items to return{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}