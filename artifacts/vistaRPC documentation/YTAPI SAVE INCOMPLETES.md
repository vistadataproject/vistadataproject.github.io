---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTAPI SAVE INCOMPLETES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTAPI SAVE INCOMPLETES{:/}
 tag | {::nomarkdown}SAVEINC{:/}
 routine | [YTAPI7](http://code.osehra.org/dox/Routine_YTAPI7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}API to save responses of partially completed psychological tests. Input:        DFN ;ien of file 2 Patient        YSCODE: code of test in file 604        YSNEXT: next item number to be answered        YSORDER: DUZ of staff ordering test        R1: array of answers 1-200        R2: array of answers 201-400        R3: array of answers 401-600 Output:        YSDATA(1)=[DATA]        YSDATA(2)=saved ok{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}