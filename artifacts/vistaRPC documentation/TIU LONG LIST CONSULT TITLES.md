---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LONG LIST CONSULT TITLES 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU LONG LIST CONSULT TITLES{:/}
 tag | {::nomarkdown}LNGCNSLT{:/}
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC serves data to a longlist of selectable TITLES for CONSULTS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Handle long list of titles for CONSULTS
 Input Parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Lines | {::nomarkdown} N CLASS S CLASS=+$$CLASS^TIUCNSLT Q:+CLASS'>0<br/> D LONGLIST(.Y,CLASS,$G(FROM),$G(DIR,1)){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the reference title from which the longlist is scrolling.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the direction in which the longlist is scrolling from thereference title.{:/} | 




 Generated on January 13th 2017, 7:15:27 am