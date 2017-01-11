---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 REMOTE IMPORT 

 property | value 
--- | --- 
 label | MAG4 REMOTE IMPORT
 tag | REMOTE
 routine | [MAGGSIUI](http://code.osehra.org/dox/Routine_MAGGSIUI_source.html)
 return value type | ARRAY
 description | Called from MS Windows Application.


### Method description

 property | value 
--- | --- 
 Method comment | RPC [MAG4 REMOTE IMPORT]
 Leading comment lines | Import Images from a Windows App, by sending an array.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGDATA | LIST |  | true | This is the array of data needed to Import the Image(s)Format is sequential array of \Data Node^Data\i.e.   MAGDATA(1)=\PXPKG^8925\       MAGDATA(2)=\PXIEN^443\       MAGDATA(3)=\IMAGE^\\\\SERVER\\SHARE\\FILENAME.EXT^Description\ | 




Generated on January 11th 2017, 6:34:23 am