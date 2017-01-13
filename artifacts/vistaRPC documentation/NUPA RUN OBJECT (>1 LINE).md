---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA RUN OBJECT (>1 LINE) 

 property | value 
--- | --- 
 label | {::nomarkdown}NUPA RUN OBJECT (>1 LINE){:/}
 tag | {::nomarkdown}RUNMANY{:/}
 routine | [NUPABCL1](http://code.osehra.org/dox/Routine_NUPABCL1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Gathers data from a program that is similar to a TIU object.  This RPC calls an M program that places more than one node data into ^TMP($J).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The patient's DFN.{:/} | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The code to xecute to obtain the data, such as S X=$$OBJECT^ROUTINE().{:/} | 




 Generated on January 13th 2017, 6:24:32 am