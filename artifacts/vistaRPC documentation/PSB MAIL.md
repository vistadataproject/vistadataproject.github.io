---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB MAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}PSB MAIL{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [PSBRPCXM](http://code.osehra.org/dox/Routine_PSBRPCXM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}A call is made that allows the GUI to send its' own formatted mailmessage.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBCMD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The type of action being attempted:        \CREATE\        \APPEND\        \SUBJECT\        \SENDTO\        \EXECUTE\{:/} | 
| {::nomarkdown}PSBDATA{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The text to be acted on.{:/} | 




 Generated on January 13th 2017, 5:52:13 am