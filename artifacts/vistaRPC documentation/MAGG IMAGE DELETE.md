---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG IMAGE DELETE 

 property | value 
--- | --- 
 label | MAGG IMAGE DELETE
 tag | IMAGEDEL
 routine | [MAGGTID](http://code.osehra.org/dox/Routine_MAGGTID_source.html)
 return value type | ARRAY
 description | Deletes Image entry from Image file, ^MAG(2005 and Image File from disk.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGIEN | LITERAL | 30 | true | Internal entry number in the IMAGE FM File.  ^MAG(2005 | 
| MAGGRPDF | LITERAL | 1 | true | This is a Group Delete Flag1 or 0     1  =  Allow Group Delete     0  =  Do not Allow Group Deletes. | 
| REASON | LITERAL | 60 | true | This is a free text description of the Reason for Deleting the Image. | 