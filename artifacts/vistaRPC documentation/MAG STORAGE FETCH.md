---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG STORAGE FETCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG STORAGE FETCH{:/}
 tag | {::nomarkdown}FETCH{:/}
 routine | [MAGSFTCH](http://code.osehra.org/dox/Routine_MAGSFTCH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure allows the invoking client to copy or move image files{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}<start IMAGE ien>  <stop IMAGE ien>{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}<Start image saved date>  <Stop image saved date>{:/} | 
| {::nomarkdown}NETLOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FROM - network location  TO - network location  REMOVE source file the first pipe-separated piece of the input value will be theinternal entry number of source NETWORK LOCATION file (#2005.2)The second pipe-separated piece will be the internal entry number of destination NETWORK LOCATION file (#2005.2)The third pipe-separated piece of input value will be the option for removing source image files (=1){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}