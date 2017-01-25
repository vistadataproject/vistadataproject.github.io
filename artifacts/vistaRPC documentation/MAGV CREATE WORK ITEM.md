---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV CREATE WORK ITEM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV CREATE WORK ITEM{:/}
 tag | {::nomarkdown}CRTITEM{:/}
 routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC creates work item entries in the MAG WORK ITEM file (#2006.941).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the type of WORK ITEM created (i.e. DICOM Correct).{:/} | 
| {::nomarkdown}SUBTYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the subtype of a work item.{:/} | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the initial status given to a work item.{:/} | 
| {::nomarkdown}PLACEID{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the place ID number of a work item.{:/} | 
| {::nomarkdown}PRIORITY{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the numeric priority given to a work item.{:/} | 
| {::nomarkdown}MSGTAGS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}This is an array of tag names and values assigned to a work item. Tagnames and values may be used to look up a work item.{:/} | 
| {::nomarkdown}CRTUSER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the user that created the work item.{:/} | 
| {::nomarkdown}CRTAPP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the application that created the work item.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}