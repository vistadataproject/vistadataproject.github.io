---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; KMPD GLOBAL LIST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}KMPD GLOBAL LIST{:/}
 tag | {::nomarkdown}GBLLIST{:/}
 routine | [KMPDU1](http://code.osehra.org/dox/Routine_KMPDU1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Global list.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Global to list.  This can be an entire global (^DPT) or subscript(^DPT(25,).{:/} | 
| {::nomarkdown}PARAM2{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Starting global node.  If this is a continuation of a global list, thenthis will be the starting point.  If the call is for the first time, thenthis should be set to null (\\).{:/} | 
| {::nomarkdown}PARAM3{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Number of lines to fill before quiting.{:/} | 
| {::nomarkdown}LINE LENGTH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Lenght of line before line-break.{:/} | 




 Generated on January 14th 2017, 7:26:36 am