---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LONG LIST OF TITLES 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU LONG LIST OF TITLES{:/}
 tag | {::nomarkdown}LONGLIST{:/}
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC serves data to a longlist of selectable TITLES by CLASS.  e.g.,passing the class PROGRESS NOTES will return active Progress Notes titleswhich the current user is authorized to enter notes under.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | long list of titles for a class
 Leading comment lines | .Y=returned list, CLASS=ptr to class in 8925.1, FROM=text to $O from,
DIR=$O direction, IDNOTE=flag to indicate selection for ID Entry

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the CLASS in the Document Definition File (#8925.1)from which the application intends to allow selection of TITLES.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the reference title from which the longlist is scrolling.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the direction in which the longlist is scrolling from thereference title.{:/} | 




 Generated on January 13th 2017, 5:52:13 am