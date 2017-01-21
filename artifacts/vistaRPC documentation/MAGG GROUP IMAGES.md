---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG GROUP IMAGES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG GROUP IMAGES{:/}
 tag | {::nomarkdown}GROUP{:/}
 routine | [MAGGTIG](http://code.osehra.org/dox/Routine_MAGGTIG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns array of images for an Image entry.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry of Image entry in Image File ^MAG(2005,{:/} | 
| {::nomarkdown}NOCHK{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If this flag is sent with a value of 1, then the QA check willnot be run.  Image Group Abs will be returned even if it is anImage Group of Questionable Integrity.This is used when deleting an Image, but the user needs to seethe abstracts that may have been blocked otherwise.Defaults to 0 (false){:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Supported FLAGS\D\ - Include deleted images{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}