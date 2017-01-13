---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR RPT BY REQUESTOR 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIR RPT BY REQUESTOR{:/}
 tag | {::nomarkdown}BYREQ{:/}
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Retrieves ROI requests for a given date range for use in GUI reports.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The FileMan Date to start retrieval process.{:/} | 
| {::nomarkdown}TO DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan date to end retrieval process.{:/} | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}\A\  : Get only the appealed requests  (-RV,-PR)\O\  : Get only the open\C\  : \          \ closed  (-D,-G,-P)\P\  : \          \ pending\N\  : \          \other nondisclosured (-NR,-RF,-ND,-NV,-RC)\E\  : \          \ entered in error\X\  : \          \ cancelled\ALL\: Gets all statuses This parameter may be any combination of the codes delimited by the '^' or the word 'ALL'.{:/} | 
| {::nomarkdown}CLERK(S){:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an array of clerk IENs.        (1-n)=IEN to file 200{:/} | 
| {::nomarkdown}DIVISION(S){:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is used by the routine if the person requesting this report holds the DSIR MDIV key.  It is a list of internal Institution File entry numbers (File 4), delimited by '^'.{:/} | 




 Generated on January 13th 2017, 6:44:47 am