---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS ADDCMT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS ADDCMT{:/}
 tag | {::nomarkdown}ADDCMT{:/}
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows for the adding of a Comment to a Consult. Cloned from ORQQCN ADDCMT{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Consult IEN in which a comment needs to be added to.{:/} | 
| {::nomarkdown}DSIFCOM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the array of comments that need to be added to the Consult.{:/} | 
| {::nomarkdown}DSIFALRT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} |  | {::nomarkdown}This is the indiciation that alerts should be sent to someone. 1 means yes.{:/} | 
| {::nomarkdown}DSIFALTO{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Contains pointers to NEW PERSON FILE (200) for those to receive alert for this addition of a comment.{:/} | 
| {::nomarkdown}DSIFORDT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the date of the Comment is added to the Consult. If not passed in, defaults to NOW^XLFDT.{:/} | 




 Generated on January 13th 2017, 6:55:29 am