---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ VOK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ VOK{:/}
 tag | {::nomarkdown}VOKR{:/}
 routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This procedure checks the 2nd line of the routine MAGQBUT4 forthe latest version number.  It will return 1 if the versionmatches the input \version\ parameter and 0 if there is nomatch.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Version{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This version number is expect to be the VistA Imaging major release number (x.x)concatenated with P and then concatenated with the patch number.For example 3.0P81{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}