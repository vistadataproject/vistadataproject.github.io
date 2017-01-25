---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD TMG REPORTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}KMPD TMG REPORTS{:/}
 tag | {::nomarkdown}TMGRPT{:/}
 routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get Timing Reports data.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATES{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array containing report dates in format:        array(0)=FMStartDate^FMEndDate^ExtStartDate^ExtEndDate        array(1)=NumberOfSessions ex:     KMPDATE(0)=\3070925^3071001^Sep 25, 2007^Oct 01, 2007\        KMPDATE(1)=7{:/} | 
| {::nomarkdown}TIME FRAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Time Frame: Prime Time            Non-Prime Time{:/} | 
| {::nomarkdown}REPORT NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}120{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of report (free text).{:/} | 
| {::nomarkdown}TTL SEARCH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Time-To-Load Search criteria:        1: User Name        2: Client Name        3: IP Address        4: All Items{:/} | 
| {::nomarkdown}SECONDS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Threshold seconds.{:/} | 
| {::nomarkdown}HOUR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Hour{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}