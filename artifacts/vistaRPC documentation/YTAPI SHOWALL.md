---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI SHOWALL 

 property | value 
--- | --- 
 label | YTAPI SHOWALL
 tag | SHOWALL
 routine | [YTAPI3](http://code.osehra.org/dox/Routine_YTAPI3_source.html)
 return value type | ARRAY
 description | This API returns the text, bottom, introduction and possible correct responses for all items in a test in file 601. It will work only for tests as opposed to interviews or batteries. The ASI is not supported. Input:                 CODE: Test code from file 601 e.g. \CAGE\, \BDI\ Output:Array(1)=[DATA] ;indicates successful  callArray(2)=MMPI2 ;SECOND LINE IS TEST CodeArray(item number,\I\,line number)=introductory textArray(item number,\T\, line number)=text of questionArray(item number,\R\,0)=allowed responsesArray(item number,\R\,line number)= response cues




 ###### Generated on January 11th 2017, 6:39:42 am