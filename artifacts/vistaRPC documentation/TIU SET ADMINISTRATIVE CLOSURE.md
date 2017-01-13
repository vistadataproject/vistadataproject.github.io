---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU SET ADMINISTRATIVE CLOSURE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU SET ADMINISTRATIVE CLOSURE{:/}
 tag | {::nomarkdown}ADMNCLOS{:/}
 routine | [TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure sets the file attributes necessary to close adocument by administrative action (either manually or by scanning a paperdocument that doesn't require the signature of an author as a typical TIUDocument would).{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Post Administrative Closure Information

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the document in the TIU DOCUMENT FILE (#8925).{:/} | 
| {::nomarkdown}MODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the alphabetic code for the manner in which the document wasclosed (i.e., \S\ for Scanned Document, or \M\ for Manual Closure). Optional: Defaults to \S\.{:/} | 
| {::nomarkdown}PERSON{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN in the NEW PERSON file (#200) of the person who closed thedocument. Optional: Defaults to DUZ (i.e., the current user).{:/} | 




 Generated on January 13th 2017, 5:52:13 am