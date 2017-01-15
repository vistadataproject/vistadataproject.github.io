---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG IMAGE DELETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG IMAGE DELETE{:/}
 tag | {::nomarkdown}IMAGEDEL{:/}
 routine | [MAGGTID](http://code.osehra.org/dox/Routine_MAGGTID_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Deletes Image entry from Image file, ^MAG(2005 and Image File from disk.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number in the IMAGE FM File.  ^MAG(2005{:/} | 
| {::nomarkdown}MAGGRPDF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a Group Delete Flag1 or 0     1  =  Allow Group Delete     0  =  Do not Allow Group Deletes.{:/} | 
| {::nomarkdown}REASON{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a free text description of the Reason for Deleting the Image.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}