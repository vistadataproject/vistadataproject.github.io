---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRHCQ SORTBY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRHCQ SORTBY{:/}
 tag | {::nomarkdown}SORTBY{:/}
 routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Causes the query results that are in ^TMP(\ORRHCQD\,$J) to be sorted ona particular column.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FNM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the column that should be used as the sort key.{:/} | 
| {::nomarkdown}FWD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is boolean true if the sort should be ascending, false if descending.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}