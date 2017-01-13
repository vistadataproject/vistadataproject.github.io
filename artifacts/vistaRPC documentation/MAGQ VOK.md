---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ VOK 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ VOK{:/}
 tag | {::nomarkdown}VOKR{:/}
 routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This procedure checks the 2nd line of the routine MAGQBUT4 forthe latest version number.  It will return 1 if the versionmatches the input \version\ parameter and 0 if there is nomatch.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Version{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This version number is expect to be the VistA Imaging major release number (x.x)concatenated with P and then concatenated with the patch number.For example 3.0P81{:/} | 




 Generated on January 13th 2017, 6:24:32 am