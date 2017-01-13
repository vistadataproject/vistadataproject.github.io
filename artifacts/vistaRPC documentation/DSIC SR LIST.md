---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC SR LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC SR LIST{:/}
 tag | {::nomarkdown}LISTSR{:/}
 routine | [DSICSRPT](http://code.osehra.org/dox/Routine_DSICSRPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return a list of actual surgical cases for a patient for a date range{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is patient pointer from file 2 for which to retrieve cases.{:/} | 
| {::nomarkdown}ALPHA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the starting date.time in Fileman format for retrieving surgical cases.  Default value is 1/1/2000{:/} | 
| {::nomarkdown}OMEGA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a Fileman date.time  It is the ending date for surgical cases.  The default value is TODAY{:/} | 




 Generated on January 13th 2017, 6:55:29 am