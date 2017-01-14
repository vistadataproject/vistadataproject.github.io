---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS SVC W_SYNONYMS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS SVC W_SYNONYMS{:/}
 tag | {::nomarkdown}SVCSYN{:/}
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of Services with synonyms. Cloned from ORQQCN SVC W/SYNONYMS.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFROOT{:/} |  |  |  |  | 
| {::nomarkdown}DSIFSTRT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Service IEN you wish to start building the return list from.{:/} | 
| {::nomarkdown}DSIFWHY{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is whether you want to return the list for display only, or for use in ordering or forwarding a request.{:/} | 
| {::nomarkdown}DSIFSYN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} |  | {::nomarkdown}This is a boolean inputon whether you want the return to include synonyms: 1 = Yes, 0 No.{:/} | 
| {::nomarkdown}DSIFOIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the Consult IEN, and is optional.{:/} | 




 Generated on January 14th 2017, 7:26:36 am