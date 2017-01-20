---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRHCQ SUBDTA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRHCQ SUBDTA{:/}
 tag | {::nomarkdown}SUBDTA{:/}
 routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns name-value pairs that represent columns for a subset of records.The list view in the GUI posts an event for which records it needs todisplay.  This call obtains the data for those records.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FIRST{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The first record that has been requested by the listview control.{:/} | 
| {::nomarkdown}LAST{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The last record number that has been requested by the listview control.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}