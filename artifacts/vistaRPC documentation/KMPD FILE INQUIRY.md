---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD FILE INQUIRY 

 property | value 
--- | --- 
 label | {::nomarkdown}KMPD FILE INQUIRY{:/}
 tag | {::nomarkdown}FILEINQ{:/}
 routine | [KMPDU5](http://code.osehra.org/dox/Routine_KMPDU5_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return all data in file for specific entry.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}File number.{:/} | 
| {::nomarkdown}PARAM2{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN for file in PARAM1.{:/} | 
| {::nomarkdown}PARAM3{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array for temporary data storage.  This should be a global array, and mustbe either ^TMP or ^UTILITY.{:/} | 




 Generated on January 13th 2017, 5:52:13 am