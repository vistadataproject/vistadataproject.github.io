---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS FEE CONSULTS 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS FEE CONSULTS{:/}
 tag | {::nomarkdown}FEECNSLT{:/}
 routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of consults for the specified service in block of 50 consults at a time. Last item in the list is $$END$$ when last consult for service returned.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFSVC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN for the REQUEST SERVICES (#123.5) file.{:/} | 
| {::nomarkdown}DSIFLDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date for the last consult returned in a previous call to this RPC. Ifpassed, must be in INTERNAL format, and the RPC will return the next 50consults prior to this date (reverse chronological order). If not passed,the RPC will return the next 50 consults before this date (reverse chronological order).{:/} | 
| {::nomarkdown}DSIFLIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} |  | {::nomarkdown}The IEN to the last consult returned by a previous call to this RPC. Ifpassed, must be passed with the LAST DATE parameter, and the RPC willreturn the next 50 consults beginning with the consult listed prior to this one (returns in reverse chronological order). If not passed,the RPC will return the first 50 consults in the list in reverse chronological order.{:/} | 
| {::nomarkdown}DSIFSCR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If passed, determines which form of screening should be used to determinewhether the user can view the selected service. If not passed (or passedas \\), no screening will be performed. Allowed values are:   N - Consult Notification screen   U - Consult Parameter screening by user precedence{:/} | 
| {::nomarkdown}DSIFSTAT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This input should be the status of the Consults you wish to be returned. Currently, the only supported statuses are: Active and Pending.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}