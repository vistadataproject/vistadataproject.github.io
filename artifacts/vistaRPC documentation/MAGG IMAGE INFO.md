---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG IMAGE INFO 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGG IMAGE INFO{:/}
 tag | {::nomarkdown}IMAGEINF{:/}
 routine | [MAGGTU3](http://code.osehra.org/dox/Routine_MAGGTU3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns information on 1 Image{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}internal entry number in IMAGE file  ^MAG(2005,IEN{:/} | 
| {::nomarkdown}NOQACHK{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If this flag is sent with a value of 1, then the QA check willnot be run.  Image information will be returned even if it is animage of Questionable Integrity.This is used when deleting an Image, but the user needs to seeinformation that may have been blocked otherwise.{:/} | 




 Generated on January 13th 2017, 6:44:47 am