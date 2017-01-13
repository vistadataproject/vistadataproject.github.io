---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQXQA USER 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQXQA USER{:/}
 tag | {::nomarkdown}USER{:/}
 routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns notifications for current user.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return current user's notifications across all patients


### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the user (DUZ) from the New Person File (#200).{:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The start date of the period to retrieve notifications for the user in Fileman format.{:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The stop date of the period to retrieve notifications for the user inFileman format.{:/} | 




 Generated on January 13th 2017, 6:15:57 am