---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; YTAPI SHOWIT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTAPI SHOWIT{:/}
 tag | {::nomarkdown}SHOWIT{:/}
 routine | [YTAPI3](http://code.osehra.org/dox/Routine_YTAPI3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API returns the text, bottom, introduction and possible correct responses for a specified test item in file 601. It will work only for tests as opposed to interviews or batteries. The ASI is not supported. Input:                 CODE: Test code from file 601 e.g. \CAGE\, \BDI\ITEM: a positive whole number between 1 and the highest item number for the specified test. Output:Array(1)=[DATA] ;indicates successful  callArray(2)=MMPI2^1 ;SECOND LINE IS TEST Code^ item numberArray(item number,\I\,line number)=introductory textArray(item number,\T\, line number)=text of questionArray(item number,\R\,0)=allowed responsesArray(item number,\R\,line number)= response cues{:/}{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}