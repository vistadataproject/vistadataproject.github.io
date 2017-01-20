---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR UPDATE FEE WAIVER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR UPDATE FEE WAIVER{:/}
 tag | {::nomarkdown}UPDATEFW{:/}
 routine | [DSIRBIL0](http://code.osehra.org/dox/Routine_DSIRBIL0_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN FROM 19620 (ROI INSTANCE FILE){:/} | 
| {::nomarkdown}FWCLERK{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}ID FROM FILE 200 (NEW PERSON FILE){:/} | 
| {::nomarkdown}FWRQST{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}FEE WAIVER REQUESTED 0=TRUE, 1=FALSE{:/} | 
| {::nomarkdown}FWRQSTDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}FEE WAIVER REQUESTED DATE{:/} | 
| {::nomarkdown}FWADJ{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}FEE WAIVER ADJUDICATED 0=TRUE, 1=FALSE{:/} | 
| {::nomarkdown}FWGRANT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}FEE WAIVER GRANTED 0=TRUE, 1=FALSE{:/} | 
| {::nomarkdown}FWADJDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}FEE WAIVER ADJUDICATED DATE{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}