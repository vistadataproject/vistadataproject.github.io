---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS FORWARD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS FORWARD{:/}
 tag | {::nomarkdown}FWRD{:/}
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows for a Consult to be forwarded to a different Service. Cloned from ORQQCN FORWARD{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Consult IEN that needs to be forwarded.{:/} | 
| {::nomarkdown}DSIFSVC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Service to which the consult is being forwarded.{:/} | 
| {::nomarkdown}DSIFPROV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the provider responsible for forwarding the consult.{:/} | 
| {::nomarkdown}DSIFATTN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the provider whose attention the consult is sent to. Not required.{:/} | 
| {::nomarkdown}DSIFURG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the urgency of the request.{:/} | 
| {::nomarkdown}DSIFDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the actual date and time of activity.{:/} | 
| {::nomarkdown}DSIFCOM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the comments associated with the forward consult request.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}