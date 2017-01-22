---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGGRPT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGGRPT{:/}
 tag | {::nomarkdown}BRK{:/}
 routine | [MAGGTRPT](http://code.osehra.org/dox/Routine_MAGGTRPT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns associated report for Image IEN.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number in file ^MAG(2005.{:/} | 
| {::nomarkdown}NOCHK{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If this flag is sent with a value of 1, then the QA check willnot be run.  Image report will be returned even if it is animage of Questionable Integrity.This is used when deleting an Image, but the user needs to seethe report that may have been blocked otherwise.Defaults to 0 (false) {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}