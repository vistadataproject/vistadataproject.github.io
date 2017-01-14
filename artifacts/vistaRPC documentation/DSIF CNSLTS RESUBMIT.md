---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS RESUBMIT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS RESUBMIT{:/}
 tag | {::nomarkdown}RESUB{:/}
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows for a consult to be resubmitted. Cloned from ORQQCN RESUBMIT{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Consult IEN to which needs to be resubmitted.{:/} | 
| {::nomarkdown}DSIFEDIT{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the array of comments associated with the resubmit request.{:/} | 




 Generated on January 14th 2017, 7:26:36 am