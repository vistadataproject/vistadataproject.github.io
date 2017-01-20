---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG REASON LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG REASON LIST{:/}
 tag | {::nomarkdown}LSTRSNS{:/}
 routine | [MAGGA01](http://code.osehra.org/dox/Routine_MAGGA01_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure returns the list of reasons for actions performed onimages. This data is loaded from the MAG REASON file (#2005.88).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter defines the type(s) of reasons that are returned by the remote procedure. Its value should consist of one or more of the followingcharacters:   C  Reasons for copying images   D  Reasons for deleting images   P  Reasons for printing images   S  Reasons for changing image status For example, if the \CD\ value is assigned to the parameter, the RPCreturns the reasons for copying and deleting images.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control execution (can be combined):   F  Include full details (description text, etc.)   I  Include inactivated reasons If this parameter is not defined or empty, only the summary data forcurrently active reasons is returned.{:/} | 
| {::nomarkdown}PART{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The partial match restriction (case sensitive). For example, a PART valueof \ZZ\ would restrict the list to those entries starting with the letters\ZZ\. If this parameter is not defined or empty, no text restrictions are applied.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}