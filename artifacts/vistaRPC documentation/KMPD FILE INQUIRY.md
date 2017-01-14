---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD FILE INQUIRY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}KMPD FILE INQUIRY{:/}
 tag | {::nomarkdown}FILEINQ{:/}
 routine | [KMPDU5](http://code.osehra.org/dox/Routine_KMPDU5_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return all data in file for specific entry.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}File number.{:/} | 
| {::nomarkdown}PARAM2{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN for file in PARAM1.{:/} | 
| {::nomarkdown}PARAM3{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array for temporary data storage.  This should be a global array, and mustbe either ^TMP or ^UTILITY.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}