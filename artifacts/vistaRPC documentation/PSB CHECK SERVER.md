---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB CHECK SERVER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB CHECK SERVER{:/}
 tag | {::nomarkdown}CHECK{:/}
 routine | [PSBUTL](http://code.osehra.org/dox/Routine_PSBUTL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns -1 or 1 when checking for patches and build on the server.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBWHAT{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}B = Returns Build Version for packages by NamespaceP = Returns if Patch is installed{:/} | 
| {::nomarkdown}PSBDATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Build/Package namespace (i.e. PSB) or Patch Number{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}