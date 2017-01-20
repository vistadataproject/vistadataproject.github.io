---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG IS DOC CLASS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG IS DOC CLASS{:/}
 tag | {::nomarkdown}ISDOCCL{:/}
 routine | [MAGGNTI](http://code.osehra.org/dox/Routine_MAGGNTI_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Checks to see if IEN of TIU Files 8925 or 8925.1 is of a certain Doc Class{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number in the TIUFILE{:/} | 
| {::nomarkdown}TIUFILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown} IS - 8925   if we need to see if a Note is of a Document Class IS - 8925.1 if we need to see if a Title is of a Document Class{:/} | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Text Name of the Document Class   example: \ADVANCE DIRECTIVE\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}