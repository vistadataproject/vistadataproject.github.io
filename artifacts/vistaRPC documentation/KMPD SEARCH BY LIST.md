---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD SEARCH BY LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}KMPD SEARCH BY LIST{:/}
 tag | {::nomarkdown}SBLIST{:/}
 routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Search By list.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LISTTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}2 - client name3 - ip address{:/} | 
| {::nomarkdown}SUBSCRIPT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Subscript (free text)Ex: \ORWCV\{:/} | 
| {::nomarkdown}DATAGLOBAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Global containing data.Ex: ^TMP($J){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}