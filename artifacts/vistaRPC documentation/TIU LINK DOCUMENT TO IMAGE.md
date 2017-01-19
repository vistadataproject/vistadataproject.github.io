---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LINK DOCUMENT TO IMAGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU LINK DOCUMENT TO IMAGE{:/}
 tag | {::nomarkdown}PUTIMAGE{:/}
 routine | [TIUSRVPL](http://code.osehra.org/dox/Routine_TIUSRVPL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC links a document with an image. It will support a many-to-manyassociation between documents and images.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (IEN) of the document in the TIU DOCUMENT FILE(#8925).{:/} | 
| {::nomarkdown}IMGDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (IEN) of the document in the IMAGE FILE (#2005).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}