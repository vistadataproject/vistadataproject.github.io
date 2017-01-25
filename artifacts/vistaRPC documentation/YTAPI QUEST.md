---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTAPI QUEST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTAPI QUEST{:/}
 tag | {::nomarkdown}QUEST{:/}
 routine | [YTAPI6](http://code.osehra.org/dox/Routine_YTAPI6_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns flat array with data about a psychological test.This API returns the text, bottom, introduction and possible correct responses for all items in a test in file 601. It will work only for tests as opposed to interviews or batteries. The ASI is not supported. Input:                 CODE: Test code from file 601 e.g. \CAGE\, \BDI\ Output:Array(1)=[DATA] ;indicates successful  callArray(2)=MMPI2 ;SECOND LINE IS TEST CodeArray(x)=first item number^I^introductory textArray(x)=first item number^T^text of questionArray(x)=first item number^A^allowed responsesArray(x)= first item number^R^response cues..Array(x)=last item number^I^introductory text                    Array(x)=last item number^T^text of question                     Array(x)=last item number^A^allowed responses          Array(x)=last item number^R^response cues{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}