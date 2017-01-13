---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 REMOTE IMPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 REMOTE IMPORT{:/}
 tag | {::nomarkdown}REMOTE{:/}
 routine | [MAGGSIUI](http://code.osehra.org/dox/Routine_MAGGSIUI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Called from MS Windows Application.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC [MAG4 REMOTE IMPORT]
 Leading comment lines | {::nomarkdown}Import Images from a Windows App, by sending an array.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the array of data needed to Import the Image(s)Format is sequential array of \Data Node^Data\i.e.   MAGDATA(1)=\PXPKG^8925\       MAGDATA(2)=\PXIEN^443\       MAGDATA(3)=\IMAGE^\\\\SERVER\\SHARE\\FILENAME.EXT^Description\{:/} | 




 Generated on January 13th 2017, 6:24:32 am