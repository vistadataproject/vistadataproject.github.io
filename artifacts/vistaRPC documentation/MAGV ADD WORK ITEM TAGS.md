---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV ADD WORK ITEM TAGS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV ADD WORK ITEM TAGS{:/}
 tag | {::nomarkdown}ADDTAG{:/}
 routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows tags to be added to work items in the MAG WORK ITEM file (#2006.941). Tags consist of a tag name and a tag value.  Tags and valuesmay be used to look up entries in the MAG WORK ITEM file (#2006.941).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TAG{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}This is the parameter containing the tag name and the tag value for thework item.{:/} | 
| {::nomarkdown}ITEM ID{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the item ID of the entry in the MAG WORK ITEM file (#2006.941) thattags will be added to.{:/} | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is a list of expected statuses that the work item may have.  Ifthe work item does not have a status that matches one of the statusessupplied the tag will not be added.{:/} | 
| {::nomarkdown}UPDUSR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the user that updated the work item.{:/} | 
| {::nomarkdown}UPDAPP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the application that updated the work item.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}