---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD ERROR LOG LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}KMPD ERROR LOG LIST{:/}
 tag | {::nomarkdown}ERRLIST{:/}
 routine | [KMPDU3](http://code.osehra.org/dox/Routine_KMPDU3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return a list of errors for a certain date from file #3.075 (ERROR LOG).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry for file #3.075 (ERROR LOG).  This value will be $P($H,\,\).{:/} | 
| {::nomarkdown}SCREEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}254{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Screen for ERROR TYPE.{:/} | 
| {::nomarkdown}DATAGLOBAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Return global for data (^TMP($J).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}