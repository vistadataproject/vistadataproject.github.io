---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS SCHEDULE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS SCHEDULE{:/}
 tag | {::nomarkdown}SCH{:/}
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC updates a Consult with the action of Scheduled. Cloned from ORQQCN SCH{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN for the Consult you wish to update.{:/} | 
| {::nomarkdown}DSIFNP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the IEN/DUZ for the provider making the requested change.{:/} | 
| {::nomarkdown}DSIFORDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Date/Time the Consult was scheduled.{:/} | 
| {::nomarkdown}DSIFALRT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This determines whether or not Alerts should be sent with this update. 1 = Yes.{:/} | 
| {::nomarkdown}DSIFALTO{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the array of alert recipient IENs.{:/} | 
| {::nomarkdown}DSIFCOM{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}This is the array of comments to be added to this action. {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}