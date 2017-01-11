---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQBP ALL SHARES 

 property | value 
--- | --- 
 label | MAGQBP ALL SHARES
 tag | ALLSHR
 routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
 return value type | ARRAY
 description | The output of this RPC is a list of all online magnetic shares(non-routing).  This list establishes a set of roots for the purge processto downwardly traverse and evaluate the age and VistA attributes of eachimage file for the purpose of purging archaic and archived files.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TYPE | LITERAL | 8 | true | This value is used to determine if there is a screen intended for members of the Next RAID Group.\ALL\ performs no screen.\AUTO\ will screen for members of the Next RAID group. | 




Generated on January 11th 2017, 6:34:23 am