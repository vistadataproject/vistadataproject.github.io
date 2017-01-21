---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA DP COMMENT HISTORY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}NUPA DP COMMENT HISTORY{:/}
 tag | {::nomarkdown}DPH{:/}
 routine | [NUPABCL2](http://code.osehra.org/dox/Routine_NUPABCL2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Pulls in the comments for Discharge Planning issues for a care plan.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The IEN of the Care Plan from file 1927.4.{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Flag to determine whether to return the latest comment for each Discharge Planning issue, or the entire set of Discharge Planning comments for theCare Plan. FLAG=1 - Entire set of Discharge Planning commentsFLAG=2 - Latest comment for each Discharge Planning issue{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}