---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD FILE SEARCH 

 property | value 
--- | --- 
 label | {::nomarkdown}KMPD FILE SEARCH{:/}
 tag | {::nomarkdown}FILESRC{:/}
 routine | [KMPDU5](http://code.osehra.org/dox/Routine_KMPDU5_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Search for entries in file.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}File Number.{:/} | 
| {::nomarkdown}PARAM2{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Fields to return.  This will be comma delimited. Example:  \.01,.04,1,12\  - would return fields .01, .01, 1 and 12{:/} | 
| {::nomarkdown}PARAM3{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Text to search for. Example:  \DG\ - would retrieve all entries beginning with DG.                - if text equals \*\ or \\ (null) then all entries will be                  retrieved{:/} | 
| {::nomarkdown}PARAM4{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of array for temporary storage.  This should be a global array, andmust be either ^TMP or ^UTILITY.{:/} | 




 Generated on January 13th 2017, 6:44:47 am