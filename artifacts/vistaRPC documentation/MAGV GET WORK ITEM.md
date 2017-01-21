---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET WORK ITEM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET WORK ITEM{:/}
 tag | {::nomarkdown}GETITEM{:/}
 routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns all of the data elements for a single entry in theMAG WORK ITEM file (#2006.941).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ITEMID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} |  | {::nomarkdown}This is the item ID used to uniquely identify a work item.{:/} | 
| {::nomarkdown}EXPSTAT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the expected status of the work item.  If the work item doesnot have the expected status the work item elements will not bereturned and the work item status will not be updated.{:/} | 
| {::nomarkdown}NEWSTAT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the new status to be filed in the work item.{:/} | 
| {::nomarkdown}UPDUSR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the user that has updated the work item entry.{:/} | 
| {::nomarkdown}UPDAPP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the application/service that has updated the work item entry.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}