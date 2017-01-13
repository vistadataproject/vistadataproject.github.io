---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORPRF HASFLG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORPRF HASFLG{:/}
 tag | {::nomarkdown}HASFLG{:/}
 routine | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Does patient PTDFN has flags
 Leading comment lines | {::nomarkdown}DBIA 3860: $$GETACT^DGPFAPI(PTDFN,.FLGDATA)<br/>Returns array ORY listing active assigned flags<br/>Array ORY has form:<br/>ORY(flagID) = flagID^flagname,CAT1<br/>where CAT1 is 1 if flag is cat 1, 0 if cat 2<br/>ORY = Num of items returned in array ORY = num of flags{:/}




 Generated on January 13th 2017, 6:44:47 am