---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ VOK 

 property | value 
--- | --- 
 label | MAGQ VOK
 tag | VOKR
 routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
 return value type | SINGLE VALUE
 description | This procedure checks the 2nd line of the routine MAGQBUT4 forthe latest version number.  It will return 1 if the versionmatches the input \version\ parameter and 0 if there is nomatch.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Version | LITERAL |  | true | This version number is expect to be the VistA Imaging major release number (x.x)concatenated with P and then concatenated with the patch number.For example 3.0P81 | 