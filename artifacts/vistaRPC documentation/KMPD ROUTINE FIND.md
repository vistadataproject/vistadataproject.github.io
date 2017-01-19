---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD ROUTINE FIND 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}KMPD ROUTINE FIND{:/}
 tag | {::nomarkdown}ROUFIND{:/}
 routine | [KMPDU2](http://code.osehra.org/dox/Routine_KMPDU2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return list of routine names.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Routine name to search for (may contain an asterisk (*) for a list).{:/} | 
| {::nomarkdown}PARAM2{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Temporary global storage name.  Must be either ^TMP or ^UTILITY.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}