---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCQ SUBDTA 

 property | value 
--- | --- 
 label | {::nomarkdown}ORRHCQ SUBDTA{:/}
 tag | {::nomarkdown}SUBDTA{:/}
 routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns name-value pairs that represent columns for a subset of records.The list view in the GUI posts an event for which records it needs todisplay.  This call obtains the data for those records.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FIRST{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The first record that has been requested by the listview control.{:/} | 
| {::nomarkdown}LAST{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The last record number that has been requested by the listview control.{:/} | 




 Generated on January 13th 2017, 6:15:57 am