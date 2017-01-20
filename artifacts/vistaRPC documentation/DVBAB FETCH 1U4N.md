---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB FETCH 1U4N 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB FETCH 1U4N{:/}
 tag | {::nomarkdown}U1N4{:/}
 routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Retrieve the 1u4n field for the list of patient IENSprovided as the only argument.  Each IEN will besent back with field .0905 appended after a caret.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ARR{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}List of patient IENs{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}