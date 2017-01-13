---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ JPUD 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ JPUD{:/}
 tag | {::nomarkdown}JPUD{:/}
 routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call is to update the Image file JUKEBOX file references.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}POINTER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the network location file IEN.{:/} | 
| {::nomarkdown}EXTENSION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the image file extension of the file whose jukebox reference is inneed of updating.{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IMAGE file (#2005) internal entry number.{:/} | 




 Generated on January 13th 2017, 5:52:13 am