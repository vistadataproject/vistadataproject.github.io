---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ANRVJ1_RPC_MAIN 

 property | value 
--- | --- 
 label | {::nomarkdown}ANRVJ1_RPC_MAIN{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [ANRVJ1](http://code.osehra.org/dox/Routine_ANRVJ1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This is the main entry point for calling line tags in routine ANRVJ1.  The format is:        Parameter 1 = OPTION (name of the line tag to call)        Parameter 2 = DFN (value being passed in)        Parameter 3 = DATA (any additional values to be passed in){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Routine Line tag you wish to call.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Parameter variable to be passed into routine tag.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Any additional parameters to be passed into the routine line tag.{:/} | 




 Generated on January 13th 2017, 5:52:13 am