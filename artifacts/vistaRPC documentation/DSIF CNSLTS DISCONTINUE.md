---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS DISCONTINUE 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS DISCONTINUE{:/}
 tag | {::nomarkdown}DISCON{:/}
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows for the discontinuing of a selected Consult. Cloned from ORQQCN DISCONTINUE{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Consult IEN that needs to be discontinued.{:/} | 
| {::nomarkdown}DSIFPROV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Provider who Discontinued or Denied consult.{:/} | 
| {::nomarkdown}DSIFDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date the consult was discontinued or denied.{:/} | 
| {::nomarkdown}DSIFACTM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag used to determine if Consult was DISCONTINUED or DENIED. 'DC' - Discontinued'DY' - Denied{:/} | 
| {::nomarkdown}DSIFCOM{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} |  | {::nomarkdown}The array of comments associated with the discontinue/deny for the consult.{:/} | 




 Generated on January 13th 2017, 6:55:29 am