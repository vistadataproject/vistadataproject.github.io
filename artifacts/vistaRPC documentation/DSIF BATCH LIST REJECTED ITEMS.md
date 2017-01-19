---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF BATCH LIST REJECTED ITEMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF BATCH LIST REJECTED ITEMS{:/}
 tag | {::nomarkdown}LSTREJ{:/}
 routine | [DSIFLRJ](http://code.osehra.org/dox/Routine_DSIFLRJ_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} ; Input: Batch # (IEN, if passed in as \nnn;\) ; Output: ;    ; If B9 ;    ; ^TMP($J,\DSIFLRJ\,1)=ien of 162.5 invoice file ; ; If B3 ; ; ^TMP($J,\DSIFLRJ\,x)=ien of 162 payment file.  (may be multiple lines rejected) ; ; ^TMP($J,\DSIFLRJ\,x)=ien of 162 payment file.  (may be multiple lines rejected) ;{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FBBAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Batch IEN or number IEN;NUMBER{:/} | 
| {::nomarkdown}FBTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Batch type (required){:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date beginning from{:/} | 
| {::nomarkdown}TODATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Until date{:/} | 
| {::nomarkdown}FBFROM{:/} |  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}