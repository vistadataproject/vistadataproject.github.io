---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD ERROR LOG DATA 

 property | value 
--- | --- 
 label | {::nomarkdown}KMPD ERROR LOG DATA{:/}
 tag | {::nomarkdown}ERRDATA{:/}
 routine | [KMPDU3](http://code.osehra.org/dox/Routine_KMPDU3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Get data from file #3.075 (ERROR LOG).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Ien in format \MultipleIen,Ien\ for file #3.075 (ERROR LOG).{:/} | 
| {::nomarkdown}PARAM2{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Temporary global storage.  This must be either ^TMP or ^UTILITY.{:/} | 




 Generated on January 13th 2017, 5:52:13 am