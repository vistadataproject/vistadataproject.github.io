---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR CLEANUP EXEMPTIONS 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIR CLEANUP EXEMPTIONS{:/}
 tag | {::nomarkdown}FIXMPT{:/}
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returna an array containing the internal numbers of any entry in file 19620 that may have bogus data stored in the exemption fields. This problem was corrected in the 5.2 version of the ROI package, this will allow the ROI manager to review and correct the individual ROI requests.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date used to start the search for entries to check for bogus exemption data.{:/} | 
| {::nomarkdown}END DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date to stop the search.  Defaults to the current day.{:/} | 




 Generated on January 13th 2017, 6:55:29 am