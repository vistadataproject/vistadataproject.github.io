---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS ADMIN COMPLETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS ADMIN COMPLETE{:/}
 tag | {::nomarkdown}ADCOM{:/}
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows for the admin completion of the selected Consult. Cloned from ORQQCN ADMIN COMPLETE{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Consult IEN that you wish to administratively complete.{:/} | 
| {::nomarkdown}DSIFFL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the flag that specifies whether significant findings are present during the administrative complete update. 'Y' - Significant Findings'N' - No Significant Findings'U' - Unknown Significant Findings{:/} | 
| {::nomarkdown}DSIFCOM{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} |  | {::nomarkdown}This is the array of comments to be included with the administrative complete update.{:/} | 
| {::nomarkdown}DSIFRESP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the provider responsible for the action.{:/} | 
| {::nomarkdown}DSIFALRT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag to determine if alerts need to be sent: 'N' - No'Y' - Yes{:/} | 
| {::nomarkdown}DSIFALTO{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}List of NEW PERSON FILE (200) iens, semi-colon delimited for who needs to be alerted by the updates to this consult.{:/} | 
| {::nomarkdown}DSIFDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Date of the administrative complete.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}