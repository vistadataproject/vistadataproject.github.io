---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; SCMC PCMM CHECK FTEE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}SCMC PCMM CHECK FTEE{:/}
 tag | {::nomarkdown}FTEECHK{:/}
 routine | [SCMCTSK1](http://code.osehra.org/dox/Routine_SCMCTSK1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Determine if provider has exceeded 1.0 FTEE{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SCPATCH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PatchVersion ^ ClientVersion{:/} | 
| {::nomarkdown}TPIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}POSITION ASSIGNMENT HISTORY IEN ^ FTEE VALUE{:/} | 




 Generated on January 14th 2017, 7:26:36 am