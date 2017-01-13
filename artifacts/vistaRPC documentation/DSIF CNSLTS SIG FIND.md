---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS SIG FIND 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS SIG FIND{:/}
 tag | {::nomarkdown}SIGFIND{:/}
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows for Significant Findings updates to be added to a Consult. Cloned from ORQQCN SIG FIND{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Consult IEN for the consult you wish to add a significant findings update to.{:/} | 
| {::nomarkdown}DSIFSF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The flag for what type of significant finding update is being added: 'Y' - Significant Finding'N' - No Significant Finding'U' - Unknown Significant Finding{:/} | 
| {::nomarkdown}DSIFCOM{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is array of comments being added to the Consult along with the Significant Findings update.{:/} | 
| {::nomarkdown}DSIFALRT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag to signal that alerts are to be sent: 'N' - NO'Y' - YES{:/} | 
| {::nomarkdown}DSIFALTO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} |  | {::nomarkdown}A list of comma delimited NEW PERSON FILE (200) iens who need to be alerted to the significant finding update for this consult.{:/} | 
| {::nomarkdown}DSIFDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The date of the significant finding update.{:/} | 




 Generated on January 13th 2017, 6:55:29 am