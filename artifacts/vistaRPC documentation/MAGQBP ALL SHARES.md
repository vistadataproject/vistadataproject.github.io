---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQBP ALL SHARES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQBP ALL SHARES{:/}
 tag | {::nomarkdown}ALLSHR{:/}
 routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The output of this RPC is a list of all online magnetic shares(non-routing).  This list establishes a set of roots for the purge processto downwardly traverse and evaluate the age and VistA attributes of eachimage file for the purpose of purging archaic and archived files.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value is used to determine if there is a screen intended for members of the Next RAID Group.\ALL\ performs no screen.\AUTO\ will screen for members of the Next RAID group.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}