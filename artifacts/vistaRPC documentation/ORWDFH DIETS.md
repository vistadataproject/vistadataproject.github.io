---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDFH DIETS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH DIETS{:/}
 tag | {::nomarkdown}DIETS{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns active diets (including NPO) in the format:      IEN^NAME   or IEN^SYNONYM <NAME>^NAME{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a subset of active diets, including NPO
 Leading comment lines | {::nomarkdown}Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name{:/}




 Generated on January 13th 2017, 6:24:32 am